"""Sunumlar (PPTX) ve Word belgeleri (DOCX) için sitede "Görüntüle" ile açılan PDF önizlemelerini üretir.

dersler/<ders>/materyal/<yol>.pptx|.docx  ->  dersler/<ders>/onizleme/<yol>.pdf

    python3 scripts/onizleme-olustur.py            # eksik önizlemeleri üret
    python3 scripts/onizleme-olustur.py --hepsi    # hepsini yeniden üret

LibreOffice gerekir (soffice). Farklı bir komut için: SOFFICE="..." python3 scripts/onizleme-olustur.py
Bazı sunumların XML'i "ns0:" gibi öneklerle yazılmış; LibreOffice bunları açamadığı için dönüştürmeden
önce geçici bir kopyada önekler standart hale getirilir. Orijinal dosyalara dokunulmaz.
"""
import os
import re
import shlex
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PREFIXES = {
    'http://schemas.openxmlformats.org/package/2006/content-types': '',
    'http://schemas.openxmlformats.org/package/2006/relationships': '',
    'http://schemas.openxmlformats.org/presentationml/2006/main': 'p',
    'http://schemas.openxmlformats.org/drawingml/2006/main': 'a',
    'http://schemas.openxmlformats.org/officeDocument/2006/relationships': 'r',
}


def normalize(xml):
    """ns0:, ns1: ... öneklerini ad alanına göre standart öneklere çevirir."""
    decls = dict(re.findall(r'xmlns:(ns\d+)="([^"]+)"', xml))
    for old, uri in decls.items():
        new = PREFIXES.get(uri, old)
        xml = xml.replace(f'xmlns:{old}="{uri}"', f'xmlns="{uri}"' if new == '' else f'xmlns:{new}="{uri}"')
        xml = re.sub(rf'(</?|\s){old}:', lambda m: m.group(1) + (f'{new}:' if new else ''), xml)
    return xml


def fixed_copy(src, dst):
    with zipfile.ZipFile(src) as zin, zipfile.ZipFile(dst, 'w', zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            data = zin.read(item.filename)
            if item.filename.endswith(('.xml', '.rels')) and re.search(rb'<ns\d+:', data[:400]):
                data = normalize(data.decode('utf-8')).encode('utf-8')
            zout.writestr(item, data)


def main():
    redo = '--hepsi' in sys.argv
    soffice = shlex.split(os.environ.get('SOFFICE', 'soffice'))
    sources = sorted([*ROOT.glob('dersler/*/materyal/**/*.pptx'), *ROOT.glob('dersler/*/materyal/**/*.docx')])
    with tempfile.TemporaryDirectory() as tmp:
        for src in sources:
            course = src.relative_to(ROOT / 'dersler').parts[0]
            rel = src.relative_to(ROOT / 'dersler' / course / 'materyal')
            out = (ROOT / 'dersler' / course / 'onizleme' / rel).with_suffix('.pdf')
            if out.exists() and not redo:
                continue
            work = Path(tmp) / src.name
            fixed_copy(src, work)
            subprocess.run(soffice + ['--headless', '--convert-to', 'pdf', '--outdir', tmp, str(work)],
                           stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=False)
            pdf = work.with_suffix('.pdf')
            if not pdf.exists():
                print(f'HATA  {src.relative_to(ROOT)}')
                continue
            out.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(pdf, out)
            print(f'✓  {out.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
