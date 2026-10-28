"""Ders materyallerinden okunabilir metin çıkarır: PPTX (slayt metni, SmartArt, konuşmacı notları) ve PDF.

    python3 -I metin-cikar.py dosya.pptx dosya.pdf ... [--cikti KLASOR] [--gorseller KLASOR]

--cikti verilmezse ekrana yazar; verilirse her dosya için KLASOR/<ad>.md oluşturur.
--gorseller verilirse slaytlardaki görselleri KLASOR/<ad>/slaytN-<görsel> olarak çıkarır; metni az olan
slaytlarda bilgi görselde olabilir, bu görsellere bakmak gerekir.

PPTX için yalnızca Python standart kütüphanesi yeter. "ns0:" gibi önekli XML'ler de okunur (ad alanına göre).
PDF için önce `pdftotext` (poppler) denenir, yoksa `pypdf`.
"""
import posixpath
import shutil
import subprocess
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

A = '{http://schemas.openxmlformats.org/drawingml/2006/main}'
P = '{http://schemas.openxmlformats.org/presentationml/2006/main}'
R = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'
REL = '{http://schemas.openxmlformats.org/package/2006/relationships}'


def rels(z, part):
    folder, name = posixpath.split(part)
    rel_path = posixpath.join(folder, '_rels', name + '.rels')
    if rel_path not in z.namelist():
        return {}
    out = {}
    for e in ET.fromstring(z.read(rel_path)).iter(REL + 'Relationship'):
        target = e.get('Target', '')
        if e.get('TargetMode') == 'External':
            continue
        out[e.get('Id')] = (e.get('Type', ''), posixpath.normpath(posixpath.join(folder, target)))
    return out


def paragraphs(xml):
    root = ET.fromstring(xml)
    out = []
    for p in root.iter(A + 'p'):
        text = ''.join(t.text or '' for t in p.iter(A + 't')).strip()
        if text:
            out.append(text)
    return out


def pptx(path, image_dir=None):
    z = zipfile.ZipFile(path)
    pres = 'ppt/presentation.xml'
    pres_rels = rels(z, pres)
    slides = [pres_rels[s.get(R + 'id')][1] for s in ET.fromstring(z.read(pres)).iter(P + 'sldId')
              if s.get(R + 'id') in pres_rels]
    lines = [f'# {Path(path).name} ({len(slides)} slayt)', '']
    for i, part in enumerate(slides, 1):
        lines.append(f'<!-- Slayt {i} -->')
        text = paragraphs(z.read(part))
        lines += text
        for kind, target in rels(z, part).values():
            if target not in z.namelist():
                continue
            if kind.endswith('/diagramData'):
                lines += ['[Şema] ' + t for t in paragraphs(z.read(target))]
            elif kind.endswith('/notesSlide'):
                notes = [t for t in paragraphs(z.read(target)) if not t.isdigit()]
                lines += ['[Konuşmacı notu] ' + t for t in notes]
            elif kind.endswith('/image'):
                name = posixpath.basename(target)
                lines.append(f'[Görsel: {name}]')
                if image_dir:
                    out = Path(image_dir) / Path(path).stem / f'slayt{i}-{name}'
                    out.parent.mkdir(parents=True, exist_ok=True)
                    out.write_bytes(z.read(target))
        if not text:
            lines.append('[Bu slaytta metin yok; görsele ya da şemaya bak]')
        lines.append('')
    return '\n'.join(lines)


def pdf(path):
    if shutil.which('pdftotext'):
        raw = subprocess.run(['pdftotext', '-layout', str(path), '-'], capture_output=True, text=True).stdout
        pages = raw.split('\f')
    else:
        try:
            from pypdf import PdfReader
        except ImportError:
            sys.exit('PDF için pdftotext (poppler-utils) ya da "pip install pypdf" gerekli.')
        pages = [p.extract_text() or '' for p in PdfReader(str(path)).pages]
    pages = [p for p in pages if p is not None]
    if pages and not pages[-1].strip():
        pages = pages[:-1]
    lines = [f'# {Path(path).name} ({len(pages)} sayfa)', '']
    for i, page in enumerate(pages, 1):
        lines += [f'<!-- PDF sayfa {i} -->', page.rstrip(), '']
    return '\n'.join(lines)


def main(argv):
    files, out_dir, image_dir, it = [], None, None, iter(argv)
    for a in it:
        if a == '--cikti':
            out_dir = next(it)
        elif a == '--gorseller':
            image_dir = next(it)
        else:
            files.append(a)
    if not files:
        sys.exit(__doc__)
    for f in files:
        ext = Path(f).suffix.lower()
        if ext in ('.pptx', '.potx'):
            text = pptx(f, image_dir)
        elif ext == '.pdf':
            text = pdf(f)
        else:
            print(f'Atlandı (desteklenmeyen tür): {f}', file=sys.stderr)
            continue
        if out_dir:
            out = Path(out_dir) / (Path(f).stem + '.md')
            out.parent.mkdir(parents=True, exist_ok=True)
            out.write_text(text, encoding='utf-8')
            print(f'✓ {out}  ({len(text):,} karakter)')
        else:
            print(text)


if __name__ == '__main__':
    main(sys.argv[1:])
