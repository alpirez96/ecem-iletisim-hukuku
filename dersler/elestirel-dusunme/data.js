// Eleştirel Düşünme — 1.–5. hafta ders sunumlarından (PDF) derlenen içerik.
// Her şey ders materyallerine dayanır; materyallerde olmayan bilgi eklenmemiştir.
// Alanların açıklaması için README.md > "Yeni ders eklemek".

(window.DERSLER = window.DERSLER || []).push({
  id: `elestirel-dusunme`,
  title: `Eleştirel Düşünme`,
  exam: `Vize`,
  hue: 145,
  unitWord: `Hafta`,
  description: `Kavram, önerme, argüman ve çıkarımdan akıl yürütme türlerine (tümdengelim, tümevarım, analoji); argüman analizi, Toulmin modeli, kanıtın gücü ve günlük yaşamdaki mantık hataları.`,
  source: `Eleştirel Düşünme 1.–5. hafta sunumları`,

materials: [
  { title: `1. Hafta – Eleştirel Düşünmenin Temel Kavramları`, kind: `Sunum (PDF) · 20 sayfa`, size: `2,3 MB`, file: `materyal/1_Hafta_Elestirel_Dusunmenin_Temel_Kavramlari.pdf` },
  { title: `2. Hafta – Eleştirel Düşünmenin Önemi ve Günlük Yaşamdaki Yeri`, kind: `Sunum (PDF) · 20 sayfa`, size: `2,0 MB`, file: `materyal/2_Hafta_Elestirel_Dusunmenin_Onemi_ve_Gunluk_Yasamdaki_Yeri.pdf` },
  { title: `3. Hafta – Düşünme Türleri ve Akıl Yürütme`, kind: `Sunum (PDF) · 20 sayfa`, size: `2,5 MB`, file: `materyal/3_Hafta_Dusunme_Turleri_ve_Akil_Yurutme.pdf` },
  { title: `4. Hafta – Argüman Analizi`, kind: `Sunum (PDF) · 20 sayfa`, size: `2,9 MB`, file: `materyal/4_Hafta_Arguman_Analizi.pdf` },
  { title: `5. Hafta – Günlük Yaşamda Mantık Hataları`, kind: `Sunum (PDF) · 20 sayfa`, size: `1,8 MB`, file: `materyal/5_Hafta_Gunluk_Yasamda_Mantik_Hatalari.pdf` }
],

onePager: [
  { u: `temel`, items: [
      `<b>Kavram</b> soyut düşünce birimi · <b>önerme</b> doğru/yanlış olabilen yargı · <b>argüman</b> sonucu destekleyen önermeler · <b>çıkarım</b> önermelerden sonuç çıkarma.`,
      `Önerme: basit / bileşik ("ve", "veya", "ise"). Çıkarım: doğrudan / dolaylı; yanlış çıkarım → safsata.`,
      `Argümanın özellikleri: <mark>ilgililik · geçerlilik · mantıklılık · açıklık</mark>.`,
      `Süreç: konu belirleme → inceleme → değerlendirme → çerçeve → sonuç sunumu. Beceriler: ayıklamak, bağlantılandırmak, çözümlemek, eleştirmek.`
  ] },
  { u: `onem`, items: [
      `Analiz etmek (ezber değil) · önyargıları fark etmek · kendini sorgulamak.`,
      `4 beceri: <b>argüman analizi · kanıt değerlendirme · perspektif çeşitliliği · mantıklı sonuç</b>.`,
      `İnternette: kaynak güvenilirliği, içerik ayrımı (sponsorlu/reklam), manipülasyon tespiti.`,
      `Alışkanlık: merak, öz eleştiri, çoklu kaynak · Araçlar: argüman haritası, kanıt incelemesi, önyargı tespiti.`
  ] },
  { u: `akil-yurutme`, items: [
      `<b>Tümdengelim:</b> genelden özele, <mark>kesin</mark> sonuç (Sokrates kıyası); "çöp girer, çöp çıkar".`,
      `<b>Tümevarım:</b> gözlemden genellemeye, <mark>olasılıksal</mark> ("tüm kuşlar uçar"); bilimin motoru.`,
      `<b>Analoji:</b> benzerlikten, <mark>varsayımsal</mark> (Dünya–Mars); karma yaklaşım, yanıltıcı benzerlik riski.`
  ] },
  { u: `arguman`, items: [
      `Bileşenler: <b>iddia · kanıt · gerekçe · destek</b>; Toulmin'de + karşıt görüş + niteleyici ("Ben Britanyalıyım / Bermuda'da doğdum").`,
      `<b>Geçerli:</b> önermeler doğruysa sonuç mutlak doğru (penguen) · <b>geçersiz:</b> değil (Alara).`,
      `Değerlendirme: içerik · form ("A ise B; A; o halde B") · bağlam. Kanıt: miktar/kalite, güncellik/alaka, uyum/yeterlilik.`,
      `Hatalar: ad hominem, straw man, hasty generalization, nedensellik, bandwagon, döngüsel mantık.`
  ] },
  { u: `mantik-hatalari`, items: [
      `<b>Ad hominem:</b> argümana değil kişiye saldırı ("kıyafetin kötü, söylediklerin de yanlış").`,
      `<b>Yanlış neden (post hoc):</b> ardışıklığı nedensellik sanmak ("şapka şans getiriyor").`,
      `<b>Genelleme:</b> yetersiz örnekten hüküm ("bir kere kötü deneyim → marka hep kötü"); stereotiplerin temeli.`
  ] }
],

units: [
  {
    id: `temel`, no: 1, title: `Eleştirel Düşünmenin Temel Kavramları`,
    files: [`materyal/1_Hafta_Elestirel_Dusunmenin_Temel_Kavramlari.pdf`],
    short: `<h4>Eleştirel düşünme</h4>
<ul class="short-list">
<li>Üç ayağı: <b>akıl yürütme</b> (sistematik süreçle mantıklı sonuç) · <b>analiz etme</b> (karmaşık bilgiyi parçalara ayırma) · <b>değerlendirme</b> (bilgi ve yargıyı objektif kriterlerle sorgulama).</li>
<li>Bilgi çağında doğru karar ve sağlam sonuç için vazgeçilmez araç.</li>
<li>Önemi: yanlış bilgi ve önyargıdan arınmış objektif karar · bilim, demokrasi ve günlük yaşamda sağlıklı iletişim · yaratıcılığı destekler, karmaşık problemleri çözmede temel araç.</li>
</ul>
<h4>Dört temel kavram</h4>
<ul class="short-list">
<li><b>Kavram:</b> zihinde nesne, olay veya durumu temsil eden <mark>soyut düşünce birimi</mark>. "Adalet", "özgürlük", "sağlık" bağlama göre farklı anlam taşır; kavramlar muğlak olabilir → net tanımlanmalı (örn. "başarı" kişiden kişiye değişir).</li>
<li><b>Önerme:</b> <mark>doğru ya da yanlış olabilen anlamlı yargı</mark> ("Türkiye'nin başkenti Ankara'dır." doğru önerme); argümanların temel yapı taşı.</li>
<li>Önerme türleri: <b>basit</b> (tek yargı) · <b>bileşik</b> ("ve", "veya", "ise" bağlaçlarıyla birden fazla önerme) · eleştirel değerlendirme = önermelerin doğruluk ve geçerliliğini sorgulamak.</li>
<li><b>Argüman:</b> bir veya daha fazla önermenin bir sonucu desteklemek için mantıklı biçimde bir araya getirilmesi ("Süt içmek sağlıklıdır çünkü kalsiyum içerir."); düşüncenin ikna edici sunumunun temel aracı.</li>
<li>Argümanın özellikleri: <b>ilgililik</b> (konuyla güçlü bağ) · <b>geçerlilik</b> (önermeler doğru, kanıta dayalı) · <b>mantıklılık</b> (tutarlı, doğru sıralı) · <b>açıklık</b> (anlaşılır, net).</li>
<li><b>Çıkarım:</b> önermelerden mantıklı sonuç çıkarma (Tüm insanlar ölümlüdür · Sokrates bir insandır → Sokrates ölümlüdür). <b>Doğrudan</b> (açık, net sonuç) / <b>dolaylı</b> (arka arkaya adımlarla). Dikkat: yanlış çıkarım → <b>safsata</b>.</li>
</ul>
<h4>Süreç, beceriler, uygulama</h4>
<ul class="short-list">
<li>Süreç: <mark>konu belirleme → inceleme → değerlendirme → çerçeve oluşturma → sonuç sunumu</mark>.</li>
<li>Beceriler: <b>ayıklamak</b> (geçerli önermeleri seçmek) · <b>bağlantılandırmak</b> (mantıksal bağ kurmak) · <b>çözümlemek</b> (alt başlıklara ayırmak) · <b>eleştirmek</b> (yargıya varmak).</li>
<li>"Süt içmek sağlıklıdır" argümanını sorgulamak: kimler için geçerli (çocuk, mide ve kalp hastaları)? önermeler doğru ve yeterli mi? karşı argümanlar neler?</li>
<li>Günlük hayatta: reklam, haber ve sosyal medyayı sorgulamak; kendi inançlarını objektif değerlendirmek; sağlıklı karar ve etkili iletişim.</li>
<li>Yaratıcılıkla ilişkisi: sorgulama, değerlendirme, açık fikirlilik, yenilik ("dış kutunun" ötesine geçmek); yenilikçi çözüm için hem sorgulayıcı hem yaratıcı düşünme gerekir.</li>
</ul>`,
    html: `
<p class="lead">Eleştirel düşünme; bilgi çağında doğru kararlar almak ve sağlam sonuçlara ulaşmak için <mark>vazgeçilmez bir araçtır</mark>. Temeli dört kavramdır: <b>kavram, önerme, argüman, çıkarım</b>.</p>

<div class="cols">
  <div class="box"><h4>Akıl yürütme</h4><p>Sistematik düşünce süreci ile mantıklı sonuçlara ulaşma.</p></div>
  <div class="box"><h4>Analiz etme</h4><p>Karmaşık bilgileri parçalara ayırarak derinlemesine inceleme.</p></div>
  <div class="box"><h4>Değerlendirme</h4><p>Bilgi ve yargıları objektif kriterlerle sorgulama.</p></div>
</div>

<h3>Eleştirel düşünmenin önemi</h3>
<ul>
  <li>Yanlış bilgi ve önyargılardan arınarak <b>objektif kararlar</b> almayı sağlar.</li>
  <li>Bilim, demokrasi ve günlük yaşamda <b>sağlıklı iletişim</b> kurar.</li>
  <li>Yaratıcılığı destekler ve karmaşık problemleri çözmede temel araçtır.</li>
</ul>

<h3>Kavram</h3>
<p><b>Kavram:</b> Zihnimizde bir nesne, olay veya durumu temsil eden <mark>soyut düşünce birimi</mark>.</p>
<ul>
  <li><b>Soyutlama:</b> "Adalet", "Özgürlük", "Sağlık" gibi kavramlar farklı bağlamlarda farklı anlamlar taşır.</li>
  <li><b>Temel adım:</b> Eleştirel düşünmede kavramların net ve doğru anlaşılması kritik önem taşır.</li>
  <li><b>Belirsizlik:</b> Kavramlar bazen muğlak olabilir ve yanlış anlamalara yol açar; eleştirel düşünme bu belirsizlikleri gidermeyi hedefler.</li>
</ul>
<div class="tip"><span class="tip-label">Örnek</span>"Başarı" kavramı kişiden kişiye değişebilir; net tanımlanmalıdır.</div>

<h3>Önerme</h3>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Tanım</th><th>Örnek</th><th>İşlev</th></tr></thead>
  <tbody><tr><td>Doğru ya da yanlış olabilen anlamlı bir yargı ifadesi</td><td>"Türkiye'nin başkenti Ankara'dır." (doğru önerme)</td><td>Argümanların temel yapı taşını oluşturur</td></tr></tbody>
</table></div>
<dl class="defs">
  <dt>Basit önerme</dt><dd>Tek bir yargı içeren ifade.</dd>
  <dt>Bileşik önerme</dt><dd>"Ve", "veya", "ise" gibi bağlaçlarla birden fazla önermenin bağlanması.</dd>
  <dt>Eleştirel değerlendirme</dt><dd>Önermelerin doğruluğunun ve geçerliliğinin sorgulanması süreci.</dd>
</dl>

<h3>Argüman</h3>
<p><b>Argüman:</b> Bir veya daha fazla önermenin, <mark>bir sonucu desteklemek için</mark> mantıklı biçimde bir araya getirilmesi. Düşüncenin ikna edici biçimde sunulmasının temel aracıdır.</p>
<blockquote>"Süt içmek sağlıklıdır çünkü kalsiyum içerir." (örnek argüman)</blockquote>
<div class="cols two">
  <div class="box"><h4>İlgililik</h4><p>Argüman konusu ile güçlü bağlantı kurmalı.</p></div>
  <div class="box"><h4>Geçerlilik</h4><p>Önermeler doğru ve kanıta dayalı olmalı.</p></div>
  <div class="box"><h4>Mantıklılık</h4><p>Önermeler tutarlı ve doğru sıralanmalı.</p></div>
  <div class="box"><h4>Açıklık</h4><p>Anlaşılır ve net ifade edilmeli.</p></div>
</div>
<p class="note">Etkili argümanlar, mantıklı yapı ile ikna edici sunum gücünü bir araya getirir.</p>

<h3>Çıkarım</h3>
<p><b>Çıkarım:</b> Önermelerden mantıklı sonuçlar çıkarma süreci.</p>
<ol class="flow">
  <li>Tüm insanlar ölümlüdür.</li>
  <li>Sokrates bir insandır.</li>
  <li>Sonuç: Sokrates ölümlüdür.</li>
</ol>
<dl class="defs">
  <dt>Doğrudan çıkarım</dt><dd>Önermelerden açık ve net sonuçlar çıkarılır.</dd>
  <dt>Dolaylı çıkarım</dt><dd>Arka arkaya mantıksal adımlarla sonuçlara ulaşılır.</dd>
</dl>
<div class="tip"><span class="tip-label">Dikkat</span>Yanlış çıkarımlar <b>safsata</b> ve hatalı düşünceye yol açar.</div>

<h3>Eleştirel düşünme süreci</h3>
<ol class="steps">
  <li><b>Konu belirleme:</b> Konunun net tanımı ve veri toplama.</li>
  <li><b>İnceleme:</b> Argümanların ve önermelerin detaylı analizi.</li>
  <li><b>Değerlendirme:</b> Varsayımların ve kanıtların objektif incelenmesi.</li>
  <li><b>Çerçeve oluşturma:</b> Mantıksal yapı kurma ve düzenleme.</li>
  <li><b>Sonuç sunumu:</b> Bulguların sistematik sunumu ve değerlendirilmesi.</li>
</ol>

<h3>Eleştirel düşünme becerileri</h3>
<div class="cols two">
  <div class="box"><h4>Ayıklamak</h4><p>Geçerli önermeleri seçmek ve ayırt etmek.</p></div>
  <div class="box"><h4>Bağlantılandırmak</h4><p>Önermeleri mantıksal bağlarla ilişkilendirmek.</p></div>
  <div class="box"><h4>Çözümlemek</h4><p>Karmaşık konuları alt başlıklara ayırmak.</p></div>
  <div class="box"><h4>Eleştirmek</h4><p>Önermeler ve argümanlar hakkında yargıya varmak.</p></div>
</div>

<h3>Örnek üzerinden uygulama: "Süt içmek sağlıklıdır"</h3>
<ul>
  <li><b>Kimler için geçerli?</b> Çocuklar, mide hastaları, kalp hastaları için durum farklıdır.</li>
  <li><b>Önermelerin doğruluğu:</b> Argümanın önermeleri doğru ve yeterli mi?</li>
  <li><b>Karşı argümanlar:</b> Alternatif görüşler ve karşıt kanıtlar nelerdir?</li>
</ul>

<h3>Günlük hayatta eleştirel düşünme</h3>
<ul>
  <li>Reklamları, haberleri ve sosyal medyayı sorgulamak.</li>
  <li>Kişisel inanç ve yargılarımızı objektif değerlendirmek.</li>
  <li>Sağlıklı kararlar almak ve etkili iletişim kurmak.</li>
</ul>

<h3>Eleştirel düşünme ve yaratıcılık</h3>
<dl class="defs">
  <dt>Sorgulama</dt><dd>Mevcut yaklaşımları eleştirel gözle incelemek.</dd>
  <dt>Değerlendirme</dt><dd>Yaratıcı fikirlerin sistematik analizi.</dd>
  <dt>Açık fikirlilik</dt><dd>Yeni perspektiflere açık olmak.</dd>
  <dt>Yenilik</dt><dd>"Dış kutunun" ötesine geçmeyi desteklemek.</dd>
</dl>
<div class="tip"><span class="tip-label">Kısaca</span>Yenilikçi çözümler için hem sorgulayıcı hem de yaratıcı düşünme gereklidir.</div>

<h3>Sonuç</h3>
<p>Eleştirel düşünme bilgi çağında yaşam kalitemizi artırır; temel becerileri <b>kavram, önerme, argüman, çıkarım</b>dır ve herkesin sürekli geliştirmesi gereken bir yaşam becerisidir.</p>`
  },

  {
    id: `onem`, no: 2, title: `Eleştirel Düşünmenin Önemi ve Günlük Yaşamdaki Yeri`,
    files: [`materyal/2_Hafta_Elestirel_Dusunmenin_Onemi_ve_Gunluk_Yasamdaki_Yeri.pdf`],
    short: `<h4>Eleştirel düşünme nedir?</h4>
<ul class="short-list">
<li>Bilgiyi sorgulamak ve anlamak: <b>analiz etmek</b> (ezberlemek değil, gerçek anlamı kavramak) · <b>önyargıları fark etmek</b> (kendi ve başkalarının) · <b>kendini sorgulamak</b> (sürekli gelişim).</li>
<li>"Gerçek bilgelik, neyi bilmediğimizi bilmekten başlar."</li>
<li>4 temel beceri: <mark>argüman analizi · kanıt değerlendirme · perspektif çeşitliliği · mantıklı sonuç</mark>.</li>
</ul>
<h4>Neden eleştirel düşünme?</h4>
<ul class="short-list">
<li><b>Bilinçli seçimler:</b> duygu ve önyargıdan arınmış rasyonel karar → objektif değerlendirme, uzun vadeli bakış, risk analizi.</li>
<li><b>Yaratıcı çözümler:</b> karmaşık sorunlara farklı açılardan bakmak → problem tanımlama, alternatif üretme, sonuç öngörme.</li>
<li>Bilgi kirliliği ve yanlış bilgiye karşı <b>güçlü savunma mekanizması</b>.</li>
<li>Yaşam boyu öğrenme ve açık fikirlilik: <b>açıklık</b> (zihinsel esneklik) · <b>keşfetme</b> (varsayımları sorgulamak) · <b>gelişim</b> (sürekli öğrenme).</li>
</ul>
<h4>Günlük hayattan örnekler</h4>
<ul class="short-list">
<li><b>İnternet:</b> kaynak güvenilirliği (yazar, uzmanlık, referans; alan uzmanı mı, güncel mi, tarafsız mı?) · içerik ayrımı (objektif bilgi / sponsorlu içerik ve reklam) · manipülasyon tespiti (sahte haber, yanıltıcı başlık, duygusal manipülasyon).</li>
<li><b>Akıllı tüketici:</b> yorumları objektif değerlendirmek, fiyat-performans · ihtiyaç odaklı rasyonel tercih · sosyal medya ve marka algısından bağımsız düşünme.</li>
<li><b>Sağlık:</b> diyet trendlerinin bilimsel temelini sorgulamak · doktor önerisini anlamak, alternatifleri araştırmak, <b>ikinci görüş</b> · kendine uygun sürdürülebilir yaşam tarzı.</li>
<li><b>İş yerinde sorun çözme:</b> problem tanımlama (temel neden, belirtiyle karıştırmamak) → alternatif üretme (beyin fırtınası) → optimal karar (maliyet, zaman, kaynak).</li>
<li><b>Propaganda ve yanlış bilgi:</b> bilgi sorgulama + toplumsal bilinç. Örnek: sahte sağlık ürünü reklamları, mucizevi kilo verme yöntemleri, komplo teorileri.</li>
</ul>
<h4>Geliştirmek için</h4>
<ul class="short-list">
<li>Alışkanlık: <b>1</b> merak ve açık fikirlilik · <b>2</b> öz eleştiri · <b>3</b> çoklu kaynak.</li>
<li>Araçlar: <b>argüman haritası</b> (iddia, kanıt, sonucu görsel düzenlemek) · <b>kanıt incelemesi</b> (varsayım ve dayanaklar) · <b>önyargı tespiti</b> (mantık hataları, bilişsel çarpıklıklar).</li>
</ul>`,
    html: `
<p class="lead">Eleştirel düşünme, bilgi çağında <mark>doğru kararlar almak için en önemli beceridir</mark>: bilgiyi ezberlemek değil, sorgulamak ve anlamaktır.</p>

<h3>Eleştirel düşünme: bilgiyi sorgulamak ve anlamak</h3>
<div class="cols">
  <div class="box"><h4>Analiz etmek</h4><p>Bilgiyi ezberlemek değil, derinlemesine analiz etmek ve gerçek anlamını kavramak.</p></div>
  <div class="box"><h4>Önyargıları fark etmek</h4><p>Kendi ve başkalarının önyargılarını tanıyarak sağlam yargılar oluşturmak.</p></div>
  <div class="box"><h4>Kendini sorgulamak</h4><p>Kendi düşüncelerimizi eleştirerek sürekli gelişim sağlamak.</p></div>
</div>
<blockquote>"Gerçek bilgelik, neyi bilmediğimizi bilmekten başlar."</blockquote>

<h3>Temel beceriler</h3>
<ol class="steps">
  <li><b>Argüman analizi:</b> Argümanları bileşenlerine ayırarak mantıksal yapıyı incelemek.</li>
  <li><b>Kanıt değerlendirme:</b> Kanıtların güvenilirliğini ve konuyla ilişkisini objektif olarak değerlendirmek.</li>
  <li><b>Perspektif çeşitliliği:</b> Farklı bakış açılarını anlayarak önyargıları tespit etmek ve çok boyutlu düşünmek.</li>
  <li><b>Mantıklı sonuç:</b> Eldeki verilerden hareketle mantıklı, tutarlı ve sağlam sonuçlar çıkarmak.</li>
</ol>

<h3>Neden eleştirel düşünme? Daha iyi kararlar</h3>
<div class="cols two">
  <div class="box"><h4>Bilinçli seçimler</h4><p>Duygular ve önyargılardan arınmış, rasyonel temellere dayanan kararlar alabilme.</p>
    <ul class="chips"><li>Objektif değerlendirme</li><li>Uzun vadeli bakış açısı</li><li>Risk analizi</li></ul></div>
  <div class="box"><h4>Yaratıcı çözümler</h4><p>Karmaşık sorunları farklı açılardan değerlendirerek etkili ve yenilikçi çözümler üretme.</p>
    <ul class="chips"><li>Problem tanımlama</li><li>Alternatif üretme</li><li>Sonuç öngörme</li></ul></div>
</div>
<div class="tip"><span class="tip-label">Kısaca</span>Eleştirel düşünme, bilgi kirliliği ve yanlış bilgilere karşı güçlü bir savunma mekanizması oluşturur.</div>

<h3>Yaşam boyu öğrenme ve açık fikirli olma</h3>
<dl class="defs">
  <dt>Açıklık</dt><dd>Farklı perspektiflere açık olmak ve zihinsel esneklik göstermek.</dd>
  <dt>Keşfetme</dt><dd>Yeni fikirleri araştırmak ve varsayımları sürekli sorgulamak.</dd>
  <dt>Gelişim</dt><dd>Kişisel ve profesyonel büyüme için sürekli öğrenmeyi benimsemek.</dd>
</dl>

<h3>Günlük hayatta eleştirel düşünme örnekleri</h3>
<h4>İnternette bilgi değerlendirme</h4>
<div class="cols">
  <div class="box"><h4>Kaynak güvenilirliği</h4><p>Yazarın kimliği, uzmanlık alanı ve referans kaynaklarını kontrol etmek.</p>
    <ul class="chips"><li>Alan uzmanı mı?</li><li>Güncel bilgi mi?</li><li>Tarafsız yaklaşım var mı?</li></ul></div>
  <div class="box"><h4>İçerik ayrımı</h4><p>Objektif bilgi ile sponsorlu içerik ve reklamlar arasındaki farkı ayırt etmek.</p></div>
  <div class="box"><h4>Manipülasyon tespiti</h4><p>Sahte haber, yanıltıcı başlık ve duygusal manipülasyon tekniklerini fark etmek.</p></div>
</div>

<h4>Akıllı tüketici olmak</h4>
<ul>
  <li><b>Analitik yaklaşım:</b> Ürün yorumlarını objektif değerlendirmek, fiyat-performans dengesini analiz etmek.</li>
  <li><b>Bilinçli tercihler:</b> Gereksiz harcamalardan kaçınmak için ihtiyaç odaklı, rasyonel kararlar vermek.</li>
  <li><b>Bağımsız düşünme:</b> Sosyal medya etkisi ve marka algısından bağımsız, objektif değerlendirmeler yapmak.</li>
</ul>

<h4>Sağlık kararlarında</h4>
<div class="cols">
  <div class="box"><h4>Diyet trendleri</h4><p>Popüler diyetlerin bilimsel temellerini sorgulamak ve kişisel ihtiyaçlara uygunluğunu değerlendirmek.</p></div>
  <div class="box"><h4>Tıbbi tavsiyeler</h4><p>Doktor önerilerini anlamak, alternatif tedavileri araştırmak ve <b>ikinci görüş</b> almanın önemini kavramak.</p></div>
  <div class="box"><h4>Yaşam tarzı</h4><p>Kendi vücut tipine ve yaşam koşullarına uygun seçimlerle sürdürülebilir alışkanlıklar geliştirmek.</p></div>
</div>

<h4>İş yerinde sorun çözme</h4>
<ol class="flow">
  <li><b>Problem tanımlama:</b> temel nedeni belirlemek, yüzeysel belirtilerle karıştırmamak</li>
  <li><b>Alternatif üretme:</b> beyin fırtınası, her yolu detaylı karşılaştırmak</li>
  <li><b>Optimal karar:</b> maliyet, zaman ve kaynağa göre en mantıklı çözüm</li>
</ol>

<h4>Propaganda ve yanlış bilgiyle mücadele</h4>
<ul>
  <li><b>Bilgi sorgulama:</b> Her türlü bilgiyi eleştirel gözle değerlendirerek manipülasyona karşı savunma geliştirmek.</li>
  <li><b>Toplumsal bilinç:</b> Eleştirel düşünme kültürünü yaygınlaştırarak daha bilinçli bir topluma katkı sağlamak.</li>
</ul>
<div class="tip"><span class="tip-label">Örnek</span>Sahte sağlık ürünleri reklamları, mucizevi kilo verme yöntemleri ve komplo teorileri gibi yanıltıcı içerikleri tespit etmek.</div>

<h3>Eleştirel düşünmeyi geliştirmek için ipuçları</h3>
<ol class="steps">
  <li><b>Merak ve açık fikirlilik:</b> Sürekli soru sormak, yeni bilgilere açık olmak, öğrenme arzusunu canlı tutmak.</li>
  <li><b>Öz eleştiri:</b> Kendi düşüncelerimizi ve önyargılarımızı cesaretle sorgulamak, hatalarımızdan öğrenmek.</li>
  <li><b>Çoklu kaynak:</b> Farklı kaynaklardan bilgi edinmek, karşılaştırmak, çeşitli görüşleri değerlendirmek.</li>
</ol>
<h4>Araçlar ve teknikler</h4>
<dl class="defs">
  <dt>Argüman haritası</dt><dd>İddiaları, kanıtları ve sonuçları görsel olarak organize etmek.</dd>
  <dt>Kanıt incelemesi</dt><dd>Varsayımları ve dayanak noktalarını dikkatle analiz etmek.</dd>
  <dt>Önyargı tespiti</dt><dd>Mantık hatalarını ve bilişsel çarpıklıkları tanımayı öğrenmek.</dd>
</dl>
<p class="note">Bu teknikler düzenli pratikle güçlü bir düşünce sistemi oluşturur.</p>

<h3>Sonuç</h3>
<p>Eleştirel düşünme; sürekli değişen dünyada ayakta kalmanın temel becerisi (<b>bilgi çağının anahtarı</b>), bilinçli kararlarla daha anlamlı bir yaşam (<b>kişisel dönüşüm</b>) ve kendi hayatımızla toplumumuzun geleceğini şekillendirme gücüdür (<b>gelecek inşası</b>). Günlük alışkanlık haline getirilmeli, öğrenme hayat felsefesi yapılmalıdır.</p>`
  },

  {
    id: `akil-yurutme`, no: 3, title: `Düşünme Türleri ve Akıl Yürütme: Tümdengelim, Tümevarım, Analoji`,
    files: [`materyal/3_Hafta_Dusunme_Turleri_ve_Akil_Yurutme.pdf`],
    short: `<h4>Akıl yürütme</h4>
<ul class="short-list">
<li>Tanım: <mark>doğru kabul edilen yargılardan yeni sonuçlar çıkarma süreci</mark>; düşüncenin sistemli biçimi. Yöntemler tüm kültürlerde benzer.</li>
<li>Üç ana yöntem: <b>tümdengelim · tümevarım · analoji</b> ("mantığın üç güçlü silahı").</li>
<li>Önemi: günlük kararlar · bilimsel keşif (Newton'un yerçekiminden Einstein'ın göreliliğine) · eleştirel düşünme (doğru-yanlış ayrımı, manipülasyona karşı koruma).</li>
</ul>
<h4>Tümdengelim (dedüksiyon)</h4>
<ul class="short-list">
<li><b>Genelden özele;</b> önceden bilinen kurallar (matematik teoremleri, doğa yasaları, mantık kuralları); doğru öncüllerden <mark>mutlak kesin sonuç</mark>.</li>
<li>Kıyas: <b>ana öncül</b> (major premise) "Bütün insanlar ölümlüdür" · <b>alt öncül</b> (minor premise) "Sokrates insandır" · <b>sonuç</b> "Öyleyse Sokrates ölümlüdür".</li>
<li>Öncüller yanlışsa süreç doğru olsa da sonuç hatalı: <b>"Çöp girer, çöp çıkar."</b> Doğru öncüllerden de mantık kuralı ihlal edilirse yanlış sonuç çıkabilir.</li>
<li>Aristoteles'ten beri felsefe ve bilimin temel aracı; matematikte ispat yöntemlerinin kökü.</li>
</ul>
<h4>Tümevarım (indüksiyon)</h4>
<ul class="short-list">
<li>Özgül gözlemler → örüntü tanıma → genelleme → <mark>olasılıksal sonuç</mark> (kesin değil, yüksek olasılıklı tahmin).</li>
<li>Örnek: kartal uçar, güvercin uçar, daha fazla kuş… → "Tüm kuşlar uçar." (olasılıksal)</li>
<li>Bilimde: sistematik gözlem → hipotez → deney ve test → teori (istisna her zaman olabilir). Bilimsel ilerlemenin motoru ama mutlak kesinlik sunmaz: hem gücü hem sınırı.</li>
</ul>
<h4>Analoji</h4>
<ul class="short-list">
<li>Bilinen ile bilinmeyen arasında köprü; ortak özelliklerden bilinmeyen hakkında tahmin; sonuç <mark>varsayımsal</mark> (makul varsayım). <b>Karma yaklaşım:</b> tümdengelim ve tümevarım özelliklerini birleştirir.</li>
<li>Örnek: Dünya (atmosfer, su, canlı, uygun sıcaklık) ↔ Mars (ince atmosfer, su izleri, soğuk) → "Mars'ta canlılar olabilir."</li>
<li>Sınırları: yüzeysel benzerlik derin farkı gizleyebilir (Mars: çok ince atmosfer, -80°C, çok yüksek radyasyon); kesin kanıt değil, araştırmaya başlangıç noktası. Benzetmeler hem aydınlatır hem aldatır.</li>
</ul>
<h4>Karşılaştırma ve günlük örnekler</h4>
<ul class="short-list">
<li>Sunumdaki karşılaştırma grafiğinde sıra: <b>tümdengelim › tümevarım › analoji</b> (sonuçlar: kesin / olasılıksal / varsayımsal).</li>
<li>Eleştirel kontrol: argüman analizi (öncül doğru mu, sonuç takip ediyor mu?) · tutarlılık kontrolü (çelişki var mı?) · yanıltıcı benzetmeler (benzerlik gerçek mi, yüzeysel mi?).</li>
<li>Tümdengelim: "Tüm memeliler sıcak kanlıdır, köpek memelidir → sıcak kanlıdır" (veterinerlik, zooloji) · tümevarım: "Bugün de dün de yağmur yağdı → bu hafta hep yağacak" (hava tahmini) · analoji: "Bilgisayar virüsü gibi insan virüsü de yayılır" (siber güvenlik, halk sağlığı).</li>
</ul>
<blockquote>"Mantık, düşüncenin anatomisidir; akıl yürütme ise onun ruhudur. İkisini birleştiren kişi, gerçeğin peşinde koşarken hiç kaybolmaz."</blockquote>`,
    html: `
<p class="lead"><b>Akıl yürütme:</b> Doğru kabul edilen yargılardan <mark>yeni sonuçlar çıkarma süreci</mark>; düşüncenin sistemli bir biçimidir. Düşünme biçimleri farklı olsa da akıl yürütme yöntemleri tüm kültürlerde benzerdir.</p>

<p>Üç ana yöntem — mantığın üç güçlü silahı: <b>tümdengelim, tümevarım ve analoji</b>.</p>

<h3>Akıl yürütme neden önemlidir?</h3>
<dl class="defs">
  <dt>Günlük kararlar</dt><dd>Sabah kahvaltısından iş seçimine kadar her kararımızı şekillendirir.</dd>
  <dt>Bilimsel keşif</dt><dd>Newton'un yerçekiminden Einstein'ın görelilik teorisine kadar tüm büyük keşiflerin temelidir.</dd>
  <dt>Eleştirel düşünme</dt><dd>Doğru ile yanlışı ayırt etmemizi sağlar, manipülasyonlara karşı korur.</dd>
</dl>

<h3>Tümdengelim (dedüksiyon)</h3>
<ul>
  <li><b>Genelden özele:</b> Kabul edilmiş genel kurallardan başlayarak spesifik durumlar için sonuç çıkarır.</li>
  <li><b>Önceden bilinen kurallar:</b> Matematiksel teoremler, doğa yasaları veya mantık kuralları temel alınır.</li>
  <li><b>Kesin sonuçlar:</b> Doğru öncüllerden hareketle <mark>mutlak kesinlikte</mark> sonuçlara ulaşılır.</li>
</ul>
<ol class="steps">
  <li><b>Ana öncül (major premise):</b> Bütün insanlar ölümlüdür. — Evrensel, tartışılmaz bir kabul.</li>
  <li><b>Alt öncül (minor premise):</b> Sokrates insandır. — Belirli bir kişinin genel kategoriye ait olduğunu belirtir.</li>
  <li><b>Sonuç (conclusion):</b> Öyleyse Sokrates ölümlüdür. — Mantıksal zorunlulukla ortaya çıkan kesin sonuç.</li>
</ol>
<p class="note">Bu klasik kıyas, tümdengelimin gücünü ve kesinliğini gösterir.</p>
<h4>Geçerlilik ve doğruluk</h4>
<ul>
  <li><b>Önermelerin doğruluğu:</b> Başlangıç öncülleri yanlışsa, mantıksal süreç doğru olsa bile sonuç hatalı olur: <mark>"Çöp girer, çöp çıkar"</mark> prensibi.</li>
  <li><b>Mantık hataları:</b> Doğru öncüllerden bile yanlış sonuçlara ulaşabiliriz; bu, mantık kurallarının ihlali sonucu oluşur.</li>
  <li><b>Klasik mantığın temeli:</b> Aristoteles'ten bu yana felsefe ve bilimin temel araçlarından biri; matematikte ispat yöntemlerinin kökü.</li>
</ul>

<h3>Tümevarım (indüksiyon)</h3>
<ol class="flow">
  <li><b>Özgül gözlemler:</b> tekil olay ve örnekler</li>
  <li><b>Örüntü tanıma:</b> ortak noktalar</li>
  <li><b>Genelleme:</b> genel kural ve yasalar</li>
  <li><b>Olasılıksal sonuç:</b> kesin değil, yüksek olasılıklı tahmin</li>
</ol>
<h4>Örnek</h4>
<ul>
  <li>Gözlem 1: Bu kuş uçar (kartal gökyüzünde süzülüyor).</li>
  <li>Gözlem 2: O kuş da uçar (güvercin daldan dala uçtu).</li>
  <li>Gözlem 3+: Daha fazla kuş gözlemleniyor…</li>
  <li>Genelleme: <b>Tüm kuşlar uçar.</b> (olasılıksal sonuç)</li>
</ul>
<h4>Bilimdeki rolü</h4>
<ol class="steps">
  <li><b>Sistematik gözlem:</b> Bilim insanları doğayı gözlemler, veri toplar.</li>
  <li><b>Hipotez oluşturma:</b> Gözlemlerden geçici açıklamalar ve teoriler geliştirilir.</li>
  <li><b>Deney ve test:</b> Hipotezler kontrollü koşullarda test edilir.</li>
  <li><b>Teori geliştirme:</b> Başarılı hipotezler kapsamlı teorilere dönüşür; ancak her zaman istisnalar olabilir.</li>
</ol>
<div class="tip"><span class="tip-label">Dikkat</span>Tümevarım bilimsel ilerlemenin motorudur ama <b>mutlak kesinlik sunmaz</b>: bu hem gücü hem sınırıdır.</div>

<h3>Analoji</h3>
<dl class="defs">
  <dt>Köprü kurma</dt><dd>Bilinen ve bilinmeyen arasında mantıksal bağlantılar kurar.</dd>
  <dt>Benzerlik arama</dt><dd>İki farklı durum arasındaki ortak özellikleri tespit eder.</dd>
  <dt>Sonuç çıkarma</dt><dd>Benzerliklerden hareketle bilinmeyenle ilgili tahminler yapar.</dd>
  <dt>Varsayımsal sonuç</dt><dd>Sonuçlar kesin değil, makul varsayımlar şeklindedir.</dd>
  <dt>Karma yaklaşım</dt><dd>Hem tümdengelim hem tümevarım özelliklerini birleştirir.</dd>
</dl>
<div class="cols">
  <div class="box"><h4>Bilinen: Dünya</h4><ul><li>Atmosferi vardır</li><li>Su bulunur</li><li>Canlılar yaşar</li><li>Uygun sıcaklık</li></ul></div>
  <div class="box"><h4>Bilinmeyen: Mars</h4><ul><li>Atmosferi var (ince)</li><li>Su izleri bulundu</li><li>Canlılar var mı?</li><li>Soğuk iklim</li></ul></div>
  <div class="box"><h4>Analojik sonuç</h4><p>Mars'ta canlılar olabilir, çünkü Dünya ile bazı benzer özelliklere sahiptir.</p></div>
</div>
<h4>Analojinin sınırlamaları</h4>
<ul>
  <li><b>Yanıltıcı benzerlikler:</b> Yüzeysel benzerlikler derin farklılıkları gizleyebilir.</li>
  <li><b>Mars–Dünya farkları:</b> Mars'ın atmosferi çok daha ince (sunumda "%100 kat daha ince"), sıcaklığı -80°C, radyasyon seviyesi çok yüksek; bu farklar hayati önem taşır.</li>
  <li><b>Varsayımsal sonuçlar:</b> Analoji kesin kanıt sunmaz, sadece olasılık yaratır; bilimsel araştırma için başlangıç noktası olabilir.</li>
</ul>
<div class="tip"><span class="tip-label">Kısaca</span>Benzetmeler bizi hem aydınlatabilir hem de aldatabilir.</div>

<h3>Akıl yürütme türlerinin karşılaştırması</h3>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Tür</th><th>Yön</th><th>Sonucun niteliği</th><th>Örnek</th></tr></thead>
  <tbody>
    <tr><td>Tümdengelim</td><td>Genelden özele</td><td>Kesin</td><td>Sokrates ölümlüdür</td></tr>
    <tr><td>Tümevarım</td><td>Tekil gözlemlerden genellemeye</td><td>Olasılıksal</td><td>Tüm kuşlar uçar</td></tr>
    <tr><td>Analoji</td><td>Benzerlikten bilinmeyene</td><td>Varsayımsal</td><td>Mars'ta canlı olabilir</td></tr>
  </tbody>
</table></div>
<p class="note">Sunumdaki karşılaştırma grafiğinde çubuklar tümdengelim › tümevarım › analoji sırasıyla kısalır (grafikte eksen etiketi yoktur).</p>

<h3>Akıl yürütme ve eleştirel düşünme</h3>
<ul>
  <li><b>Argüman analizi:</b> Öncüller doğru mu? Mantık sağlam mı? Sonuç gerçekten takip ediyor mu?</li>
  <li><b>Tutarlılık kontrolü:</b> Önermeler birbiriyle ve genel bilgilerimizle uyumlu mu? Çelişki var mı?</li>
  <li><b>Yanıltıcı benzetmeler:</b> Benzerlikler gerçek mi, yüzeysel mi? Farklar göz ardı ediliyor mu?</li>
</ul>

<h3>Günlük hayatta örnekler</h3>
<div class="cols">
  <div class="box"><h4>Tümdengelim</h4><p>"Tüm memeliler sıcak kanlıdır, köpek memelidir, köpek sıcak kanlıdır."</p><p class="note">Veteriner hekimlik, zooloji, günlük pet bakımı</p></div>
  <div class="box"><h4>Tümevarım</h4><p>"Bugün yağmur yağdı, dün de yağmur yağdı, bu hafta hep yağmur yağacak."</p><p class="note">Hava durumu tahminleri, günlük planlama</p></div>
  <div class="box"><h4>Analoji</h4><p>"Bilgisayar virüsü gibi, insan virüsü de yayılır."</p><p class="note">Siber güvenlik ve halk sağlığı politikaları</p></div>
</div>

<h3>Becerileri geliştirmek</h3>
<ul class="chips"><li>Uygulama</li><li>Eleştirel analiz</li><li>Çeşitli yöntemler</li><li>Temel mantık bilgisi</li></ul>
<ul>
  <li>Günlük argümanları analiz edin; farklı bakış açılarını değerlendirin.</li>
  <li>Mantık hatalarını tespit etmeyi öğrenin; yaratıcı ve eleştirel düşünceyi birleştirin.</li>
</ul>
<blockquote>"Mantık, düşüncenin anatomisidir; akıl yürütme ise onun ruhudur. İkisini birleştiren kişi, gerçeğin peşinde koşarken hiç kaybolmaz."</blockquote>`
  },

  {
    id: `arguman`, no: 4, title: `Argüman Analizi: Geçerli/Geçersiz Argümanlar, Güçlü/Zayıf Kanıtlar`,
    files: [`materyal/4_Hafta_Arguman_Analizi.pdf`],
    short: `<h4>Temel kavramlar</h4>
<ul class="short-list">
<li><b>Argüman:</b> bir iddia ve onu destekleyen nedenler zinciri · <b>iddia (claim):</b> doğruluğu savunulan ana ifade, argümanın kalbi · <b>kanıt (evidence):</b> somut gerçek, veri, gözlem.</li>
<li><b>Gerekçe (reason):</b> kanıt ile iddia arasındaki <mark>mantıksal köprü</mark> · <b>destek (support):</b> gerekçeyi güçlendiren ek kanıt ve açıklama.</li>
<li>Süreç: iddia sahibi (açık iddia) → sorgulayıcı (kanıt ister) → yanıt ve değerlendirme (objektif kriterler). Yapı: iddia → kanıt → gerekçe → destek; "her halka zincirin gücünü belirler".</li>
</ul>
<h4>Toulmin modeli</h4>
<ul class="short-list">
<li>İddia "Ben Britanyalıyım." · kanıt "Bermuda'da doğdum." · gerekçe "Bermuda'da doğanlar Britanyalıdır." · destek "Hukuk eğitimi aldım, bu bilgiyi teyit eder." · <b>karşıt görüş</b> "Ancak casus olmadığım sürece." · <b>niteleyici</b> "muhtemelen, kesinlikle".</li>
<li>Örnek 2: "Bu ürün sağlıklıdır" ← "İçeriğinde doğal bileşenler var" ← "Doğal bileşenler sağlıklıdır" ← "Bilimsel araştırmalar doğruluyor" · karşıt: "Bazı kişiler alerjik olabilir" · niteleyici: "Genellikle sağlıklıdır".</li>
</ul>
<h4>Geçerli / geçersiz, değerlendirme</h4>
<ul class="short-list">
<li><b>Geçerli:</b> önermeler doğruysa <mark>sonuç mutlak doğru</mark> (Tüm kuşların tüyü vardır · penguen kuştur → penguenin tüyü vardır).</li>
<li><b>Geçersiz:</b> önermeler doğru olsa bile sonuç mutlak doğru değil (Arkadaş canlısı olmak arkadaş edinmenin en kolay yolu · Alara'nın çok arkadaşı var → Alara çok arkadaş canlısıdır: kanıtlanmamış).</li>
<li>Şema: önermeler doğru mu? → mantıksal bağ geçerli mi? → sonuç mutlak mı? Geçerlide yol <b>mantıksal zorunlulukla</b> çizilir. Geçerlilik içerikten bağımsız <b>yapısal</b> bir kavramdır.</li>
<li>3 boyut: <b>içerik</b> (doğruluk/olasılık derecesi) · <b>form</b> (mantıksal ilişkinin yapısı) · <b>bağlam</b> (durum, koşullar).</li>
<li>Form: aynı yapıdaki argümanlar özdeş; sembolle gösterilir: <b>"A ise B; A; o halde B"</b> (sunumda "If A then B / A / Therefore B") ↔ "Yağmur yağarsa ıslanırım; yağmur yağıyor; o halde ıslanacağım."</li>
</ul>
<h4>Kanıt ve karşı argüman</h4>
<ul class="short-list">
<li>Kanıtın gücü: <b>miktar ve kalite</b> (istatistik, uzman görüşü, anekdot arasındaki güç farkı) · <b>güncellik ve alaka</b> · <b>uyum ve yeterlilik</b>.</li>
<li>Örnekler: 50 yıl önceki teknoloji verisi bugün güvenilir mi? · uzman görüşü ↔ sokaktaki vatandaşın hikâyesi · "Sayılar yalan söylemez, ancak yanlış yorumlanabilir."</li>
<li>Karşı argümanlar: tanıma (objektif tespit) · saygılı yaklaşım (yer verir, çarpıtmaz) · <b>çürütme (rebuttal)</b>: karşı argümanın sınırlarını göstererek kendi pozisyonunu güçlendirmek.</li>
</ul>
<h4>Mantık hataları, zincirleme</h4>
<ul class="short-list">
<li><b>Ad hominem</b> (kişiye saldırı: "O güvenilmez, bu yüzden söyledikleri yanlış") · <b>straw man</b> (karşı argümanı çarpıtıp kolay saldırmak) · <b>hasty generalization</b> (yetersiz kanıtla genelleme) · <b>nedensellik hatası</b> (korelasyonu nedensellik sanmak).</li>
<li><b>Bandwagon:</b> "Herkes bunu yapıyor, o yüzden doğru" (popülerliği doğruluk sanmak) · "Bu ilaç işe yarıyor çünkü herkes kullanıyor": sunumda <b>döngüsel mantık hatası</b> (circular reasoning) örneği.</li>
<li>Zincirleme: ana iddia ("Bu diyet sağlıklıdır") → destekleyici kanıt ("bilimsel araştırmalar destekliyor") → alt argüman ("güvenilir kaynaklardan") → temel veri ("uzman değerlendirmesinden geçmiş, saygın dergilerde").</li>
<li>Dikkat: iddianın netliği · kanıtların yeterliliği · gerekçenin geçerliliği · karşı görüşlerin adil değerlendirilmesi.</li>
</ul>`,
    html: `
<p class="lead">Argüman analizi; mantıklı akıl yürütme, kanıt değerlendirme ve argüman yapısını anlama becerisidir: <mark>geçerli/geçersiz argümanları ve güçlü/zayıf kanıtları ayırt etmek</mark>.</p>

<h3>Temel kavramlar</h3>
<dl class="defs">
  <dt>Argüman</dt><dd>Bir iddia ve onu destekleyen nedenler zinciri; mantıklı düşüncenin yapı taşı.</dd>
  <dt>İddia (claim)</dt><dd>Doğruluğu savunulan ana ifade; argümanın kalbi ve odak noktası.</dd>
  <dt>Kanıt (evidence)</dt><dd>İddianın dayanağı olan somut gerçekler, veriler ve gözlemler.</dd>
  <dt>Gerekçe (reason)</dt><dd>Kanıt ile iddia arasındaki <mark>mantıksal köprü</mark>; kanıtın iddiayı neden desteklediğini açıklar.</dd>
  <dt>Destek (support)</dt><dd>Gerekçenin geçerliliğini güçlendiren ek kanıtlar ve açıklamalar.</dd>
</dl>

<h3>Argüman süreci: iddia ve sorgulama diyaloğu</h3>
<ol class="steps">
  <li><b>İddia sahibi:</b> Açık ve net bir iddia ortaya koyar.</li>
  <li><b>Sorgulayıcı:</b> İddianın doğruluğunu sorgular, kanıt ister, eleştirel sorular yöneltir.</li>
  <li><b>Yanıt ve değerlendirme:</b> İddia sahibi kanıt ve gerekçe sunar; sorgulayıcı bunları objektif kriterlere göre değerlendirir.</li>
</ol>
<ol class="flow"><li>İddia</li><li>Kanıt</li><li>Gerekçe</li><li>Destek</li></ol>
<p class="note">Güçlü bir argüman bu dört bileşenin uyumlu çalışmasıyla oluşur; her halka zincirin gücünü belirler.</p>

<h3>Toulmin argüman modeli</h3>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Bileşen</th><th>Örnek 1</th><th>Örnek 2</th></tr></thead>
  <tbody>
    <tr><td>İddia</td><td>"Ben Britanyalıyım."</td><td>"Bu ürün sağlıklıdır."</td></tr>
    <tr><td>Kanıt</td><td>"Bermuda'da doğdum."</td><td>"İçeriğinde doğal bileşenler var."</td></tr>
    <tr><td>Gerekçe</td><td>"Bermuda'da doğanlar Britanyalıdır."</td><td>"Doğal bileşenler sağlıklıdır."</td></tr>
    <tr><td>Destek</td><td>"Hukuk eğitimi aldım, bu bilgiyi teyit eder."</td><td>"Bilimsel araştırmalar bunu doğruluyor."</td></tr>
    <tr><td>Karşıt görüş</td><td>"Ancak casus olmadığım sürece."</td><td>"Ancak bazı kişiler alerjik olabilir."</td></tr>
    <tr><td>Niteleyici</td><td>"Muhtemelen, kesinlikle" gibi ifadeler</td><td>"Genellikle sağlıklıdır."</td></tr>
  </tbody>
</table></div>

<h3>Geçerli ve geçersiz argümanlar</h3>
<div class="cols two">
  <div class="box"><h4>Geçerli argüman</h4><p>Önermeler doğruysa <b>sonuç mutlak doğrudur</b>.</p>
    <ol><li>Tüm kuşların tüyü vardır.</li><li>Penguen bir kuştur.</li><li>O halde penguenin tüyü vardır.</li></ol></div>
  <div class="box"><h4>Geçersiz argüman</h4><p>Önermeler doğru olsa bile <b>sonuç mutlak doğru değildir</b>.</p>
    <ol><li>Arkadaş canlısı olmak arkadaş edinmenin en kolay yoludur.</li><li>Alara çok arkadaşa sahiptir.</li><li>O halde Alara çok arkadaş canlısıdır. (kanıtlanmamış)</li></ol></div>
</div>
<ol class="flow"><li>Önermeler doğru mu?</li><li>Mantıksal bağ geçerli mi?</li><li>Sonuç mutlak mı?</li></ol>
<div class="tip"><span class="tip-label">Dikkat</span>Geçerli bir argümanda öncüllerden sonuca giden yol <b>mantıksal zorunlulukla</b> çizilir; geçersizde bu zorunluluk eksiktir. Geçerlilik, içerikten bağımsız <b>yapısal</b> bir kavramdır.</div>

<h3>Argümanların değerlendirilmesi</h3>
<div class="cols">
  <div class="box"><h4>İçerik</h4><p>Önermelerin doğruluk veya olasılık derecesi, gerçeklere uygunluğu.</p></div>
  <div class="box"><h4>Form</h4><p>Önermeler ve sonuç arasındaki mantıksal ilişkinin yapısı ve düzeni.</p></div>
  <div class="box"><h4>Bağlam</h4><p>Argümanın uygulandığı durum, koşullar ve çevresel faktörler.</p></div>
</div>
<h4>Argüman formunun önemi</h4>
<p>Aynı mantıksal yapıya sahip farklı argümanlar <b>form açısından özdeştir</b>. Formu görünür kılmak için önermeler sembollerle değiştirilir:</p>
<div class="cols two">
  <div class="box"><h4>Temel form</h4><p>A ise B. A. O halde B.</p><p class="note">Sunumdaki hâli: "If A then B / A / Therefore B"</p></div>
  <div class="box"><h4>Somut örnek</h4><p>Eğer yağmur yağarsa ıslanırım. Yağmur yağıyor. O halde ıslanacağım.</p></div>
</div>

<h3>Kanıtların gücü ve zayıflığı</h3>
<dl class="defs">
  <dt>Miktar ve kalite</dt><dd>İstatistiksel veriler, uzman görüşleri ve anekdotlar arasındaki güç farkları.</dd>
  <dt>Güncellik ve alaka</dt><dd>Kanıtın ne kadar güncel olduğu ve konuyla ne derece ilgili olduğu.</dd>
  <dt>Uyum ve yeterlilik</dt><dd>Kanıtın argümanla uyumu ve iddiayı desteklemeye yetip yetmediği.</dd>
</dl>
<div class="cols">
  <div class="box"><h4>Güncellik sorunu</h4><p>50 yıl önceki teknoloji verileri, bugünün hızla gelişen ortamı için ne kadar güvenilir?</p></div>
  <div class="box"><h4>Kaynak güvenilirliği</h4><p>Uzman görüşü ile sokaktaki vatandaşın hikâyesi arasındaki güvenilirlik farkı.</p></div>
  <div class="box"><h4>İstatistiksel yorumlama</h4><p>Sayılar yalan söylemez, ancak yanlış yorumlanabilir; doğru analiz kritiktir.</p></div>
</div>

<h3>Karşı argümanlar ve çürütmeler</h3>
<ul>
  <li><b>Karşı argümanları tanıma:</b> Muhalif görüşleri objektif bir yaklaşımla tespit etme ve değerlendirme.</li>
  <li><b>Saygılı yaklaşım:</b> İyi argümanlar karşı görüşlere yer verir, onlara saygı duyar ve çarpıtmaz.</li>
  <li><b>Çürütme (rebuttal):</b> Karşı argümanların sınırlarını göstererek kendi pozisyonunu güçlendirme sanatı.</li>
</ul>
<p class="note">Güçlü argümanlar muhalif görüşlerle hesaplaşmaktan kaçınmaz; onları dikkate alarak daha sağlam bir zemin oluşturur.</p>

<h3>Mantık hataları ve yanıltıcı argümanlar</h3>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Hata</th><th>Anlamı</th><th>Örnek</th></tr></thead>
  <tbody>
    <tr><td>Ad hominem</td><td>Argümana değil, kişiye saldırma</td><td>"O güvenilmez, bu yüzden söyledikleri yanlış." · "O kişi yalan söylüyor çünkü karakteri kötü."</td></tr>
    <tr><td>Straw man</td><td>Karşı argümanı çarpıtarak daha kolay saldırılır hale getirme</td><td>—</td></tr>
    <tr><td>Hasty generalization</td><td>Yetersiz kanıtla genelleme yapma</td><td>—</td></tr>
    <tr><td>Nedensellik hatası</td><td>Korelasyonu nedensellik sanma</td><td>—</td></tr>
    <tr><td>Bandwagon</td><td>Popülerliği doğruluk sanma</td><td>"Herkes bunu yapıyor, o yüzden doğru."</td></tr>
    <tr><td>Circular reasoning (döngüsel mantık)</td><td>Sunumdaki adlandırma</td><td>"Bu ilaç işe yarıyor çünkü herkes kullanıyor."</td></tr>
  </tbody>
</table></div>

<h3>Argüman zincirleme ve derinleştirme</h3>
<p>Bir argümanın kanıtı, başka bir argümanla desteklenebilir; bu zincirleme yapı iddiayı çok daha sağlam bir temele oturtur.</p>
<ol class="steps">
  <li><b>Ana iddia:</b> "Bu diyet sağlıklıdır."</li>
  <li><b>Birincil kanıt:</b> "Bilimsel araştırmalar destekliyor."</li>
  <li><b>Alt argüman:</b> "Araştırmalar güvenilir kaynaklardan geliyor."</li>
  <li><b>Destekleyici detay:</b> "Uzman değerlendirmesi süreçlerinden geçmiş, saygın dergilerde yayımlanmış."</li>
</ol>

<h3>Argüman analizinde dikkat edilecekler</h3>
<ol class="steps">
  <li><b>İddianın netliği:</b> Savunulan görüş açık, anlaşılır ve kesin olmalı.</li>
  <li><b>Kanıtların yeterliliği:</b> Veriler hem yeterli miktarda hem de konuyla ilgili olmalı.</li>
  <li><b>Gerekçenin geçerliliği:</b> Mantıksal bağlantı sağlam ve ikna edici olmalı.</li>
  <li><b>Karşı görüşlerin değerlendirilmesi:</b> Muhalif argümanlar dikkate alınmalı ve adil ele alınmalı.</li>
</ol>

<h3>Özet</h3>
<ul>
  <li><b>Yapısal geçerlilik:</b> Argümanlar mantıksal yapıya dayanır; geçerlilik içerikten bağımsız yapısal bir kavramdır.</li>
  <li><b>Kanıt gücü:</b> Güçlü kanıtlar argümanı destekler; zayıf kanıtlar sorgulanmalıdır.</li>
  <li><b>Dengeli yaklaşım:</b> Karşı argümanlar ve mantık hataları analizde kritik rol oynar.</li>
</ul>`
  },

  {
    id: `mantik-hatalari`, no: 5, title: `Günlük Yaşamda Mantık Hataları: Ad Hominem, Yanlış Neden, Genelleme`,
    files: [`materyal/5_Hafta_Gunluk_Yasamda_Mantik_Hatalari.pdf`],
    short: `<h4>Giriş</h4>
<ul class="short-list">
<li>Mantık hataları: akıl yürütme kusurları; tarihi Antik Yunan'dan günümüze <b>safsatalar</b>; tartışmalarda, medyada ve sosyal yaşamda sık tuzaklar.</li>
<li>"Mantık hataları tartışmaları zehirler": duygusal tepkiler gerçekleri gölgelediğinde mantıklı iletişim imkânsızlaşır.</li>
</ul>
<h4>Ad hominem</h4>
<ul class="short-list">
<li>Tanım: <mark>kişinin argümanına değil, kişiliğine saldırmak</mark>; odağı konudan kişisel özelliklere kaydırır.</li>
<li>Özellikler: kişiyi hedef alma · konu dışı unsurları tartışmaya katma · karşı tarafı susturma amacı. Örnek: "Senin kıyafetin kötü, söylediklerin de doğru olamaz."</li>
<li>Güncel örnekler: politik tartışmalar (kıyafet, geçmiş, özel hayat; politika yerine kişilik) · sağlık uzmanları ("Big Pharma çıkarları var" iddiasıyla itibarsızlaştırma) · bilim insanları (iklim araştırmacılarına ideolojik suçlamalar).</li>
<li>Konudan kaçıştır; kişisel saldırıya başvurmak <b>zayıf argümanın göstergesi</b>.</li>
</ul>
<h4>Yanlış neden (post hoc)</h4>
<ul class="short-list">
<li>Tanım: iki olay arasında <mark>gerçek olmayan nedensellik</mark> kurmak; ardışık olayları neden-sonuç sanmak. Örnek: "Şapkamı takınca sınavdan yüksek not aldım, şapka şans getiriyor."</li>
<li>Tehlikeleri: gerçek nedenleri görmezden gelme · yanlış kararlar (etkisiz çözümler) · hurafe ve komplo teorilerine inanma.</li>
<li>"İlişki değil, tesadüf": zamanlama yakınlığı nedensellik anlamına gelmez.</li>
</ul>
<h4>Genelleme hataları</h4>
<ul class="short-list">
<li>Aceleci sonuç çıkarma: <mark>yetersiz örneklerden tümü hakkında hüküm</mark>. Örnek: "Bir kere kötü deneyim yaşadım, o marka hep kötüdür." Stereotip ve önyargıların temelinde bu hata yatar.</li>
<li>Sosyal etkiler: haksız yargılar (bireysel farklılık yok sayılır) · toplumsal kutuplaşma ("biz" ve "onlar", ötekileştirme) · yanlış bilgi yayılımı (medya ve sosyal medya).</li>
<li>"Her birey benzersizdir. Grup kimliği kişisel özellikleri belirlemez."</li>
</ul>
<h4>Tespit, kaçınma, sonuçlar</h4>
<ul class="short-list">
<li>Tespit: <b>içeriğe odaklanma</b> (kişiye değil) · <b>nedensellik sorgulama</b> (kanıt ara) · <b>örnekleri kontrol etme</b> (sayı ve çeşitlilik).</li>
<li>Kaçınma: kanıta dayalı değerlendirme · eleştirel düşünce · çoklu bakış açısı.</li>
<li>Sonuçları: <b>bireysel</b> (yanlış karar, çatışma, öz güven kaybı) · <b>ilişkiler</b> (iletişim kopukluğu, güven kaybı) · <b>toplumsal</b> (kutuplaşma, sosyal uyumun bozulması, toplumsal barış tehlikede).</li>
<li>Üçü de <b>bilinçli farkındalıkla</b> önlenebilir.</li>
</ul>
<blockquote>"Bilgi güçtür, ama eleştirel düşünce özgürlüktür."</blockquote>`,
    html: `
<p class="lead">Mantık hataları, akıl yürütmedeki kusurlardır; bizi yanıltır ve günlük yaşamımızı etkiler. Antik Yunan'dan günümüze <b>safsatalar</b> olarak incelenir ve tartışmalarda, medyada, sosyal yaşamda sık karşılaşılan tuzaklardır.</p>
<div class="tip"><span class="tip-label">Kısaca</span>Mantık hataları tartışmaları zehirler: duygusal tepkiler gerçekleri gölgelediğinde mantıklı iletişim imkânsız hale gelir.</div>

<h3>Ad hominem</h3>
<p><b>Tanım:</b> Kişinin <mark>argümanına değil, kişiliğine saldırmak</mark>. Bu hata tartışmanın odağını konudan kişisel özelliklere kaydırır.</p>
<ul>
  <li>Argümanı değerlendirmek yerine kişiyi hedef alma</li>
  <li>Konu dışı unsurları tartışmaya dahil etme</li>
  <li>Karşı tarafı susturma amacı güdme</li>
</ul>
<blockquote>"Senin kıyafetin kötü, söylediklerin de doğru olamaz." (klasik örnek)</blockquote>
<h4>Güncel örnekler</h4>
<div class="cols">
  <div class="box"><h4>Politik tartışmalar</h4><p>Kıyafet, geçmiş veya özel hayat üzerinden saldırılar; politika yerine kişilik tartışılır.</p></div>
  <div class="box"><h4>Sağlık uzmanlarına saldırılar</h4><p>"Big Pharma çıkarları var" gibi iddialarla uzmanların görüşleri itibarsızlaştırılır.</p></div>
  <div class="box"><h4>Bilim insanlarına suçlamalar</h4><p>İklim değişikliği araştırmacılarına ideolojik suçlamalar; kişisel çıkar iddiaları bilimsel verileri gölgeler.</p></div>
</div>
<div class="tip"><span class="tip-label">Dikkat</span>Ad hominem konudan kaçıştır: gerçek meseleyi tartışmak yerine kişisel saldırıya başvurmak, <b>zayıf argümanların göstergesidir</b>.</div>

<h3>Yanlış neden (post hoc)</h3>
<p><b>Nedensellik yanılgısı:</b> İki olay arasında <mark>gerçek olmayan bir nedensellik ilişkisi</mark> kurmak; ardışık olayları neden-sonuç ilişkisi içinde değerlendirme hatası.</p>
<blockquote>"Şapkamı takınca sınavdan yüksek not aldım, şapka şans getiriyor."</blockquote>
<h4>Tehlikeleri</h4>
<dl class="defs">
  <dt>Gerçek nedenleri görmezden gelme</dt><dd>Yüzeysel açıklamalarla yetinmek, kökteki sorunları çözmeyi engeller.</dd>
  <dt>Yanlış kararlar alma</dt><dd>Hatalı nedensellik algısı etkisiz çözümlere yönlendirir.</dd>
  <dt>Hurafe ve komplo teorilerine inanma</dt><dd>Basit açıklamalar karmaşık gerçeklerin yerine geçer.</dd>
</dl>
<div class="tip"><span class="tip-label">Kısaca</span>"Yanlış neden: ilişki değil, tesadüf." Zamanlama yakınlığı nedensellik anlamına gelmez; eleştirel analiz gerekir.</div>

<h3>Genelleme hataları</h3>
<p><b>Aceleci sonuç çıkarma:</b> <mark>Yetersiz örneklerden tümü hakkında hüküm vermek</mark>; sınırlı deneyimlerden geniş sonuçlar çıkarmaya dayanır.</p>
<blockquote>"Bir kere kötü deneyim yaşadım, o marka hep kötüdür." (tipik örnek)</blockquote>
<p>Stereotiplerin ve önyargıların temelinde bu mantık hatası yatar.</p>
<h4>Genellemenin sosyal etkileri</h4>
<div class="cols">
  <div class="box"><h4>Haksız yargılar</h4><p>İnsanlar ve gruplar hakkında adil olmayan değerlendirmeler; bireysel farklılıklar göz ardı edilir.</p></div>
  <div class="box"><h4>Toplumsal kutuplaşma</h4><p>Farklı grupları "biz" ve "onlar" diye ayırır; ötekileştirme ve gerilim yaratır.</p></div>
  <div class="box"><h4>Yanlış bilgi yayılımı</h4><p>Medyada ve sosyal medyada hızla yayılan yanlış genellemeler toplumsal algıyı çarpıtır.</p></div>
</div>
<div class="tip"><span class="tip-label">Kısaca</span>Her birey benzersizdir. Grup kimliği kişisel özellikleri belirlemez.</div>

<h3>Mantık hatalarını nasıl tespit ederiz?</h3>
<ol class="steps">
  <li><b>İçeriğe odaklanma:</b> Argümanın kişiye değil, içeriğe odaklandığından emin olun.</li>
  <li><b>Nedensellik sorgulama:</b> Neden-sonuç iddialarını sorgulayın; kanıt ve mantık arayın.</li>
  <li><b>Örnekleri kontrol etme:</b> Genellemelerde örnek sayısını ve çeşitliliğini kontrol edin.</li>
</ol>

<h3>Günlük hayatta kaçınma</h3>
<ul>
  <li><b>Kanıta dayalı değerlendirme:</b> Duygusal tepkiler yerine objektif verilerle karar verin.</li>
  <li><b>Eleştirel düşünce:</b> Her bilgiyi sorgulayan, kanıt arayan bir yaklaşım benimseyin.</li>
  <li><b>Çoklu bakış açısı:</b> Farklı görüşlere açık olun, kendi önyargılarınızı sorgulayın.</li>
</ul>

<h3>Mantık hatalarının sonuçları</h3>
<ol class="steps">
  <li><b>Bireysel düzeyde:</b> Yanlış kararlar, kişisel çatışmalar ve öz güven kayıpları.</li>
  <li><b>İlişkiler düzeyinde:</b> İletişim kopuklukları, güven kaybı, yakın ilişkilerde gerilim.</li>
  <li><b>Toplumsal düzeyde:</b> Kutuplaşmanın artması, sosyal uyumun bozulması, toplumsal barışın tehlikeye girmesi.</li>
</ol>

<h3>Özet</h3>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Hata</th><th>Ne yapar?</th><th>Korunma</th></tr></thead>
  <tbody>
    <tr><td>Ad hominem</td><td>Kişisel saldırılar gerçek konuyu gölgeler, tartışmayı saptırır</td><td>Kişisel saldırılara kapılmayın, içeriğe odaklanın</td></tr>
    <tr><td>Yanlış neden</td><td>Sahte nedensellik bağlantıları yanlış sonuçlara götürür</td><td>Neden-sonuç iddialarını sağlam kanıtlarla destekleyin</td></tr>
    <tr><td>Genelleme</td><td>Aceleci sonuçlar adalet ve gerçekliği engeller</td><td>Farklı örnekleri değerlendirin, aceleci sonuç çıkarmayın</td></tr>
  </tbody>
</table></div>
<p>Her üçü de <b>bilinçli farkındalıkla</b> önlenebilir ve sağlıklı iletişimin önünü açar.</p>
<blockquote>"Bilgi güçtür, ama eleştirel düşünce özgürlüktür."</blockquote>`
  }
],

cards: [
  // 1 · temel
  [`temel`, `Eleştirel düşünmenin üç ayağı?`, `<b>Akıl yürütme</b> (mantıklı sonuç), <b>analiz etme</b> (parçalara ayırma), <b>değerlendirme</b> (objektif kriterlerle sorgulama).`],
  [`temel`, `Kavram nedir?`, `Zihnimizde bir nesne, olay veya durumu temsil eden <b>soyut düşünce birimi</b>.`],
  [`temel`, `"Başarı" kavramı neden net tanımlanmalı?`, `Kavramlar muğlak olabilir; "başarı" kişiden kişiye değişir. Eleştirel düşünme bu <b>belirsizliği giderir</b>.`],
  [`temel`, `Önerme nedir?`, `<b>Doğru ya da yanlış olabilen</b> anlamlı bir yargı ifadesi. Örn. "Türkiye'nin başkenti Ankara'dır."`],
  [`temel`, `Basit ve bileşik önerme farkı?`, `<b>Basit:</b> tek yargı.<br><b>Bileşik:</b> "ve", "veya", "ise" bağlaçlarıyla birden fazla önerme.`],
  [`temel`, `Argüman nedir?`, `Bir veya daha fazla önermenin <b>bir sonucu desteklemek için</b> mantıklı biçimde bir araya getirilmesi.`],
  [`temel`, `Argümanın dört temel özelliği?`, `İlgililik, geçerlilik, mantıklılık, açıklık.`],
  [`temel`, `Çıkarım nedir? Türleri?`, `Önermelerden mantıklı sonuç çıkarma süreci.<br><b>Doğrudan</b> (açık, net) ve <b>dolaylı</b> (arka arkaya adımlarla).`],
  [`temel`, `Yanlış çıkarımlar neye yol açar?`, `<b>Safsata</b> ve hatalı düşünceye.`],
  [`temel`, `Eleştirel düşünme sürecinin 5 adımı?`, `Konu belirleme → inceleme → değerlendirme → çerçeve oluşturma → sonuç sunumu.`],
  [`temel`, `Eleştirel düşünmenin dört becerisi?`, `<b>Ayıklamak</b>, <b>bağlantılandırmak</b>, <b>çözümlemek</b>, <b>eleştirmek</b>.`],

  // 2 · onem
  [`onem`, `Eleştirel düşünmenin "bilgiyi sorgulamak ve anlamak" boyutları?`, `Analiz etmek (ezberlemek değil), önyargıları fark etmek, kendini sorgulamak.`],
  [`onem`, `2. haftadaki dört temel beceri?`, `Argüman analizi, kanıt değerlendirme, perspektif çeşitliliği, mantıklı sonuç.`],
  [`onem`, `"Bilinçli seçimler"in üç unsuru?`, `Objektif değerlendirme, uzun vadeli bakış açısı, risk analizi.`],
  [`onem`, `"Yaratıcı çözümler"in üç unsuru?`, `Problem tanımlama, alternatif üretme, sonuç öngörme.`],
  [`onem`, `İnternette bilgi değerlendirmenin üç başlığı?`, `<b>Kaynak güvenilirliği</b>, <b>içerik ayrımı</b> (sponsorlu içerik/reklam), <b>manipülasyon tespiti</b>.`],
  [`onem`, `Kaynak güvenilirliği için sorulan üç soru?`, `Alan uzmanı mı? Güncel bilgi mi? Tarafsız yaklaşım var mı?`],
  [`onem`, `İş yerinde sorun çözmenin adımları?`, `Problem tanımlama → alternatif üretme → optimal karar (maliyet, zaman, kaynak).`],
  [`onem`, `Eleştirel düşünme alışkanlığı kazanmanın 3 adımı?`, `1 Merak ve açık fikirlilik · 2 Öz eleştiri · 3 Çoklu kaynak.`],
  [`onem`, `Argüman haritası nedir?`, `İddiaları, kanıtları ve sonuçları <b>görsel olarak organize etme</b> tekniği.`],

  // 3 · akil-yurutme
  [`akil-yurutme`, `Akıl yürütme nedir?`, `<b>Doğru kabul edilen yargılardan yeni sonuçlar çıkarma</b> süreci; düşüncenin sistemli biçimi.`],
  [`akil-yurutme`, `Akıl yürütmenin üç ana yöntemi?`, `Tümdengelim, tümevarım, analoji.`],
  [`akil-yurutme`, `Tümdengelim (dedüksiyon)?`, `<b>Genelden özele</b>; doğru öncüllerden <b>mutlak kesin</b> sonuç.`],
  [`akil-yurutme`, `Sokrates kıyasında ana öncül, alt öncül, sonuç?`, `Ana: Bütün insanlar ölümlüdür.<br>Alt: Sokrates insandır.<br>Sonuç: Sokrates ölümlüdür.`],
  [`akil-yurutme`, `"Çöp girer, çöp çıkar" prensibi?`, `Öncüller yanlışsa mantıksal süreç doğru olsa bile <b>sonuç hatalı</b> olur.`],
  [`akil-yurutme`, `Tümevarım (indüksiyon)?`, `Özgül gözlemler → örüntü → genelleme; sonuç <b>olasılıksal</b>.`],
  [`akil-yurutme`, `Tümevarımın bilimdeki adımları?`, `Sistematik gözlem → hipotez → deney ve test → teori geliştirme.`],
  [`akil-yurutme`, `Tümevarımın hem gücü hem sınırı nedir?`, `Bilimsel ilerlemenin motorudur ama <b>mutlak kesinlik sunmaz</b>.`],
  [`akil-yurutme`, `Analojinin sonucu nasıldır?`, `<b>Varsayımsal</b>: kesin değil, makul varsayım. Hem tümdengelim hem tümevarım özelliklerini birleştirir (karma).`],
  [`akil-yurutme`, `Dünya–Mars analojisi neden yanıltabilir?`, `Mars'ın atmosferi çok ince, sıcaklık -80°C, radyasyon çok yüksek: <b>yüzeysel benzerlik derin farkları gizler</b>.`],
  [`akil-yurutme`, `"Bilgisayar virüsü gibi insan virüsü de yayılır." Hangi akıl yürütme?`, `<b>Analoji</b> (siber güvenlik ve halk sağlığı politikaları).`],

  // 4 · arguman
  [`arguman`, `İddia (claim) nedir?`, `Doğruluğu savunulan <b>ana ifade</b>; argümanın kalbi.`],
  [`arguman`, `Gerekçe (reason) nedir?`, `Kanıt ile iddia arasındaki <b>mantıksal köprü</b>.`],
  [`arguman`, `Destek (support) nedir?`, `Gerekçenin geçerliliğini güçlendiren <b>ek kanıt ve açıklamalar</b>.`],
  [`arguman`, `Toulmin modelinin bileşenleri?`, `İddia, kanıt, gerekçe, destek, karşıt görüş, niteleyici.`],
  [`arguman`, `"Ben Britanyalıyım" örneğinde gerekçe ve karşıt görüş?`, `Gerekçe: "Bermuda'da doğanlar Britanyalıdır."<br>Karşıt görüş: "Ancak casus olmadığım sürece."`],
  [`arguman`, `Toulmin'de niteleyici örneği?`, `"Muhtemelen", "kesinlikle", "genellikle sağlıklıdır" gibi ifadeler.`],
  [`arguman`, `Geçerli argüman?`, `Önermeler doğruysa <b>sonuç mutlak doğrudur</b> (penguen örneği).`],
  [`arguman`, `Geçersiz argüman?`, `Önermeler doğru olsa bile <b>sonuç mutlak doğru değildir</b> (Alara örneği).`],
  [`arguman`, `Argüman değerlendirmenin üç boyutu?`, `İçerik, form, bağlam.`],
  [`arguman`, `Argümanın temel formu (sembolik)?`, `A ise B. A. O halde B.`],
  [`arguman`, `Kanıtın gücünü belirleyen üç ölçüt?`, `Miktar ve kalite · güncellik ve alaka · uyum ve yeterlilik.`],
  [`arguman`, `Çürütme (rebuttal)?`, `Karşı argümanların <b>sınırlarını göstererek</b> kendi pozisyonunu güçlendirme.`],
  [`arguman`, `Straw man hatası?`, `Karşı argümanı <b>çarpıtarak</b> daha kolay saldırılır hale getirmek.`],
  [`arguman`, `Bandwagon hatası?`, `<b>Popülerliği doğruluk sanmak</b>: "Herkes bunu yapıyor, o yüzden doğru."`],

  // 5 · mantik-hatalari
  [`mantik-hatalari`, `Ad hominem nedir?`, `Kişinin <b>argümanına değil kişiliğine</b> saldırmak.`],
  [`mantik-hatalari`, `Ad hominem'in üç özelliği?`, `Kişiyi hedef alma, konu dışı unsurları dahil etme, karşı tarafı susturma amacı.`],
  [`mantik-hatalari`, `"Big Pharma çıkarları var" diyerek uzmanı itibarsızlaştırmak hangi hata?`, `<b>Ad hominem</b> (sağlık uzmanlarına saldırı örneği).`],
  [`mantik-hatalari`, `Yanlış neden (post hoc)?`, `İki olay arasında <b>gerçek olmayan nedensellik</b> kurmak; ardışıklığı neden-sonuç sanmak.`],
  [`mantik-hatalari`, `"Şapkamı takınca yüksek not aldım" hangi hata?`, `<b>Yanlış neden (post hoc)</b>.`],
  [`mantik-hatalari`, `Yanlış nedenin üç tehlikesi?`, `Gerçek nedenleri görmezden gelme, yanlış kararlar, hurafe ve komplo teorilerine inanma.`],
  [`mantik-hatalari`, `Genelleme hatası?`, `<b>Yetersiz örneklerden tümü hakkında hüküm</b> vermek (aceleci sonuç).`],
  [`mantik-hatalari`, `Genellemenin üç sosyal etkisi?`, `Haksız yargılar, toplumsal kutuplaşma ("biz/onlar"), yanlış bilgi yayılımı.`],
  [`mantik-hatalari`, `Mantık hatalarını tespit etmenin üç yolu?`, `İçeriğe odaklanma, nedensellik sorgulama, örnekleri (sayı ve çeşitlilik) kontrol etme.`],
  [`mantik-hatalari`, `Mantık hatalarının sonuçları hangi düzeylerde görülür?`, `Bireysel, ilişkiler, toplumsal.`]
],

questions: [
  // 1 · temel
  { u: `temel`, q: `"Zihnimizde bir nesne, olay veya durumu temsil eden soyut düşünce birimi" neyin tanımıdır?`,
    o: [`Kavram`, `Önerme`, `Argüman`, `Çıkarım`],
    e: `Kavram, zihinde bir nesne, olay veya durumu temsil eden soyut düşünce birimidir.` },
  { u: `temel`, q: `Doğru ya da yanlış olabilen anlamlı yargı ifadesine ne denir?`,
    o: [`Önerme`, `Kavram`, `Gerekçe`, `Niteleyici`],
    e: `Önerme doğru ya da yanlış olabilen anlamlı bir yargı ifadesidir ve argümanların yapı taşıdır.` },
  { u: `temel`, q: `"Ve", "veya", "ise" gibi bağlaçlarla birden fazla önermenin bağlanmasıyla oluşan önerme hangisidir?`,
    o: [`Bileşik önerme`, `Basit önerme`, `Doğrudan çıkarım`, `Dolaylı çıkarım`],
    e: `Basit önerme tek yargı içerir; bileşik önerme bağlaçlarla birden fazla önermeyi bağlar.` },
  { u: `temel`, q: `"Süt içmek sağlıklıdır çünkü kalsiyum içerir." ifadesi sunumda neye örnek verilir?`,
    o: [`Argüman`, `Kavram`, `Basit önerme`, `Safsata`],
    e: `Bir sonucu (süt sağlıklıdır) bir önermeyle (kalsiyum içerir) destekleyen bu ifade argüman örneğidir.` },
  { u: `temel`, q: `Aşağıdakilerden hangisi sunumda argümanın temel özellikleri arasında sayılmaz?`,
    o: [`Popülerlik`, `İlgililik`, `Mantıklılık`, `Açıklık`],
    e: `Argümanın temel özellikleri ilgililik, geçerlilik, mantıklılık ve açıklıktır.` },
  { u: `temel`, q: `Arka arkaya mantıksal adımlarla sonuca ulaşılan çıkarım türü hangisidir?`,
    o: [`Dolaylı çıkarım`, `Doğrudan çıkarım`, `Analoji`, `Genelleme`],
    e: `Doğrudan çıkarımda önermelerden açık ve net sonuç çıkarılır; dolaylı çıkarımda arka arkaya adımlarla ulaşılır.` },
  { u: `temel`, q: `Eleştirel düşünme sürecinin ilk adımı hangisidir?`,
    o: [`Konu belirleme`, `Değerlendirme`, `Çerçeve oluşturma`, `Sonuç sunumu`],
    e: `Süreç: konu belirleme → inceleme → değerlendirme → çerçeve oluşturma → sonuç sunumu.` },
  { u: `temel`, q: `"Karmaşık konuları alt başlıklara ayırmak" hangi eleştirel düşünme becerisidir?`,
    o: [`Çözümlemek`, `Ayıklamak`, `Bağlantılandırmak`, `Eleştirmek`],
    e: `Ayıklamak geçerli önermeleri seçmek, bağlantılandırmak ilişkilendirmek, çözümlemek alt başlıklara ayırmak, eleştirmek yargıya varmaktır.` },

  // 2 · onem
  { u: `onem`, q: `2. haftaya göre eleştirel düşünme bilgiyle nasıl bir ilişki kurar?`,
    o: [`Bilgiyi ezberlemek yerine derinlemesine analiz eder ve gerçek anlamını kavrar`, `Bilgiyi olduğu gibi kabul eder`, `Yalnızca uzman görüşlerini aktarır`, `Duygulara dayanarak karar verir`],
    e: `Sunumda eleştirel düşünme "bilgiyi ezberlemek değil, derinlemesine analiz etmek ve gerçek anlamını kavramak" olarak anlatılır.` },
  { u: `onem`, q: `"Farklı bakış açılarını anlayarak önyargıları tespit etmek ve çok boyutlu düşünmek" hangi beceridir?`,
    o: [`Perspektif çeşitliliği`, `Argüman analizi`, `Kanıt değerlendirme`, `Mantıklı sonuç`],
    e: `Dört temel beceriden perspektif çeşitliliği, farklı bakış açılarını anlamayı ve çok boyutlu düşünmeyi ifade eder.` },
  { u: `onem`, q: `"Risk analizi" sunumda hangi başlığın altında yer alır?`,
    o: [`Bilinçli seçimler`, `Yaratıcı çözümler`, `Akıllı tüketici`, `Toplumsal bilinç`],
    e: `Bilinçli seçimler: objektif değerlendirme, uzun vadeli bakış açısı, risk analizi.` },
  { u: `onem`, q: `Objektif bilgiyi sponsorlu içerik ve reklamlardan ayırt etmek, internette bilgi değerlendirmenin hangi başlığıdır?`,
    o: [`İçerik ayrımı`, `Kaynak güvenilirliği`, `Manipülasyon tespiti`, `Bağımsız düşünme`],
    e: `İnternette bilgi değerlendirme: kaynak güvenilirliği, içerik ayrımı, manipülasyon tespiti.` },
  { u: `onem`, q: `Sağlık kararlarında "ikinci görüş almanın önemini kavramak" hangi başlıkta geçer?`,
    o: [`Tıbbi tavsiyeler`, `Diyet trendleri`, `Yaşam tarzı`, `Analitik yaklaşım`],
    e: `Tıbbi tavsiyeler: doktor önerilerini anlamak, alternatif tedavileri araştırmak ve ikinci görüş almanın önemini kavramak.` },
  { u: `onem`, q: `İş yerinde sorun çözmede "sorunun temel nedenini belirlemek ve yüzeysel belirtilerle karıştırmamak" hangi adımdır?`,
    o: [`Problem tanımlama`, `Alternatif üretme`, `Optimal karar`, `Sonuç sunumu`],
    e: `Adımlar: problem tanımlama → alternatif üretme → optimal karar.` },
  { u: `onem`, q: `Mucizevi kilo verme yöntemlerini ve komplo teorilerini tespit etmek sunumda hangi konuya örnektir?`,
    o: [`Propaganda ve yanlış bilgiyle mücadele`, `Akıllı tüketici olmak`, `İş yerinde sorun çözme`, `Yaşam boyu öğrenme`],
    e: `Propaganda ve yanlış bilgiyle mücadele başlığındaki örnek: sahte sağlık ürünü reklamları, mucizevi kilo verme yöntemleri, komplo teorileri.` },
  { u: `onem`, q: `Hangisi eleştirel düşünme alışkanlığı kazanmanın sunumdaki üç adımından biri değildir?`,
    o: [`Tek ve güvenilir bir kaynağa bağlı kalmak`, `Merak ve açık fikirlilik`, `Öz eleştiri`, `Çoklu kaynak`],
    e: `Adımlar merak ve açık fikirlilik, öz eleştiri ve çoklu kaynaktır; tek kaynağa bağlı kalmak bunun tersidir.` },

  // 3 · akil-yurutme
  { u: `akil-yurutme`, q: `"Doğru kabul edilen yargılardan yeni sonuçlar çıkarma süreci" neyin tanımıdır?`,
    o: [`Akıl yürütme`, `Analoji`, `Önerme`, `Genelleme`],
    e: `Akıl yürütme, doğru kabul edilen yargılardan yeni sonuçlar çıkarma sürecidir.` },
  { u: `akil-yurutme`, q: `Genelden özele giden ve doğru öncüllerden mutlak kesin sonuca ulaşan yöntem hangisidir?`,
    o: [`Tümdengelim`, `Tümevarım`, `Analoji`, `Genelleme`],
    e: `Tümdengelim (dedüksiyon) genelden özele gider ve doğru öncüllerden kesin sonuç verir.` },
  { u: `akil-yurutme`, q: `Sokrates kıyasında "Sokrates insandır." önermesi nedir?`,
    o: [`Alt öncül (minor premise)`, `Ana öncül (major premise)`, `Sonuç (conclusion)`, `Gerekçe`],
    e: `Ana öncül: Bütün insanlar ölümlüdür; alt öncül: Sokrates insandır; sonuç: Sokrates ölümlüdür.` },
  { u: `akil-yurutme`, q: `"Çöp girer, çöp çıkar" prensibi neyi anlatır?`,
    o: [`Öncüller yanlışsa mantıksal süreç doğru olsa bile sonuç hatalı olur`, `Tümevarımın sonuçları her zaman kesindir`, `Analoji kesin kanıt sunar`, `Doğru öncüllerden her zaman doğru sonuç çıkar`],
    e: `Tümdengelimde başlangıç öncülleri yanlışsa süreç doğru olsa bile sonuç hatalıdır.` },
  { u: `akil-yurutme`, q: `"Tüm kuşlar uçar" genellemesi hangi akıl yürütmenin olasılıksal sonucudur?`,
    o: [`Tümevarım`, `Tümdengelim`, `Analoji`, `Ad hominem`],
    e: `Tekil kuş gözlemlerinden genellemeye varmak tümevarımdır; sonuç olasılıksaldır.` },
  { u: `akil-yurutme`, q: `Sunuma göre tümevarımın hem gücü hem sınırı nedir?`,
    o: [`Bilimsel ilerlemenin motoru olması ama mutlak kesinlik sunmaması`, `Matematiksel ispatların kökü olması`, `Yalnızca benzerliklere dayanması`, `Her zaman kesin sonuç vermesi`],
    e: `Tümevarım bilimsel ilerlemenin motorudur ancak mutlak kesinlik sunmaz.` },
  { u: `akil-yurutme`, q: `Hem tümdengelim hem tümevarım özelliklerini birleştiren "karma yaklaşım" hangisidir?`,
    o: [`Analoji`, `Kıyas`, `Hipotez`, `Doğrudan çıkarım`],
    e: `Analoji bilinen ile bilinmeyen arasında köprü kurar ve iki yöntemin özelliklerini birleştirir.` },
  { u: `akil-yurutme`, q: `Dünya–Mars analojisinin sınırlılığını gösteren hangisidir?`,
    o: [`Yüzeysel benzerliklerin derin farkları (ince atmosfer, -80°C, yüksek radyasyon) gizlemesi`, `Mars'ta kesin olarak canlı bulunması`, `Analojinin kesin kanıt sunması`, `Dünya ile Mars'ın hiçbir benzerliğinin olmaması`],
    e: `Analoji kesin kanıt sunmaz; Mars'ın çok ince atmosferi, -80°C sıcaklığı ve yüksek radyasyonu hayati farklardır.` },
  { u: `akil-yurutme`, q: `"Bugün yağmur yağdı, dün de yağdı, bu hafta hep yağmur yağacak." hangi akıl yürütme örneğidir?`,
    o: [`Tümevarım`, `Tümdengelim`, `Analoji`, `Yanlış neden`],
    e: `Sunumda bu cümle tümevarım örneğidir (hava durumu tahmini, günlük planlama).` },
  { u: `akil-yurutme`, q: `Akıl yürütme türlerinin sonuç nitelikleri hangi seçenekte doğru eşleşmiştir?`,
    o: [`Tümdengelim kesin · tümevarım olasılıksal · analoji varsayımsal`, `Tümdengelim olasılıksal · tümevarım kesin · analoji varsayımsal`, `Tümdengelim varsayımsal · tümevarım kesin · analoji olasılıksal`, `Üçü de kesin sonuç verir`],
    e: `Tümdengelim kesin, tümevarım olasılıksal, analoji varsayımsal sonuç verir.` },

  // 4 · arguman
  { u: `arguman`, q: `Kanıt ile iddia arasındaki mantıksal köprüye ne denir?`,
    o: [`Gerekçe (reason)`, `Destek (support)`, `Niteleyici`, `Karşıt görüş`],
    e: `Gerekçe, kanıtın iddiayı neden desteklediğini açıklayan mantıksal köprüdür.` },
  { u: `arguman`, q: `Toulmin örneğinde "Bermuda'da doğdum." hangi bileşendir?`,
    o: [`Kanıt`, `İddia`, `Gerekçe`, `Destek`],
    e: `İddia: Ben Britanyalıyım · kanıt: Bermuda'da doğdum · gerekçe: Bermuda'da doğanlar Britanyalıdır.` },
  { u: `arguman`, q: `Toulmin modelinde "Ancak casus olmadığım sürece." ifadesi hangi bileşendir?`,
    o: [`Karşıt görüş`, `Niteleyici`, `Destek`, `Kanıt`],
    e: `Karşıt görüş iddianın geçerli olmadığı durumu belirtir; "muhtemelen, kesinlikle" gibi ifadeler ise niteleyicidir.` },
  { u: `arguman`, q: `"Önermeler doğruysa sonuç mutlak doğrudur" ifadesi hangi argüman için geçerlidir?`,
    o: [`Geçerli argüman`, `Geçersiz argüman`, `Döngüsel argüman`, `Analojik argüman`],
    e: `Geçerli argümanda öncüllerden sonuca yol mantıksal zorunlulukla çizilir.` },
  { u: `arguman`, q: `"Alara çok arkadaşa sahiptir, o halde çok arkadaş canlısıdır." argümanı neden geçersizdir?`,
    o: [`Önermeler doğru olsa bile sonuç mutlak doğru değildir`, `Önermelerden biri bileşik önermedir`, `Argümanda iddia yoktur`, `Kişiye saldırı içerir`],
    e: `Sunumda bu örnek geçersiz argümandır: sonuç kanıtlanmamıştır.` },
  { u: `arguman`, q: `Argüman değerlendirmesinde "önermeler ve sonuç arasındaki mantıksal ilişkinin yapısı" hangi boyuttur?`,
    o: [`Form`, `İçerik`, `Bağlam`, `Destek`],
    e: `İçerik önermelerin doğruluk derecesi, form mantıksal ilişkinin yapısı, bağlam ise durum ve koşullardır.` },
  { u: `arguman`, q: `"Eğer yağmur yağarsa ıslanırım. Yağmur yağıyor. O halde ıslanacağım." argümanının sembolik formu hangisidir?`,
    o: [`A ise B; A; o halde B`, `A ise B; B; o halde A`, `A veya B; A değil; o halde B değil`, `A ve B; o halde A`],
    e: `Sunumdaki temel form: If A then B / A / Therefore B.` },
  { u: `arguman`, q: `Hangisi sunumda kanıtın gücünü belirleyen ölçütlerden biri değildir?`,
    o: [`Kanıtı sunan kişinin popülerliği`, `Miktar ve kalite`, `Güncellik ve alaka`, `Uyum ve yeterlilik`],
    e: `Kanıtın gücü: miktar ve kalite, güncellik ve alaka, uyum ve yeterlilik.` },
  { u: `arguman`, q: `Karşı argümanların sınırlarını göstererek kendi pozisyonunu güçlendirmeye ne denir?`,
    o: [`Çürütme (rebuttal)`, `Niteleyici`, `Straw man`, `Zincirleme`],
    e: `Çürütme (rebuttal), karşı argümanların sınırlarını göstererek pozisyonu güçlendirme sanatıdır.` },
  { u: `arguman`, q: `Karşı argümanı çarpıtarak daha kolay saldırılır hale getirme hatası hangisidir?`,
    o: [`Straw man`, `Ad hominem`, `Hasty generalization`, `Bandwagon`],
    e: `Straw man, karşı argümanı çarpıtıp kolayca saldırılabilir hale getirmektir.` },
  { u: `arguman`, q: `"Herkes bunu yapıyor, o yüzden doğru." hangi mantık hatasıdır?`,
    o: [`Bandwagon`, `Ad hominem`, `Straw man`, `Nedensellik hatası`],
    e: `Bandwagon hatası popülerliği doğruluk sanmaktır.` },
  { u: `arguman`, q: `Korelasyonu nedensellik sanma yanılgısı sunumda nasıl adlandırılır?`,
    o: [`Nedensellik hatası`, `Hasty generalization`, `Straw man`, `Döngüsel mantık`],
    e: `Nedensellik hatası: korelasyonu nedensellik sanma yanılgısı.` },

  // 5 · mantik-hatalari
  { u: `mantik-hatalari`, q: `"Senin kıyafetin kötü, söylediklerin de doğru olamaz." hangi mantık hatasıdır?`,
    o: [`Ad hominem`, `Yanlış neden`, `Genelleme`, `Bandwagon`],
    e: `Kişinin argümanına değil kişiliğine saldırmak ad hominem'dir.` },
  { u: `mantik-hatalari`, q: `Sunuma göre ad hominem'e başvurmak neyin göstergesidir?`,
    o: [`Zayıf argümanların`, `Güçlü kanıtların`, `Açık fikirliliğin`, `Doğru genellemenin`],
    e: `Gerçek meseleyi tartışmak yerine kişisel saldırıya başvurmak zayıf argümanların göstergesidir.` },
  { u: `mantik-hatalari`, q: `"Şapkamı takınca sınavdan yüksek not aldım, şapka şans getiriyor." hangi hatadır?`,
    o: [`Yanlış neden (post hoc)`, `Ad hominem`, `Aceleci genelleme`, `Straw man`],
    e: `Ardışık iki olay arasında gerçek olmayan nedensellik kurmak yanlış neden (post hoc) hatasıdır.` },
  { u: `mantik-hatalari`, q: `Hangisi sunumda yanlış nedenin tehlikeleri arasında sayılmaz?`,
    o: [`Örnek sayısını ve çeşitliliğini artırmak`, `Gerçek nedenleri görmezden gelmek`, `Yanlış kararlar almak`, `Hurafe ve komplo teorilerine inanmak`],
    e: `Tehlikeler: gerçek nedenleri görmezden gelme, yanlış kararlar, hurafe ve komplo teorilerine inanma.` },
  { u: `mantik-hatalari`, q: `"Bir kere kötü deneyim yaşadım, o marka hep kötüdür." hangi mantık hatasıdır?`,
    o: [`Genelleme (aceleci sonuç çıkarma)`, `Yanlış neden`, `Ad hominem`, `Döngüsel mantık`],
    e: `Yetersiz örnekten tümü hakkında hüküm vermek genelleme hatasıdır.` },
  { u: `mantik-hatalari`, q: `Stereotiplerin ve önyargıların temelinde hangi mantık hatası yatar?`,
    o: [`Genelleme hatası`, `Yanlış neden`, `Ad hominem`, `Straw man`],
    e: `Sunumda stereotip ve önyargıların temelinde genelleme hatasının yattığı belirtilir.` },
  { u: `mantik-hatalari`, q: `Farklı grupları "biz" ve "onlar" diye ayırmak genellemenin hangi sosyal etkisidir?`,
    o: [`Toplumsal kutuplaşma`, `Haksız yargılar`, `Yanlış bilgi yayılımı`, `Öz güven kaybı`],
    e: `Toplumsal kutuplaşma: grupları "biz" ve "onlar" diye ayırır, ötekileştirme ve gerilim yaratır.` },
  { u: `mantik-hatalari`, q: `Genelleme hatasını tespit etmek için ne yapılmalıdır?`,
    o: [`Örnek sayısı ve çeşitliliği kontrol edilmeli`, `Yalnızca kişinin karakterine bakılmalı`, `Olayların sırasına güvenilmeli`, `En popüler görüş benimsenmeli`],
    e: `Tespit: içeriğe odaklanma, nedensellik sorgulama, genellemelerde örnek sayısını ve çeşitliliğini kontrol etme.` },
  { u: `mantik-hatalari`, q: `"Kutuplaşmanın artması, sosyal uyumun bozulması" mantık hatalarının hangi düzeydeki sonucudur?`,
    o: [`Toplumsal düzey`, `Bireysel düzey`, `İlişkiler düzeyi`, `Kurumsal düzey`],
    e: `Sonuçlar bireysel, ilişkiler ve toplumsal düzeyde ele alınır; kutuplaşma ve sosyal uyumun bozulması toplumsal düzeydir.` }
]
});
