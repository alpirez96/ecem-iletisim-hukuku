"""PDF'te vurgulanmış (sarıyla işaretlenmiş) yerleri sayfa sayfa listeler.

    python3 -I isaretler.py dosya.pdf [--satir] [--renk]

Çıktı: "PDF s.<n> | <metin>" satırları ve sonda sayfa başına özet.
--satir  Vurgunun geçtiği satırların tamamını verir (taranmış/OCR PDF'lerde vurgu kutuları metni kırpabilir).
--renk   Her vurgunun rengini de yazar (birden çok renk kullanılmışsa ayırmak için).

Vurgu notu (Highlight annotation) olarak işaretlenmiş PDF'lerde çalışır. Sayfaya basılmış (görüntüye gömülü)
işaretleri bulamaz; o durumda sayfaları görüntüye çevirip (pdftoppm) bakmak gerekir.
Gerekli: pip install pypdf pdfplumber
"""
import sys

try:
    import pdfplumber
    from pypdf import PdfReader
except ImportError:
    sys.exit('Gerekli paketler: pip install pypdf pdfplumber')


def words_in(chars, box, size_gap=0.18):
    x0, top, x1, bottom = box
    inside = [c for c in chars
              if x0 - 1 <= (c['x0'] + c['x1']) / 2 <= x1 + 1 and top - 2 <= (c['top'] + c['bottom']) / 2 <= bottom + 2]
    inside.sort(key=lambda c: (round(c['top']), c['x0']))
    text, prev = '', None
    for c in inside:
        if prev is not None and (c['x0'] - prev['x1'] > c['size'] * size_gap or round(c['top']) != round(prev['top'])):
            text += ' '
        text += c['text']
        prev = c
    return ' '.join(text.split())


def main(argv):
    if not argv or argv[0].startswith('-'):
        sys.exit(__doc__)
    path, full_lines, show_color = argv[0], '--satir' in argv, '--renk' in argv
    reader = PdfReader(path)
    per_page = {}
    with pdfplumber.open(path) as doc:
        for i, page in enumerate(reader.pages):
            annots = [a.get_object() for a in (page.get('/Annots') or [])]
            marks = [a for a in annots if a.get('/Subtype') == '/Highlight']
            if not marks:
                continue
            pp = doc.pages[i]
            height = float(pp.height)
            mx, my = float(page.mediabox[0]), float(page.mediabox[1])
            found = []
            for a in marks:
                q = [float(v) for v in a.get('/QuadPoints', [])]
                parts, first_top = [], None
                for k in range(0, len(q), 8):
                    xs, ys = q[k:k + 8:2], q[k + 1:k + 8:2]
                    top, bottom = height - (max(ys) - my), height - (min(ys) - my)
                    x0, x1 = (0, float(pp.width)) if full_lines else (min(xs) - mx, max(xs) - mx)
                    parts.append(words_in(pp.chars, (x0, top, x1, bottom)))
                    first_top = top if first_top is None else min(first_top, top)
                color = ','.join(f'{float(c):.2f}' for c in a.get('/C', []))
                found.append((first_top or 0, ' '.join(p for p in parts if p), color))
            found.sort()
            per_page[i + 1] = len(found)
            for _, text, color in found:
                prefix = f'PDF s.{i + 1}' + (f' [{color}]' if show_color else '')
                print(f'{prefix} | {text}')
    total = sum(per_page.values())
    print(f'\n# {total} vurgu, {len(per_page)} sayfada: ' + ', '.join(f's.{p}({n})' for p, n in per_page.items()))
    if not total:
        print('# Vurgu notu bulunamadı. İşaretler sayfaya basılmış olabilir: pdftoppm ile sayfalara bak.')


if __name__ == '__main__':
    main(sys.argv[1:])
