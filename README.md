# Ecem'in Dersleri

Ders notlarından hazırlanmış özetler, bilgi kartları, testler, not defteri ve indirilebilir dosyalar.
Build adımı olmayan statik bir site; Vercel'e bağlandığında her push otomatik yayına girer.

**Adres:** https://graduecem.vercel.app · **Giriş:** kullanıcı adı `ecem`, şifre `alp`

## Dersler

| Ders | Klasör | İçerik |
|---|---|---|
| İletişim Hukuku (Vize) | `dersler/iletisim-hukuku/` | 12 ünite · 116 kart · 125 soru |
| Sosyoloji (Vize) | `dersler/sosyoloji/` | 2.–6. hafta, 11 konu · 101 kart · 91 soru · PDF'lerdeki sarı işaretli yerlerin özetleri |

Her dersin sayfasında: **Özet** (konu konu, notlarım alanıyla; **Detaylı / Kısa** geçişi) · **Tek sayfa**
(bütün ders bir bakışta) · **Kartlar** · **Test** (yanlışlarım listesiyle) · **Defterim** (tüm notlar, .txt indir) ·
**Dosyalar** (detaylı, kısa ve tek sayfa PDF + orijinal materyaller; her dosyada **Görüntüle** / **İndir**).
Kısa özet, konuyu çalıştıktan sonra tekrar için; sınavda gereken her bilgiyi kısaltılmış biçimde içerir.
İlerleme ve notlar tarayıcıda saklanır; başka cihaza geçmez.

"Görüntüle" dosyayı sitenin içindeki PDF görüntüleyicide açar (PDF.js, `assets/vendor/pdfjs/`).
Tarayıcılar PPTX açamadığı için sunumlar, `onizleme/` klasöründeki PDF kopyalarıyla gösterilir; "İndir" her zaman orijinal dosyayı verir.

## Vercel'e ilk kurulum (bir kez)

1. vercel.com → **Add New… → Project** → GitHub'dan bu repoyu seç (**Import**).
2. **Project Name:** `graduecem` (adres `graduecem.vercel.app` olur).
3. **Framework Preset:** `Other`. Build Command ve Output Directory boş kalsın.
4. **Deploy**. Bundan sonra repoya yapılan her push birkaç saniyede yayına girer.

Şifre koruması kökteki `middleware.js` ile yapılır (ücretsiz planda çalışır; sayfalar, PDF'ler ve
materyaller dahil her istek korunur). Kullanıcı adı/şifreyi değiştirmek için Vercel → Settings →
Environment Variables'a `SITE_USER` ve `SITE_PASSWORD` ekleyip yeniden deploy et.

## Yeni ders eklemek

1. `dersler/<ders-adi>/data.js` oluştur (mevcut derslerden birini kopyala):
   - `id`, `title`, `exam`, `hue` (0–360 arası renk tonu), `description`, `source`
   - isteğe bağlı: `unitWord` (`'Konu'` gibi), `groups` (haftalar), `materials` (orijinal dosyalar)
   - `units`: `{ id, no, title, html, short, group?, slides?, files?, fromPdf? }`
     `short` kısa özettir (`<h4>` + `<ul class="short-list">`); `fromPdf` olan konular sitede ve PDF'te
     "PDF'ten" etiketiyle gösterilir.
   - `onePager`: `[{ u: üniteId, items: [kısa madde, …] }]` — Tek sayfa sekmesi ve `tek-sayfa.pdf`.
   - `cards`: `[üniteId, ön yüz, arka yüz]`
   - `questions`: `{ u: üniteId, q, o: [DOĞRU, yanlış, yanlış, yanlış], e: açıklama }` — seçenekler testte karıştırılır.
2. Orijinal dosyaları `dersler/<ders-adi>/materyal/` altına koy.
3. `index.html`'de `<script src="dersler/<ders-adi>/data.js"></script>` satırını ekle.
4. Özet PDF'lerini ve sunum önizlemelerini üret (aşağıda) ve push et.

Claude Code ile: `.claude/skills/ders-ekle/` skill'i bu adımların hepsini (materyali okuma, içerik, PDF'ler,
doğrulama, onaylı deploy) yürütür; ayrıntılar `SKILL.md` ve `references/veri-yapisi.md` içinde.

## Özet PDF'lerini yeniden üretmek

Her ders için `ozet.pdf` (detaylı), `ozet-kisa.pdf` (kısa) ve `tek-sayfa.pdf` (tek A4 sayfa; yazı boyutu sığana
kadar otomatik küçülür) üretilir.

```bash
npm install --no-save playwright && npx playwright install chromium
node scripts/pdf-olustur.js            # tüm dersler
node scripts/pdf-olustur.js sosyoloji  # tek ders
```

## Sunum önizlemelerini üretmek (LibreOffice gerekir)

```bash
python3 scripts/onizleme-olustur.py           # eksik önizlemeler
python3 scripts/onizleme-olustur.py --hepsi   # hepsini yeniden
```

`materyal/x.pptx` → `onizleme/x.pdf`. Bazı sunumların XML'inde LibreOffice'in açamadığı `ns0:` önekleri var;
betik bunları geçici bir kopyada düzeltir, orijinallere dokunmaz.

## Yerelde açmak

```bash
python3 -m http.server 8000
```

Sonra http://localhost:8000 (yerelde şifre sorulmaz; şifre yalnızca Vercel'de devrededir).
