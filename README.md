# Ecem'in Dersleri

Ders notlarından hazırlanmış özetler, bilgi kartları, testler, not defteri ve indirilebilir dosyalar.
Build adımı olmayan statik bir site; Vercel'e bağlandığında her push otomatik yayına girer.

**Adres:** https://graduecem.vercel.app · **Giriş:** kullanıcı adı `ecem`, şifre `alp`

## Dersler

| Ders | Klasör | İçerik |
|---|---|---|
| İletişim Hukuku (Vize) | `dersler/iletisim-hukuku/` | 12 ünite · 116 kart · 125 soru |
| Sosyoloji (Vize) | `dersler/sosyoloji/` | 2.–6. hafta, 11 konu · 101 kart · 91 soru · PDF'lerdeki sarı işaretli yerlerin özetleri |

Her dersin sayfasında: **Özet** (konu konu, notlarım alanıyla) · **Kartlar** · **Test** (yanlışlarım listesiyle) ·
**Defterim** (tüm notlar, .txt indir) · **Dosyalar** (özet PDF + orijinal materyaller).
İlerleme ve notlar tarayıcıda saklanır; başka cihaza geçmez.

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
   - `units`: `{ id, no, title, html, group?, slides?, files?, fromPdf? }`
     `fromPdf` olan konular sitede ve PDF'te "PDF'ten" etiketiyle gösterilir.
   - `cards`: `[üniteId, ön yüz, arka yüz]`
   - `questions`: `{ u: üniteId, q, o: [DOĞRU, yanlış, yanlış, yanlış], e: açıklama }` — seçenekler testte karıştırılır.
2. Orijinal dosyaları `dersler/<ders-adi>/materyal/` altına koy.
3. `index.html`'de `<script src="dersler/<ders-adi>/data.js"></script>` satırını ekle.
4. Özet PDF'ini üret (aşağıda) ve push et.

## Özet PDF'lerini yeniden üretmek

```bash
npm install --no-save playwright && npx playwright install chromium
node scripts/pdf-olustur.js            # tüm dersler
node scripts/pdf-olustur.js sosyoloji  # tek ders
```

## Yerelde açmak

```bash
python3 -m http.server 8000
```

Sonra http://localhost:8000 (yerelde şifre sorulmaz; şifre yalnızca Vercel'de devrededir).
