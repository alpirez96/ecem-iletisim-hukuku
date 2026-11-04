// Reklamda Yaratıcılık — "Ders Çalışma Kitabı" (Word) ve 1, 1.1, 1.2, 1.3 sunumlarından (PDF) derlenen içerik.
// Sunumlar görsel slaytlardır; slayt metinleri görsellerden okunmuştur.
// Her şey ders materyallerine dayanır; materyallerde olmayan bilgi eklenmemiştir.
// Alanların açıklaması için README.md > "Yeni ders eklemek".

(window.DERSLER = window.DERSLER || []).push({
  id: `reklamda-yaraticilik`,
  title: `Reklamda Yaratıcılık`,
  exam: `Vize`,
  hue: 255,
  unitWord: `Bölüm`,
  description: `Özgünlük ve uygunluk, kategori kodları, Big Idea; kompozisyon, görsel hiyerarşi ve Gestalt; şekillerin dili; göstergebilim (gösteren/gösterilen, ikon-indeks-simge, mit); görsel retorik ve reklam otopsisi.`,
  source: `Reklamda Yaratıcılık ders çalışma kitabı ve 1, 1.1, 1.2, 1.3 sunumları`,

materials: [
  { title: `Ders Çalışma Kitabı (6 bölüm + sözlük + vize soruları)`, kind: `Word belgesi`, size: `45 KB`, file: `materyal/Reklamda_Yaraticilik_Ders_Calisma_Kitabi.docx` },
  { title: `1. Reklamda Yaratıcılık / Gözümüz Bizi Kandırıyor`, kind: `Sunum (PDF) · 36 sayfa`, size: `9,3 MB`, file: `materyal/1_Reklamda_Yaraticilik.pdf` },
  { title: `1.1 Görsel İletişimin Anatomisi`, kind: `Sunum (PDF) · 15 sayfa`, size: `2,6 MB`, file: `materyal/1_1_Gorsel_Iletisimin_Anatomisi.pdf` },
  { title: `1.2 Gördüğün Şey O Değil (Göstergebilim)`, kind: `Sunum (PDF) · 13 sayfa`, size: `2,2 MB`, file: `materyal/1_2_Gordugun_Sey_O_Degil_Gostergebilim.pdf` },
  { title: `1.3 Reklamın Anatomisi: Anlamı Sökmek ve Yeniden Kurmak`, kind: `Sunum (PDF) · 15 sayfa`, size: `4,2 MB`, file: `materyal/1_3_Reklamin_Anatomisi.pdf` }
],

onePager: [
  { u: `yaraticilik`, items: [
      `<mark>Yaratıcılık = Özgünlük × Uygunluk</mark>. Özgün ama ilgisiz → sanat/kafa karıştırıcı; uygun ama sıradan → kategori kodu/sıkıcı.`,
      `Kategori kodu (fincan, çekirdek, buhar) tanıtır; yaratıcı fikir beklenmedik ama anlamlı ilişki kurar.`,
      `<b>Problem → İçgörü → Strateji → Big Idea → Execution</b>. Big Idea reklam değildir; reklam onun görünür hâlidir.`,
      `Emniyet kemeri: "Kaza evinizden birkaç metre uzakta da olabilir." Execution değişir, fikir aynı kalır.`
  ] },
  { u: `kompozisyon`, items: [
      `Görmek ≠ algılamak. Kompozisyon: neyi, hangi sırayla, hangi ilişkilerle göreceğimizin düzeni.`,
      `Odak: büyüklük, renk, kontrast, ışık, izolasyon, konum, yüz, yön. <b>Görsel hiyerarşi = bakış sırasının tasarımı</b>.`,
      `Negatif alan aktif tasarım unsuru · asimetri ≠ dengesiz.`,
      `Gestalt: şekil-zemin, yakınlık, benzerlik, tamamlama, devamlılık.`
  ] },
  { u: `sekiller`, items: [
      `Şeklin evrensel tek anlamı yok; bağlam kraldır. Daire bütünlük · kare güven, düzen · üçgen yön (yukarı güç, sağa hareket, ters gerilim).`,
      `Yatay sakinlik · dikey güç · <b>diyagonal hareket, hız</b> · eğri zarafet · keskin tehlike · spiral dönüşüm.`,
      `Grid görünmez iskelet: "Kuralı bilmeden kuralı bozmak yaratıcılık değil, tesadüftür."`
  ] },
  { u: `gostergebilim`, items: [
      `Gösterge = başka şeyi temsil eden. <b>Gösteren</b> fiziksel biçim (kırmızı gül) · <b>gösterilen</b> kavram (aşk).`,
      `Düz anlam "ne görüyorum?" · yan anlam "bana ne anlatıyor?" (beyaz elbise → saflık, düğün).`,
      `Peirce: <mark>ikon benzerlik · indeks neden/iz (duman → ateş) · simge uzlaşı (bayrak)</mark>.`,
      `Barthes mit: kültürel düşünceyi doğalmış gibi sunmak ("Başarılı insan böyle yaşar").`
  ] },
  { u: `retorik`, items: [
      `Metafor benzerlik/anlam transferi (otomobil = panter) · metonimi yakın ilişki (taç → kral).`,
      `Benzetme açık "gibi" · analoji işleyiş benzerliği (siber güvenlik = ev alarmı).`,
      `Juxtaposition yan yana (hamburger + dambıl) · substitution yerine koyma (ampul → fincan) · fusion tek hibrit nesne · visual pun çift anlam (LIGHT).`,
      `Kavramsal sıçrama: özellik → fayda → çağrışım → yeni kavram → görsel fikir.`
  ] },
  { u: `otopsi`, items: [
      `12 adım: düz anlam → hiyerarşi → kompozisyon → Gestalt → görsel dil → gösteren/gösterilen → yan anlam → gösterge türü → mit → retorik → sıçrama → <b>marka bağlantısı</b>.`,
      `"Kötü reklam söyler. İyi reklam gösterir. Yaratıcı reklam anlamı izleyicinin kurmasını sağlar."`
  ] }
],

units: [
  {
    id: `yaraticilik`, no: 1, title: `Yaratıcılık Nedir? Yaratıcı Fikir Nasıl Kurulur?`,
    files: [`materyal/Reklamda_Yaraticilik_Ders_Calisma_Kitabi.docx`, `materyal/1_Reklamda_Yaraticilik.pdf`],
    short: `<h4>Özgünlük ve uygunluk</h4>
<ul class="short-list">
<li>Reklamda yaratıcılık yalnızca güzel, şaşırtıcı, komik ya da alışılmadık iş değildir; çok estetik bir reklam markanın <b>iletişim problemini</b> çözmeyebilir. "Güzel, değişik, komik, dikkat çekiyor…" yanıtlarının hiçbiri tek başına yaratıcılığı açıklamaz.</li>
<li>İki boyut birlikte: <mark>Yaratıcılık = Özgünlük × Uygunluk</mark>. <b>Özgünlük:</b> alışılmış çözümlerden ayrılma · <b>uygunluk:</b> marka, ürün, hedef kitle ve iletişim problemiyle anlamlı ilişki (sunumda dört mercek: marka, iletişim problemi, hedef kitle, vaat).</li>
<li>Teşhis matrisi: özgün + uygun = <b>gerçek yaratıcılık</b> · özgün + uygun değil = <b>sanat / kafa karıştırıcı</b> · özgün değil + uygun = <b>kategori kodu / sıkıcı</b> · ikisi de düşük = <b>gürültü</b>.</li>
<li>"Yaratıcılık, beynin kolaya kaçma alışkanlığını kırmaktır."</li>
</ul>
<h4>Kategori kodları</h4>
<ul class="short-list">
<li>Kategoride tekrarla oluşmuş tanıdık görsel/sözel unsurlar; kahvede <b>fincan, çekirdek, buhar, sabah, kahverengi tonlar, çalışan insan</b>.</li>
<li>Reklamı hızlı anlamayı sağlar ama tek başına yaratıcı fikir değildir: <mark>kategori kodu ürünü tanıtır; yaratıcı fikir beklenmedik ama anlamlı yeni ilişki kurar</mark> (Kategori Kodu ≠ Yaratıcı Fikir).</li>
</ul>
<h4>Yaratıcı fikrin yapısı</h4>
<ul class="short-list">
<li><mark>Problem → İçgörü → Strateji → Big Idea → Creative Execution</mark>. Görünmez katman: problem, içgörü, strateji · görünür katman: Big Idea (stratejinin kalbi), execution.</li>
<li><b>Problem:</b> çözülmesi gereken iletişim sorunu · <b>içgörü (insight):</b> davranışın altındaki insan gerçeği (çoğu zaman ürün değil insan hakkında) · <b>strateji:</b> çözüm rotası · <b>Big Idea:</b> stratejinin yaratıcı düşünceye dönüşmüş hâli · <b>execution:</b> görünür, duyulur, deneyimlenir hâli.</li>
<li>Emniyet kemeri: insanlar kısa mesafede takmıyor → "bana bir şey olmaz" → kazanın mesafeyle ilgisi olmadığını hissettir → <b>"Kaza evinizden birkaç metre uzakta da olabilir."</b> → ev önü manzarasıyla kemeri birleştiren görsel.</li>
<li>Diğer vakalar: çikolata barı ("Açken sen sen değilsin"; içgörü: açlık ruh hâlini bozar) · spor giyim ("Kendi büyüklüğünü bul"; büyüklük şampiyonlara özel değil).</li>
<li><b>Big Idea reklam değildir; reklam onun görünür hâlidir.</b> Altın kural: execution (görsel, metin, mecra) değişir, fikir ve içgörü sabit; afiş, video, sosyal medya, açıkhava, dijital deneyim.</li>
<li>Kampanya yönetimi: tek mesajı mecralarda tutarlı yaymak · yaratıcı inşa: o fikri yaratıcı olarak kurmak. Geleneksel kampanya aynı mesajı tekrarlar; <b>transmedya</b> aynı mitolojinin farklı yüzlerini gösterir: güçlü fikir bir evrene dönüşür.</li>
</ul>
<h4>Dönemin temel kavramları</h4>
<ul class="short-list">
<li>6 kavram: <b>creative problem, insight, Big Idea, execution, originality/divergence, relevance</b>. Divergence: alışılmış düşünceden uzaklaşıp farklı çözüm üretme kapasitesi.</li>
<li>Fikir mimarisinin 5 adımı: problem → içgörü → Big Idea → headline → görsel fikir; <b>fikir her zaman araçtan önce gelir</b>.</li>
<li>Reklam otopsisi ritüeli: ne görüyorum? → neden onu görüyorum? → ne anlıyorum? → neden bunu anlıyorum? → marka bunu neden böyle anlatmış? Sentez: "Yaratıcı insan aynı şeye başka türlü bakar."</li>
</ul>`,
    html: `
<p class="lead">Reklamda yaratıcılık yalnızca güzel, şaşırtıcı, komik veya alışılmadık bir iş üretmek değildir. Çok estetik bir reklam markanın <mark>iletişim problemini</mark> çözmeyebilir; çok dikkat çekici bir fikir markayla anlamlı bağ kurmuyorsa yaratıcı çözüm olarak eksik kalır.</p>

<h3>Yaratıcılık ne değildir?</h3>
<p>Bir reklama bakıp sorulacak üç soru: <b>1. Yaratıcı mı? 2. Neden? 3. Reklamın hangi parçası yaratıcı?</b> Sıkça duyulan ilk yanıtlar: güzel, değişik, komik, daha önce görmedim, dikkat çekiyor, çok zekice, görseli güzel, şaşırtıyor. <b>Bunların hiçbiri tek başına yaratıcılığı açıklamaz.</b></p>
<ul>
  <li>Çok güzel olabilir, ama yaratıcı olmayabilir.</li>
  <li>Çok şaşırtıcı olabilir, ama markayla hiçbir ilişkisi olmayabilir.</li>
  <li>Çok komik olabilir, ama hangi markanın reklamı olduğu hatırlanmayabilir.</li>
</ul>

<h3>Özgünlük × uygunluk</h3>
<blockquote>Yaratıcılık = Özgünlük × Uygunluk (sunumda: Smith ve arkadaşları, reklam yaratıcılığı literatürü)</blockquote>
<dl class="defs">
  <dt>Özgünlük (originality)</dt><dd>Fikrin alışılmış çözümlerden ayrılması.</dd>
  <dt>Uygunluk (relevance)</dt><dd>Fikrin marka, ürün, hedef kitle ve iletişim problemiyle anlamlı ilişkisi. Sunumda dört mercek: <b>marka, iletişim problemi, hedef kitle, vaat</b>; uygunluk bu dört unsurla kusursuz ilişki kurmaktır.</dd>
</dl>
<p>Başarılı reklam yaratıcılığı iki özelliğin <b>kesişiminde</b> ortaya çıkar. Çok özgün ama markayla ilgisiz fikir ilginç olabilir ama etkili reklam olmayabilir; çok uygun ama herkesin kullandığı kalıpları tekrar eden reklam <b>doğru ama yaratıcı olmayan</b> bir çözümdür.</p>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Yaratıcılık teşhis matrisi</th><th>Uygunluk düşük</th><th>Uygunluk yüksek</th></tr></thead>
  <tbody>
    <tr><td>Özgünlük yüksek</td><td>Sanat / kafa karıştırıcı</td><td><b>Gerçek yaratıcılık</b></td></tr>
    <tr><td>Özgünlük düşük</td><td>Gürültü</td><td>Kategori kodu / sıkıcı</td></tr>
  </tbody>
</table></div>
<div class="tip"><span class="tip-label">Kısaca</span>"Yaratıcılık, beynin kolaya kaçma alışkanlığını kırmaktır." Özgünlük ve uygunluğun kesiştiği yerde tek bir fikir, tüm kategori kodlarından daha ağır basar.</div>

<h3>Kategori kodları</h3>
<p>Her ürün kategorisinin zamanla oluşmuş tanıdık görsel ve sözel kodları vardır. Sınıf oyunu: "Yeni bir kahve markasının reklamını yapın; aklınıza ilk gelen görseller neler?"</p>
<ul class="chips"><li>Fincan</li><li>Kahve çekirdeği</li><li>Buhar</li><li>Sabah</li><li>Kahverengi tonlar</li><li>Çalışan insan</li></ul>
<p>Bu kodlar ("beynimizin temel ayarları") tüketicinin reklamı hızlı anlamasını sağlar ama <b>tek başına yaratıcı fikir değildir</b>. "Bunların hangisi yaratıcı?" → Hiçbiri.</p>
<div class="tip"><span class="tip-label">Dikkat</span>Kategori kodu ürünün ne olduğunu tanımamızı sağlar; yaratıcı fikir ise ürün hakkında <b>beklenmedik ama anlamlı yeni bir ilişki</b> kurar. Kategori Kodu ≠ Yaratıcı Fikir.</div>

<h3>Yaratıcı fikrin yapısı</h3>
<ol class="flow"><li>Problem</li><li>İçgörü</li><li>Strateji</li><li>Big Idea</li><li>Creative Execution</li></ol>
<dl class="defs">
  <dt>Problem</dt><dd>Markanın reklamla çözmesi gereken iletişim sorunu; hedef kitlenin engeli.</dd>
  <dt>İçgörü (insight)</dt><dd>Tüketici davranışının altındaki insan gerçeği; çoğu zaman ürün hakkında değil, <b>insan davranışı</b> hakkındadır.</dd>
  <dt>Strateji</dt><dd>Problemi hangi iletişim yaklaşımıyla çözeceğimiz; çözüm rotası.</dd>
  <dt>Big Idea (büyük fikir)</dt><dd>Stratejinin yaratıcı düşünceye dönüşmüş hâli; stratejinin kalbi.</dd>
  <dt>Creative Execution</dt><dd>Big Idea'nın görünür, duyulur veya deneyimlenir hâle getirilmesi; gördüğümüz, duyduğumuz, izlediğimiz reklam.</dd>
</dl>
<p class="note">Sunumda problem, içgörü ve strateji "görünmez katman"; Big Idea ve execution "görünür katman" olarak gösterilir.</p>

<h4>Vaka: emniyet kemeri</h4>
<div class="table-wrap"><table class="tbl">
  <tbody>
    <tr><td>Ürün</td><td>Otomobil emniyet kemeri</td></tr>
    <tr><td>Problem</td><td>İnsanlar kısa mesafelerde emniyet kemeri kullanmıyor.</td></tr>
    <tr><td>İçgörü</td><td>İnsanlar kısa mesafeyi daha güvenli algılıyor, "bana bir şey olmaz" diye düşünüyor (yakın yerlerde bir şey olmaz inancı).</td></tr>
    <tr><td>Strateji</td><td>Kazanın mesafeyle ilişkili olmadığını hissettirmek.</td></tr>
    <tr><td>Big Idea</td><td>"Kaza evinizden birkaç metre uzakta da olabilir."</td></tr>
    <tr><td>Execution</td><td>Evin hemen önündeki manzara ile emniyet kemerini birleştiren görsel.</td></tr>
  </tbody>
</table></div>
<div class="cols two">
  <div class="box"><h4>"Açken Sen Sen Değilsin."</h4><dl class="mini"><dt>Ürün</dt><dd>Çikolata barı</dd><dt>Problem</dt><dd>Hedef kitlenin ürünü sadece tatlı krizinde hatırlaması</dd><dt>İçgörü</dt><dd>Açlık insanın ruh hâlini ve karakterini bozar</dd><dt>Fikir</dt><dd>Açlık seni başka birine dönüştürür</dd><dt>Uygulama</dt><dd>Huysuz yaşlı adam ile kaykaycı gencin yer değiştirdiği mizah</dd></dl></div>
  <div class="box"><h4>"Kendi Büyüklüğünü Bul."</h4><dl class="mini"><dt>Ürün</dt><dd>Spor giyim / ekipman</dd><dt>Problem</dt><dd>Sporun sadece seçkin profesyonellere ait olduğu algısı</dd><dt>İçgörü</dt><dd>Herkes içten içe kendi sınırlarını aşmak ister</dd><dt>Fikir</dt><dd>Büyüklük şampiyonlara özel değildir, herkes kendi büyüklüğünü bulabilir</dd><dt>Uygulama</dt><dd>Issız bir yolda koşan sıradan bir gencin sinematik karesi</dd></dl></div>
</div>
<p>Bir reklamı söküyorken aranacaklar: <b>ürün</b> (marka ne satıyor?), <b>iletişim problemi</b> (çözülmesi gereken gerçek engel?), <b>içgörü</b> (altındaki insan gerçeği?), <b>büyük fikir</b> (strateji nasıl fikre dönüştü?), <b>uygulama</b> (fikir nasıl görünür olmuş?).</p>

<div class="tip"><span class="tip-label">Dikkat</span><b>Büyük fikir reklam değildir. Reklam, büyük fikrin görünür hâlidir.</b> Aynı Big Idea afiş, video, sosyal medya, açıkhava ve dijital deneyime dönüşebilir.</div>
<p><b>Altın kural:</b> Uygulama (execution) değişebilir, fikir (Big Idea) aynı kalır: görsel değişir, metin değişir, mecra değişir (basılı, TV, dijital, deneyim); ama altındaki insan gerçeği (içgörü) ve temel fikir sabittir.</p>

<h3>Kampanyadan marka evrenine</h3>
<div class="cols two">
  <div class="box"><h4>Kampanya yönetimi</h4><p>Tek bir ana mesajın farklı mecralarda tutarlı biçimde yayılması.</p></div>
  <div class="box"><h4>Yaratıcı inşa</h4><p>O ana fikir yaratıcı olarak nasıl inşa edilir?</p></div>
  <div class="box"><h4>Geleneksel reklam kampanyası</h4><p>Aynı mesajı sürekli tekrar etmek.</p></div>
  <div class="box"><h4>Marka evreni ve transmedya</h4><p>Aynı mitolojinin farklı yüzlerini göstermek. <b>Transmedya:</b> marka hikâyesinin farklı mecralarda aynı mesajın tekrarı yerine farklı parçalarla genişletilmesi.</p></div>
</div>
<p class="note">Büyük fikir yeterince güçlüyse bir reklama değil, bir evrene dönüşür.</p>

<h3>Dönemin temeli</h3>
<p>Defterde olması gereken <b>6 temel kavram</b>: creative problem, insight, Big Idea, execution, originality / divergence, relevance. <b>Divergence:</b> alışılmış düşünce yollarından uzaklaşıp farklı çözümler üretme kapasitesi.</p>
<h4>Fikir mimarisinin 5 adımı</h4>
<ol class="flow"><li>Problem</li><li>İçgörü</li><li>Big Idea</li><li>Headline</li><li>Görsel fikir</li></ol>
<p class="note">Tasarım araçlarına dokunmadan önce temel inşa edilir; fikir her zaman araçtan önce gelir. Creative Lab: sıradan bir su şişesi için 5 farklı hedef, 5 farklı iletişim problemi: sağlık (insanlara daha çok su içirmek), statü (premium marka), dinamizm (gençlerin tercihi), sürdürülebilirlik (çevre dostu ambalaj), performans (sporcular için).</p>
<h4>Haftanın ritüeli: reklam otopsisi</h4>
<ol class="flow"><li>Ne görüyorum?</li><li>Neden onu görüyorum?</li><li>Ne anlıyorum?</li><li>Neden bunu anlıyorum?</li><li>Marka bunu neden böyle anlatmış?</li></ol>
<p class="note">13 hafta boyunca uygulanacak sorgulama döngüsü. İlk görev: seçilen bir reklama dört soru: İlk neyi gördüm? Ne hissettim? Bana ne söylüyor (ve bunu hangi unsurla yapıyor)? Değiştireceğim tek şey ne olurdu?</p>
<blockquote>Ürün değişmediğine göre reklamı değiştiren neydi? Ürüne nasıl baktığımız… Yaratıcı insanın diğerlerinden daha fazla şeyi yoktur. Aynı şeye başka türlü bakar.</blockquote>`
  },

  {
    id: `kompozisyon`, no: 2, title: `Göz Nereye Gider? Görsel Algı ve Kompozisyon`,
    files: [`materyal/Reklamda_Yaraticilik_Ders_Calisma_Kitabi.docx`, `materyal/1_1_Gorsel_Iletisimin_Anatomisi.pdf`, `materyal/1_Reklamda_Yaraticilik.pdf`],
    short: `<h4>Görsel algı</h4>
<ul class="short-list">
<li>Görsel algı: gözün aldığı bilginin beyin tarafından <b>seçilmesi, düzenlenmesi, anlamlandırılması</b>. <mark>Görmek ile algılamak aynı şey değildir</mark>: beyin seçer, ayırır, gruplar, karşılaştırır, tamamlar, anlamlandırır.</li>
<li>Tasarımcı yalnızca görüntü üretmez; izleyicinin <b>bakışını yönlendirir</b>. Bir reklama 5 saniye bakan sınıfın büyük kısmı (sunumda ~%90) aynı 2–3 unsuru hatırlar.</li>
<li>"Tasarım, içeriğin sadece paketlenmesi değildir; tasarım anlamın kendisine katılır." Aynı unsurlar (dev ürün / dev başlık / dev insan yüzü) aynı mesajı vermez.</li>
<li>Tipografi matrisi: "Seni seviyorum" romantik/geleneksel, masum/oyuncu, tehditkâr/korkutucu, bilgi verici/objektif fontla farklı anlam; font okunabilirlik kadar duygu, algı ve markayla ilgilidir.</li>
</ul>
<h4>Kompozisyon, odak, hiyerarşi</h4>
<ul class="short-list">
<li><b>Kompozisyon:</b> izleyicinin <mark>neyi, hangi sırayla ve hangi ilişkiler içinde</mark> göreceğinin düzenlenmesi; estetik düzen değil, bakış rotasını yöneten sistem.</li>
<li><b>Odak noktası:</b> dikkatin ilk/en güçlü toplandığı alan; araçlar: <b>büyüklük, renk, kontrast, ışık, izolasyon, konum, yüz, yön</b>. Dikkat çekmek şans değil, görsel mühendislik.</li>
<li>Ürün her zaman ilk görülen öğe olmak zorunda değil: bilinçli rota <b>problem → headline → ürün → logo</b> olabilir.</li>
<li><b>Görsel hiyerarşi:</b> algılanma sırasının düzenlenmesi (ana görsel → headline → ürün → logo); <mark>görsel hiyerarşi = bakış sırasının tasarımı</mark>.</li>
</ul>
<h4>Negatif alan, ağırlık, denge</h4>
<ul class="short-list">
<li><b>Negatif alan:</b> öğelerin arasında/çevresinde kalan boşluk; kullanılmamış alan değil: ana nesneyi vurgular, kalabalığı azaltır, <b>premium algı</b> yaratır, ikinci şekil ve gizli anlam oluşturur. "Boşluk da tasarım unsurudur."</li>
<li><b>Görsel ağırlık:</b> fiziksel değil algısal; artıranlar: büyüklük, koyuluk, renk yoğunluğu, kontrast, karmaşık doku, insan yüzü, izolasyon. Görsel denge = ağırlığın dağılımı.</li>
<li><b>Simetri:</b> düzen, kontrol, sakinlik, istikrar (resmiyet; risk: durağanlık) · <b>asimetri:</b> hareket, dinamizm, enerji, gerilim (çağdaşlık). <mark>Asimetrik ≠ dengesiz</mark>; simetri ile denge aynı şey değil.</li>
</ul>
<h4>Gestalt ilkeleri</h4>
<ul class="short-list">
<li>Temel düşünce: zihin görüntüleri bağımsız parçalar yerine <b>anlamlı bütünler</b> olarak örgütler.</li>
<li><b>Figure–ground (şekil–zemin):</b> ana nesne/arka plan; yer değiştirince tek görüntüde birden fazla anlam · <b>proximity (yakınlık):</b> yakın öğeler aynı grup; mekânsal yakınlık zihinsel ilişki kurar.</li>
<li><b>Similarity (benzerlik):</b> renk/biçim/büyüklükte benzeyenler birlikte algılanır; benzerlik birlik sağlar, bozulması dikkat çeker · <b>closure (tamamlama):</b> zihin eksiği tamamlar; izleyicinin tamamlaması beklenir.</li>
<li><b>Continuation (devamlılık):</b> göz çizgi ve yönleri takip eder; yol, çizgi, beden yönü, insan bakışı, perspektif gözü başka noktaya taşır.</li>
</ul>`,
    html: `
<p class="lead">Bir reklam tasarımında yalnızca hangi unsurların bulunduğu değil, izleyicinin bunları <mark>hangi sırayla göreceği</mark> de önemlidir. Sunumun deyişiyle: "Gözümüz bizi kandırıyor."</p>

<h3>Görsel algı</h3>
<p><b>Görsel algı:</b> gözün aldığı fiziksel bilgilerin beyin tarafından seçilmesi, düzenlenmesi ve anlamlandırılması süreci. Bu yüzden <b>görmek ile algılamak aynı şey değildir</b>.</p>
<p>Göz görüntüyü alır; beyin görüntüyü:</p>
<ul class="chips"><li>Seçer</li><li>Ayırır</li><li>Gruplandırır</li><li>Karşılaştırır</li><li>Tamamlar</li><li>Anlamlandırır</li></ul>
<p>Reklam tasarımcısı yalnızca görüntü üretmez; izleyicinin bakışını da belli ölçüde yönlendirir.</p>
<div class="tip"><span class="tip-label">Örnek</span>"Bu reklama sadece 5 saniye baktınız. Ne gördünüz?" Sunuma göre sınıfın muhtemelen %90'ı tamamen aynı 2 veya 3 unsuru hatırlar; çünkü tasarımcı bakış sırasını tasarlar (büyüklük, boşluk, yüz, tipografi, kontrast, renk, yön, hareket, merkez). Görsel hiyerarşi tesadüf değildir.</div>
<h4>Aynı unsurlar, aynı mesaj mı?</h4>
<p>Üç reklam tamamen aynı unsurları içerir: <b>A: dev ürün</b>, <b>B: dev başlık</b> ("Hızı Hisset"), <b>C: dev insan yüzü</b>. Aynı şeyi söylemezler (cevap: hayır).</p>
<blockquote>Büyük önerme: Tasarım, içeriğin sadece paketlenmesi değildir. Tasarım anlamın kendisine katılır.</blockquote>
<p><b>Tipografi matrisi:</b> Aynı "Seni seviyorum" yazısı dört farklı fontla romantik/geleneksel, masum/oyuncu, tehditkâr/korkutucu ya da bilgi verici/objektif okunur. İçerik aynı, anlam aynı değil: font yalnızca okunabilirlikle değil; duygu, algı ve markayla ilgilidir.</p>

<h3>Kompozisyon</h3>
<p>Kompozisyon, görsel öğelerin belirli bir düzen içinde yerleştirilmesidir. Reklam için daha işlevsel tanım:</p>
<div class="tip"><span class="tip-label">Tanım</span><b>Kompozisyon</b>, izleyicinin <mark>neyi, hangi sırayla ve hangi ilişkiler içinde</mark> göreceğinin düzenlenmesidir. Tasarım yalnızca estetik bir düzen değil, izleyicinin bakış rotasını yöneten sistemdir. (Kompozisyon sadece öğeleri yerleştirmek değildir.)</div>

<h3>Odak noktası</h3>
<p>Görselde dikkatin <b>ilk veya en güçlü biçimde</b> toplandığı alan. Dikkat çekmek şans değil, görsel mühendisliktir.</p>
<ul class="chips"><li>Büyüklük</li><li>Renk</li><li>Kontrast</li><li>Işık</li><li>İzolasyon</li><li>Konum</li><li>Yüz</li><li>Yön</li></ul>
<div class="tip"><span class="tip-label">Dikkat</span>Reklamda ürün her zaman ilk görülen öğe olmak zorunda değildir. Çoğu zaman ideal göz rotası doğrudan ürüne gitmez; bilinçli bir algı rotası: <b>problem → headline → ürün → logo</b>.</div>

<h3>Görsel hiyerarşi</h3>
<p>Görsel öğelerin algılanma (ve önem) sırasının düzenlenmesi. Örnek akış:</p>
<ol class="flow"><li>Ana görsel</li><li>Headline</li><li>Ürün</li><li>Logo</li></ol>
<p><b>Görsel hiyerarşi = bakış sırasının tasarımıdır.</b> ("Önce burayı okuyacaksınız. Sonra gözünüz buraya kayacak. Üçüncü olarak burayı fark edeceksiniz.")</p>

<h3>Negatif alan</h3>
<p>Görsel öğelerin arasında veya çevresinde kalan boşluk. Ancak <b>kullanılmamış alan değildir</b>.</p>
<ul>
  <li>Ana nesneyi vurgulayabilir.</li>
  <li>Görsel kalabalığı azaltabilir.</li>
  <li>Premium algı yaratabilir.</li>
  <li>İkinci bir şekil oluşturabilir.</li>
  <li>Gizli anlam yaratabilir.</li>
</ul>
<p>Temel ilke: <mark>Boşluk da tasarım unsurudur.</mark></p>

<h3>Görsel ağırlık ve denge</h3>
<p>Bazı unsurlar diğerlerinden daha ağır algılanır: "Fiziksel ağırlık yoktur, algısal ağırlık vardır."</p>
<ul class="chips"><li>Büyüklük</li><li>Koyuluk</li><li>Renk yoğunluğu</li><li>Kontrast</li><li>Karmaşık doku</li><li>İnsan yüzü</li><li>İzolasyon</li></ul>
<p><b>Görsel denge</b>, bu ağırlığın kompozisyon içindeki dağılımıdır.</p>
<div class="cols two">
  <div class="box"><h4>Simetri</h4><p>Öğelerin bir eksenin iki tarafında benzer dağılımı. Düzen, kontrol, sakinlik, istikrar (sunumda resmiyet de). Risk: durağanlık.</p></div>
  <div class="box"><h4>Asimetri</h4><p>Öğeler aynı değil ama görsel ağırlık dengelenmiş. Hareket, dinamizm, enerji, gerilim (sunumda çağdaşlık).</p></div>
</div>
<div class="tip"><span class="tip-label">Dikkat</span>Asimetrik olmak dengesiz olmak değildir (Asimetrik ≠ Dengesiz). Simetri ve denge aynı şey değildir.</div>

<h3>Gestalt ilkeleri</h3>
<p>Gestalt yaklaşımının temel düşüncesi: insan zihni görüntüleri <b>bağımsız parçalar yerine anlamlı bütünler</b> hâlinde örgütlemeye eğilimlidir.</p>
<dl class="defs">
  <dt>Figure–ground (şekil–zemin)</dt><dd>Zihin görüntünün bazı bölümlerini ana nesne, diğerlerini arka plan olarak algılar. Yaratıcı reklamlarda şekil ile zemin değiştirilip tek görüntüde birden fazla anlam oluşturulabilir.</dd>
  <dt>Proximity (yakınlık)</dt><dd>Birbirine yakın öğeleri aynı gruba aitmiş gibi algılarız; mekânsal yakınlık zihinsel ilişki oluşturabilir.</dd>
  <dt>Similarity (benzerlik)</dt><dd>Renk, biçim veya büyüklükte benzeyenleri birlikte algılarız. Benzerlik birlik sağlar; benzerliğin bozulması dikkat çeker.</dd>
  <dt>Closure (tamamlama)</dt><dd>Zihin eksik biçimleri tamamlar; bazı reklamlarda bütün görüntü verilmez, izleyicinin tamamlaması beklenir.</dd>
  <dt>Continuation (devamlılık)</dt><dd>Göz çizgi ve yönleri takip eder: yol, çizgi, beden yönü, insan bakışı, perspektif gözü başka bir noktaya taşır.</dd>
</dl>

<h3>Bu bölümden aklında kalsın</h3>
<ul>
  <li>Kompozisyon bakış sırasını düzenler; ürün her zaman ilk görülen öğe olmak zorunda değildir.</li>
  <li>Görsel hiyerarşi neyi önce göreceğimizi belirler.</li>
  <li>Negatif alan boşluk değil aktif tasarım unsurudur.</li>
  <li>Simetri ve denge aynı şey değildir; asimetri de dengeli olabilir.</li>
  <li>Gestalt ilkeleri beynin görüntüyü nasıl organize ettiğini açıklar.</li>
</ul>`
  },

  {
    id: `sekiller`, no: 3, title: `Şekiller Masum Değildir`,
    files: [`materyal/Reklamda_Yaraticilik_Ders_Calisma_Kitabi.docx`, `materyal/1_1_Gorsel_Iletisimin_Anatomisi.pdf`],
    short: `<h4>Temel uyarı</h4>
<ul class="short-list">
<li>Geometrik biçimler dekoratif değildir; tasarımın temposunu, dengesini ve algısını etkiler.</li>
<li><mark>Hiçbir şeklin evrensel ve değişmez tek bir anlamı yoktur</mark>; anlam bağlama, renge, yöne, kültüre, sektöre ve çevresindeki öğelere göre değişir ("Bağlam kraldır": üçgen tehlike işareti, play tuşu ya da zirve olabilir).</li>
<li>Aşağıdakiler kesin kural değil, <b>algısal eğilimlerdir</b>: ezber değil, yorumlama aracı.</li>
</ul>
<h4>Şekiller</h4>
<ul class="short-list">
<li><b>Daire:</b> köşesiz, kesintisiz (başlangıç ve bitiş görünmez) → bütünlük, birlik, süreklilik, yumuşaklık, kapsayıcılık.</li>
<li><b>Kare / dikdörtgen:</b> belirgin sınırlar, dengeli yapı → güven, sağlamlık, yapı, düzen, istikrar; fazla kullanımı katılık ve durağanlık yaratır.</li>
<li><b>Üçgen:</b> güçlü yön duygusu · yukarı → yükselme, hedef, güç · sağa → hareket, ilerleme (play ikonu) · <b>ters</b> → görsel gerilim, kararsızlık (geniş kütle dar noktada dengede durmaya çalışır).</li>
</ul>
<h4>Çizgiler</h4>
<ul class="short-list">
<li><b>Yatay:</b> ufuk çizgisi → sakinlik, genişlik, istikrar · <b>dikey:</b> yerçekimine karşı yükselir → yükselme, güç, otorite.</li>
<li><b>Diyagonal:</b> yatay/dikey stabiliteyi bozar → <mark>hareket, hız, enerji, gerilim</mark> · <b>eğri:</b> akışkanlık, doğallık, zarafet.</li>
<li><b>Keskin biçimler:</b> sertlik, saldırganlık, tehlike · <b>spiral:</b> hareket, dönüşüm, devamlılık, merkeze çekilme (gözü yönlendirmede etkili).</li>
</ul>
<h4>Grid</h4>
<ul class="short-list">
<li>Tasarımın <b>görünmeyen iskeleti</b>: hizalama, tutarlılık, düzen, okunabilirlik, görsel hiyerarşi.</li>
<li>Bilinçli bozulabilir, ama: <mark>"Kuralı bilmeden kuralı bozmak yaratıcılık değil, tesadüftür."</mark></li>
</ul>`,
    html: `
<p class="lead">Geometrik biçimler yalnızca dekoratif unsurlar değildir; bir tasarımın <b>temposunu, dengesini ve algısını</b> etkileyebilirler.</p>
<div class="tip"><span class="tip-label">Dikkat</span><b>Hiçbir şeklin evrensel ve değişmez tek bir anlamı yoktur.</b> Anlam; bağlama, renge, yönüne, kültüre, sektöre ve çevresindeki diğer öğelere göre değişir. Aşağıdakiler kesin kurallar değil, <b>algısal eğilimlerdir</b>.</div>

<h3>Bağlam kraldır (context is king)</h3>
<p>Aynı üçgen; uyarı levhasında <b>tehlike</b>, bir çemberin içinde <b>hareket / play</b>, dağ silüetinde <b>zirve / yükseliş</b> anlamına gelir. Anlam; biçim, bağlam, renk, kültür ve kompozisyonla birlikte oluşur.</p>

<h3>Şekiller</h3>
<dl class="defs">
  <dt>Daire</dt><dd>Köşesi yoktur, kesintisizdir; başlangıç ve bitiş noktası görünmez. Bütünlük, birlik, süreklilik, yumuşaklık, kapsayıcılık algısını destekleyebilir.</dd>
  <dt>Kare ve dikdörtgen</dt><dd>Belirgin sınırlar ve dengeli bir yapı taşır. Güven, sağlamlık, yapı, düzen, istikrar algısı. Sunuma göre fazla kullanımı katılık ve durağanlık yaratır.</dd>
  <dt>Üçgen</dt><dd>Güçlü bir yön duygusuna sahiptir; yönü çok önemlidir.</dd>
</dl>
<div class="cols">
  <div class="box"><h4>Yukarı üçgen</h4><p>Yükselme, hedef, güç.</p></div>
  <div class="box"><h4>Sağa üçgen</h4><p>Hareket, ilerleme (play ikonu).</p></div>
  <div class="box"><h4>Ters (aşağı) üçgen</h4><p>Görsel gerilim, kararsızlık: geniş kütle dar bir noktada dengede durmaya çalışır.</p></div>
</div>

<h3>Çizgilerin bilinçaltı dili</h3>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Çizgi</th><th>Neden?</th><th>Olası çağrışım</th></tr></thead>
  <tbody>
    <tr><td>Yatay</td><td>Ufuk çizgisini hatırlatır</td><td>Sakinlik, dinginlik, genişlik, istikrar</td></tr>
    <tr><td>Dikey</td><td>Yerçekimine karşı yükselir</td><td>Yükselme, güç, otorite, büyüklük</td></tr>
    <tr><td>Diyagonal</td><td>Yatay/dikey stabiliteyi bozar</td><td>Hareket, hız, enerji, gerilim</td></tr>
    <tr><td>Eğri (curve)</td><td>Akışkan</td><td>Akışkanlık, doğallık, zarafet, yumuşaklık</td></tr>
    <tr><td>Keskin açılı</td><td>Sert yön değişimi</td><td>Sertlik, güç, saldırganlık, keskinlik, tehlike</td></tr>
    <tr><td>Spiral</td><td>Döngüsel hareket</td><td>Hareket, devamlılık, dönüşüm, merkeze çekilme; gözün yönlendirilmesinde çok etkili</td></tr>
  </tbody>
</table></div>

<h3>Özet tablo (sunum 1.1)</h3>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Biçim</th><th>Temel görsel özellik</th><th>Olası çağrışım</th></tr></thead>
  <tbody>
    <tr><td>Daire</td><td>Kesintisiz, köşesiz</td><td>Bütünlük, birlik, yumuşaklık</td></tr>
    <tr><td>Kare</td><td>Dengeli, kapalı</td><td>Düzen, güven, sağlamlık</td></tr>
    <tr><td>Üçgen</td><td>Yönlü</td><td>Hareket, güç, gerilim</td></tr>
    <tr><td>Yatay</td><td>Ufka paralel</td><td>Sakinlik, denge</td></tr>
    <tr><td>Dikey</td><td>Yukarı doğru</td><td>Güç, yükselme</td></tr>
    <tr><td>Diyagonal</td><td>Dengesiz yön</td><td>Hız, hareket, enerji</td></tr>
    <tr><td>Eğri</td><td>Akışkan</td><td>Doğallık, zarafet</td></tr>
    <tr><td>Keskin / köşeli</td><td>Sert yön değişimi</td><td>Güç, sertlik, tehlike</td></tr>
    <tr><td>Spiral</td><td>Döngüsel hareket</td><td>Akış, dönüşüm, odak</td></tr>
  </tbody>
</table></div>
<p class="note">Uyarı: Bunlar sabit anlamlar değil, görsel eğilimlerdir.</p>

<h3>Grid (ızgara) sistemi</h3>
<p>Grid, tasarımın <b>görünmeyen iskeletidir</b>: görsel öğelerin hizalanmasını ve düzenlenmesini sağlayan yapısal sistem.</p>
<ul class="chips"><li>Hizalama</li><li>Tutarlılık</li><li>Düzen</li><li>Okunabilirlik</li><li>Görsel hiyerarşi</li></ul>
<blockquote>Bir tasarımcı gridi bilinçli olarak bozabilir. Ancak: Kuralı bilmeden kuralı bozmak yaratıcılık değil, tesadüftür.</blockquote>

<h3>Bu bölümden aklında kalsın</h3>
<ul>
  <li>Şekiller anlam üretimine katılır; anlamları bağlamdan bağımsız değildir.</li>
  <li>Dairenin köşesizliği ve karenin yapısallığı farklı algılar üretir; üçgende yön çok önemlidir.</li>
  <li>Diyagonal çizgiler görsel hareket yaratabilir; grid tasarımın görünmeyen yapısıdır.</li>
  <li>Şekil anlamları ezber değil, yorumlama aracıdır. ("Daire her zaman sıcaklık ifade eder" gibi bir önerme bu yüzden yanlıştır.)</li>
</ul>`
  },

  {
    id: `gostergebilim`, no: 4, title: `Gördüğün Şey O Değil: Göstergebilim`,
    files: [`materyal/Reklamda_Yaraticilik_Ders_Calisma_Kitabi.docx`, `materyal/1_2_Gordugun_Sey_O_Degil_Gostergebilim.pdf`],
    short: `<h4>Göstergebilim ve gösterge</h4>
<ul class="short-list">
<li>Göstergebilim (semiyotik): <mark>anlamın göstergeler aracılığıyla nasıl üretildiğini</mark> inceler. "Anlam kendiliğinden var olmaz; inşa edilir." Üç mimar: <b>Saussure, Peirce, Barthes</b>.</li>
<li>Reklam sorusu: "Gördüğümüz şey ne ve bu şey bize neden başka bir şey düşündürüyor?"</li>
<li><b>Gösterge:</b> kendisi dışında başka bir şeyi temsil eden unsur; kalp biçimi → aşk, sevgi, yaşam, sağlık, romantizm (duygusal bağ).</li>
</ul>
<h4>Gösteren, gösterilen, bağlam</h4>
<ul class="short-list">
<li><b>Gösteren (signifier):</b> algılanabilir fiziksel biçim (kırmızı gül görüntüsü) · <b>gösterilen (signified):</b> zihinde oluşan kavram (aşk, romantizm, tutku). İkisi birlikte göstergeyi oluşturur.</li>
<li>Aralarındaki bağ <b>doğal ve zorunlu değil, kültürel olarak öğrenilir</b>: kültür A'da beyaz → saflık, kültür B'de beyaz → yas. Hiçbir renk/biçim evrensel değil; hedef kitlenin kodlarına göre tasarlanır.</li>
</ul>
<h4>Düz anlam ve yan anlam (Barthes)</h4>
<ul class="short-list">
<li><b>Düz anlam (denotation):</b> doğrudan, açıkça görülen ("Bir kadın beyaz elbise giyiyor.") · <b>yan anlam (connotation):</b> kültürel, duygusal, sembolik çağrışım (saflık, masumiyet, zarafet, düğün, temizlik).</li>
<li>Formül: <mark>düz anlam "Ne görüyorum?" · yan anlam "Bu bana ne anlatıyor?"</mark></li>
</ul>
<h4>Peirce: ikon, indeks, simge</h4>
<ul class="short-list">
<li><b>İkon (benzerlik):</b> temsil ettiğine fiziksel olarak benzer; fotoğraf, ürün resmi, portre (ayakkabı fotoğrafı).</li>
<li><b>İndeks (neden / iz / fiziksel bağ):</b> duman → ateş · ayak izi → biri geçti · ter → efor/sıcaklık · kırıntılar → yemek yenmiş · kırışıklık → yaş · kırık cam → darbe. "Reklamcının gizli silahı": nedeni göstermeden sonucu gösterir (kırıntılı boş tabak = "Yemek çok lezzetliydi"); ürünü tüketeni göstermeye gerek kalmaz.</li>
<li><b>Simge (uzlaşı):</b> fiziksel benzerlik yok, anlam toplumsal/kültürel uzlaşıyla öğrenilir; bayrak, trafik işareti, marka logosu, para sembolü.</li>
</ul>
<h4>Barthes ve mit</h4>
<ul class="short-list">
<li><b>Mit:</b> kültürde oluşturulmuş bir düşüncenin <mark>doğal ya da kendiliğindenmiş gibi</mark> sunulması (ideolojinin doğallaştırılması).</li>
<li>Takım elbiseli erkek + lüks otomobil → düz: erkek otomobil kullanıyor · yan: başarı, statü, güç, kontrol · mit: <b>"Başarılı insan böyle yaşar."</b></li>
<li>Anne + mutfak + çocuk → düz: yemek hazırlığı · yan: şefkat, bakım · mit: iyi annelik bakım vermekle ölçülür.</li>
<li>Reklam yalnızca ürün satmaz; başarı, güzellik, kadınlık, erkeklik, aile, gençlik, statü gibi anlamları mitlerle yeniden üretir.</li>
<li>Çözümleme reçetesi: 1 fiziksel tanımla (düz anlam) → 2 derine in (yan anlam) → 3 bağlamı sorgula → 4 türü belirle (ikon/indeks/simge).</li>
</ul>`,
    html: `
<p class="lead"><b>Göstergebilim (semiyotik)</b>, en sade tanımıyla <mark>anlamın göstergeler aracılığıyla nasıl üretildiğini</mark> inceleyen alandır. Temel ilke: anlam kendiliğinden var olmaz; inşa edilir.</p>
<p>Reklam açısından temel soru: <b>Gördüğümüz şey ne ve bu şey bize neden başka bir şey düşündürüyor?</b> Reklamı çözümlemek için üç büyük mimarı bilmek yeterlidir: <b>Saussure, Peirce, Barthes</b>.</p>

<h3>Gösterge: bir şeyin ötesi</h3>
<p><b>Gösterge</b>, kendisi dışında başka bir şeyi temsil eden unsurdur; görünen şey başka, anlattığı şey başka olabilir. Kalp biçimi yalnızca geometrik bir biçim değil, devasa bir anlam taşıyıcısıdır:</p>
<ul class="chips"><li>Aşk</li><li>Sevgi</li><li>Yaşam</li><li>Sağlık</li><li>Romantizm</li><li>Duygusal bağ</li></ul>

<h3>Gösteren ve gösterilen</h3>
<div class="cols two">
  <div class="box"><h4>Gösteren (signifier)</h4><p>Göstergenin algılanabilir <b>fiziksel biçimi</b> (görülen, duyulan, yazılan). Örnek: kırmızı gül görüntüsü.</p></div>
  <div class="box"><h4>Gösterilen (signified)</h4><p>O göstergenin zihnimizde oluşturduğu <b>kavram</b>. Örnek: aşk, romantizm, tutku.</p></div>
</div>
<p>Bu iki parça bir araya gelerek göstergeyi oluşturur.</p>
<h4>Anlam bağlama bağlıdır</h4>
<p>Gösteren ile gösterilen arasında <b>doğal ve zorunlu bir bağ yoktur</b>; bu bağ kültürel olarak öğrenilir.</p>
<div class="cols two">
  <div class="box"><h4>Kültür A</h4><p>Beyaz → saflık</p></div>
  <div class="box"><h4>Kültür B</h4><p>Beyaz → yas</p></div>
</div>
<div class="tip"><span class="tip-label">Dikkat</span>Reklamda hiçbir renk veya biçim evrensel değildir; hedef kitlenin kodlarına göre tasarlanır.</div>

<h3>Barthes ve anlamın katmanları</h3>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Katman</th><th>Tanım</th><th>Soru</th><th>Beyaz elbise örneği</th></tr></thead>
  <tbody>
    <tr><td>Düz anlam (denotation)</td><td>Görselde doğrudan, açıkça gördüğümüz şey; objektif gerçeklik</td><td>Ne görüyorum?</td><td>Bir kadın beyaz bir elbise giyiyor.</td></tr>
    <tr><td>Yan anlam (connotation)</td><td>Görüntünün kültürel, duygusal ve sembolik çağrışımları</td><td>Bu bana ne anlatıyor?</td><td>Saflık, masumiyet, zarafet, düğün, temizlik.</td></tr>
  </tbody>
</table></div>

<h3>Peirce: ilişkinin üç temel türü</h3>
<p>Gösteren ile gösterilen arasındaki ilişki her zaman aynı mekanizmayla çalışmaz:</p>
<div class="cols">
  <div class="box"><h4>İkon (benzerlik)</h4><p>Temsil ettiği şeye fiziksel olarak benzer; anlamını benzerlikten alır.</p><p class="note">Fotoğraf, ürün resmi, portre; ayakkabı fotoğrafı ayakkabıya benzediği için ikoniktir.</p></div>
  <div class="box"><h4>İndeks (nedensellik)</h4><p>Temsil ettiği şeyle fiziksel veya nedensel bağlantı taşır.</p><p class="note">Duman → ateş, ayak izi → biri geçti, ter → efor / sıcaklık, kırıntılar → yemek yenmiş, kırışıklık → yaş, kırık cam → darbe.</p></div>
  <div class="box"><h4>Simge (uzlaşı)</h4><p>Fiziksel benzerlik yoktur; anlam toplumsal veya kültürel uzlaşıdan kaynaklanır, öğrenilir.</p><p class="note">Bayrak, trafik işareti, marka logosu, para sembolü.</p></div>
</div>
<div class="tip"><span class="tip-label">Örnek</span><b>İndeks, reklamcının gizli silahıdır:</b> nedeni göstermeden sonucu gösterebiliriz. Kırıntılarla dolu boş bir tabak = "Yemek çok lezzetliydi." Ürünü tüketen kişiyi göstermeye bile gerek kalmaz.</div>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Tür</th><th>Bağlantı nasıl?</th><th>Örnek</th></tr></thead>
  <tbody>
    <tr><td>İkon</td><td>Benzerlik</td><td>Fotoğraf</td></tr>
    <tr><td>İndeks</td><td>Nedensel / fiziksel bağ</td><td>Duman → ateş</td></tr>
    <tr><td>Simge</td><td>Kültürel uzlaşı</td><td>Bayrak</td></tr>
  </tbody>
</table></div>

<h3>Barthes ve mit</h3>
<p><b>Mit</b>, kültür içinde oluşturulmuş bir düşüncenin <mark>doğal veya kendiliğindenmiş gibi</mark> sunulmasıdır (reklamın ikinci katmanı).</p>
<div class="cols two">
  <div class="box"><h4>Otomobil örneği</h4><dl class="mini"><dt>Görüntü</dt><dd>Takım elbiseli erkek + lüks otomobil</dd><dt>Düz anlam</dt><dd>Bir erkek otomobil kullanıyor</dd><dt>Yan anlam</dt><dd>Başarı, güç, statü, kontrol</dd><dt>Mit</dt><dd>"Başarılı insan böyle yaşar."</dd></dl></div>
  <div class="box"><h4>Alternatif örnek</h4><dl class="mini"><dt>Görüntü</dt><dd>Anne + mutfak + çocuk</dd><dt>Düz anlam</dt><dd>Yemek hazırlığı</dd><dt>Yan anlam</dt><dd>Şefkat / bakım</dd><dt>Mit</dt><dd>İyi annelik bakım vermekle ölçülür</dd></dl></div>
</div>
<p>Reklam yalnızca ürün satmaz; <b>başarı, güzellik, kadınlık, erkeklik, aile, gençlik, statü</b> gibi toplumsal anlamları da yarattığı mitler üzerinden yeniden üretebilir: toplumda tarihsel ve kültürel olarak üretilmiş değerleri doğal ve kendiliğindenmiş gibi sunar.</p>

<h3>Kusursuz çözümleme reçetesi</h3>
<ol class="steps">
  <li><b>Fiziksel tanımla:</b> Gördüğün form (gösteren) tam olarak ne? (düz anlam)</li>
  <li><b>Derine in:</b> "Ne görüyorsun" sorusundan "Bu bana ne anlatıyor?" sorusuna geç. (yan anlam)</li>
  <li><b>Bağlamı sorgula:</b> Kültürel kodlar bu anlamı nasıl şekillendiriyor?</li>
  <li><b>Türü belirle:</b> Bu bir ikon (kopya) mu, indeks (kanıt) mı, simge (uzlaşı) mı?</li>
</ol>
<blockquote>Gördüğün şey hiçbir zaman sadece o değildir; özenle tasarlanmış bir anlam mimarisidir.</blockquote>`
  },

  {
    id: `retorik`, no: 5, title: `Bir Şeyi Başka Bir Şeyle Anlatmak: Görsel Retorik`,
    files: [`materyal/Reklamda_Yaraticilik_Ders_Calisma_Kitabi.docx`, `materyal/1_3_Reklamin_Anatomisi.pdf`],
    short: `<h4>Görsel retorik</h4>
<ul class="short-list">
<li><mark>İkna edici anlamın görsel ilişkiler aracılığıyla kurulması</mark>; nesneler yalnızca gösterilmez, ilişkiye sokularak yeni düşünce üretilir. Sunum formülü: ikna edici anlam − sözcükler + görsel ilişkiler = görsel retorik ("kelimesiz ikna mimarisi").</li>
</ul>
<h4>Metafor, metonimi, benzetme, analoji</h4>
<ul class="short-list">
<li><b>Metafor:</b> bir şeyi başka bir şey üzerinden anlamlandırmak; <b>benzerlik / anlam transferi</b> ("A, B'dir"). Otomobil = panter (sunumda kaplan): hız, çeviklik, güç otomobile aktarılır. İşlevi: özelliği söylemek yerine hissettirmek (diş fırçası = kılıç).</li>
<li><b>Metonimi:</b> yakın ilişkili başka bir şeyle temsil; <b>yakınlık / ilişkisel temsil</b> ("A, B'yi temsil eder"): taç → kral(lık), stetoskop → doktorluk/sağlık, direksiyon → otomobil/sürüş, Beyaz Saray → Amerikan yönetimi. Parça üzerinden bütünü/deneyimi gösterir.</li>
<li><b>Benzetme:</b> benzerliğin <b>açık</b> kurulması; metafor "Bu otomobil bir roket." · benzetme "Bu otomobil roket gibi hızlı."</li>
<li><b>Analoji:</b> iki yapının <b>çalışma biçimleri</b> arasında benzerlik; siber güvenlik sistemi = ev alarm sistemi (ikisi de tehdidi fark eder, uyarır, korur); karmaşık hizmetleri anlatmak için ideal.</li>
</ul>
<h4>Juxtaposition, substitution, fusion, visual pun</h4>
<ul class="short-list">
<li><b>Juxtaposition (yan yana getirme):</b> birlikte görmeye alışık olmadığımız iki öğe yan yana; hamburger + dambıl (= sağlıklı protein). Öğeler birleşmek zorunda değil; anlam "Bu ikisi neden birlikte?" sorusundan doğar.</li>
<li><b>Substitution (yerine koyma):</b> beklenen nesnenin yerine başka nesne; ampul (fikir/enerji) yerine kahve fincanı → "Kahve zihni açar." İzleyici beklenen nesneyi zihninde tamamlar, boşluğu doldurduğu için <b>aktif</b> hâle gelir.</li>
<li><b>Fusion (birleştirme):</b> iki nesne fiziksel olarak <b>tek hibrit nesne</b>; ayakkabı + otomobil lastiği (dayanıklılık, yol tutuş, güç). Juxtaposition'da iki öğe ayrı, fusion'da birleşik.</li>
<li><b>Visual pun:</b> sözcük/kavramın birden fazla anlamını görsel olarak kullanmak; LIGHT (hafif + ışık), "Sharp" (keskin + zeki/net) → "Aaa, anladım!" anı.</li>
</ul>
<h4>Kavramsal sıçrama</h4>
<ul class="short-list">
<li>Ürün özelliğinden beklenmedik ama anlamlı başka bir kavrama geçiş: <mark>özellik → fayda → çağrışım → yeni kavram → görsel fikir</mark>. Yaratıcı reklam ürünü anlatmaz, ürünün sonucunu <b>dramatize eder</b>.</li>
<li>Güçlü kahve → enerji → uyanmak → alarm → kahve fincanı = alarm saati · çok güçlü yapıştırıcı → nesneleri sıkıca tutar → ayrılmaz → kenetlenmiş yapılar → iki binayı birbirine yapışmış göstermek.</li>
<li>Bir reklamda birden fazla teknik olabilir (otomobil + çita: substitution, metafor, yan anlam). Doğru soru "tek doğru teknik ne?" değil, <b>"Reklam anlamı hangi görsel ilişkiler aracılığıyla üretiyor?"</b></li>
</ul>`,
    html: `
<p class="lead"><b>Görsel retorik</b>, ikna edici anlamın <mark>görsel ilişkiler aracılığıyla</mark> kurulmasıdır. Nesneler yalnızca gösterilmez; birbirleriyle ilişkiye sokularak yeni bir düşünce üretilir.</p>
<p class="note">Sunumdaki formül: [İkna edici anlam] − [Sözcükler] + [Görsel ilişkiler] = Görsel retorik. Sözcükler yerine veya sözcüklerle birlikte görsel ilişkilerle kurulan, kelimesiz bir ikna mimarisi.</p>

<h3>Metafor ve metonimi</h3>
<div class="cols two">
  <div class="box"><h4>Metafor (benzerlik / anlam transferi)</h4><p>Bir şeyi başka bir şey üzerinden anlamlandırmak. Mekanizma: benzerlik kurar, <b>A, B'dir</b>.</p><p>Örnek: otomobil = panter (sunumda kaplan): hız, çeviklik, güç otomobile aktarılır.</p><p class="note">Reklamdaki işlevi: özelliği doğrudan söylemek yerine hissettirmek (diş fırçası = kılıç).</p></div>
  <div class="box"><h4>Metonimi (yakınlık / ilişkisel temsil)</h4><p>Bir şeyi onunla yakın ilişkili başka bir şey üzerinden temsil etmek. Mekanizma: yakın ilişki kurar, <b>A, B'yi temsil eder</b>.</p><p>Örnek: taç → kral(lık), Beyaz Saray → Amerikan yönetimi, stetoskop → doktorluk / sağlık, direksiyon → otomobil / sürüş deneyimi.</p><p class="note">Reklamdaki işlevi: parça üzerinden bütünü veya deneyimi göstermek.</p></div>
</div>
<div class="tip"><span class="tip-label">Kısaca</span>Metafor: benzerlik. Metonimi: yakın ilişki.</div>

<h3>Açık yapılar: benzetme ve analoji</h3>
<dl class="defs">
  <dt>Benzetme</dt><dd>İki şey arasındaki benzerliğin <b>açık biçimde</b> kurulması; metafordan farkı ilişkinin gizli değil açık olmasıdır. Metafor: "Bu otomobil bir roket." · Benzetme: "Bu otomobil roket <b>gibi</b> hızlı."</dd>
  <dt>Analoji</dt><dd>İki farklı yapının <b>çalışma (işleyiş) biçimleri</b> arasında benzerlik kurulması; karmaşık hizmetleri anlatmak için idealdir. Örnek: siber güvenlik sistemi = ev alarm sistemi; ikisi de tehdidi fark eder, uyarır, korur.</dd>
</dl>

<h3>Dört görsel teknik</h3>
<dl class="defs">
  <dt>Juxtaposition (yan yana getirme)</dt><dd>Normalde birlikte görmeye alışık olmadığımız iki öğenin yan yana getirilmesiyle yepyeni bir anlam (kıvılcım). Örnek: hamburger + dambıl = sağlıklı protein. <b>Önemli kural:</b> öğeler birleşmek zorunda değildir; yan yana gelmeleri izleyiciyi "Bu ikisi neden birlikte?" diye düşünmeye zorlar.</dd>
  <dt>Substitution (yerine koyma)</dt><dd>Beklenen bir görsel öğenin yerine başka bir öğe konur. Örnek: ampul (fikir/enerji) yerine kahve fincanı; mesaj "Kahve zihni açar." İzleyici beklenen nesneyi zihninde tamamlar ve yeni nesnenin neden onun yerine geçtiğini çözer; yaratıcı etki tamamen izleyicinin bu boşluğu doldurmasıyla sağlanır.</dd>
  <dt>Fusion (birleştirme)</dt><dd>İki ayrı nesnenin fiziksel/görsel özelliklerinin <b>tek bir hibrit nesnede</b> eritilmesi. Örnek: ayakkabı + otomobil lastiği = lastik tabanlı hibrit; yeni nesne iki tarafın özelliklerini taşır (dayanıklılık, yol tutuş, güç).</dd>
  <dt>Visual pun (görsel kelime oyunu)</dt><dd>Bir sözcüğün veya kavramın birden fazla anlamının aynı anda görsel olarak kullanılması; dilsel kelime oyununun görsel karşılığı. Örnek: LIGHT (hafif / ışık); "Sharp" kelimesinin keskin ve zeki/net anlamlarını aynı karede buluşturmak. Etki: "Aaa, anladım!" anı.</dd>
</dl>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Ayrım</th><th>Nasıl ayırt edilir?</th></tr></thead>
  <tbody>
    <tr><td>Juxtaposition – fusion</td><td>İki öğe yan yana → juxtaposition · iki öğe tek nesne olmuş → fusion</td></tr>
    <tr><td>Fusion – substitution</td><td>İki nesne birleşmiş → fusion · bir nesnenin yerine başkası geçmiş → substitution</td></tr>
  </tbody>
</table></div>

<h3>Kavramsal sıçrama (the conceptual leap)</h3>
<p>Ürünün doğrudan özelliğinden, <mark>beklenmedik fakat anlamlı başka bir kavrama</mark> yaratıcı biçimde geçmek. Yaratıcı reklam ürünü anlatmaz, ürünün sonucunu dramatize eder.</p>
<ol class="flow"><li>Ürün özelliği</li><li>Fayda</li><li>Çağrışım</li><li>Yeni kavram</li><li>Görsel fikir</li></ol>
<div class="cols two">
  <div class="box"><h4>Kahve</h4><p>Güçlü kahve → enerji → uyanmak → alarm → <b>kahve fincanı = alarm saati</b>.</p></div>
  <div class="box"><h4>Yapıştırıcı</h4><p>Çok güçlü yapıştırıcı → nesneleri sıkıca tutar → ayırmak mümkün değil → birbirine kenetlenmiş yapılar → <b>iki binayı birbirine yapışmış gibi göstermek</b>.</p></div>
</div>
<p class="note">Yaratıcı fikir doğrudan ürünün kendisinden değil, onun yarattığı çağrışım zincirinden çıkar.</p>

<h3>Gerçeklik: tekniklerin kesişimi</h3>
<p>Bir reklam aynı anda birden fazla teknik kullanabilir. Sunumdaki örnek: lastik olması gereken yerde çita bulunan otomobil → <b>substitution</b> (lastik yerine çita) + <b>metafor</b> (çita = hız ve vahşi güç transferi) + <b>yan anlam</b> (otomobilin sportif performansına dair çağrışım).</p>
<div class="tip"><span class="tip-label">Dikkat</span>"Bu reklamın tek doğru tekniği nedir?" sorusu her zaman doğru soru değildir. Doğru soru: <b>Reklam anlamı hangi görsel ilişkiler ağı üzerinden üretiyor?</b></div>

<h3>Bu bölümden aklında kalsın</h3>
<ul>
  <li>Metafor anlam transferidir; metonimi ilişki üzerinden temsil eder.</li>
  <li>Benzetme benzerliği açıkça kurar; analoji işleyiş benzerliğine dayanır.</li>
  <li>Juxtaposition iki şeyi yan yana getirir; substitution bir nesnenin yerine başka şey koyar; fusion iki nesneyi tek nesneye dönüştürür.</li>
  <li>Kavramsal sıçrama ürün faydasından başka bir kavrama geçiştir; rastlantısal değildir, çağrışım zincirine dayanır.</li>
  <li>Aynı reklamda birden fazla teknik bulunabilir.</li>
</ul>`
  },

  {
    id: `otopsi`, no: 6, title: `Reklam Otopsisi: Bir Reklamı Nasıl Çözümleriz?`,
    files: [`materyal/Reklamda_Yaraticilik_Ders_Calisma_Kitabi.docx`, `materyal/1_3_Reklamin_Anatomisi.pdf`],
    short: `<h4>12 adımlı çözümleme</h4>
<ul class="short-list">
<li>Doğrudan "Bu reklamda metafor var" demek yerine önce görüntüyü <b>sistematik</b> çöz.</li>
<li><b>1 Düz anlam:</b> tam olarak ne görüyorum? (henüz yorum yok) · <b>2 Görsel hiyerarşi:</b> ilk nereye, sonra nereye baktım? · <b>3 Kompozisyon:</b> odak, simetri/asimetri, ağırlık, negatif alan.</li>
<li><b>4 Gestalt:</b> şekil-zemin, yakınlık, benzerlik, tamamlama, devamlılık · <b>5 Görsel dil:</b> daire, kare, üçgen, yatay, dikey, diyagonal, eğri, grid · <b>6 Gösterenler ve gösterilenler</b>.</li>
<li><b>7 Yan anlam:</b> açıkça söylemeden ne anlatıyor? · <b>8 Gösterge türleri:</b> ikon, indeks, simge · <b>9 Mit:</b> hangi düşünceyi doğal/normal gösteriyor?</li>
<li><b>10 Görsel retorik:</b> metafor, metonimi, benzetme, analoji, juxtaposition, substitution, fusion, visual pun · <b>11 Kavramsal sıçrama:</b> hangi kavrama geçilmiş, neden anlamlı?</li>
<li><b>12 Marka bağlantısı</b> (en önemli soru): <mark>Bütün bunların markayla ilgisi ne?</mark> Analiz sonunda mutlaka marka ve iletişim problemine dönülür.</li>
<li>1.3 sunumundaki kısa şablon (8 adım): düz anlam → gösterenler → gösterilenler → yan anlam → gösterge türleri → mit → retorik teknik → marka ilişkisi. Yaratıcı reklam çözülecek bir bilmece değildir; inşa edilen anlam markaya dönmelidir.</li>
</ul>
<h4>Kısa karşılaştırma rehberi</h4>
<ul class="short-list">
<li>Benzerlik/özellik aktarımı → <b>metafor</b> · yakın ilişki/temsil → <b>metonimi</b>.</li>
<li>İki öğe yan yana → <b>juxtaposition</b> · tek nesne olmuş → <b>fusion</b> · bir nesnenin yerine başkası → <b>substitution</b>.</li>
<li>Benzeyerek temsil → <b>ikon</b> · iz, sonuç, nedensel bağ → <b>indeks</b> · öğrenilmiş kültürel ilişki → <b>simge</b>.</li>
<li>"Ne görüyorum?" → <b>düz anlam</b> · "Bana ne düşündürüyor?" → <b>yan anlam</b> · değer/ideolojinin doğal gerçeklik gibi sunulması → <b>mit</b>.</li>
<li>Temel yaratıcı düşünce → <b>Big Idea</b> · bu düşüncenin reklamda görünür hâli → <b>execution</b>.</li>
</ul>
<blockquote>Kötü reklam söyler. İyi reklam gösterir. Yaratıcı reklam ise izleyicinin anlamı kendisinin kurmasını sağlar.</blockquote>`,
    html: `
<p class="lead">Artık bütün kavramları tek bir analiz sisteminde birleştiriyoruz. Bir reklamı incelerken doğrudan "Bu reklamda metafor var." demek yerine önce görüntüyü <mark>sistematik biçimde</mark> çözmek gerekir.</p>

<h3>12 adımda reklam otopsisi</h3>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Adım</th><th>Soru</th></tr></thead>
  <tbody>
    <tr><td>1. Düz anlam</td><td>Tam olarak ne görüyorum? Henüz yorum yapmayın: insanlar, nesneler, mekân, renkler, yazılar ne?</td></tr>
    <tr><td>2. Görsel hiyerarşi</td><td>İlk nereye baktım? Sonra nereye? Bakışım nasıl yönlendirildi?</td></tr>
    <tr><td>3. Kompozisyon</td><td>Odak noktası nerede? Simetrik mi, asimetrik mi? Görsel ağırlık nerede? Negatif alan nasıl kullanılmış?</td></tr>
    <tr><td>4. Gestalt</td><td>Figure–ground, proximity, similarity, closure, continuation hangi biçimde kullanılmış?</td></tr>
    <tr><td>5. Görsel dil</td><td>Daire, kare, üçgen, yatay, dikey, diyagonal, eğri, grid: bu biçimler kompozisyona ne katıyor?</td></tr>
    <tr><td>6. Gösterenler ve gösterilenler</td><td>Hangi görsel unsur hangi kavrama yönlendiriyor?</td></tr>
    <tr><td>7. Yan anlam</td><td>Reklam açıkça söylemeden bana ne anlatıyor?</td></tr>
    <tr><td>8. Gösterge türleri</td><td>İkon? İndeks? Simge?</td></tr>
    <tr><td>9. Mit</td><td>Reklam hangi toplumsal veya kültürel düşünceyi doğal/normal gösteriyor?</td></tr>
    <tr><td>10. Görsel retorik</td><td>Metafor, metonimi, benzetme, analoji, juxtaposition, substitution, fusion, visual pun kullanılmış mı?</td></tr>
    <tr><td>11. Kavramsal sıçrama</td><td>Ürün özelliğinden hangi kavrama geçilmiş? Bu geçiş neden anlamlı?</td></tr>
    <tr><td><b>12. Marka bağlantısı</b></td><td><b>Bütün bunların markayla ilgisi ne?</b> Analizin sonunda mutlaka marka ve iletişim problemine dönülmeli.</td></tr>
  </tbody>
</table></div>
<p class="note">1.3 sunumundaki 8 adımlık şablon: düz anlam → gösterenler → gösterilenler → yan anlam → gösterge türleri → mit → retorik teknik → marka ilişkisi. "Yaratıcı reklam sadece çözülecek bir bilmece değildir; inşa edilen anlam mutlaka markaya dönmelidir."</p>

<h3>Sınavda reklam nasıl çözümlenir?</h3>
<ol class="steps">
  <li>Önce gördüğünüz şeyi tarafsız biçimde tanımlayın.</li>
  <li>Kompozisyon ve görsel hiyerarşiyi açıklayın.</li>
  <li>Gestalt ilkelerini belirleyin.</li>
  <li>Şekil, çizgi ve negatif alanın kullanımını değerlendirin.</li>
  <li>Gösterenleri ve gösterilenleri ayırın.</li>
  <li>Düz anlam ile yan anlamı açıklayın.</li>
  <li>İkon, indeks ve simgeleri belirleyin.</li>
  <li>Varsa mit düzeyini açıklayın.</li>
  <li>Görsel retorik tekniğini analiz edin.</li>
  <li>Kavramsal sıçramayı bulun.</li>
  <li>Bütün bunların marka ve iletişim problemiyle ilişkisini açıklayın.</li>
</ol>

<h3>Kısa karşılaştırma rehberi</h3>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Karışan çift</th><th>Ayırt edici</th></tr></thead>
  <tbody>
    <tr><td>Metafor mu, metonimi mi?</td><td>Benzerlik / özellik aktarımı → metafor · yakın ilişki / temsil → metonimi</td></tr>
    <tr><td>Juxtaposition mı, fusion mı?</td><td>İki öğe yan yana → juxtaposition · iki öğe tek nesne olmuş → fusion</td></tr>
    <tr><td>Fusion mı, substitution mı?</td><td>İki nesne birleşmiş → fusion · bir nesnenin yerine başkası geçmiş → substitution</td></tr>
    <tr><td>İkon mu, indeks mi?</td><td>Benzeyerek temsil → ikon · iz, sonuç veya nedensel bağ → indeks</td></tr>
    <tr><td>İndeks mi, simge mi?</td><td>Fiziksel / nedensel ilişki → indeks · öğrenilmiş kültürel ilişki → simge</td></tr>
    <tr><td>Düz anlam mı, yan anlam mı?</td><td>Ne görüyorum? → düz anlam · Bana ne düşündürüyor? → yan anlam</td></tr>
    <tr><td>Yan anlam mı, mit mi?</td><td>Kültürel çağrışım → yan anlam · bir değer veya ideolojinin doğal gerçeklik gibi sunulması → mit</td></tr>
    <tr><td>Big Idea mı, execution mı?</td><td>Temel yaratıcı düşünce → Big Idea · bu düşüncenin reklamda görünür hâli → execution</td></tr>
  </tbody>
</table></div>

<h3>Referans matrisi (sunum 1.3)</h3>
<div class="table-wrap"><table class="tbl">
  <thead><tr><th>Kavram</th><th>En basit tanım</th><th>Temel soru</th></tr></thead>
  <tbody>
    <tr><td>Gösterge</td><td>Başka bir şeyi temsil eden şey</td><td>Bu neyi temsil ediyor?</td></tr>
    <tr><td>Gösteren</td><td>Gördüğümüz/duyduğumuz biçim</td><td>Ne görüyorum?</td></tr>
    <tr><td>Gösterilen</td><td>Zihinsel kavram</td><td>Bana ne düşündürüyor?</td></tr>
    <tr><td>Düz anlam</td><td>Doğrudan görülen</td><td>Ekranda fiziksel olarak ne var?</td></tr>
    <tr><td>Yan anlam</td><td>Çağrışımsal anlam</td><td>Ne ima ediyor?</td></tr>
    <tr><td>İkon</td><td>Benzeyerek temsil</td><td>Neye benziyor?</td></tr>
    <tr><td>İndeks</td><td>Nedensel/fiziksel bağ</td><td>Neyin izi/sonucu?</td></tr>
    <tr><td>Simge</td><td>Kültürel uzlaşı</td><td>Anlamını nereden öğrendik?</td></tr>
    <tr><td>Mit</td><td>İdeolojinin doğallaştırılması</td><td>Ne normalmiş gibi sunuluyor?</td></tr>
    <tr><td>Metafor</td><td>Bir şeyi başka bir şey üzerinden anlatma</td><td>A, B olarak mı kurulmuş?</td></tr>
    <tr><td>Metonimi</td><td>İlişkili bir şeyle temsil</td><td>Parça/ilişki neyi temsil ediyor?</td></tr>
    <tr><td>Benzetme</td><td>Benzerliği açıkça kurma</td><td>"Gibi" ilişkisi var mı?</td></tr>
    <tr><td>Analoji</td><td>İşleyiş benzerliği</td><td>Bunların çalışma biçimi nasıl benziyor?</td></tr>
    <tr><td>Juxtaposition</td><td>Yan yana getirme</td><td>Neden bu ikisi birlikte?</td></tr>
    <tr><td>Substitution</td><td>Yerine koyma</td><td>Burada olması gerekenin yerine ne gelmiş?</td></tr>
    <tr><td>Fusion</td><td>İki nesneyi birleştirme</td><td>Hangi iki şey tek bir nesneye dönüşmüş?</td></tr>
    <tr><td>Visual pun</td><td>Görsel çift anlam</td><td>Hangi iki anlamla kelime oyunu yapıyor?</td></tr>
  </tbody>
</table></div>

<h3>Vize çalışma soruları (çalışma kitabından)</h3>
<ol class="steps">
  <li>Reklamda yaratıcılığın iki temel boyutu olan özgünlük ve uygunluk kavramlarını açıklayınız.</li>
  <li>Reklam tasarımında görsel hiyerarşi ve odak noktası kavramlarını açıklayınız. Negatif alanın reklam kompozisyonundaki işlevleri nelerdir?</li>
  <li>Geometrik şekiller ve çizgiler reklam tasarımında algıyı nasıl etkiler? Daire, kare, üçgen ve diyagonal çizgilerin oluşturabileceği anlamları açıklayınız.</li>
  <li>Göstergebilimde gösteren ve gösterilen ile düz anlam ve yan anlam kavramlarını açıklayınız.</li>
  <li>Reklamda kullanılan metafor ve metonimi arasındaki farkı açıklayınız.</li>
  <li>Terimlerden oluşan boşluk doldurma.</li>
</ol>
<div class="tip"><span class="tip-label">Altın kural</span><b>Kötü reklam söyler. İyi reklam gösterir. Yaratıcı reklam ise izleyicinin anlamı kendisinin kurmasını sağlar.</b></div>`
  }
],

cards: [
  // 1 · yaraticilik
  [`yaraticilik`, `Reklam yaratıcılığının formülü?`, `<b>Yaratıcılık = Özgünlük × Uygunluk</b>`],
  [`yaraticilik`, `Özgünlük (originality) nedir?`, `Fikrin <b>alışılmış çözümlerden ayrılması</b>.`],
  [`yaraticilik`, `Uygunluk (relevance) nedir?`, `Fikrin marka, ürün, hedef kitle ve iletişim problemiyle <b>anlamlı ilişkisi</b>.`],
  [`yaraticilik`, `Teşhis matrisinde "özgün ama uygun değil" ne olur?`, `<b>Sanat / kafa karıştırıcı.</b><br>(Uygun ama özgün değil: kategori kodu / sıkıcı · ikisi düşük: gürültü)`],
  [`yaraticilik`, `Kategori kodu nedir? Kahve örneği?`, `Kategoriyle tekrarla ilişkilenmiş tanıdık unsur.<br>Fincan, kahve çekirdeği, buhar, sabah, kahverengi tonlar, çalışan insan.`],
  [`yaraticilik`, `Kategori kodu ile yaratıcı fikir farkı?`, `Kod ürünü <b>tanıtır</b>; yaratıcı fikir <b>beklenmedik ama anlamlı yeni ilişki</b> kurar.`],
  [`yaraticilik`, `Yaratıcı fikrin yapısı (5 adım)?`, `Problem → İçgörü → Strateji → Big Idea → Creative Execution`],
  [`yaraticilik`, `İçgörü (insight) nedir?`, `Tüketici davranışının altındaki <b>insan gerçeği</b>; çoğu zaman ürün değil insan davranışı hakkında.`],
  [`yaraticilik`, `Emniyet kemeri vakasının Big Idea'sı?`, `<b>"Kaza evinizden birkaç metre uzakta da olabilir."</b>`],
  [`yaraticilik`, `Big Idea ile execution farkı?`, `Big Idea temel yaratıcı düşünce; execution onun görünür/duyulur hâli. <b>Big Idea reklam değildir.</b>`],
  [`yaraticilik`, `Altın kural: ne değişir, ne sabit kalır?`, `<b>Execution</b> (görsel, metin, mecra) değişir; <b>Big Idea</b> ve içgörü sabit kalır.`],
  [`yaraticilik`, `Transmedya nedir?`, `Marka hikâyesinin farklı mecralarda <b>aynı mesajı tekrarlamak yerine farklı parçalarla genişletilmesi</b>.`],
  [`yaraticilik`, `Divergence nedir?`, `Alışılmış düşünce yollarından uzaklaşıp <b>farklı çözümler üretme</b> kapasitesi.`],

  // 2 · kompozisyon
  [`kompozisyon`, `Görsel algı nedir?`, `Gözün aldığı bilginin beyin tarafından <b>seçilmesi, düzenlenmesi ve anlamlandırılması</b>.`],
  [`kompozisyon`, `Reklam için işlevsel kompozisyon tanımı?`, `İzleyicinin <b>neyi, hangi sırayla ve hangi ilişkiler içinde</b> göreceğinin düzenlenmesi.`],
  [`kompozisyon`, `Odak noktası hangi araçlarla oluşturulur?`, `Büyüklük, renk, kontrast, ışık, izolasyon, konum, yüz, yön.`],
  [`kompozisyon`, `Görsel hiyerarşi nedir?`, `Algılanma sırasının düzenlenmesi: <b>bakış sırasının tasarımı</b>.`],
  [`kompozisyon`, `Ürün her zaman ilk görülen öğe mi olmalı?`, `Hayır. Bilinçli rota: <b>problem → headline → ürün → logo</b>.`],
  [`kompozisyon`, `Negatif alanın işlevleri?`, `Ana nesneyi vurgular, kalabalığı azaltır, premium algı yaratır, ikinci şekil ve gizli anlam oluşturur.`],
  [`kompozisyon`, `Görsel ağırlığı ne artırır?`, `Büyüklük, koyuluk, renk yoğunluğu, kontrast, karmaşık doku, insan yüzü, izolasyon.`],
  [`kompozisyon`, `Asimetri dengesiz demek midir?`, `<b>Hayır.</b> Öğeler aynı değildir ama görsel ağırlık dengelenmiştir; hareket, dinamizm, enerji yaratır.`],
  [`kompozisyon`, `Gestalt'ın temel düşüncesi?`, `Zihin görüntüleri parçalar yerine <b>anlamlı bütünler</b> olarak örgütler.`],
  [`kompozisyon`, `Proximity ile similarity farkı?`, `<b>Proximity:</b> yakın öğeler aynı grup.<br><b>Similarity:</b> renk/biçim/büyüklükte benzeyenler birlikte.`],
  [`kompozisyon`, `Closure ilkesinde izleyicinin rolü?`, `Eksik bırakılan görüntüyü <b>zihninde tamamlar</b>.`],
  [`kompozisyon`, `Continuation reklamda nasıl kullanılır?`, `Yol, çizgi, beden yönü, insan bakışı, perspektifle <b>gözü başka noktaya taşımak</b>.`],

  // 3 · sekiller
  [`sekiller`, `Şekillerin anlamı hakkında temel uyarı?`, `Hiçbir şeklin evrensel tek anlamı yoktur; anlam <b>bağlama</b>, renge, yöne, kültüre göre değişir. Bunlar eğilimdir.`],
  [`sekiller`, `Daire hangi algıları destekler?`, `Bütünlük, birlik, süreklilik, yumuşaklık, kapsayıcılık (köşesiz, kesintisiz).`],
  [`sekiller`, `Kare/dikdörtgen hangi algıları destekler?`, `Güven, sağlamlık, yapı, düzen, istikrar.`],
  [`sekiller`, `Üçgenin yönlere göre anlamı?`, `Yukarı: yükselme, hedef, güç · sağa: hareket, ilerleme · ters: <b>görsel gerilim</b>.`],
  [`sekiller`, `Diyagonal çizgi neden hareketli algılanır?`, `Yatay/dikey <b>stabiliteyi bozar</b>: hareket, hız, enerji, gerilim.`],
  [`sekiller`, `Yatay ve dikey çizgi?`, `<b>Yatay:</b> sakinlik, genişlik, istikrar (ufuk).<br><b>Dikey:</b> yükselme, güç, otorite.`],
  [`sekiller`, `Spiral neyi çağrıştırır?`, `Hareket, dönüşüm, devamlılık, merkeze çekilme.`],
  [`sekiller`, `Grid nedir, ne sağlar?`, `Tasarımın görünmeyen iskeleti: hizalama, tutarlılık, düzen, okunabilirlik, hiyerarşi.`],
  [`sekiller`, `Grid'i bozmakla ilgili kural?`, `"<b>Kuralı bilmeden kuralı bozmak yaratıcılık değil, tesadüftür.</b>"`],

  // 4 · gostergebilim
  [`gostergebilim`, `Göstergebilim neyi inceler?`, `Anlamın <b>göstergeler aracılığıyla nasıl üretildiğini</b>.`],
  [`gostergebilim`, `Gösterge nedir?`, `Kendisi dışında <b>başka bir şeyi temsil eden</b> unsur (kalp → aşk, sevgi…).`],
  [`gostergebilim`, `Gösteren ve gösterilen farkı?`, `<b>Gösteren:</b> fiziksel biçim (kırmızı gül).<br><b>Gösterilen:</b> zihinsel kavram (aşk, tutku).`],
  [`gostergebilim`, `Gösteren ile gösterilen bağı doğal mıdır?`, `Hayır; <b>kültürel olarak öğrenilir</b> (beyaz: kültür A'da saflık, B'de yas).`],
  [`gostergebilim`, `Düz anlam ve yan anlam soruları?`, `Düz anlam: "Ne görüyorum?"<br>Yan anlam: "Bu bana ne anlatıyor?"`],
  [`gostergebilim`, `Peirce'in üç gösterge türü?`, `<b>İkon</b> (benzerlik), <b>indeks</b> (neden/fiziksel bağ), <b>simge</b> (kültürel uzlaşı).`],
  [`gostergebilim`, `Duman neden indekstir?`, `Ateşle <b>nedensel/fiziksel bağı</b> vardır (ateşin izi/sonucu).`],
  [`gostergebilim`, `Bayrak neden simgedir?`, `Benzerlik yoktur; anlamı <b>kültürel uzlaşıyla öğrenilir</b>.`],
  [`gostergebilim`, `Kırıntılı boş tabak ne anlatır? Hangi tür?`, `"Yemek çok lezzetliydi." <b>İndeks</b>: nedeni göstermeden sonucu gösterir.`],
  [`gostergebilim`, `Barthes'a göre mit nedir?`, `Kültürel bir düşüncenin <b>doğal veya kendiliğindenmiş gibi</b> sunulması.`],
  [`gostergebilim`, `Takım elbiseli erkek + lüks otomobil örneğinde mit?`, `<b>"Başarılı insan böyle yaşar."</b> (Yan anlam: başarı, statü, kontrol)`],

  // 5 · retorik
  [`retorik`, `Görsel retorik nedir?`, `İkna edici anlamın <b>görsel ilişkiler aracılığıyla</b> kurulması.`],
  [`retorik`, `Metafor ve mekanizması?`, `Bir şeyi başka bir şey üzerinden anlamlandırmak: <b>anlam transferi</b> (otomobil = panter).`],
  [`retorik`, `Metonimi ve örnekleri?`, `<b>Yakın ilişki</b> üzerinden temsil: taç → kral, stetoskop → doktorluk, direksiyon → otomobil.`],
  [`retorik`, `Benzetme ile metafor farkı?`, `Benzetme benzerliği <b>açıkça</b> kurar: "roket gibi hızlı" · metafor: "bu otomobil bir roket".`],
  [`retorik`, `Analoji?`, `İki yapının <b>işleyiş benzerliği</b>: siber güvenlik = ev alarm sistemi.`],
  [`retorik`, `Juxtaposition?`, `Alışık olmadığımız iki öğeyi <b>yan yana</b> getirmek (hamburger + dambıl).`],
  [`retorik`, `Substitution?`, `Beklenen nesnenin <b>yerine</b> başkasını koymak (ampul yerine kahve fincanı).`],
  [`retorik`, `Fusion?`, `İki nesneyi fiziksel olarak <b>tek hibrit nesneye</b> dönüştürmek (ayakkabı + lastik).`],
  [`retorik`, `Visual pun?`, `Bir sözcüğün birden fazla anlamını <b>görsel</b> kullanmak (LIGHT: hafif + ışık) → "Aaa, anladım!"`],
  [`retorik`, `Kavramsal sıçrama zinciri?`, `Ürün özelliği → fayda → çağrışım → yeni kavram → görsel fikir.`],
  [`retorik`, `Güçlü kahve için kavramsal sıçrama örneği?`, `Güçlü kahve → enerji → uyanmak → alarm → <b>kahve fincanı = alarm saati</b>.`],

  // 6 · otopsi
  [`otopsi`, `Reklam otopsisinin ilk adımı?`, `<b>Düz anlam:</b> tam olarak ne görüyorum? (henüz yorum yok)`],
  [`otopsi`, `Reklam otopsisinin en önemli (son) sorusu?`, `<b>Bütün bunların markayla ilgisi ne?</b> (marka ve iletişim problemine dönmek)`],
  [`otopsi`, `Yan anlam ile mit nasıl ayrılır?`, `Yan anlam: kültürel çağrışım · mit: değer/ideolojinin <b>doğal gerçeklik gibi</b> sunulması.`],
  [`otopsi`, `İndeks ile simge nasıl ayrılır?`, `İndeks: fiziksel/nedensel ilişki · simge: <b>öğrenilmiş kültürel</b> ilişki.`],
  [`otopsi`, `Altın kural: kötü, iyi ve yaratıcı reklam?`, `Kötü reklam <b>söyler</b>. İyi reklam <b>gösterir</b>. Yaratıcı reklam izleyicinin anlamı <b>kendisinin kurmasını</b> sağlar.`]
],

questions: [
  // 1 · yaraticilik
  { u: `yaraticilik`, q: `Ders materyaline göre reklam yaratıcılığının iki temel boyutu hangisidir?`,
    o: [`Özgünlük ve uygunluk`, `Estetik ve mizah`, `Bütçe ve mecra`, `Şaşırtıcılık ve hız`],
    e: `Yaratıcılık = Özgünlük × Uygunluk; başarılı yaratıcılık ikisinin kesişiminde ortaya çıkar.` },
  { u: `yaraticilik`, q: `Çok özgün ama markayla ilgisiz bir fikir teşhis matrisinde nereye düşer?`,
    o: [`Sanat / kafa karıştırıcı`, `Gerçek yaratıcılık`, `Kategori kodu / sıkıcı`, `Gürültü`],
    e: `Özgünlük yüksek, uygunluk düşük alan "sanat / kafa karıştırıcı" olarak adlandırılır.` },
  { u: `yaraticilik`, q: `Çok uygun ama herkesin kullandığı kalıpları tekrar eden reklam nasıl nitelendirilir?`,
    o: [`Doğru ama yaratıcı olmayan çözüm`, `Gerçek yaratıcılık`, `Kafa karıştırıcı sanat`, `Transmedya`],
    e: `Uygunluk yüksek, özgünlük düşük çözüm kategori kodu / sıkıcı alanındadır: doğru ama yaratıcı değildir.` },
  { u: `yaraticilik`, q: `Kahve reklamlarındaki fincan, çekirdek, buhar ve sabah görüntüleri nedir?`,
    o: [`Kategori kodları`, `Big Idea`, `İçgörü`, `Kavramsal sıçrama`],
    e: `Kategori kodları ürünü tanımayı sağlar ama tek başına yaratıcı fikir değildir.` },
  { u: `yaraticilik`, q: `"İnsanlar kısa mesafeyi daha güvenli algılıyor ve 'bana bir şey olmaz' diye düşünüyor." Bu, emniyet kemeri vakasında hangi adımdır?`,
    o: [`İçgörü`, `Problem`, `Strateji`, `Creative execution`],
    e: `İçgörü, tüketici davranışının altındaki insan gerçeğidir.` },
  { u: `yaraticilik`, q: `"Kaza evinizden birkaç metre uzakta da olabilir." ifadesi hangi adımın karşılığıdır?`,
    o: [`Big Idea`, `İçgörü`, `Problem`, `Kategori kodu`],
    e: `Big Idea, stratejinin (kazanın mesafeyle ilgisiz olduğunu hissettirmek) yaratıcı düşünceye dönüşmüş hâlidir.` },
  { u: `yaraticilik`, q: `Big Idea ile reklam arasındaki ilişki hangisinde doğru verilmiştir?`,
    o: [`Reklam, Big Idea'nın görünür hâlidir`, `Big Idea reklamın kendisidir`, `Big Idea yalnızca afişte kullanılır`, `Reklam içgörünün yerine geçer`],
    e: `Büyük fikir reklam değildir; reklam onun uygulanmış biçimlerinden biridir.` },
  { u: `yaraticilik`, q: `Sunumdaki "altın kural"a göre hangisi sabit kalır?`,
    o: [`Big Idea ve altındaki içgörü`, `Görsel`, `Metin`, `Mecra`],
    e: `Execution (görsel, metin, mecra) değişebilir; fikir ve insan gerçeği sabittir.` },
  { u: `yaraticilik`, q: `Marka hikâyesinin farklı mecralarda aynı mesajın tekrarı yerine farklı parçalarla genişletilmesine ne denir?`,
    o: [`Transmedya`, `Kampanya yönetimi`, `Kategori kodu`, `Divergence`],
    e: `Geleneksel kampanya aynı mesajı tekrarlar; transmedya aynı mitolojinin farklı yüzlerini gösterir.` },

  // 2 · kompozisyon
  { u: `kompozisyon`, q: `Reklam açısından kompozisyonun işlevsel tanımı hangisidir?`,
    o: [`İzleyicinin neyi, hangi sırayla ve hangi ilişkiler içinde göreceğinin düzenlenmesi`, `Öğelerin rastgele dağıtılması`, `Yalnızca renk seçimi`, `Logonun büyütülmesi`],
    e: `Kompozisyon, izleyicinin bakış rotasını yöneten sistemdir.` },
  { u: `kompozisyon`, q: `Hangisi odak noktası oluşturma araçlarından biri değildir?`,
    o: [`Kategori kodu`, `Kontrast`, `İzolasyon`, `İnsan yüzü`],
    e: `Odak araçları: büyüklük, renk, kontrast, ışık, izolasyon, konum, yüz, yön.` },
  { u: `kompozisyon`, q: `"Bakış sırasının tasarımı" hangi kavramın tanımıdır?`,
    o: [`Görsel hiyerarşi`, `Negatif alan`, `Simetri`, `Closure`],
    e: `Görsel hiyerarşi, görsel öğelerin algılanma sırasının düzenlenmesidir.` },
  { u: `kompozisyon`, q: `Negatif alan için hangisi doğrudur?`,
    o: [`Ana nesneyi vurgulayabilir ve premium algı yaratabilir`, `Kullanılmamış, boşa giden alandır`, `Her zaman doldurulmalıdır`, `Yalnızca logoyu çevreler`],
    e: `Boşluk da tasarım unsurudur: vurgular, kalabalığı azaltır, premium algı ve gizli anlam yaratır.` },
  { u: `kompozisyon`, q: `Asimetri ile ilgili hangisi doğrudur?`,
    o: [`Öğeler aynı değildir ama görsel ağırlık dengelenmiştir`, `Asimetri her zaman dengesizliktir`, `Asimetri sakinlik ve durağanlık yaratır`, `Asimetri simetrinin aynısıdır`],
    e: `Asimetrik olmak dengesiz olmak değildir; asimetri hareket, dinamizm ve enerji yaratabilir.` },
  { u: `kompozisyon`, q: `Birbirine yakın öğelerin aynı gruba aitmiş gibi algılanması hangi Gestalt ilkesidir?`,
    o: [`Proximity (yakınlık)`, `Similarity (benzerlik)`, `Closure (tamamlama)`, `Continuation (devamlılık)`],
    e: `Mekânsal yakınlık zihinsel ilişki oluşturur.` },
  { u: `kompozisyon`, q: `Bazı reklamlarda bütün görüntünün verilmeyip izleyicinin tamamlamasının beklenmesi hangi ilkedir?`,
    o: [`Closure (tamamlama)`, `Figure–ground`, `Proximity`, `Similarity`],
    e: `Zihin eksik görsel biçimleri tamamlamaya eğilimlidir.` },
  { u: `kompozisyon`, q: `Yol, çizgi, beden yönü ve insan bakışıyla gözün başka bir noktaya taşınması hangi ilkedir?`,
    o: [`Continuation (devamlılık)`, `Similarity`, `Closure`, `Proximity`],
    e: `Göz çizgileri ve yönleri takip etmeye eğilimlidir.` },

  // 3 · sekiller
  { u: `sekiller`, q: `"Daire her zaman sıcaklık ifade eder" önermesi neden yanlıştır?`,
    o: [`Şekillerin evrensel tek anlamı yoktur; anlam bağlama göre değişir`, `Daire yalnızca tehlike ifade eder`, `Daire hiçbir anlam taşımaz`, `Daire yalnızca logolarda kullanılır`],
    e: `Şekil anlamları kesin kurallar değil, bağlama göre değişen algısal eğilimlerdir.` },
  { u: `sekiller`, q: `Köşesiz ve kesintisiz yapısıyla bütünlük, birlik ve süreklilik algısını destekleyen şekil hangisidir?`,
    o: [`Daire`, `Kare`, `Ters üçgen`, `Keskin köşeli biçim`],
    e: `Dairenin köşesi yoktur ve kesintisizdir.` },
  { u: `sekiller`, q: `Güven, sağlamlık, düzen ve istikrar algısını destekleyen şekil hangisidir?`,
    o: [`Kare ve dikdörtgen`, `Spiral`, `Diyagonal çizgi`, `Ters üçgen`],
    e: `Kare ve dikdörtgen belirgin sınırlar ve dengeli bir yapı taşır.` },
  { u: `sekiller`, q: `Görsel gerilim yaratabilen üçgen hangisidir?`,
    o: [`Ters üçgen`, `Yukarı yönelen üçgen`, `Sağa yönelen üçgen`, `Eşkenar daire`],
    e: `Ters üçgende geniş kütle dar noktada dengede durmaya çalışır; gerilim yaratır.` },
  { u: `sekiller`, q: `Hareket, hız, enerji ve gerilim yaratan çizgi hangisidir?`,
    o: [`Diyagonal çizgi`, `Yatay çizgi`, `Dikey çizgi`, `Eğri çizgi`],
    e: `Diyagonal çizgi yatay/dikey stabiliteyi bozar.` },
  { u: `sekiller`, q: `Ufuk çizgisini hatırlatarak sakinlik ve istikrar hissi yaratan çizgi hangisidir?`,
    o: [`Yatay çizgi`, `Dikey çizgi`, `Diyagonal çizgi`, `Keskin köşeli çizgi`],
    e: `Yatay: sakinlik, genişlik, istikrar · dikey: yükselme, güç, otorite.` },
  { u: `sekiller`, q: `Grid için hangisi doğrudur?`,
    o: [`Tasarımın görünmeyen iskeletidir; hizalama ve okunabilirlik sağlar`, `Yalnızca dekoratif bir çizimdir`, `Asla bozulamaz`, `Görsel hiyerarşiyi ortadan kaldırır`],
    e: `Grid bilinçli bozulabilir; ama kuralı bilmeden bozmak yaratıcılık değil tesadüftür.` },

  // 4 · gostergebilim
  { u: `gostergebilim`, q: `Göstergenin algılanabilir fiziksel biçimine ne denir?`,
    o: [`Gösteren`, `Gösterilen`, `Mit`, `Yan anlam`],
    e: `Gösteren fiziksel biçim (kırmızı gül); gösterilen zihindeki kavramdır (aşk).` },
  { u: `gostergebilim`, q: `Gösteren ile gösterilen arasındaki ilişki için hangisi doğrudur?`,
    o: [`Çoğu zaman kültürel olarak öğrenilir`, `Her kültürde aynıdır`, `Doğal ve zorunludur`, `Yalnızca fotoğraflarda vardır`],
    e: `Beyaz bir kültürde saflığı, başka bir kültürde yası anlatabilir.` },
  { u: `gostergebilim`, q: `"Bir kadın beyaz elbise giyiyor." ifadesi hangi anlam katmanıdır?`,
    o: [`Düz anlam (denotation)`, `Yan anlam (connotation)`, `Mit`, `Simge`],
    e: `Düz anlam doğrudan görülendir; saflık, düğün, masumiyet ise yan anlamdır.` },
  { u: `gostergebilim`, q: `Fotoğraf, ürün resmi ve portre Peirce'e göre hangi gösterge türüdür?`,
    o: [`İkon`, `İndeks`, `Simge`, `Mit`],
    e: `İkon temsil ettiği şeye benzerlik yoluyla bağlanır.` },
  { u: `gostergebilim`, q: `Ayak izi → "biri geçti", ter → "efor" ilişkileri hangi gösterge türüdür?`,
    o: [`İndeks`, `İkon`, `Simge`, `Benzetme`],
    e: `İndeks temsil ettiği şeyle fiziksel veya nedensel bağlantı taşır.` },
  { u: `gostergebilim`, q: `Anlamı toplumsal uzlaşıyla öğrenilen bayrak, trafik işareti ve marka logosu hangi türdür?`,
    o: [`Simge`, `İkon`, `İndeks`, `Düz anlam`],
    e: `Simgede fiziksel benzerlik yoktur; anlam kültürel uzlaşıdan gelir.` },
  { u: `gostergebilim`, q: `Kültürde oluşturulmuş bir düşüncenin doğal veya kendiliğindenmiş gibi sunulmasına ne denir?`,
    o: [`Mit`, `Yan anlam`, `İndeks`, `Kategori kodu`],
    e: `Barthes'a göre mit, ideolojinin doğallaştırılmasıdır ("Başarılı insan böyle yaşar").` },
  { u: `gostergebilim`, q: `Göstergebilimin "üç büyük mimarı" olarak sunumda hangileri anılır?`,
    o: [`Saussure, Peirce, Barthes`, `Freud, Jung, Adler`, `Comte, Durkheim, Weber`, `Lasswell, McLuhan, Goffman`],
    e: `1.2 sunumunda reklamı çözümlemek için Saussure, Peirce ve Barthes'ı bilmek yeterli denir.` },

  // 5 · retorik
  { u: `retorik`, q: `Otomobil = panter görseli hangi tekniktir?`,
    o: [`Metafor`, `Metonimi`, `Juxtaposition`, `Visual pun`],
    e: `Metafor anlam transferidir: panterin hız, çeviklik ve gücü otomobile aktarılır.` },
  { u: `retorik`, q: `Taç → kral, stetoskop → doktorluk ilişkileri hangi tekniktir?`,
    o: [`Metonimi`, `Metafor`, `Analoji`, `Fusion`],
    e: `Metonimi, bir şeyi onunla yakın ilişkili başka bir şeyle temsil eder.` },
  { u: `retorik`, q: `"Bu otomobil roket gibi hızlı." cümlesi hangi tekniktir?`,
    o: [`Benzetme`, `Metafor`, `Metonimi`, `Substitution`],
    e: `Benzetme benzerliği açıkça ("gibi") kurar; metafor "Bu otomobil bir roket." der.` },
  { u: `retorik`, q: `Siber güvenlik sistemini ev alarm sistemine benzetmek hangi tekniktir?`,
    o: [`Analoji`, `Metonimi`, `Visual pun`, `Juxtaposition`],
    e: `Analoji iki yapının çalışma biçimleri arasında benzerlik kurar: ikisi de tehdidi fark eder, uyarır, korur.` },
  { u: `retorik`, q: `Hamburger ile dambılın birleşmeden yan yana konması hangi tekniktir?`,
    o: [`Juxtaposition`, `Fusion`, `Substitution`, `Metonimi`],
    e: `Juxtaposition'da öğeler birleşmek zorunda değildir; yeni anlam "Bu ikisi neden birlikte?" sorusundan doğar.` },
  { u: `retorik`, q: `Ampul yerine kahve fincanı konması hangi tekniktir?`,
    o: [`Substitution`, `Fusion`, `Juxtaposition`, `Analoji`],
    e: `Substitution'da beklenen nesnenin yerine başka nesne konur; izleyici boşluğu doldurarak aktif hâle gelir.` },
  { u: `retorik`, q: `Ayakkabı ile otomobil lastiğinin tek bir hibrit nesneye dönüşmesi hangi tekniktir?`,
    o: [`Fusion`, `Juxtaposition`, `Substitution`, `Benzetme`],
    e: `Fusion'da iki nesne fiziksel olarak birleşir; juxtaposition'da ayrı kalır.` },
  { u: `retorik`, q: `Bir sözcüğün iki anlamını aynı görselde kullanarak "Aaa, anladım!" etkisi yaratan teknik hangisidir?`,
    o: [`Visual pun`, `Metonimi`, `Analoji`, `Substitution`],
    e: `Visual pun, dilsel kelime oyununun görsel karşılığıdır (LIGHT: hafif + ışık).` },
  { u: `retorik`, q: `Kavramsal sıçramanın doğru sıralaması hangisidir?`,
    o: [`Ürün özelliği → fayda → çağrışım → yeni kavram → görsel fikir`, `Görsel fikir → fayda → ürün özelliği → çağrışım → yeni kavram`, `Fayda → ürün özelliği → görsel fikir → çağrışım → yeni kavram`, `Çağrışım → görsel fikir → ürün özelliği → fayda → yeni kavram`],
    e: `Yaratıcı fikir ürünün kendisinden değil, yarattığı çağrışım zincirinden çıkar.` },

  // 6 · otopsi
  { u: `otopsi`, q: `Reklam otopsisinde analiz hangi soruyla bitmelidir?`,
    o: [`Bütün bunların markayla ilgisi ne?`, `Reklam kaç renk kullanıyor?`, `Reklam kaç saniye sürüyor?`, `Tek doğru teknik hangisi?`],
    e: `En önemli soru marka bağlantısıdır; analiz mutlaka marka ve iletişim problemine dönmelidir.` },
  { u: `otopsi`, q: `Reklam çözümlerken ilk adım hangisidir?`,
    o: [`Gördüğünü yorum yapmadan tarafsızca tanımlamak (düz anlam)`, `Mit düzeyini açıklamak`, `Retorik tekniği belirlemek`, `Kavramsal sıçramayı bulmak`],
    e: `İlk adım düz anlamdır: "Tam olarak ne görüyorum?"` },
  { u: `otopsi`, q: `Karşılaştırma rehberine göre "bir değer veya ideolojinin doğal gerçeklik gibi sunulması" nedir?`,
    o: [`Mit`, `Yan anlam`, `Düz anlam`, `İkon`],
    e: `Kültürel çağrışım yan anlamdır; ideolojinin doğal gerçeklik gibi sunulması mittir.` },
  { u: `otopsi`, q: `Materyaldeki "altın kural"a göre yaratıcı reklam ne yapar?`,
    o: [`İzleyicinin anlamı kendisinin kurmasını sağlar`, `Her şeyi açıkça söyler`, `Yalnızca ürünü gösterir`, `Kategori kodlarını tekrarlar`],
    e: `Kötü reklam söyler, iyi reklam gösterir, yaratıcı reklam anlamı izleyiciye kurdurur.` }
]
});
