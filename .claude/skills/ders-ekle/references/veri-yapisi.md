# Ders veri yapısı (`dersler/<id>/data.js`)

İçindekiler: [İskelet](#iskelet) · [Alanlar](#alanlar) · [Konu (`units`)](#konu-units) ·
[Kartlar ve sorular](#kartlar-ve-sorular) · [HTML parçaları](#html-parçaları) · [Mevcut derse ekleme](#mevcut-derse-ekleme)

## İskelet

Bütün metinler ters tırnaklı şablon dizesidir. Bu yüzden içerikte ` ve `${` kullanma. Türkçe kesme işareti
(') ve çift tırnak serbest.

```js
// <Ders> — <kaynak> materyallerinden derlenen içerik.
// Her şey ders materyallerine dayanır; materyallerde olmayan bilgi eklenmemiştir.

(window.DERSLER = window.DERSLER || []).push({
  id: `ceza-hukuku`,               // klasör adıyla aynı; küçük harf, ASCII, tire
  title: `Ceza Hukuku`,
  exam: `Vize`,                    // kart ve PDF etiketlerinde görünür
  hue: 140,                        // 0–360 renk tonu; diğer derslerden farklı olsun
  unitWord: `Konu`,                // isteğe bağlı; varsayılan "Ünite"
  description: `Ana sayfadaki ders kartında görünen 1–2 cümle.`,
  source: `Ceza Hukuku vize sunumları (1.–6. hafta)`,

  groups: [                        // isteğe bağlı: haftalık dersler için
    { id: `h1`, title: `1. Hafta` },
    { id: `tekrar`, title: `Genel Tekrar` }
  ],

  materials: [                     // isteğe bağlı: Dosyalar sekmesi (Görüntüle / İndir)
    { group: `h1`, title: `Ceza Hukukuna Giriş`, kind: `Sunum`, size: `1,2 MB`,
      file: `materyal/1-hafta/Ceza_Hukukuna_Giris.pptx` },
    { group: `h1`, title: `Okuma metni`, kind: `Okuma metni · sarı işaretli`, size: `640 KB`,
      file: `materyal/1-hafta/Okuma.pdf` }
  ],

  onePager: [ /* Tek sayfa: { u: konuId, items: [kısa madde, …] }, aşağıda */ ],
  units: [ /* konular, aşağıda */ ],
  cards: [ /* [konuId, ön yüz, arka yüz] */ ],
  questions: [ /* { u, q, o: [doğru, yanlış, yanlış, yanlış], e } */ ]
});
```

## Alanlar

| Alan | Zorunlu | Açıklama |
|---|---|---|
| `id`, `title`, `units`, `cards`, `questions` | evet | |
| `exam`, `hue`, `description`, `source` | önerilir | |
| `unitWord` | hayır | Konu etiketi ("Konu 2.1"). Yoksa "Ünite". |
| `groups` | hayır | Varsa kenar çubuğu, kart/test seçimi ve PDF içindekiler haftalara göre gruplanır; kartlarda ve testte "2. Hafta — hepsi" seçeneği çıkar. |
| `materials` | hayır | `file` yolu `dersler/<id>/` köküne göredir. PPTX'ler için `onizleme/` altında PDF önizleme beklenir (`scripts/onizleme-olustur.py` üretir). |
| `onePager` | önerilir | "Tek sayfa" sekmesi ve `tek-sayfa.pdf`. Yoksa sekme boş kalır, doğrulayıcı uyarır. |

## Konu (`units`)

```js
{
  id: `giris`, group: `h1`, no: `1.1`, title: `Ceza Hukukuna Giriş`,
  slides: `Slayt 3–25`,                                 // isteğe bağlı: tek sunumlu derste slayt aralığı
  files: [`materyal/1-hafta/Ceza_Hukukuna_Giris.pptx`], // isteğe bağlı: "Kaynak sunum" çipleri
  short: `<h4>Ceza hukukunun ilkeleri</h4>
<ul class="short-list">
<li><b>Kanunilik:</b> kanunun açıkça suç saymadığı fiile ceza yok · <b>ölçülülük:</b> fiille orantılı ceza.</li>
<li>…</li>
</ul>
<h4>Süreler</h4>
<ul class="short-list">
<li>Şikâyet <mark>6 ay</mark> · ceza <mark>3 ay – 2 yıl</mark>.</li>
</ul>
<blockquote>"Materyaldeki kilit tanım ya da madde metni." (TCK 125)</blockquote>`,
  html: `
<p class="lead">Konunun tek cümlelik özü.</p>
<h3>Başlık</h3>
...`
}
```

- `id` benzersiz, ASCII, kısa (`giris`, `comte`). Bağlantılarda kullanılır; yayına girdikten sonra değiştirme.
- `no` ekranda görünen numara: düz derste `1, 2, 3…`, haftalı derste `2.1, 2.2`, genel tekrarda `T`.
- `files` tek dosyaysa ve `slides` verilmişse çip sunumu o aralığın ilk slaytında açar (önizleme PDF'inde
  sayfa = slayt numarası).
- `short` kısa özet görünümünde ve `ozet-kisa.pdf`'te kullanılır; her konuda olsun. Ecem çalıştıktan sonra
  kısa özetle ilerler, o yüzden **sınavda gereken her bilgi** burada da olmalı (tanım, sayı, süre, tarih,
  madde no, kişi–kavram eşleşmesi, örnek), ama kısaltılmış biçimde. Yalnızca `<h4>`, `<ul class="short-list">`
  ve `<blockquote>` kullan; madde içinde satır içi etiketler (`<b>`, `<i>`, `<mark>`, `<span class="ref">`).

### Tek sayfa (`onePager`)

```js
onePager: [
  { u: `giris`, items: [
      `Hukuku ayıran: <b>maddi yaptırım</b>. Kaynaklar: yazılı · yazısız · yardımcı.`,
      `Hiyerarşi: <mark>Anayasa › MA Andlaşma › Kanun › KHK › Tüzük › Yönetmelik</mark>.`
  ] },
  { u: `cevap`, items: [
      `Basın: <mark>2 ay → 3 gün → 15 gün</mark>. RTV: <mark>60 gün → 7 gün</mark>.`
  ] }
],
```

- `units`'in hemen üstüne yazılır; konu sırasını izler. Konu başına 2–4 madde, her madde tek satıra yakın.
- Bütün ders tek A4 sayfaya sığmalı (`pdf-olustur.js` yazıyı küçülterek sığdırır, olmazsa hata verir).
- Tekrar/ezber konularını ekleme. Maddelerde yalnızca satır içi etiketler (`<b>`, `<i>`, `<mark>`).

### PDF'teki işaretlerden gelen konu

```js
{
  id: `wallerstein`, group: `h2`, no: `2.2`, title: `Wallerstein: Sosyal Bilimlerin Tarihsel Kuruluşu`,
  fromPdf: {
    name: `Immanuel Wallerstein, <i>Sosyal Bilimleri Açın</i>, Bölüm I (s. 11–36)`,
    note: `Parantez içindeki sayfa numaraları kitabın sayfalarıdır. PDF sayfası = kitap sayfası − 10 (ör. s. 12 → PDF 2).`,
    file: `materyal/2-hafta/Wallerstein_Sosyal_Bilimlerin_Tarihsel_Kurulusu.pdf`,
    pdfOffset: -10     // PDF sayfası = kitap sayfası + pdfOffset
  },
  short: `...`,
  html: `
<h3>Sosyal bilim, modern dünyaya ait bir girişimdir <span class="ref">s. 12</span></h3>
<ul><li>…</li></ul>`
}
```

Site bu konuyu "PDF'ten" rozetiyle, kaynak kutusuyla ve "PDF'i görüntüle / İndir" düğmeleriyle gösterir;
`ref` rozetleri PDF'i ilgili sayfada açar. Özet PDF'inde de aynı etiket çıkar.

## Kartlar ve sorular

```js
cards: [
  [`giris`, `Ceza hukukunun 5 ilkesi?`, `Kanunilik, ölçülülük, eşitlik, kanunların bağlayıcılığı, cezaların şahsiliği.`],
  [`giris`, `"Kimse başkasının fiilinden sorumlu tutulamaz." Hangi ilke?`, `<b>Cezaların şahsiliği</b> ilkesi.`]
],
questions: [
  { u: `giris`, q: `"Ceza kanunlarını bilmemek mazeret sayılmaz." hangi ilkedir?`,
    o: [`Kanunların bağlayıcılığı ilkesi`, `Cezaların şahsiliği ilkesi`, `Ölçülülük ilkesi`, `Kanunilik ilkesi`],
    e: `Kanunların bağlayıcılığı ilkesi gereği ceza kanunlarını bilmemek mazeret değildir.` }
]
```

- Kart arka yüzünde yalnızca satır içi HTML (`<b>`, `<i>`, `<br>`); liste kullanma (kart bir düğmenin içinde).
- Kart ön yüzleri ve soru metinleri ders içinde benzersiz olmalı (ilerleme bunlarla saklanır).
- Sorunun dört seçeneği farklı olmalı; doğru cevap **`o[0]`**.
- "Hepsi / hiçbiri" seçeneği kullanma (seçenekler karıştırılıyor).

## HTML parçaları

`assets/style.css` aşağıdaki sınıfları biçimlendirir. Hem sitede hem özet PDF'te aynı görünür.

| Parça | Ne için | Örnek |
|---|---|---|
| `<p class="lead">` | Konunun girişi / tanımı | `<p class="lead"><b>Medya hukuku:</b> …</p>` |
| `<h3>` | Alt başlık | `<h3>Hukukun kaynakları</h3>` |
| `<mark>` | Anahtar ifade (fosforlu kalem) | `<mark>maddi yaptırım</mark>` |
| `<div class="tip"><span class="tip-label">Dikkat</span>…</div>` | Sınav uyarısı, kilit cümle | Etiket: Dikkat / Kısaca / Tartışma / Örnek |
| `<div class="table-wrap"><table class="tbl">…</table></div>` | Karşılaştırma tablosu | `thead` + `tbody` |
| `<div class="cols"><div class="box"><h4>…</h4>…</div>…</div>` | Yan yana kutular (`cols two` = iki sütun) | Kaynak türleri, iki kavram |
| `<dl class="mini">` | Kutu içinde kısa etiket-değer | Süreler karşılaştırması |
| `<dl class="defs"><dt>…</dt><dd>…</dd></dl>` | Tanımlar listesi | Hukuk dalları |
| `<ul class="chips"><li>…</li></ul>` | Kısa etiket listesi | Amaçlar, disiplinler |
| `<ol class="steps"><li>…</li></ol>` | Numaralı adımlar / şartlar | Başvuru süreci |
| `<ol class="timeline"><li><b>1789</b>Olay</li></ol>` | Tarih kartları | Kronoloji |
| `<ol class="flow"><li>…</li></ol>` | Oklu zincir (A → B → C) | Üç hâl yasası, devrim özeti |
| `<div class="pyramid"><div style="--w:34%">…</div>…</div>` | Hiyerarşi piramidi | Normlar hiyerarşisi |
| `<blockquote>` | Alıntı (kaynakla) | `"…" — Kant` |
| `<q>` | Satır içi alıntı | |
| `<span class="ref">s. 12</span>` | Kitap sayfa rozeti (yalnızca `fromPdf` konularında tıklanır) | |
| `<span class="badge">PDF</span>` | Küçük "PDF" işareti | Genel tekrar tablosunda |
| `<p class="note">` | Küçük, soluk not | Örnek kaynak |
| `<ul class="short-list">` | Sadece `short` alanında (`<h4>` alt başlıklarla) | |

Tasarım ilkeleri: bir konuda her parçayı kullanmaya çalışma; içerik neyse ona uyan parçayı seç. Uzun tablolar
mobilde kaydırılır; 3'ten fazla sütun gerekiyorsa `cols` + `box` + `dl.mini` genelde daha okunur.

## Mevcut derse ekleme

- Yeni hafta: `groups`'a sırayla ekle, `materials`'a dosyaları, `units`'e konuları (eski konuların sırasını
  ve `id`'lerini koru). Genel tekrar konusu varsa onu en sonda tut ve yeni haftanın kişi/kavram/tarihlerini ekle.
- Kart ve soruları ilgili konu yorum satırının altına ekle (`// 7.1 · konu-id`).
- Yeni konuların `onePager` bölümlerini de sırasına ekle.
- PDF'leri ve önizlemeleri yeniden üret (`node scripts/pdf-olustur.js <id>`, `python3 scripts/onizleme-olustur.py`).
