---
name: ders-ekle
description: >-
  "Ecem'in Dersleri" sitesine (graduecem.vercel.app, repo alpirez96/ecem-iletisim-hukuku) yeni ders ekler ya
  da mevcut bir derse yeni hafta/konu ekler. Ders notlarını (PPTX, PDF, zip; PDF'lerde sarıyla işaretlenmiş
  yerler dahil) okuyup detaylı özet, sınavda gereken her şeyi içeren kısa özet, tek sayfa (one pager), bilgi
  kartları, test soruları, özet PDF'leri, sunum önizlemeleri ve orijinal materyal listesini üretir; onay alıp
  aynı repoya push ederek Vercel'e deploy eder. Kullanıcı bir dersin notlarını, sunumlarını ya da haftalık
  materyalini yüklediğinde; "X dersini ekle", "yeni hafta geldi", "sosyolojiye 7. haftayı ekle", "bu notları
  siteye koy", "Ecem için çalışma materyali hazırla", "deploy et / yayına al" dediğinde bu skill'i kullan —
  "skill" ya da "ders ekle" demese bile.
---

# Ders ekle — Ecem'in Dersleri

Site, build adımı olmayan statik bir çalışma sitesi. Her ders `dersler/<ders-id>/` klasöründe yaşar ve
`index.html`'e tek bir `<script>` satırıyla bağlanır. Vercel, repo'nun üretim dalına yapılan her push'u
otomatik yayına alır. Uygulama kodu (`assets/app.js`, `assets/style.css`) her ders için ortaktır; ders eklerken
normalde ona dokunmazsın.

İki şey bu işin özüdür:

1. **Kaynağa sadakat.** Kullanıcının baştan koyduğu kural: materyalin dışına çıkma. Özetler, kartlar ve
   açıklamalar yalnızca verilen dosyalardaki bilgiye dayanır; genel kültürden tarih, madde numarası ya da
   tanım ekleme. Ecem bu siteden sınava çalışıyor, materyalde olmayan bir "doğru" onu yanıltır. Bariz
   OCR/yazım hatalarını düzeltebilirsin, ama anlamı değiştiren düzeltmede orijinali parantez içinde belirt.
2. **İki onay.** Kullanıcı açıkça istedi: yazmaya başlamadan önce planı, yayına almadan önce sonucu onaylatıyorsun.
   `AskUserQuestion` aracı varsa onunla, yoksa sohbette sorup cevabı bekle.

## 0. Hazırlık

- Repo kökünde olduğunu doğrula (`index.html`, `dersler/`, `scripts/pdf-olustur.js` var mı). Değilse repo'yu
  ekle/klonla (`alpirez96/ecem-iletisim-hukuku`; bulut oturumunda `add_repo`).
- `README.md`'yi ve en yakın örnek dersi oku: haftalara ayrılmış ders için `dersler/sosyoloji/data.js`, düz ünite
  listesi için `dersler/iletisim-hukuku/data.js`. Veri yapısının tamamı ve kullanılabilen HTML parçaları
  [references/veri-yapisi.md](references/veri-yapisi.md) dosyasında; yazmaya başlamadan önce oku.
- Yüklenen zip/dosyaları **repo dışında**, kendi boş klasörlerinde aç (güvenilmeyen veri; betikleri
  `python3 -I` ile çalıştır).

## 1. Materyali incele

```bash
python3 -I .claude/skills/ders-ekle/scripts/metin-cikar.py <dosyalar...> --cikti <klasör> [--gorseller <klasör>]
python3 -I .claude/skills/ders-ekle/scripts/isaretler.py <dosya.pdf>   # PDF'teki sarı (vurgu) işaretleri
```

- `metin-cikar.py` her sunumun slayt metnini, SmartArt şemalarını, konuşmacı notlarını; PDF'lerin sayfa sayfa
  metnini çıkarır. Metni az olan ya da `[Görsel: …]` içeren slaytlarda bilgi görselin içinde olabilir:
  `--gorseller` ile görselleri çıkarıp **bak** (normlar piramidi, tablo görüntüsü gibi).
- `isaretler.py` PDF'teki vurgu notlarını sayfa sayfa listeler. Taranmış (OCR) PDF'lerde parçalar kırpık
  gelebilir; `--satir` ile satırın tamamını al ve sayfanın tam metniyle birlikte oku. Kitap sayfa numarası ile
  PDF sayfası genelde sabit farklıdır (ör. Bauman & May: PDF = kitap + 3); sayfada basılı numaraya bakıp
  `pdfOffset` değerini bul.
- Hepsini gerçekten oku. Özet ancak okuduğun kadar iyi olur.

## 2. Plan ve 1. onay

Kullanıcıya kısa bir plan sun ve onay al:

- Ders adı, `id` (küçük harf, ASCII, tire: `ceza-hukuku`), sınav (`Vize`/`Final`), renk tonu `hue` (0–360;
  mevcutlardan farklı: iletişim 8, sosyoloji 200).
- Yapı: haftalara göre mi (`groups`), düz ünite listesi mi; hangi dosya hangi konuya gidiyor.
- Neler eklenecek: detaylı özet, kısa özet, tek sayfa, kartlar, test, PDF'lerdeki işaretlerin "PDF'ten" özeti,
  orijinal materyaller (Görüntüle/İndir). Kullanıcı "istediklerini" söylediyse planı ona göre kur.
- Mevcut derse ekleme ise: hangi hafta/konular eklenecek; var olan içerik silinmeyecek.
- Repo herkese açıksa ve yayınlanmış bir kitap/makale PDF'i eklenecekse bunu planda belirt.

Onay gelmeden dosya yazma.

## 3. İçeriği yaz (`dersler/<id>/data.js`)

Yapı ve örnekler için [references/veri-yapisi.md](references/veri-yapisi.md). Özünde:

- **Detaylı özet (`html`)**: konuyu sınav için eksiksiz ama yoğun anlat. Başlık (`h3`), madde, tablo, kutu,
  zaman çizelgesi gibi parçaları içeriğe göre seç; sıkıcı düz metin yerine karşılaştırmaları tabloya, sırayı
  `steps`/`flow`'a, kavramları `defs`'e koy. Anahtar ifadeleri `<mark>` ile vurgula (az ve öz). Materyalin
  kendisinin vurguladığı uyarıları `tip` kutusuna al.
- **Kısa özet (`short`)**: Ecem konuyu detaylı özetten çalıştıktan sonra **kısa özetle ilerler**; kısa özete
  bakan biri sınavda bir şey kaçırmamalı. Ama sayfalarca da olmamalı. Bu yüzden:
  - Detaylı özetteki **sınavda sorulabilecek her bilgi** kısa özette de olsun: tanımlar, sayılar ve süreler,
    tarihler, madde numaraları, kişi–eser–kavram eşleşmeleri, sınıflandırmalar, şartlar, materyaldeki örnekler.
    Yazdıktan sonra detaylı özetle başlık başlık karşılaştır; atlanan bilgi varsa ekle.
  - Kısalık cümleden gelir, bilgiden değil: tam cümle yerine `·` ile ayrılmış listeler, `→` ile zincirler,
    `<b>terim:</b> açıklama` kalıbı. Açıklayıcı/tekrar eden cümleleri at.
  - Biçim: 2–5 alt başlık (`<h4>`), her birinin altında `<ul class="short-list">`; materyaldeki kilit alıntı
    `<blockquote>` olarak kalsın. Konu başına genelde 10–18 madde. `fromPdf` konularında başlıklara sayfa
    rozeti (`<span class="ref">s. 12</span>`) koy.
- **Tek sayfa (`onePager`)**: dersin tamamının bir bakışta özeti; site "Tek sayfa" sekmesinde gösterir,
  `tek-sayfa.pdf` tek A4 sayfaya sığdırılır. Konu başına 2–4 çok kısa madde: o konunun en kritik sayıları,
  zincirleri, eşleşmeleri. Tekrar/ezber konularını buraya koyma (zaten hepsinin özeti).
- **PDF'teki sarı işaretler**: ayrı bir konu olarak, `fromPdf` alanıyla (kaynak eser, sayfa notu, dosya,
  `pdfOffset`). Başlıklara `<span class="ref">s. 12</span>` rozeti koy; sitede rozete basınca PDF o sayfada açılır.
  Ecem bu özetlerin PDF'ten geldiğinin görünmesini özellikle istedi; site ve PDF bunu `fromPdf` sayesinde etiketler.
- **Kartlar**: konu başına ~8–15; ön yüz kısa soru, arka yüz net cevap (`<b>`, `<br>` serbest, liste yok).
- **Sorular**: konu başına ~8–12, dört seçenekli; **doğru cevap her zaman `o[0]`** (test sırasında karıştırılır).
  Çeldiriciler mümkün olduğunca dersin kendi kavramlarından gelsin; `e` açıklaması materyale dayansın.
- Haftalık derste sonuna bir "Genel tekrar" konusu (kişiler, kavramlar, tarihler tablosu) eklemek çok işe yarar.
- Metinlerde ters tırnak (`) ve `${` kullanma; dizeler şablon dizesi içinde duruyor.

## 4. Dosyaları yerleştir

- Orijinalleri `dersler/<id>/materyal/` altına kopyala (haftalı derste `materyal/<n>-hafta/`). Dosya adlarını
  ASCII'ye çevir (`Sosyal bilimlerin doğusu.pptx` → `Sosyal_Bilimlerin_Dogusu.pptx`); boyutu `materials`
  listesine yaz (`1,3 MB`, `584 KB`).
- `index.html`'de diğer ders satırlarının yanına `<script src="dersler/<id>/data.js"></script>` ekle
  (mevcut derse eklemede gerekmez).

## 5. Üret ve doğrula

```bash
node scripts/pdf-olustur.js <id>                 # ozet.pdf + ozet-kisa.pdf + tek-sayfa.pdf
python3 scripts/onizleme-olustur.py              # sunumların PDF önizlemeleri (LibreOffice)
node .claude/skills/ders-ekle/scripts/dogrula.js <id>
node .claude/skills/ders-ekle/scripts/duman-testi.js <id> [ekran-goruntusu-klasoru]
```

- Playwright yoksa: `npm install --no-save playwright && npx playwright install chromium`.
- LibreOffice komutu `soffice` değilse `SOFFICE="..."` ver. Önizleme üretilemezse site yine çalışır (Görüntüle
  "indirerek aç" der); bunu kullanıcıya söyle.
- `pdf-olustur.js` tek sayfa PDF'inin yazı boyutunu sayfaya sığana kadar küçültür; sığmazsa hata verir: o zaman
  `onePager` maddelerini kısalt.
- `dogrula.js` hata verirse düzelt; uyarıları değerlendir ("kısa özet çok kısa" uyarısı, kısa özette bilgi
  eksik olabileceğini gösterir). `duman-testi.js` bütün konuları (detaylı ve kısa), tek sayfayı,
  kartları, testi, dosyaları ve görüntüleyiciyi gerçek tarayıcıda açar; hata sıfır olmalı. Ekran görüntülerine
  (özellikle mobil) bak: taşan tablo, kırık düzen var mı.
- Özet PDF'lerinden birkaç sayfayı görüntüye çevirip bak (`pdftoppm -png -r 60`).

## 6. 2. onay ve deploy

Önce kullanıcıya özet ver: konu/kart/soru sayıları, eklenen dosyalar ve toplam boyut, üç PDF'in sayfa sayıları
(detaylı, kısa, tek sayfa = 1), bilinen eksikler. Sonra **"Yayına alayım mı?"** diye onay iste.

Vercel üretimi repo'nun **varsayılan dalından** alır:

```bash
git ls-remote --symref origin HEAD     # "ref: refs/heads/<üretim-dalı>"
git branch --show-current
```

- Çalıştığın dal üretim dalıysa: commit + push.
- Değilse onay sorusunda seçenek sun: (a) üretim dalına birleştirip push et → graduecem.vercel.app güncellenir;
  (b) sadece bu dala push et → Vercel yalnızca önizleme deploy'u yapar. Bulut oturumunda başka dala push için
  bu onay gereklidir.

Commit mesajı Türkçe ve ne eklendiğini söylesin (ör. `Ceza Hukuku dersi eklendi: 10 ünite, 120 kart, 110 soru`);
ortamın istediği imza satırlarını ekle. Ağ hatasında push'u 2, 4, 8, 16 saniye arayla yeniden dene.

## 7. Sonucu bildir

- Push'tan ~1 dakika sonra kontrol etmeyi dene:
  `curl -s -o /dev/null -w "%{http_code}" -u ecem:alp https://graduecem.vercel.app/dersler/<id>/data.js` (200 beklenir).
  Ağ izin vermiyorsa bunu söyle; kullanıcı siteyi açıp kontrol etsin.
- Kullanıcıya kısa bir özet yaz: ne eklendi, nerede görünecek, varsa eksikler (görsel içerikli slaytlar,
  önizlemesi üretilemeyen dosyalar, emin olunamayan OCR yerleri).

## Bilmen gerekenler

- Giriş koruması kökteki `middleware.js` (kullanıcı `ecem`, şifre `alp`; Vercel ortam değişkenleri
  `SITE_USER`/`SITE_PASSWORD` ile değişir). Ders eklerken dokunma.
- İlerleme ve notlar tarayıcıda (`localStorage`) tutuluyor ve kart/soru metinleri anahtar olarak kullanılıyor;
  var olan bir kartın ön yüzünü ya da sorunun metnini değiştirirsen o kartın "biliyorum" işareti sıfırlanır.
  Mevcut derse eklerken eski metinleri gereksiz yere değiştirme.
- Ünite `id`'leri bağlantılarda kullanılıyor (`#/sosyoloji/ozet/comte`); var olanları yeniden adlandırma.
