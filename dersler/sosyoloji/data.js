// Sosyoloji — 2.–6. hafta sunumları ve okuma metinlerinden derlenen içerik.
// Her şey ders materyallerine dayanır; materyallerde olmayan bilgi eklenmemiştir.
// "fromPdf" taşıyan konular, PDF'lerde sarıyla işaretlenmiş yerlerin özetidir.
// Alanların açıklaması için README.md > "Yeni ders eklemek".

(window.DERSLER = window.DERSLER || []).push({
  id: `sosyoloji`,
  title: `Sosyoloji`,
  exam: `Vize`,
  hue: 200,
  unitWord: `Konu`,
  description: `Sosyal bilimlerin doğuşu, Aydınlanma, Fransız ve Sanayi devrimleri, modernite, sosyolojik imgelem, sosyolojik düşünmek ve Auguste Comte. Haftalara göre; PDF'lerde sarıyla işaretli yerlerin özetleri dahil.`,
  source: `Sosyoloji 2.–6. hafta sunumları ve okuma metinleri`,

groups: [
  { id: `h2`, title: `2. Hafta` },
  { id: `h3`, title: `3. Hafta` },
  { id: `h4`, title: `4. Hafta` },
  { id: `h5`, title: `5. Hafta` },
  { id: `h6`, title: `6. Hafta` },
  { id: `genel`, title: `Genel Tekrar` }
],

materials: [
  { group: `h2`, title: `Sosyal Bilimlerin Doğuşu`, kind: `Sunum`, size: `1,3 MB`, file: `materyal/2-hafta/Sosyal_Bilimlerin_Dogusu.pptx` },
  { group: `h2`, title: `Wallerstein – Sosyal Bilimlerin Tarihsel Kuruluşu`, kind: `Okuma metni · sarı işaretli`, size: `584 KB`, file: `materyal/2-hafta/Wallerstein_Sosyal_Bilimlerin_Tarihsel_Kurulusu.pdf` },
  { group: `h3`, title: `Aydınlanma Felsefesi ve Çağı`, kind: `Sunum`, size: `1,4 MB`, file: `materyal/3-hafta/Aydinlanma_Felsefesi_ve_Cagi.pptx` },
  { group: `h3`, title: `Fransız Devrimi – Zümrelerden Ulusal Egemenliğe`, kind: `Sunum`, size: `1,1 MB`, file: `materyal/3-hafta/Fransiz_Devrimi_Zumrelerden_Ulusal_Egemenlige.pptx` },
  { group: `h3`, title: `Britanya Sanayi Devrimi`, kind: `Sunum`, size: `1,4 MB`, file: `materyal/3-hafta/Britanya_Sanayi_Devrimi.pptx` },
  { group: `h3`, title: `Sosyoloji ve Modernite`, kind: `Sunum`, size: `1,9 MB`, file: `materyal/3-hafta/Sosyoloji_ve_Modernite.pptx` },
  { group: `h4`, title: `Sosyolojik İmgelem`, kind: `Sunum`, size: `552 KB`, file: `materyal/4-hafta/Sosyolojik_Imgelem.pptx` },
  { group: `h4`, title: `Sosyolojik İmgelem (Toplumbilimsel Düşün)`, kind: `Sunum`, size: `61 KB`, file: `materyal/4-hafta/Sosyolojik_Imgelem_Toplumbilimsel_Dusun.pptx` },
  { group: `h5`, title: `Sosyolojik Düşünmek (1)`, kind: `Sunum`, size: `140 KB`, file: `materyal/5-hafta/Sosyolojik_Dusunmek_1.pptx` },
  { group: `h5`, title: `Sosyolojik Düşünmek (3)`, kind: `Sunum`, size: `73 KB`, file: `materyal/5-hafta/Sosyolojik_Dusunmek_3.pptx` },
  { group: `h5`, title: `Bauman & May – Sosyolojik Düşünmek`, kind: `Kitap · sarı işaretli`, size: `5,0 MB`, file: `materyal/5-hafta/Bauman_May_Sosyolojik_Dusunmek.pdf` },
  { group: `h6`, title: `Auguste Comte: Pozitivizm ve Sosyoloji`, kind: `Sunum`, size: `422 KB`, file: `materyal/6-hafta/Auguste_Comte_Pozitivizm_ve_Sosyoloji.pptx` },
  { group: `h6`, title: `Auguste Comte`, kind: `Sunum`, size: `76 KB`, file: `materyal/6-hafta/Auguste_Comte.pptx` }
],

onePager: [
  { u: `dogus`, items: [
      `Bilim: sistematik, ampirik, yöntemsel açık, nesnel, genelleyici. 19. yy: <b>bilim = doğa bilimleri</b>.`,
      `Katalizör Fransız Devrimi: değişim meşru. Nomotetik (yasa) / idiografik (tarih).`,
      `Devlet → siyaset · piyasa → ekonomi · <mark>sivil toplum → sosyoloji</mark> · "Öteki" → antropoloji.`
  ] },
  { u: `wallerstein`, items: [
      `<b>Scientia</b>; Kartezyen dualizm; Hooke 1663 → Snow "iki kültür".`,
      `Mücadele: insan dünyasının bilgisini kim denetleyecek? Model: <b>Newton fiziği</b>; Comte & Mill.`,
      `5 disiplin, 5 ülke; Ranke "gerçekten ne oldu?"; dışarıda kalan: coğrafya, psikoloji, hukuk.`,
      `1850–1914 üniversite · ceteris paribus · <mark>1945</mark> kurumsallaşma tamam.`
  ] },
  { u: `aydinlanma`, items: [
      `Kant: <b>"Sapere Aude!"</b> Rönesans → Reform → Descartes → Newton.`,
      `Rasyonalizm, deneycilik, sekülerleşme, ilerleme. Locke tabula rasa · Smith görünmez el · Montesquieu güçler ayrılığı · Rousseau genel irade.`
  ] },
  { u: `fransiz`, items: [
      `3. zümre <b>%98</b>; zümre başına oy (2'ye 1) → kişi başına oy. Sieyès: "Her şey / Hiçbir şey / Bir şey".`,
      `<mark>5 Mayıs → 17 Haziran → 20 Haziran → 9 Temmuz → 14 Temmuz 1789</mark> → 1791 → 21 Eylül 1792 Cumhuriyet.`
  ] },
  { u: `sanayi`, items: [
      `Spinning Jenny <b>16 kat</b> · Watt buharı · fabrika, saat disiplini, uzmanlaşma.`,
      `1900'de <b>%62</b> kentli · günde 12–16 saat · kolera → sendika ve yasal reform.`
  ] },
  { u: `modernite`, items: [
      `Giddens: seküler-akılcı · siyasal · ekonomik kurumlar.`,
      `3 devrim: Aydınlanma (entelektüel), Fransız (siyasal), Sanayi (ekonomik).`,
      `Comte "toplumsal fizik" · Durkheim olgular <b>"şey"</b>.`
  ] },
  { u: `imgelem`, items: [
      `Mills, 1958: <mark>biyografi · toplum · tarih</mark>; 3 soru (yapı, dönem, insan tipi).`,
      `Kişisel sorun / kamusal sorun: biyografi tarihi yansıtır.`,
      `İlgisizlik + huzursuzluk; teknolojik ethos; imgelem özgürleştirici.`
  ] },
  { u: `dusunmek`, items: [
      `Alan ve yöntem ayrımı sorunlu; fark <b>bilişsel perspektif</b> (sorular).`,
      `Sosyoloji ilişkisel: <mark>karşılıklı bağımlılık</mark>. Sağduyu sistemsiz, niyetlere bakar.`
  ] },
  { u: `bauman`, items: [
      `Beşeri dünyada doğal ayrım yok. İktisat maliyet–yarar · siyaset iktidar ve nüfuz.`,
      `Sağduyudan 3 fark: <b>sorumlu yöntem · sahanın boyutları · anlama/açıklama biçimi</b>.`,
      `Sağduyunun ikili gücü; tanıdık olan sorgulanmaz.`
  ] },
  { u: `comte`, items: [
      `1798 · Saint-Simon · Pozitif Felsefe Dersleri 1830–1842. Otorite + ilerleme.`,
      `Üç hâl: <mark>teolojik → metafizik → pozitif</mark>.`,
      `Matematik → astronomi → fizik → kimya → biyoloji → <b>sosyoloji (kraliçe)</b>. "Bilmek öngörmek, öngörmek yapmaktır."`,
      `Touraine: Ben'den Biz'e · Marcuse: muhafazakâr.`
  ] }
],

units: [
  {
    id: `dogus`, group: `h2`, no: `2.1`, title: `Sosyal Bilimlerin Doğuşu`,
    short: `<h4>Bilgiyi bilim yapan nedir?</h4>
<ul class="short-list">
<li>19. yüzyılda bilgi, doğa bilimleri hegemonyasından modern toplumu inceleyen <b>kurumsallaşmış akademik disiplinlere</b> dönüştü (ana tema: bilginin kurumsallaşması).</li>
<li>Bilimin 5 özelliği: <mark>sistematiklik · ampirik dayanak · yöntemsel açıklık · nesnellik · genelleme</mark>.</li>
<li>19. yüzyıl epistemolojisi: <b>bilim = doğa bilimleri</b> (fizik, kimya, biyoloji), tek meşru bilgi modeli. Varsayım: dışarıda nesnel bir gerçeklik var, deneysel ve objektif yöntemlerle ulaşılır.</li>
</ul>
<blockquote>"Sosyal bilimlerin değişik disiplinleri, 19. yüzyılda 'gerçeklik' hakkında ampirik bulgulara dayalı 'nesnel' bilgi elde edilmesini sağlamak için harcanan genel çabaların bir parçası olarak yaratıldı." — Wallerstein</blockquote>
<h4>Fransız Devrimi ve ayrışma</h4>
<ul class="short-list">
<li>Disiplinler: siyaset bilimi, ekonomi, sosyoloji, tarih, antropoloji. Katalizör: <b>Fransız Devrimi</b>, değişimi istisna değil meşru gerçeklik yaptı; "halk" norm olunca değişim geçici düzensizlik sayılamadı.</li>
<li>Temel soru: <i>"Toplumsal değişim kaçınılmazsa, onu nasıl anlayacak, örgütleyecek ve rasyonelleştireceğiz?"</i></li>
<li><b>Nomotetik</b> (siyaset bilimi, ekonomi, sosyoloji): genel yasalar, soyut modeller, doğa bilimi ideali. <b>İdiografik</b> (tarih): tekil olayın bağlamı; "Bu olay neden tam da bu biçimde gerçekleşti?"</li>
<li>İş bölümü: siyaset bilimi → <b>devlet</b> · ekonomi → <b>piyasa</b> · sosyoloji → <b>sivil toplum</b> (devlet ve piyasa dışı: işçi mahalleleri, kent suçları, demografi).</li>
<li>Antropoloji "Öteki"ni inceler: Avrupa dışı, küçük gruplar halinde yaşayan, yazılı arşivi olmayan halklar; askeri bakımdan zayıf bu topluluklar "kabile" gibi şemsiye kavramlarla adlandırıldı.</li>
</ul>
<h4>Kurucular ve sosyolojinin konusu</h4>
<ul class="short-list">
<li><b>Comte:</b> "sosyoloji" teriminin mucidi; gözlem ve deney ilkesi; "toplumsal fizik". <b>Durkheim:</b> <i>Sosyolojik Yöntemin Kuralları</i> (<mark>1895</mark>); toplumsal olgular bireyden bağımsız, dışsal birer <b>"şey"</b> gibi incelenmeli; tarafsız açıklama ideali.</li>
<li>Wallerstein'a göre sosyoloji pratik ihtiyaçlardan doğdu: kent krizleri (yoksulluk, suç, demografi), çatışmayı açıklamak (sanayileşme, işçi sınıfı), düzeni anlamak, istikrar sağlamak (sosyal reform, kamu politikası).</li>
<li>Konuları: sınıflar ve eşitsizlik, iş ve emek, aile ve toplumsal cinsiyet, kentleşme ve göç, suç, eğitim ve din, nüfus, toplumsal hareketler; "toplum"u soyut değil, belirli ilişkileri <b>ampirik</b> olarak araştırır.</li>
<li>Tartışma: insan toplumunu incelerken tam tarafsızlık ve nesnellik mümkün mü?</li>
</ul>`,
    files: [`materyal/2-hafta/Sosyal_Bilimlerin_Dogusu.pptx`],
    html: `
<p class="lead">19. yüzyılda bilgi, <mark>doğa bilimleri hegemonyasından</mark> modern toplumu inceleyen kurumsallaşmış akademik disiplinlere doğru dönüştü. Ana tema: <b>bilginin kurumsallaşması</b>. Referans düşünür: <b>Immanuel Wallerstein</b>.</p>

<h3>Bir bilgiyi bilim yapan nedir?</h3>
<ol class="steps">
<li><b>Sistematiklik:</b> Rastlantısal gözlemlerden değil, düzenli ve izlenebilir bir araştırma sürecinden üretilmesi.</li>
<li><b>Ampirik dayanak:</b> İddiaların gözlem, veri, belge veya somut deneyimsel kanıtlarla ilişkilendirilmesi.</li>
<li><b>Yöntemsel açıklık:</b> Kavramların, yöntemlerin ve ölçütlerin şeffafça sunulması.</li>
<li><b>Nesnellik:</b> Bulguların kişisel kanılara değil, sınanabilir öznelerarası kanıtlara dayanması.</li>
<li><b>Genelleme:</b> Tekil bulguların ötesine geçerek nedensel ilişkileri ve kalıpları açıklaması.</li>
</ol>

<h3>19. yüzyıl epistemolojisi: Bilim = Doğa bilimleri</h3>
<ul>
<li><b>Tek meşru bilgi modeli:</b> 19. yüzyılda "bilim", dünyayı anlamanın ve meşru bilgi üretmenin <mark>tek geçerli yolu</mark> haline geldi.</li>
<li><b>Ampirik doğa bilimleri:</b> Fizik, kimya ve biyoloji; doğanın evrensel yasalarını ampirik yöntemlerle ortaya çıkarmayı hedefledi.</li>
<li><b>Temel varsayım:</b> Dışarıda <b>nesnel bir gerçeklik</b> vardır ve buna deneysel, objektif yöntemlerle ulaşılabilir.</li>
</ul>

<h3>Sosyal bilimlerin doğuşu</h3>
<blockquote>"Sosyal bilimlerin değişik disiplinleri, 19. yüzyılda 'gerçeklik' hakkında ampirik bulgulara dayalı 'nesnel' bilgi elde edilmesini sağlamak için harcanan genel çabaların bir parçası olarak yaratıldı." — Immanuel Wallerstein (<i>Sosyal Bilimleri Açın</i>)</blockquote>
<ul class="chips"><li>Siyaset bilimi</li><li>Ekonomi</li><li>Sosyoloji</li><li>Tarih</li><li>Antropoloji</li></ul>

<h3>Tarihsel katalizör: Fransız Devrimi</h3>
<ul>
<li><b>Değişimin meşruiyeti:</b> Fransız Devrimi, toplumsal ve siyasal değişimi bir istisna değil, <mark>meşru bir gerçeklik</mark> olarak kabul ettirdi.</li>
<li><b>Halk egemenliği normu:</b> "Halk" temel siyasal norm olunca toplumsal değişimi geçici bir düzensizlik saymak imkânsızlaştı.</li>
</ul>
<div class="tip"><span class="tip-label">Temel soru</span>"Toplumsal değişim kaçınılmazsa, onu nasıl anlayacak, örgütleyecek ve rasyonelleştireceğiz?"</div>

<h3>Nomotetik ve idiografik yaklaşım</h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th></th><th>Nomotetik</th><th>İdiografik</th></tr></thead>
<tbody>
<tr><td><b>Disiplin</b></td><td>Siyaset bilimi, ekonomi, sosyoloji</td><td>Tarih</td></tr>
<tr><td><b>Ne arar?</b></td><td><b>Genel yasalar:</b> evrensel düzenlilikler ve nedensel ilişkiler</td><td><b>Bağlamsal özgünlük:</b> tekil ve tarihsel olayları anlamak</td></tr>
<tr><td><b>Nasıl?</b></td><td><b>Soyut modeller:</b> tekil olayları genellenebilir kuramlarla açıklar</td><td><b>Tarihsel özgüllük:</b> olayların zaman ve mekân bağlamını korur</td></tr>
<tr><td><b>Hedef</b></td><td><b>Doğa bilimi ideali:</b> yasa koyucu, kuramsal bilgi</td><td><b>Temel soru:</b> "Bu olay neden tam da bu biçimde gerçekleşti?"</td></tr>
</tbody></table></div>

<h3>Sosyal bilimler nasıl ayrıştı? (iş bölümü)</h3>
<div class="cols">
<div class="box"><h4>Siyaset bilimi</h4><p><b>Alan: devlet ve yönetim.</b> Resmi devlet yapıları, yönetim mekanizmaları, iktidar dağılımı, yasal otorite biçimleri.</p></div>
<div class="box"><h4>Ekonomi</h4><p><b>Alan: piyasa mekanizmaları.</b> Piyasa dinamikleri, üretim ve servet yaratımı, ticaret, kaynak tahsis modelleri.</p></div>
<div class="box"><h4>Sosyoloji</h4><p><b>Alan: sivil toplum.</b> Devlet ve piyasa dışında kalan tüm toplumsal ilişkiler: işçi mahalleleri, kent suçları, demografi.</p></div>
</div>

<h3>Antropolojinin farkı: "Öteki"ni incelemek</h3>
<ul>
<li>Avrupa dışındaki halklar küçük gruplar halinde yaşıyor, yazılı arşiv tutmuyor ve küresel dini yapılardan bağımsız hareket ediyordu.</li>
<li>Antropoloji, tam da <mark>Avrupa dışındaki toplumları</mark> betimlemek, analiz etmek ve anlamak üzere kurulan disiplin olarak ayrıştı.</li>
<li><b>Kategorizasyon ve güç ilişkisi:</b> Askeri bakımdan zayıf bu topluluklar Batılı güçlerce genelleştirilerek <b>"kabile"</b> gibi şemsiye kavramlarla adlandırıldı.</li>
</ul>

<h3>Sosyolojinin kurucuları</h3>
<div class="cols two">
<div class="box"><h4>Auguste Comte</h4><ul>
<li><b>"Sosyoloji" teriminin mucidi:</b> Toplumu inceleyen yeni bilimsel alana adını veren ilk düşünür.</li>
<li><b>Gözlem ve deney ilkesi:</b> Meşru bilimsel bilgi yalnızca ampirik gözlem ve deneyle üretilir.</li>
<li><b>"Toplumsal fizik":</b> Sosyolojinin doğa bilimleri düzeyinde kesinliğe ulaşacağını savundu.</li>
</ul></div>
<div class="box"><h4>Émile Durkheim</h4><ul>
<li><b><i>Sosyolojik Yöntemin Kuralları</i> (1895):</b> Sosyolojiyi ampirik ve disipliner açıdan bağımsız bir bilimsel metoda kavuşturdu.</li>
<li><b>Birer "şey" olarak toplumsal olgular:</b> Toplumsal olgular bireylerden bağımsız, nesnel ve dışsal birer "şey" gibi incelenmeli.</li>
<li><b>Tarafsız açıklama ideali:</b> Sosyoloji de doğa bilimleri gibi toplumu nesnel biçimde açıklamalı.</li>
</ul></div>
</div>
<div class="tip"><span class="tip-label">Tartışma</span>İnsan toplumunu incelerken tam tarafsızlık ve nesnellik gerçekten mümkün müdür?</div>

<h3>Sosyoloji neden ortaya çıktı?</h3>
<p>Wallerstein'a göre sosyoloji yalnızca akademik bir merakın değil, <mark>modern toplumsal düzenin getirdiği pratik ihtiyaçların</mark> sonucu olarak şekillendi.</p>
<div class="cols">
<div class="box"><h4>Kent krizleri</h4><p>Yoksulluk, kentleşme, suç ve demografik hareketleri incelemek.</p></div>
<div class="box"><h4>Çatışmayı açıklamak</h4><p>Sanayileşme ve işçi sınıfıyla yükselen toplumsal gerilimleri kavramak.</p></div>
<div class="box"><h4>Düzeni anlamak</h4><p>Hızla dönüşen toplumsal yapının işleyiş mantığını çözümlemek.</p></div>
<div class="box"><h4>İstikrar sağlamak</h4><p>Sosyal reform ve kamu politikası süreçlerini kurumsallaştırmak.</p></div>
</div>

<h3>Sosyoloji ne çalışır?</h3>
<p>Sosyoloji, modern toplumda <b>devlet ve piyasanın doğrudan kapsamadığı</b> ya da bunların ötesine taşan toplumsal ilişkileri ve değişimleri inceleyen disiplin olarak kurumsallaştı.</p>
<ul class="chips"><li>Toplumsal sınıflar ve eşitsizlik</li><li>İş ve emek ilişkileri</li><li>Aile ve toplumsal cinsiyet</li><li>Kentleşme ve göç</li><li>Suç ve toplumsal düzen</li><li>Eğitim, din ve diğer kurumlar</li><li>Nüfus ve demografik değişim</li><li>Toplumsal hareketler ve kolektif eylem</li></ul>
<p>Sosyolojinin konusu "toplum"u soyut biçimde incelemekten çok, <mark>belirli toplumsal ilişkileri, yapıları ve değişim süreçlerini ampirik olarak araştırmaktır</mark>.</p>
`
  },
  {
    id: `wallerstein`, group: `h2`, no: `2.2`, title: `Wallerstein: Sosyal Bilimlerin Tarihsel Kuruluşu`,
    short: `<h4>Sosyal bilim modern dünyaya aittir <span class="ref">s. 12</span></h4>
<ul class="short-list">
<li>16. yüzyıldan beri, gerçeklik hakkında ampirik olarak doğrulanan sistemli, dünyevi bilgi üretme çabası; adı <mark>scientia</mark> ("bilgi").</li>
<li>Klasik bilimin varsayımları: <b>Kartezyen dualizm</b> (doğa–insan, madde–akıl, fiziksel–sosyal dünya ayrımı) ve geçmiş–gelecek simetrisi öngören <b>Newton modeli</b>.</li>
<li><b>Thomas Hooke</b>'un <mark>1663</mark> Royal Society tüzüğü, <b>C. P. Snow</b>'un sonradan <b>"iki kültür"</b> diyeceği ayrımı içeriyordu. Bilim: her zaman her yerde doğru, evrensel doğa yasalarını aramak.</li>
</ul>
<h4>Bilim–felsefe ayrışması <span class="ref">s. 14–15</span></h4>
<ul class="short-list">
<li>Felsefe, a priori ve deneye tabi olmayan önermelerle suçlanan <b>teolojinin yerini alan</b> dal gibi görüldü. "Ayrı ama eşit" anlayışı yerini kesin bilgiyi (bilim) hayal edilen bilgiden üstün gören <b>hiyerarşiye</b> bıraktı.</li>
<li>19. yüzyıl başında sıfatsız "bilim" = doğa bilimi. Alternatifin adında uzlaşılamadı: sanat, insan bilimi, edebiyat (belles-lettres), felsefe, "kültür", Geisteswissenschaften.</li>
<li>Asıl mücadele: <mark>insanların dünyasıyla ilgili bilgiyi kimin denetleyeceği</mark>. Modern devletin daha kesin bilgiye ihtiyacı yeni bilgi kategorilerini doğurdu.</li>
</ul>
<h4>Disiplinleşme ve "pozitif" bilim <span class="ref">s. 16–20</span></h4>
<ul class="short-list">
<li>19. yüzyılın damgası: bilginin <b>disiplinlere ayrılması ve meslekleşmesi</b> (bilgiyi ve bilgi üretenleri yeniden üreten kurumlar). Üniversite, sanatlar ile bilimler arasındaki gerilimin başlıca alanı oldu.</li>
<li>"Halk" egemenliği norm olunca değişimi örgütleme ihtiyacı doğdu; düzen istikrarlı kurulacaksa bilim kesin (<b>"pozitif"</b>) olmalıydı → İngiltere ve Fransa'da kurucular model olarak <mark>Newton fiziği</mark>ne yöneldi.</li>
<li>Epistemolojik yelpaze: bir uçta matematik ve doğa bilimleri, öbür uçta felsefe ve insan bilimleri; ortada tarih (<b>idiografik</b>: her olayı tekliği içinde betimler) ve sosyal bilim (<b>nomotetik</b>: yasa koyar).</li>
<li>Comte'un "boşanma" dediği ayrışma Aristoteles metafiziğinin dışlanmasıydı; determinist yasalar anarşik hareketlerin teknokratça denetimine yararlıydı. Bilimin nesnel gerçekliği keşfettiğini <b>Comte ve Mill</b> savundu. Disiplinler üniversitelere ancak <mark>1850–1914</mark>'te yansıdı.</li>
</ul>
<h4>Disiplinler ve mekân <span class="ref">s. 21–32</span></h4>
<ul class="short-list">
<li>Amaç doğruyu icat etmek değil, <b>"öğrenmek"</b>. Beş merkez: Büyük Britanya, Fransa, Almanyalar, İtalyalar, ABD. I. Dünya Savaşı civarı beş disiplin: <b>tarih, iktisat, sosyoloji, siyaset bilimi, antropoloji</b> (+ belki Doğu Bilimleri).</li>
<li><b>Ranke:</b> "gerçekten ne oldu?"; tarihçi kütüphaneye değil <b>arşive</b> (laboratuvar) gitmeli.</li>
<li>Sosyoloji: Comte'a göre <b>"bilimlerin kraliçesi"</b>, pozitivist; uygulamada kentli işçi sınıflarının yol açtığı düzensizliklerle uğraşan <b>sosyal reform derneklerinin</b> üniversitede kurumsallaşmasıyla gelişti. Siyaset biliminin ayrılması iktisadın ayrılmasını meşrulaştırdı.</li>
<li>Antropoloji kâşif, seyyah ve sömürge memurlarıyla başladı ("kabile"); Arap-İslam ve Çin gibi "yüksek uygarlıkları" ise Doğu Bilimleri inceledi (ortaçağ rahipleri başlattı).</li>
<li>Asli parçası olamayan üç alan: <mark>coğrafya, psikoloji, hukuk</mark>. Mekân <b>devlete tabi</b>: toplum, ulusal ekonomi, siyasal sistem, ulus.</li>
</ul>
<h4>Kurumsallaşma 1850–1945 <span class="ref">s. 34–36</span></h4>
<ul class="short-list">
<li>Kürsüler, bölümler, dergiler, dernekler, kütüphane katalogları. Nomotetikler tarihten ayrıldı: genel yasalar, olguları dizinin örneği saymak, gerçekliği parçalara ayırmak, hipotez + tercihen <b>nicel</b> veri, kontrollü gözlem.</li>
<li>İktisat <mark>ceteris paribus</mark> (diğer koşullar aynıyken) · siyaset bilimi resmi hükümet yapıları · sosyoloji ihmal edilen sosyal ilişkiler.</li>
<li><mark>1945</mark>'te kurumsallaşma tamamlandı; sosyal bilimler doğa bilimlerinden ve "uygar" toplumların kültürel üretimini inceleyen insan bilimlerinden kesin ayrıştı.</li>
</ul>`,
    fromPdf: {
      name: `Immanuel Wallerstein (ve ark.), <i>Sosyal Bilimleri Açın</i>, Bölüm I: "Onsekizinci Yüzyıldan 1945'e Kadar Sosyal Bilimlerin Tarihsel Kuruluşu" (s. 11–36)`,
      note: `Parantez içindeki sayfa numaraları kitabın sayfalarıdır. PDF sayfası = kitap sayfası − 10 (ör. s. 12 → PDF 2).`,
      file: `materyal/2-hafta/Wallerstein_Sosyal_Bilimlerin_Tarihsel_Kurulusu.pdf`,
      pdfOffset: -10
    },
    html: `
<h3>Sosyal bilim, modern dünyaya ait bir girişimdir <span class="ref">s. 12</span></h3>
<ul>
<li>Sosyal bilim, 16. yüzyıldan beri olgunlaşan modern dünyada, gerçeklik hakkında <mark>ampirik olarak doğrulanan sistemli, dünyevi bilgi</mark> üretme çabasına dayanır. Bu çabaya, sadece "bilgi" demek olan <b>scientia</b> adı verildi.</li>
<li>Klasik bilim görüşünün varsayımlarından biri: doğa ile insan, madde ile akıl, fiziksel dünya ile sosyal/manevi dünya arasında köklü ayrımlar bulunduğunu varsayan <b>Kartezyen dualizm</b> (diğeri, geçmiş ile gelecek arasında simetri öngören Newton modeli).</li>
<li>Thomas Hooke'un 1663'te yazdığı Kraliyet Cemiyeti (Royal Society) tüzüğü, C. P. Snow'un sonradan <mark>"iki kültür"</mark> adını vereceği, bilmenin farklı yolları arasındaki ayrımı içeriyordu.</li>
<li>Bilim zamanla <b>her zaman her yerde doğru olan, doğanın evrensel yasalarını aramak</b> şeklinde tanımlandı.</li>
</ul>

<h3>Bilim ile felsefe ayrışıyor <span class="ref">s. 14–15</span></h3>
<ul>
<li>Deneysel, ampirik çalışmalar merkeze yerleştikçe felsefe, doğa bilimcilerinin gözünde, gerçek hakkında <b>a priori, deneye tabi tutulamayan</b> önermeler geliştirmekle suçlanan teolojinin yerini alan bir dal gibi görünmeye başladı.</li>
<li>19. yüzyıla doğru iki dalın <b>"ayrı ama eşit"</b> olduğu anlayışı kayboldu; yerini, kesin bilgiyi (bilim) hayal edilen bilgiden (bilim olmayan) üstün gören <mark>bir hiyerarşi</mark> aldı.</li>
<li>19. yüzyıl başında bilimin üstünlüğü dilde de tescil edildi: sıfatsız kullanılan "bilim", öncelikle (hatta sadece) <b>doğa bilimi</b> anlamına gelir oldu. Bu, doğa biliminin sosyal-entelektüel meşruiyete tek başına sahip çıkma çabasının doruk noktasıdır.</li>
<li>Doğa biliminin alternatifi olan bilginin adı üzerinde bile uzlaşılamadı: sanat, insan bilimi, edebiyat (<i>letters / belles-lettres</i>), felsefe, "kültür" ya da Almanca <i>Geisteswissenschaften</i>.</li>
<li>Asıl mücadele, doğayla ilgili bilgiyi değil (18. yüzyılda doğa bilimcileri bu alanda tek söz sahibiydi), <mark>insanların dünyasıyla ilgili bilgiyi kimin denetleyeceği</mark> konusundaydı.</li>
<li><b>Modern devletin</b>, kararlarını dayandırabileceği daha kesin bilgiye duyduğu gereksinim yeni bilgi kategorilerinin doğmasına yol açtı.</li>
</ul>

<h3>Disiplinlere ayrılma ve meslekleşme <span class="ref">s. 16–17</span></h3>
<ul>
<li>19. yüzyılın entelektüel tarihine damgasını vuran süreç: bilginin <mark>disiplinlere ayrılması ve meslekleşmesi</mark>, yani yeni bilgi üretmek ve bilgi üretenleri yeniden üretmek için sürekli kurumsal yapıların oluşturulması.</li>
<li>Altta yatan varsayım: sistemli araştırma gerçekliğin farklı alanlarında uzmanlaşmayı gerektirir; gerçeklik rasyonel olarak farklı bilgi kümelerine ayrıştırıldı. Bu <b>rasyonel bölümleme</b>, etkin yani entelektüel olarak üretken olma vaadi taşıyordu.</li>
<li>Üniversite, birbirine zıt öğrenme yolları sayılan <b>sanatlar (insan bilimleri) ile bilimler</b> arasındaki gerilimin başlıca alanı haline geldi.</li>
</ul>

<h3>Fransız Devrimi ve "pozitif" bilim ihtiyacı <span class="ref">s. 17</span></h3>
<ul>
<li>"Halk" egemenliği norm haline gelince, önlenemez görünen sosyal değişmeyi <mark>örgütlemek ve rasyonelleştirmek</mark> gerekti.</li>
<li>Bunun için önce değişimi incelemek ve ona yön veren kuralları anlamak gerekiyordu: sonradan sosyal bilimler denen çalışmalara <b>ciddi bir sosyal ihtiyaç</b> vardı.</li>
<li>Yeni sosyal düzen istikrarlı kurulacaksa bilimin olabildiğince kesin (<b>"pozitif"</b>) olması yararlıydı. Bu yüzden 19. yüzyılın ilk yarısında, özellikle Büyük Britanya ve Fransa'da, modern sosyal bilimin kurucuları model olarak <mark>Newton fiziğine</mark> yöneldiler.</li>
</ul>

<h3>Epistemolojik yelpaze <span class="ref">s. 18</span></h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Bir uç</th><th>Arada</th><th>Öbür uç</th></tr></thead>
<tbody><tr>
<td>Matematik (ampirik olmayan), ardından azalan determinizm sırasıyla deneysel doğa bilimleri: fizik, kimya, biyoloji</td>
<td>Sosyal gerçekliğin incelemesi: <b>tarih (idiografik)</b> ve <b>"sosyal bilim" (nomotetik)</b></td>
<td>Felsefe (ampirik olmayan), ardından insan bilimleri: edebiyatlar, resim ve heykel, müzikoloji</td>
</tr></tbody></table></div>
<dl class="defs">
<dt>İdiografik</dt><dd>Her olayı kendi tekliği içinde betimleme özelliğine sahip.</dd>
<dt>Nomotetik</dt><dd>Yasa koyma, yasalar oluşturma özelliğine sahip.</dd>
</dl>
<p>Bilgi giderek katı biçimde ikiye ayrışırken sosyal gerçekliği inceleyenler bu çekişmenin <b>tam ortasında</b> kaldılar ve epistemolojik konularda kendi içlerinde bölündüler.</p>

<h3>Comte, Mill ve determinist yasalar <span class="ref">s. 19–20</span></h3>
<ul>
<li>Comte'un bir "boşanma" olarak ilan ettiği bilim–felsefe ayrışması, doğrudan felsefi endişelerden çok Aristoteles metafiziğinin dışlanması anlamına geliyordu.</li>
<li>Entelektüel sorunlar siyasal sonuçlarla iç içeydi: değişim yönündeki, potansiyel olarak anarşik hareketlerin <mark>teknokratça denetimi</mark> açısından determinist yasalar kavramı daha yararlı görünüyordu.</li>
<li>Bilimin nesnel gerçekliği keşfettiği, filozofların ise yalnızca düşündükleri ve düşündükleri üzerine yazdıkları ileri sürüldü. Bu görüşü 19. yüzyılın ilk yarısında <b>Comte ve Mill</b> açıkça savundu.</li>
<li>Sosyal bilimlerin bugün bildiğimiz disiplinlere ayrışmış hâli, büyük üniversitelere resmen ancak <mark>1850–1914</mark> döneminde yansıdı.</li>
</ul>

<h3>"Nesnel" bilgi ve disiplin adları <span class="ref">s. 21–22</span></h3>
<ul>
<li>Disiplinler 19. yüzyılda "gerçeklik" hakkında ampirik bulgulara (spekülasyondan farklı olarak) dayalı <b>"nesnel" bilgi</b> elde etme çabasının parçası olarak yaratıldı. Amaç doğruyu icat etmek ya da sezgiyle bulmak değil, <mark>"öğrenmek"</mark>ti.</li>
<li>Sosyal bilim faaliyetinin yürütüldüğü <b>beş yer:</b> Büyük Britanya, Fransa, Almanyalar, İtalyalar, Amerika Birleşik Devletleri.</li>
<li>Birinci Dünya Savaşı dolaylarında uzlaşılan disiplin adları beşi geçmiyordu: <mark>tarih, iktisat, sosyoloji, siyaset bilimi, antropoloji</mark>. Listeye belki Doğu Bilimleri (<i>Orientalism</i>) eklenebilir; ancak bu alandakiler kendilerini sosyal bilim saymıyordu.</li>
</ul>

<h3>Tarih ve Ranke'nin sorusu <span class="ref">s. 23</span></h3>
<ul>
<li>Ranke'nin "gerçekten ne oldu?" formülü, bilimin felsefeyle mücadelesinde vurgulanan temaların neredeyse hepsini yansıtır: nesnel ve bilinebilir gerçek dünya, ampirik kanıt, <b>araştırmacının tarafsızlığı</b>.</li>
<li>Tarihçi veri bulmak için önceden yazılmış malzemeye (kütüphane) ya da kendi düşünme süreçlerine (çalışma odası) değil, doğa bilimcisi gibi nesnel verilerin toplandığı yere, <mark>arşive (laboratuvar)</mark> yönelmeliydi.</li>
</ul>

<h3>Sosyoloji, iktisat ve siyaset bilimi <span class="ref">s. 25–26</span></h3>
<ul>
<li><b>Sosyoloji:</b> İsmini icat eden Comte'a göre <mark>"bilimlerin kraliçesi"</mark>, kendi içinde bütünleşmiş ve birleşik bir sosyal bilim olacak ve "pozitivist" olacaktı.</li>
<li>Uygulamada sosyoloji, 19. yüzyılın ikinci yarısında sayısı artan <b>kentli işçi sınıflarının</b> yol açtığı hoşnutsuzluk ve düzensizliklerle başa çıkmayı amaçlayan <mark>sosyal reform derneklerinin</mark> çalışmalarının üniversitede kurumsallaşmasıyla gelişti.</li>
<li>Sosyoloji, <b>sıradan insanlarla ve modernliğin sosyal sonuçlarıyla</b> ilgilenmeyi her zaman sürdürdü.</li>
<li><b>Siyaset bilimi</b>nin ayrı bir disiplin olması, iktisadın da ayrı disiplin olmasına meşruiyet sağladı: devlet ve piyasanın farklı mantıklarla işlediği görüşü, siyasal arenanın ayrı bir bilimsel inceleme konusu olmasını gerektiriyordu.</li>
<li>Tarih, iktisat, sosyoloji ve siyaset bilimi dörtlüsü, ortak kökenlerinin bulunduğu <b>beş ülkede</b> uygulanmakla kalmadı; esas olarak bu beş ülkenin sosyal gerçekliğini betimleme sorumluluğunu da üstlendi.</li>
</ul>

<h3>Antropoloji ve Doğu Bilimleri <span class="ref">s. 27–28</span></h3>
<ul>
<li>Modern dünya sistemi, Avrupa'nın dünyanın geri kalanındaki halklarla karşılaşması ve çoğunu fethetmesiyle kuruldu.</li>
<li>Küçük gruplar halinde yaşayan, yazılı kayıt sistemi olmayan, geniş bir dini inanç sistemine dahil olmayan ve Avrupa teknolojisi karşısında askeri bakımdan güçsüz halklar için ortak terimler (İngilizcede <b>"kabile"</b>) kullanıldı. Bu halkların incelemesi <mark>antropolojinin</mark> konusu oldu.</li>
<li>Sosyoloji nasıl üniversite dışındaki sosyal reform dernekleriyle başladıysa, antropoloji de <b>kâşifler, seyyahlar ve sömürge memurlarının</b> çalışmalarıyla başladı; Batı'yı inceleyen diğer sosyal bilimlerden daima ayrı bir konumda kaldı.</li>
<li><b>"Yüksek uygarlık"</b> sayılan Arap-İslam dünyası ve Çin gibi uygarlıkların yazısı, geniş bir alana yayılan din sistemleri ve büyük bürokratik imparatorlukları vardı. Bu uygarlıklarla ilgili Avrupa incelemelerini ortaçağ rahipleri başlattı.</li>
</ul>

<h3>Sosyal bilimin asli parçası olamayan üç alan <span class="ref">s. 30</span></h3>
<ul class="chips"><li>Coğrafya</li><li>Psikoloji</li><li>Hukuk</li></ul>
<p>Coğrafya, tarih gibi insanların çok eskiden beri yapageldikleri bir uygulamaydı.</p>

<h3>Devlete tabi bir mekân anlayışı <span class="ref">s. 32</span></h3>
<ul>
<li>Sosyal bilimciler siyasal sınırların temel etkileşimlerin mekânsal sınırlarını belirlediğini varsaydı: sosyologlar için <b>toplum</b>, makro iktisatçılar için <b>ulusal ekonomi</b>, siyaset bilimciler için <b>siyasal sistem</b>, tarihçiler için <b>ulus</b>.</li>
<li>Aynı mekân içindeki siyasal, sosyal ve iktisadi süreçlerin birbirini tamamladığı düşünülüyordu. Bu anlamda sosyal bilim, toplumun sınırları içine hapsolduğu bir <mark>kutu işlevi gören devletlerin</mark> yaratığı sayılmasa da onlara tabi nitelikteydi.</li>
</ul>

<h3>1850–1945: Kurumsallaşmanın tamamlanması <span class="ref">s. 34–36</span></h3>
<ul>
<li>1850–1945 arasında ayrı bir bilgi alanı oluşturan disiplinler ortaya çıktı ve bu alana <b>"sosyal bilim"</b> adı verildi: önce kürsüler, sonra diploma programlı bölümler; uzmanlaşmış dergiler, ulusal ve uluslararası dernekler, disiplinlere göre kataloglanan kütüphane koleksiyonları.</li>
<li>Her disiplin kendini diğerlerinden ayırmaya çalıştı. <b>Nomotetik</b> sosyal bilimler kendilerini tarihten şöyle ayırdı:
  <ul>
  <li>insan davranışına yön veren <b>genel yasaları</b> saptamak,</li>
  <li>olguları tekil olaylar olarak değil <b>bir dizinin örnekleri</b> olarak ele almak,</li>
  <li>çözümleme için insan gerçekliğini <b>parçalara ayırmak</b>,</li>
  <li>dar anlamda bilimsel yöntemler: teoriden türetilen hipotezlerin tercihen <b>nicel verilerle</b> kanıtlanması,</li>
  <li>sistemli elde edilmiş kanıtları ve <b>kontrollü gözlemleri</b> tercih etmek.</li>
  </ul></li>
</ul>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Disiplin</th><th>Kendi alanını nasıl ayırdı?</th></tr></thead>
<tbody>
<tr><td><b>İktisatçılar</b></td><td>Piyasa mekanizmalarını incelemek için <mark><i>ceteris paribus</i></mark> (diğer bütün koşullar aynıyken) varsayımı</td></tr>
<tr><td><b>Siyaset bilimciler</b></td><td>İlgi alanlarını <b>resmi hükümet yapılarıyla</b> sınırlandırarak</td></tr>
<tr><td><b>Sosyologlar</b></td><td>İktisatçıların ve siyaset bilimcilerin ihmal ettiği <b>sosyal ilişkiler alanını</b> öne çıkararak</td></tr>
</tbody></table></div>
<ul>
<li><mark>1945'e gelindiğinde</mark> sosyal bilim disiplinlerinin hemen hepsi dünyanın belli başlı üniversitelerinde kurumsallaşmıştı (faşist ve komünist ülkelerde bu sınıflamalara direniliyordu).</li>
<li>1945'te sosyal bilimler, bir yanda <b>insana dayalı olmayan sistemleri</b> inceleyen doğa bilimlerinden, öte yanda "uygar" toplumların kültürel, zihinsel ve manevi üretimlerini inceleyen <b>insan bilimlerinden</b> kesin olarak ayrışmıştı.</li>
</ul>
`
  },
  {
    id: `aydinlanma`, group: `h3`, no: `3.1`, title: `Aydınlanma Felsefesi ve Çağı`,
    short: `<h4>Aydınlanma nedir?</h4>
<ul class="short-list">
<li>18. yüzyıl düşünce devrimi: aklın egemenliği, bireysel özgürlükler, modern dünyanın entelektüel temeli.</li>
</ul>
<blockquote>"Sapere Aude!" — Kant: Aydınlanma, insanın kendi suçu ile düşmüş olduğu ergin olmama durumundan kurtulmasıdır.</blockquote>
<ul class="short-list">
<li>Aklın özerkliği: geleneksel dogmalar yerine bağımsız akıl yürütme.</li>
<li>Hazırlayan dönemeçler: <b>Rönesans</b> (15.–16. yy, hümanizm) → <b>Reform</b> (16. yy, dinsel otoritenin sorgulanması) → <b>Akılcılık</b> (17. yy, Descartes: metodolojik şüphe) → <b>Bilimsel Devrim</b> (17.–18. yy, Newton, evrensel yasalar).</li>
<li>4 ilke: <mark>rasyonalizm · deneycilik · sekülerleşme · ilerleme inancı</mark>.</li>
</ul>
<h4>Düşünürler</h4>
<ul class="short-list">
<li><b>Diderot & d'Alembert:</b> Ansiklopedi (bilgiyi tek çatıda toplayıp yaymak) · <b>Voltaire:</b> hoşgörü, taassuba karşı ifade özgürlüğü.</li>
<li><b>Locke:</b> doğal haklar, zihin <i>tabula rasa</i>; yaşam, özgürlük, mülkiyet · <b>Hume:</b> eleştirel kuşkuculuk, bilgi duyusal deneyimden, neden-sonucu sorgular · <b>Adam Smith:</b> politik iktisat, <b>"görünmez el"</b>.</li>
<li><b>Montesquieu:</b> güçler ayrılığı (<i>Kanunların Ruhu</i>) · <b>Rousseau:</b> <i>Toplum Sözleşmesi</i>, halk egemenliği ve genel irade.</li>
</ul>
<h4>Kamusal alan ve miras</h4>
<ul class="short-list">
<li>Kahvehaneler, salonlar, akademiler tartışma merkezi oldu; gazete, broşür ve kitapla fikirler kitlelere ulaştı.</li>
<li>Miras: Amerikan (1776) ve Fransız (1789) Devrimleri · insan hakları ve yurttaşlık · hukukun üstünlüğü ve laik devlet.</li>
</ul>`,
    files: [`materyal/3-hafta/Aydinlanma_Felsefesi_ve_Cagi.pptx`],
    html: `
<p class="lead">18. yüzyıl düşünce devrimi: <mark>aklın egemenliği</mark>, bireysel özgürlükler ve modern dünyanın entelektüel temelleri.</p>

<h3>Aydınlanma nedir?</h3>
<ul>
<li><b>"Sapere Aude!"</b> — Immanuel Kant'a göre Aydınlanma: <q>insanın kendi suçu ile düşmüş olduğu ergin olmama durumundan kurtulmasıdır.</q></li>
<li><b>Aklın özerkliği:</b> Geleneksel dogmaların yerine <mark>bağımsız akıl yürütme</mark> ilkesi.</li>
</ul>

<h3>Aydınlanmayı hazırlayan düşünsel dönemeçler</h3>
<ol class="timeline">
<li><b>Rönesans</b>15.–16. yüzyıl: insan odaklı hümanist dünya görüşü</li>
<li><b>Reform</b>16. yüzyıl: dinsel otoritenin ve dogmaların sorgulanması</li>
<li><b>Akılcılık</b>17. yüzyıl: Descartes ile metodolojik şüphe ve metod</li>
<li><b>Bilimsel Devrim</b>17.–18. yüzyıl: Newton fiziği ve evrensel doğa yasaları</li>
</ol>

<h3>Aydınlanmanın temel ilkeleri</h3>
<div class="cols">
<div class="box"><h4>Rasyonalizm</h4><p>Gerçeğe ulaşmada birincil rehber olarak akıl.</p></div>
<div class="box"><h4>Deneycilik</h4><p>Gözlem ve deneyle doğrulanan somut bilgi.</p></div>
<div class="box"><h4>Sekülerleşme</h4><p>Toplumsal ve hukuki yapıda dinden bağımsızlaşma.</p></div>
<div class="box"><h4>İlerleme inancı</h4><p>Bilim ve eğitimle insanlığın sürekli gelişimi.</p></div>
</div>

<h3>Fransız Aydınlanması ve Ansiklopedi</h3>
<ul>
<li><b>Denis Diderot & d'Alembert:</b> İnsanlık bilgisini <mark>tek bir çatı altında toplama</mark> ve halka yayma projesi (Ansiklopedi).</li>
<li><b>Voltaire & hoşgörü:</b> Dinsel taassuba karşı düşünce ve ifade özgürlüğünün savunulması.</li>
</ul>

<h3>İngiliz ve İskoç düşünürleri</h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Düşünür</th><th>Kavram</th><th>Özü</th></tr></thead>
<tbody>
<tr><td><b>John Locke</b></td><td>Doğal haklar kuramı</td><td>Zihni <mark>"tabula rasa"</mark> (boş levha) kabul eder. Yaşam, özgürlük ve mülkiyet haklarını savunur.</td></tr>
<tr><td><b>David Hume</b></td><td>Eleştirel kuşkuculuk</td><td>Bilginin kaynağını duyusal deneyime dayandırır. Neden-sonuç ilişkisini sorgular.</td></tr>
<tr><td><b>Adam Smith</b></td><td>Politik iktisat</td><td><mark>"Görünmez el"</mark> kavramıyla serbest piyasa ve bireysel girişimcilik ilkesi.</td></tr>
</tbody></table></div>

<h3>Siyaset felsefesi ve anayasacılık</h3>
<div class="cols two">
<div class="box"><h4>Montesquieu — Güçler ayrılığı</h4><p>Yasama, yürütme ve yargının birbirinden bağımsızlaştırılması. <i>Kanunların Ruhu</i>'nda kavramsallaştırdığı, gücün dengelenmesi modeli.</p></div>
<div class="box"><h4>Rousseau — Toplum Sözleşmesi</h4><p>Halk egemenliği ve <b>genel iradeye</b> dayalı meşru yönetim.</p></div>
</div>

<h3>Salonlar, kamuoyu ve okuma kültürü</h3>
<ul>
<li><b>Kamusal alanın doğuşu:</b> Kahvehaneler, edebiyat salonları ve akademiler tartışma merkezleri haline geldi.</li>
<li><b>Basın ve yayın patlaması:</b> Gazete, broşür ve kitap basımıyla fikirler geniş kitlelere ulaştı.</li>
</ul>

<h3>Modern dünyaya bırakılan miras</h3>
<div class="cols">
<div class="box"><h4>Siyasi devrimler</h4><p>Amerikan (1776) ve Fransız (1789) Devrimlerine zemin hazırladı.</p></div>
<div class="box"><h4>İnsan Hakları Beyannamesi</h4><p>Evrensel insan hakları ve yurttaşlık kavramının kurumsallaşması.</p></div>
<div class="box"><h4>Demokratik anayasacılık</h4><p>Hukukun üstünlüğü ve laik devlet düzeni anlayışı.</p></div>
</div>
`
  },
  {
    id: `fransiz`, group: `h3`, no: `3.2`, title: `Fransız Devrimi: Zümrelerden Ulusal Egemenliğe`,
    short: `<h4>Temsil krizi</h4>
<ul class="short-list">
<li>Dönem <b>1789–1792</b>: zümrelere dayalı meşruiyetten (Ancien Régime) ulus, eşit yurttaşlık ve halk egemenliğine.</li>
<li>Zümreler: <b>1.</b> ruhban (Kilise; mali ve hukuki ayrıcalık) · <b>2.</b> soylular (feodal haklar, makamlara erişim) · <b>3.</b> halk ve burjuvazi (köylü, zanaatkâr, tüccar), <mark>nüfusun %98'i</mark>.</li>
<li>Mali kriz: XVI. Louis États-Généraux'yu <mark>1614'ten sonra ilk kez</mark>, 5 Mayıs 1789'da Versailles'da topladı. Soru: Fransa'yı kim temsil ediyor?</li>
<li><b>Zümre başına bir oy:</b> ruhban + soylular halkı 2'ye 1 yener. 3. zümrenin talebi: <b>kişi başına bir oy</b>.</li>
</ul>
<blockquote>"Üçüncü Zümre Nedir? Her şey. Şimdiye kadar siyasal düzende ne oldu? Hiçbir şey. Ne olmak istiyor? Bir şey." — Abbé Sieyès (1789)</blockquote>
<ul class="short-list">
<li>Eski mantık <b>Zümre → Temsil</b>, yeni mantık <b>Ulus → Temsil</b>.</li>
</ul>
<h4>Kronoloji</h4>
<ul class="short-list">
<li><mark>5 Mayıs 1789</mark> États-Généraux · <mark>17 Haziran</mark> Ulusal Meclis (3. zümre tüm ulusu temsil ettiğini ilan eder) · <mark>20 Haziran</mark> Tenis Kortu Yemini (anayasa yapılana kadar dağılmama).</li>
<li><mark>9 Temmuz</mark> Ulusal Kurucu Meclis (kurucu irade) · <mark>14 Temmuz</mark> Bastille (halk mobilizasyonu → siyasal baskı → devrim) · 1789 Haklar Bildirgesi (eşit yurttaşlık).</li>
<li><mark>1791</mark> anayasal monarşi · <mark>10 Ağustos 1792</mark> Tuileries baskını (monarşi fiilen askıda) · <mark>21 Eylül 1792</mark> Ulusal Konvansiyon, Cumhuriyet.</li>
<li>Özet zincir: zümresel toplum → temsil krizi → Ulusal Meclis → yurttaşlık → ulusal egemenlik → Cumhuriyet.</li>
</ul>`,
    files: [`materyal/3-hafta/Fransiz_Devrimi_Zumrelerden_Ulusal_Egemenlige.pptx`],
    html: `
<p class="lead">Toplumsal tabakalaşma, siyasal temsil ve meşruiyet kaynaklarının <b>Ancien Régime</b> düzeninden modern cumhuriyete evrimi. Odak: <mark>temsil krizinden halk egemenliğine</mark>. Dönem: 1789–1792.</p>

<h3>Devrimin temel dinamiği: temsil krizi</h3>
<div class="cols two">
<div class="box"><h4>Eski düzen (Ancien Régime)</h4><p>Geleneksel zümreler ve ayrıcalıklara dayalı meşruiyet. Siyasal otorite <b>kral ve statü sahibi sınıfların</b> elindedir.</p></div>
<div class="box"><h4>Yeni siyasal meşruiyet</h4><p><b>Ulus, eşit yurttaşlık ve halk egemenliğine</b> dayalı modern siyasal meşruiyet kaynaklarının doğuşu.</p></div>
</div>

<h3>Ancien Régime: toplumun zümrelere ayrılması</h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Zümre</th><th>Kimler?</th><th>Konumu</th></tr></thead>
<tbody>
<tr><td><b>Birinci zümre</b><br>Ruhban sınıfı</td><td>Katolik Kilisesi ve din adamları</td><td>Geniş ekonomik, mali ve hukuki ayrıcalıklar</td></tr>
<tr><td><b>İkinci zümre</b><br>Soylular</td><td>Saray ve taşra aristokrasisi</td><td>Feodal haklar ve kamu makamlarına ayrıcalıklı erişim</td></tr>
<tr><td><b>Üçüncü zümre</b><br>Halk ve burjuvazi</td><td>Köylüler, zanaatkârlar, tüccarlar ve profesyoneller</td><td>Nüfusun <mark>%98</mark>'ini oluşturan çoğunluk</td></tr>
</tbody></table></div>

<h3>États-Généraux ve "bir zümre, bir oy" çatışması</h3>
<ul>
<li><b>1614'ten sonra ilk toplantı:</b> Ağır mali kriz nedeniyle XVI. Louis meclisi <mark>5 Mayıs 1789</mark>'da Versailles'da topladı.</li>
<li><b>Temsil mantığı:</b> Zümreler → zümre temsilcileri → kral ile müzakere.</li>
<li><b>Temel sorun:</b> Fransa'yı siyasal olarak tam olarak kim temsil ediyor?</li>
</ul>
<div class="cols two">
<div class="box"><h4>Geleneksel sistem: zümre başına bir oy</h4><p>Ayrıcalıklı iki zümre (ruhban + soylular) ittifak yaparak halkı <b>2'ye 1</b> mağlup ediyordu.</p></div>
<div class="box"><h4>Üçüncü zümre talebi: kişi başına bir oy</h4><p>Bireysel temsil esası; kararların kurumsal statülerle değil <b>temsilci sayılarıyla</b> alınması.</p></div>
</div>

<h3>Abbé Sieyès: zümreden ulusa</h3>
<blockquote>"Üçüncü Zümre Nedir? Her şey. Şimdiye kadar siyasal düzende ne oldu? Hiçbir şey. Ne olmak istiyor? Bir şey." — Abbé Emmanuel-Joseph Sieyès (1789)</blockquote>
<div class="cols two">
<div class="box"><h4>Eski siyasal mantık</h4><p><b>Zümre → Temsil</b></p></div>
<div class="box"><h4>Yeni siyasal mantık</h4><p><b>Ulus → Temsil</b></p></div>
</div>

<h3>Kronoloji</h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Tarih</th><th>Olay</th><th>Anlamı</th></tr></thead>
<tbody>
<tr><td><b>5 Mayıs 1789</b></td><td>États-Généraux Versailles'da toplanır</td><td>Üç zümre esaslı, parçalı temsil</td></tr>
<tr><td><b>17 Haziran 1789</b></td><td><mark>Ulusal Meclis</mark>'in ilanı</td><td>Üçüncü Zümre tüm Fransız ulusunu temsil ettiğini ilan ederek egemenliği üstlenir: <b>Ulus → Temsilciler → Siyasal otorite</b> (eski yapı: Kral + Zümreler)</td></tr>
<tr><td><b>20 Haziran 1789</b></td><td>Tenis Kortu (Jeu de Paume) Yemini</td><td>Kralın engellemesine karşı temsilciler anayasa yapılana kadar dağılmama kararı alır</td></tr>
<tr><td><b>9 Temmuz 1789</b></td><td>Ulusal Kurucu Meclis</td><td>Meclis kendini "Ulusal Kurucu Meclis" ilan eder (kurucu irade)</td></tr>
<tr><td><b>14 Temmuz 1789</b></td><td>Bastille</td><td>Devrimin toplumsallaşması (Paris ve taşra): <b>Halk mobilizasyonu → Siyasal baskı → Devrim</b>. Versailles odağında ise: Temsil → Ulusal egemenlik → Anayasa</td></tr>
<tr><td><b>1789</b></td><td>Haklar Bildirgesi</td><td>Zümre üyeliğine dayalı eşitsiz statülerden genel ve evrensel ilkelere dayalı <b>eşit yurttaşlığa</b></td></tr>
<tr><td><b>1791</b></td><td>Anayasal monarşi</td><td>Sınırlı kral yetkileri ve seçilmiş Yasama Meclisi</td></tr>
<tr><td><b>10 Ağustos 1792</b></td><td>Tuileries baskını</td><td>Savaş ve güvensizlik sonucu monarşinin fiilen askıya alınması</td></tr>
<tr><td><b>21 Eylül 1792</b></td><td>Ulusal Konvansiyon</td><td>Monarşinin kaldırılması ve <mark>Cumhuriyet</mark>'in ilanı</td></tr>
</tbody></table></div>

<h3>Özet: tarihsel ve sosyolojik dönüşüm</h3>
<ol class="flow"><li>Zümresel toplum</li><li>Temsil krizi</li><li>Ulusal Meclis</li><li>Yurttaşlık</li><li>Ulusal egemenlik</li><li>Cumhuriyet</li></ol>
<p>Fransız Devrimi, doğuştan gelen ayrıcalıklara dayalı hukuki eşitsizliğin nasıl bir <b>temsil krizine</b> yol açtığını ve siyasal meşruiyetin kaynağını <mark>ulusal egemenliğe</mark> nasıl dönüştürdüğünü gösteren temel tarihsel örnektir.</p>
`
  },
  {
    id: `sanayi`, group: `h3`, no: `3.3`, title: `Britanya Sanayi Devrimi`,
    short: `<h4>Üretimde kökten değişim</h4>
<ul class="short-list">
<li>18. yüzyıl ortası Britanya: insan ve hayvan gücünden <b>makineleşmiş kent ekonomisine</b>; sermaye birikimi ve maden zenginliği onu merkez yaptı.</li>
<li>Tekstil: <b>Spinning Jenny</b> ile iplik üretimi <mark>16 kat</mark> arttı; mekanik dokuma maliyeti düşürdü; pamukta rekor hacimler.</li>
<li><b>James Watt</b>'ın buhar makinesi üretimi akarsu kenarına bağımlılıktan kurtardı; madenlerde su tahliyesi, kömür kullanımı katlandı.</li>
<li>Fabrika sistemi: merkezi üretim (ev atölyeleri yerine fabrika) · <b>saat disiplini</b> (vardiya, katı kurallar) · uzmanlaşma (her işçi tek hareket).</li>
</ul>
<h4>Kentleşme ve işçi sınıfı</h4>
<ul class="short-list">
<li><mark>1900'de nüfusun %62'si</mark> kentte; Manchester ve Liverpool kısa sürede metropol oldu.</li>
<li>Kırsal yaşam (mevsimlik tempo, kendi gıdası, geniş aile dayanışması) → kentsel işçi (<b>haftalık ücret</b>, <mark>günde 12–16 saat</mark>, kadın ve çocuk işçi).</li>
<li>Kanal (ucuz maden taşıma), demiryolu (pazarları bağladı), kömür (ağır sanayinin yakıtı).</li>
<li>Zorluklar: kolera salgınları, dar konutlar → sendikalaşma ve çalışma saatlerine kademeli yasal sınırlar.</li>
<li>Sonuç: üretimi, yerleşimi ve sosyal sınıfları yeniden tanımlayarak <b>çağdaş toplumun mimarı</b> oldu.</li>
</ul>`,
    files: [`materyal/3-hafta/Britanya_Sanayi_Devrimi.pptx`],
    html: `
<p class="lead">Mekanikleşme, buhar gücü, fabrika sistemi ve <mark>modern işçi sınıfının doğuşu</mark>.</p>

<h3>Üretim yapısında kökten değişim</h3>
<ul>
<li><b>Tarım toplumundan sanayi çağına:</b> 18. yüzyıl ortalarında Britanya, insan ve hayvan gücüne dayalı üretimi bırakıp <b>makineleşmiş kent ekonomisine</b> geçti.</li>
<li>Sermaye birikimi ve maden zenginliği Britanya'yı küresel sanayinin merkezi yaptı.</li>
</ul>

<h3>Tekstilde mekanikleşme ve buhar gücü</h3>
<div class="cols">
<div class="box"><h4>Çıkrık devrimi</h4><p><b>Spinning Jenny</b> ile iplik üretim kapasitesi <mark>16 kat</mark> arttı.</p></div>
<div class="box"><h4>Otomatik dokuma</h4><p>Mekanik dokuma tezgâhları kumaş maliyetlerini düşürdü.</p></div>
<div class="box"><h4>Kütlesel ham madde</h4><p>Pamuk işlemede günlük rekor hacimlere ulaşıldı.</p></div>
</div>
<ul>
<li><b>Watt buhar makinesi:</b> James Watt'ın verimli buhar motoru üretimi <mark>akarsu kenarlarına bağımlı olmaktan kurtardı</mark>.</li>
<li>Maden ocaklarında su tahliyesi sağlandı; kömür kullanımı katlanarak arttı.</li>
</ul>

<h3>Fabrika sisteminin yükselişi</h3>
<ol class="steps">
<li><b>Merkezi üretim:</b> Ev içi atölyeler yerini dev fabrika binalarına bıraktı.</li>
<li><b>Saat disiplini:</b> Vardiyalı çalışma sistemi ve katı iş kuralları uygulandı.</li>
<li><b>Uzmanlaşma:</b> İş bölümüyle her işçi tek bir hareketi tekrarladı.</li>
</ol>

<h3>Hızlı ve düzensiz şehirleşme</h3>
<p><mark>%62</mark> — 1900 yılında kentte yaşayan Britanya nüfusu. Manchester ve Liverpool gibi sanayi merkezleri birkaç on yılda kalabalık metropollere dönüştü.</p>

<h3>İşçi sınıfının doğuşu</h3>
<div class="cols two">
<div class="box"><h4>Geleneksel kırsal yaşam</h4><ul><li>Mevsimlik ve esnek çalışma temposu</li><li>Kendi ürettiği gıda ile geçim</li><li>Geniş aile ve topluluk dayanışması</li></ul></div>
<div class="box"><h4>Kentsel sanayi işçisi</h4><ul><li>Haftalık ücret bağımlılığı</li><li>Günde <b>12–16 saatlik</b> ağır mesai</li><li>Kadın ve çocuk işçi istihdamı</li></ul></div>
</div>

<h3>Kömür, kanal ve demiryolu</h3>
<ul>
<li><b>Kanal ağı:</b> Ağır maden taşımacılığında ucuz lojistik.</li>
<li><b>Demiryolu:</b> Buharlı lokomotifler pazarları birbirine bağladı.</li>
<li><b>Kömür:</b> Bütün ağır sanayinin temel yakıtı oldu.</li>
</ul>

<h3>Şehir hayatı ve zorluklar</h3>
<div class="cols">
<div class="box"><h4>Sağlık koşulları</h4><p>Altyapısız kentlerde kolera salgınları yayıldı.</p></div>
<div class="box"><h4>Dar konutlar</h4><p>İşçi aileleri sıkışık odalarda barındı.</p></div>
<div class="box"><h4>Sendikalaşma</h4><p>İlk işçi örgütleri hak arayışına başladı.</p></div>
<div class="box"><h4>Yasal reformlar</h4><p>Çalışma saatlerine kademeli sınırlar getirildi.</p></div>
</div>
<div class="tip"><span class="tip-label">Özet</span>Britanya Sanayi Devrimi; üretim teknolojilerini, yerleşim biçimlerini ve sosyal sınıfları yeniden tanımlayarak <b>çağdaş toplumun mimarı</b> oldu.</div>
`
  },
  {
    id: `modernite`, group: `h3`, no: `3.4`, title: `Sosyoloji ve Modernite`,
    short: `<h4>Modernite ve üç devrim</h4>
<ul class="short-list">
<li>Sosyoloji ve modernite <b>zamandaştır</b>; köken 19. yüzyıl Avrupa'sı, odak modern toplumsal bunalımlar.</li>
<li><b>Giddens</b>'a göre modernitenin 3 bileşeni: <mark>seküler-akılcı yaklaşım · siyasal kurumlar (ulus-devlet, kitle demokrasisi) · ekonomik kurumlar (endüstriyel üretim, kapitalist pazar)</mark>.</li>
<li>Üç devrim: <b>entelektüel</b> Aydınlanma → bilimsel yöntem ve pozitivizm · <b>siyasal</b> Fransız Devrimi → ulus-devlet, yurttaşlık, halk egemenliği · <b>ekonomik</b> Sanayi Devrimi → fabrika, kapitalizm, kentleşme, sınıflı toplum.</li>
</ul>
<h4>Aydınlanma ve sosyal bilimler</h4>
<ul class="short-list">
<li>18. yüzyıl Fransa'sı: dogmatizme karşı seküler aklın zaferi; Voltaire, Diderot, Rousseau'ya göre bilginin biricik kaynağı <b>akıl</b>; Kilise'ye ve mutlak monarşiye başkaldırı.</li>
<li>Disiplinler: siyaset bilimi (devlet ve hükümet) · ekonomi (piyasa) · sosyoloji (devlet ve piyasa dışı ilişkiler) · tarih (geçmiş olgular) · antropoloji (kültür ve topluluklar).</li>
<li><b>Comte:</b> önce <mark>"Toplumsal Fizik"</mark>; pozitivizm: yalnızca gözlem ve deneye dayalı bilgi meşru, spekülatif felsefe yerine pozitif olgular, toplum evrensel kanunlarla işleyen organizma.</li>
<li><b>Durkheim</b> (1895): toplumsal olgular <b>"şey"</b> gibi ele alınmalı; bireysel bilincin dışında, zorlayıcı, nesnel yöntemle incelenebilir.</li>
</ul>
<h4>Çifte devrim</h4>
<ul class="short-list">
<li>Fransız Devrimi: monarşiyi, dinin siyasetteki tekelini ve zümre düzenini bitirdi; İnsan ve Yurttaş Hakları Bildirgesi (1789): "Eşitlik, Özgürlük, Kardeşlik".</li>
<li>Sanayi Devrimi: buhar, fabrika, kırdan kente göç; <b>işçi sınıfı ile kapitalist</b> kutuplaşması.</li>
<li>Sentez: Aydınlanma aklı (araç) + çifte devrim (yeni sorunlar) → sosyoloji, modern toplumun krizlerine bilimsel açıklama getirme çabası.</li>
</ul>`,
    files: [`materyal/3-hafta/Sosyoloji_ve_Modernite.pptx`],
    html: `
<p class="lead"><mark>Sosyoloji ve modernite zamandaştır.</mark> Sosyolojiyi anlamak, modern toplumun ortaya çıkış dinamiklerini kavramaktan geçer. Disipliner köken: 19. yüzyıl Avrupa'sı; temel odak: modern toplumsal bunalımlar.</p>

<h3>Anthony Giddens'a göre modernitenin 3 bileşeni</h3>
<div class="cols">
<div class="box"><h4>Seküler ve akılcı yaklaşım</h4><p>Dünyaya akla ve empirik bilgiye dayalı bakış.</p></div>
<div class="box"><h4>Siyasal kurumlar</h4><p>Ulus-devlet yapısı ve kitle demokrasisi mekanizmaları.</p></div>
<div class="box"><h4>Ekonomik kurumlar</h4><p>Endüstriyel üretim ve kapitalist pazar ekonomisi bileşimi.</p></div>
</div>

<h3>Moderniteyi doğuran üç büyük devrim</h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Tür</th><th>Devrim</th><th>Getirdiği</th><th>Sonuç</th></tr></thead>
<tbody>
<tr><td><b>Entelektüel</b></td><td>Aydınlanma düşüncesi</td><td>Seküler ve akla dayalı yeni dünya görüşü</td><td><mark>Bilimsel yöntem ve pozitivizm</mark></td></tr>
<tr><td><b>Siyasal</b></td><td>Fransız Devrimi</td><td>Ulus-devlet, yurttaşlık ve halk egemenliği</td><td><mark>Yeni siyasal düzen</mark></td></tr>
<tr><td><b>Ekonomik</b></td><td>Sanayi Devrimi</td><td>Fabrika üretimi, kapitalizm ve kentleşme</td><td><mark>Sınıflı sanayi toplumu</mark></td></tr>
</tbody></table></div>

<h3>Aydınlanma düşüncesi</h3>
<p>18. yüzyıl Fransa'sında beliren Aydınlanma, dinsel dogmatizme ve tutucu geleneklere karşı <b>seküler aklın zaferini</b> savundu.</p>
<ul>
<li><b>Aklın ve bilimin meşruiyeti:</b> Voltaire, Diderot ve Rousseau'ya göre bilgi edinmede biricik kaynak <mark>akıldır</mark>.</li>
<li><b>Empirik ve pozitif yöntem:</b> Deneysel ve gözlemlenebilir pozitif olguların açıklanması esastır.</li>
<li><b>Otoriteye başkaldırı:</b> Meşruiyetini dinden alan Katolik Kilisesi'ne ve mutlak monarşiye karşı duruş.</li>
</ul>

<h3>Doğa bilimleri ve sosyal bilimlerin doğuşu</h3>
<blockquote>"Sosyal bilimlerin değişik disiplinleri, 19. yüzyılda 'gerçeklik' hakkında empirik bulgulara dayalı 'nesnel' bilgi elde edilmesini sağlamak için yaratıldı." — Immanuel Wallerstein</blockquote>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Disiplin</th><th>İnceleme alanı</th></tr></thead>
<tbody>
<tr><td><b>Siyaset bilimi</b></td><td>Devlet ve hükümet — hükümet mekanizmaları, iktidar ilişkileri, siyasal kurumların işleyişi</td></tr>
<tr><td><b>Ekonomi</b></td><td>Piyasa mekanizmaları — üretim, bölüşüm, tüketim, serbest piyasa</td></tr>
<tr><td><b>Sosyoloji</b></td><td>Toplumsal ilişkiler — <mark>devlet ve piyasa dışında kalan alan</mark>: kentleşme, suç, aile, işçi mahalleleri, demografi</td></tr>
<tr><td><b>Tarih</b></td><td>Geçmiş olgular</td></tr>
<tr><td><b>Antropoloji</b></td><td>Kültür ve topluluklar</td></tr>
</tbody></table></div>

<h3>Auguste Comte ve pozitivist sosyoloji</h3>
<ul>
<li>Comte, sosyoloji terimini icat etmeden önce bu disipline <mark>"Toplumsal Fizik"</mark> adını verdi; doğa bilimlerinin kesinliğini toplum araştırmalarına taşımayı hedefledi.</li>
<li><b>Pozitivist yöntem ilkeleri:</b>
  <ul>
  <li>Sadece gözlem ve deneye dayalı bilgi meşrudur.</li>
  <li>Spekülatif felsefe yerine pozitif olgular incelenir.</li>
  <li>Toplum, evrensel kanunlara göre işleyen bir <b>organizmadır</b>.</li>
  </ul></li>
</ul>

<h3>Émile Durkheim ve toplumsal olgular</h3>
<blockquote>"Toplumsal olgular birer 'şey' olarak ele alınmalıdır." — <i>Sosyolojik Yöntemin Kuralları</i> (1895)</blockquote>
<p>Durkheim'a göre toplumsal olgular <b>bireysel bilincin dışındadır</b>, bireylere <b>zorlayıcı bir güç</b> uygular ve <b>nesnel yöntemlerle</b> incelenebilir.</p>
<div class="tip"><span class="tip-label">Tartışma</span>Doğa bilimlerinin tarafsız ve nesnel gözlem yöntemi, insan ilişkileri ve toplumsal olaylar için tam anlamıyla uygulanabilir mi?</div>

<h3>Fransız Devrimi ve modern siyaset</h3>
<ul>
<li>Eski Rejim'in (Ancien Régime) çöküşü; monarşiyi, dinin siyasetteki tekelini ve geleneksel zümre düzenini sona erdirdi.</li>
<li>Eski Rejim zümre yapısı: din adamları + soylular <b>karşısında</b> halk (3. zümre / Ulusal Meclis).</li>
<li><b>İnsan ve Yurttaş Hakları Bildirgesi (1789):</b> <q>İnsanlar özgür ve eşit doğar, eşit yaşarlar.</q> Slogan: <mark>Eşitlik, Özgürlük, Kardeşlik</mark>.</li>
</ul>

<h3>Sanayi Devrimi ve kapitalizm</h3>
<ul>
<li>Britanya'da başlayan üretim devrimi el emeğinden makineleşmeye geçişi sağlarken toplumsal yapıyı kökten dönüştürdü.</li>
<li><b>Üretim dönüşümü:</b> Buhar gücü, fabrikalaşma ve kırdan kente kitlesel göç.</li>
<li><b>Sınıfsal kutuplaşma:</b> Emek gücünü satan <b>işçi sınıfı</b> ile sermaye sahibi <b>kapitalistler</b>.</li>
</ul>

<h3>Sentez: sosyolojinin tarihsel oluşum dinamiği</h3>
<div class="cols">
<div class="box"><h4>Entelektüel girdi</h4><p><b>Aydınlanma aklı:</b> bilimsel ve seküler analiz araçları sağlar.</p></div>
<div class="box"><h4>Maddi altüst oluş</h4><p><b>Çifte devrim:</b> Fransız + Sanayi Devrimi yeni problemleri doğurur.</p></div>
<div class="box"><h4>Tarihsel misyon</h4><p><b>Modern bir sosyal bilim olarak sosyoloji:</b> modern toplumun krizlerine, dönüşümlerine ve yeni kurumlarına bilimsel açıklamayla çözüm getirme çabası.</p></div>
</div>
<div class="tip"><span class="tip-label">Tartışma</span>"Doğa bilimlerinin evrensel yasaları, insan ve toplum hayatını açıklamada ne kadar yeterlidir?"</div>
`
  },
  {
    id: `imgelem`, group: `h4`, no: `4.1`, title: `Sosyolojik İmgelem (C. Wright Mills)`,
    short: `<h4>Sosyolojik imgelem</h4>
<ul class="short-list">
<li>Sosyolojik düşünmeyi diğerlerinden ayıran özelliklerin bütünü; <b>C. Wright Mills</b>. Bağlam: <mark>1958 Amerikası</mark>, 2. Dünya Savaşı sonrası; insan büyük değişimler karşısında şaşkın ve güçsüz.</li>
</ul>
<blockquote>"Toplumu ve bireyi birlikte ele almadıkça, ne bireyin hayatını ne de toplumun tarihini anlayabiliriz." (s. 8)</blockquote>
<ul class="short-list">
<li>İhtiyaç: dışarıdaki dünyada ve kendi benliğinde olup bitenleri anlamasını sağlayacak <b>düşünsel nitelik</b> (s. 10) = sosyolojik imgelem.</li>
<li>Üç eksen: <mark>biyografi · toplum · tarih</mark>; biyografi ile tarih arasındaki ilişkiyi çözümler.</li>
<li>Üç soru: toplumun yapısal düzeni ne? hangi tarihsel dönemin parçası? ne tür <b>insan tipleri</b> üretiyor?</li>
<li>En uzak dönüşümlerin bireysel yansımalarını görmek; dar kalıplardan kurtulup şeylerin özünü yakalamak.</li>
</ul>
<h4>Kişisel ve kamusal sorunlar</h4>
<ul class="short-list">
<li><b>Kişisel yaşam sorunları:</b> bireyin dar/dolaysız yaşamı (bir kişinin işsizliği, aile içi anlaşmazlık). <b>Kamusal yapı sorunları:</b> kurumların ve tarihsel koşulların krizleri (kitlesel işsizlik, ekonomik kriz).</li>
<li>Ayrımın amacı: bireysel sorunların yapının <b>yansıması</b> olduğunu göstermek; milyonların işsizliği yapının çöküşüdür, <b>biyografi tarihi yansıtır</b>.</li>
<li>Kilit cümle: en bireysel sorunun bile tarihsel/toplumsal temelleri olduğunu kavradığımız an sosyolojik imgelem kazanırız.</li>
</ul>
<h4>Modern insan ve bilim</h4>
<ul class="short-list">
<li>İki duygu: <b>ilgisizlik/kayıtsızlık</b> (değerler sistemi ortadan kalkmış) · <b>huzursuzluk/endişe</b> (değerler tehdit altında, kaynak belirsiz). Kaynak: ekonomik bunalım, nükleer savaş korkusu, hidrojen bombası, Soğuk Savaş.</li>
<li>Doğa bilimlerinin tahtı sarsıldı: fizik hidrojen bombasında araç oldu, <mark>teknolojik ethos</mark>un (teknolojiyi yücelten değer sistemi) önünü açtı; bilim askeri ve ekonomik güçlerce denetleniyor, yıkımın temsilcisi oldu.</li>
<li>Sosyolojik imgelem doğa bilimlerinin yerini almaya başladı: insanı ve doğayı korur (etik, eleştirel), çözüm üretir; <b>özgürleştirici</b> bir düşünce biçimi.</li>
</ul>`,
    files: [`materyal/4-hafta/Sosyolojik_Imgelem.pptx`, `materyal/4-hafta/Sosyolojik_Imgelem_Toplumbilimsel_Dusun.pptx`],
    html: `
<p class="lead"><b>Sosyolojik imgelem</b> (tahayyül): sosyolojik düşünme biçimini diğer düşünme biçimlerinden ayıran <mark>genel özelliklerin bütünü</mark>. C. Wright Mills'in düşünsel mirası; birey–toplum ilişkisinin çözümlenmesi.</p>
<blockquote>"Toplumu ve bireyi birlikte ele almadıkça, ne bireyin hayatını ne de toplumun tarihini anlayabiliriz." — C. Wright Mills (s. 8)</blockquote>

<h3>Bağlam: büyük dönüşümler çağı</h3>
<ul>
<li><b>1958 Amerikası ve 2. Dünya Savaşı sonrası:</b> Çağdaş insan, büyük değişimler karşısında <b>şaşkınlık ve güçsüzlük</b> yaşar, bu dönüşümlere anlam vermekte zorlanır.</li>
<li>Bu değişimlere ancak birey ile toplum arasındaki etkileşimleri kavrayabilen bir sosyolojik imgelem anlam verebilir.</li>
</ul>
<blockquote>"Günümüz insanının gereksindiği şey, kendisinin dışındaki dünyada ve kendi benliğinde olup bitenleri anlamasını sağlayacak düşünsel bir nitelik kazanmaktır." (s. 10)</blockquote>
<p>İşte bu düşünsel nitelik: <mark>sosyolojik imgelem</mark>.</p>

<h3>Analizin üç temel ekseni</h3>
<div class="cols">
<div class="box"><h4>1. Biyografi</h4><p>Bireylerin ayrı ayrı yaşadıkları hayat; kişisel yaşam öyküleri ve öznel tecrübeler.</p></div>
<div class="box"><h4>2. Toplum</h4><p>Bireylerin parçası olduğu büyük topluluk; kurumsal yapı ve toplumsal birliktelikler.</p></div>
<div class="box"><h4>3. Tarih</h4><p>İçinde yaşanılan tarihsel dönem; çağın ve süreçlerin getirdiği dinamikler.</p></div>
</div>
<p>Sosyolojik imgelem, <b>biyografiyle tarih arasındaki ilişkinin</b> toplumda nasıl ortaya çıktığını çözümler (bkz. s. 12).</p>

<h3>Sosyoloğun yönelttiği üç soru</h3>
<ol class="steps">
<li>İncelediğimiz toplum nasıl bir <b>yapısal düzene</b> sahiptir?</li>
<li>Bu toplum hangi <b>tarihsel dönemin</b> parçasıdır?</li>
<li>Bu tarihsel ve toplumsal yapı ne tür <b>insan tipleri</b> üretir / hangi insan tipleri üzerine inşa edilmiştir?</li>
</ol>
<ul>
<li>En uzak görünen toplumsal dönüşümlerin bile <mark>bireysel dünyadaki yansımalarını</mark> görebilmek sosyolojik imgelemin özelliğidir.</li>
<li>Bireyi içinde bulunduğu toplum ve tarihsel dönem şekillendirir; sosyolojik imgelem bu yapıyı irdeleyerek yepyeni bir bakış açısı sunar.</li>
<li>Dar kalıplardan kurtulmayı, dünyayı yeni bir anlayışla kavramayı ve <b>şeylerin özünü yakalamayı</b> sağlar.</li>
</ul>

<h3>Kişisel sorunlar ve kamusal (yapısal) sorunlar</h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th></th><th>Kişisel yaşam sorunları</th><th>Kamusal yapı sorunları</th></tr></thead>
<tbody>
<tr><td><b>Nedir?</b></td><td>"Bireyin dar/dolaysız yaşamının sorunları"; dar çevrede yaşanan öznel sıkıntılar</td><td>"Toplumsal yapının kamusal sorunları"; kurumların ve tarihsel koşulların yarattığı krizler</td></tr>
<tr><td><b>Örnek</b></td><td>Tek bir bireyin iş bulamaması, aile içi anlaşmazlık</td><td>Kitlesel işsizlik oranları, ekonomik krizler</td></tr>
</tbody></table></div>
<p>Bu ayrım, aslında <mark>bireysel sorunların toplumsal yapının sorunlarının yansıması</mark> olduğunu göstermek için yapılır. Bireyin dar yaşamını merkeze koyan yaklaşımı hedef tahtasına oturtur: <b>biyografi, içinde bulunduğu tarihsel/toplumsal yapıyı yansıtır.</b></p>

<h3>Örnek: işsizlik ve evlilik</h3>
<div class="cols two">
<div class="box"><h4>Kişisel deneyim</h4><p>Birey işsizliği ya da evlilik çatışmasını <b>kendi kişisel başarısızlığı</b> olarak algılar.</p></div>
<div class="box"><h4>Toplumsal gerçeklik</h4><p>Milyonların yaşadığı işsizlik <b>yapının çöküşüdür</b>. Biyografi, tarihi yansıtır.</p></div>
</div>
<div class="tip"><span class="tip-label">Kilit cümle</span>En bireysel sorunun bile tarihsel/toplumsal temelleri olduğunu kavramaya başladığımız an, sosyolojik imgelem kazanmış oluruz.</div>

<h3>Modern insanın iki duygu durumu</h3>
<div class="cols two">
<div class="box"><h4>İlgisizlik / kayıtsızlık</h4><p>İnsan hayatına anlam ve yön veren <b>değerler sisteminin ortadan kalkması</b> sonucu oluşan duygu.</p></div>
<div class="box"><h4>Huzursuzluk / endişe</h4><p>Değerler sistemi <b>tehdit altında</b> ama tehdidin kaynağı belirsiz; bunun yarattığı panik hali.</p></div>
</div>
<p>İki duygu da kaynağını tarihsel ve toplumsal gelişmelerden alır: <b>ekonomik bunalım, nükleer savaş korkusu, hidrojen bombası yapımının yarattığı panik, Soğuk Savaş</b>.</p>

<h3>Doğa bilimlerinin sarsılan tahtı</h3>
<ul>
<li>Fizik ve biyoloji, belirli bir dönem dünyayı algılama, yorumlama, çözümleme ve çözüm üretmede <b>hâkim yaklaşım</b> oldu.</li>
<li>Mills'in döneminde sorgulandı: fizik bilimlerinin <mark>hidrojen bombası</mark> yapımında araç olması ve <b>teknolojik bir ethosun</b> (teknolojiyi yücelten bir değer sisteminin) önünü açması.</li>
<li>Doğa bilimleri artık ilerlemenin ve uygarlığın değil, <b>yıkımın temsilcisine</b> dönüştü. Mills'e göre bilim <b>askeri ve ekonomik güçlerce denetlenen</b> bir yapıya sahip.</li>
<li>Bilimin insanlar için ne anlama geldiği ve kime hizmet ettiği yeniden değerlendirilmeli.</li>
</ul>

<h3>Yeni alan: sosyolojik imgelem</h3>
<p>Sosyolojik imgelem, böyle bir dönemde dünyayı yeniden yorumlamamızı sağlayan yaklaşım olarak <mark>doğa bilimlerinin yerini almaya</mark> başladı. Bu olumlu bir gelişmedir, çünkü:</p>
<ul>
<li><b>İnsanı ve doğayı korur:</b> Bilimin yıkım amaçlı kullanılmasına karşı duyarlı, etik ve eleştirel bir yaklaşım sunar.</li>
<li><b>Çözüm üretir:</b> Toplumsal sorunları birey, toplum ve tarih ekseninde saptayan sistemli yaklaşımı çözüm üretmenin önünü açar.</li>
</ul>
<div class="tip"><span class="tip-label">Sonuç</span>Sosyolojik imgelem <b>özgürleştirici bir düşünce biçimidir</b>: dar kalıplardan kurtularak dünyayı bütüncül bir anlayışla kavrama ve şeylerin özünü yakalama imkânı sunar.</div>
`
  },
  {
    id: `dusunmek`, group: `h5`, no: `5.1`, title: `Sosyolojik Düşünmek (Bauman & May)`,
    short: `<h4>Sosyal bilimleri ne ayırır?</h4>
<ul class="short-list">
<li>Bauman ve May: sosyoloji kendine özgü <b>soruları ve yaklaşım biçimleri</b> olan bilimsel disiplin; 19. yüzyılda modern toplumsal düzeni incelemek için doğdu.</li>
<li>İki yaygın yaklaşım, ikisi de sorunlu: <b>1. alan ayrımı</b> (devlet / piyasa / geri kalan) → eleştiri: toplumsal yaşam bölünemez bütün · <b>2. yöntem ayrımı</b> → eleştiri: hepsi benzer prosedürleri izler.</li>
</ul>
<blockquote>"Ne kuzey yarımküreden güneye geçerken sosyolojiden antropolojiye geçiyoruz ne de yaşlandıkça tarihten sosyolojiye!" (s. 15)</blockquote>
<ul class="short-list">
<li>Örnek: kantinde kahve almak; fiyat (ekonomi), işletme kuralları (siyaset), masadaki sohbet (sosyoloji), kahve kültürü (tarih/antropoloji) aynı anda.</li>
</ul>
<h4>Bilişsel perspektif ve karşılıklı bağımlılık</h4>
<ul class="short-list">
<li>Asıl fark <mark>bilişsel perspektif</mark>: bir şeyi incelerken kullanılan genel zihinsel çerçeve; dış dünyadaki değil, <b>sorulan sorulardaki</b> farklılık.</li>
<li>Ekonomi: maliyet-kâr, kıt kaynaklar · Siyaset bilimi: güç/otorite ve ürettiği eşitsizlikler.</li>
<li>Sosyoloji bireyi daha geniş ilişkiler ağının parçası olarak ele alır: <b>ilişkisel bakış</b> (bizden önce var olan bir toplumda doğarız); buna <mark>karşılıklı bağımlılık</mark> (inter-dependency) derler (s. 18).</li>
</ul>
<h4>Sosyoloji ve sağduyu</h4>
<ul class="short-list">
<li><b>Sağduyu:</b> günlük hayatı yönlendiren sistemsiz, alışkanlığa dayalı bilgiler. Doğa bilimlerinin sağduyuyla bağı yok; sosyolog ise toplumun parçası, <b>sağduyuyu hesaba katmak zorunda</b>; sosyolojik olgular zaten anlamla yüklü.</li>
<li>Örnek: fizikçi için elmanın yerçekimi hakkındaki "fikri" önemsiz; sosyolog evliliği incelerken insanların evlilik hakkındaki inançlarını hesaba katar.</li>
<li>Sağduyu düzensiz, sistemsiz / sosyoloji sistemli · sağduyu dar deneyimle sınırlı / sosyoloji geniş ağ (Mills) · sağduyu gerçekliği <b>niyetlerin</b> sonucu sayar / sosyoloji bütüncül.</li>
</ul>`,
    files: [`materyal/5-hafta/Sosyolojik_Dusunmek_1.pptx`, `materyal/5-hafta/Sosyolojik_Dusunmek_3.pptx`],
    html: `
<p class="lead">Bauman ve May'e göre sosyoloji, <mark>kendine özgü soruları ve yaklaşım biçimleri olan bilimsel bir disiplindir</mark>; onu diğer disiplinlerden ayıran da bu sorular ve yaklaşım biçimleridir. Sosyoloji 19. yüzyılda yeni (modern) toplumsal düzeni ve getirdiği değişimleri incelemek için ortaya çıktı.</p>

<h3>Sosyal bilimleri birbirinden ne ayırır?</h3>
<p>Tarih, antropoloji, sosyoloji, siyaset bilimi… hepsi <b>beşeri ve toplumsal dünyayla</b>, insanların kendi aralarında ve sosyal çevreleriyle girdikleri etkileşimlerle ilgilidir. O halde onları ne ayırır? İki yaygın yaklaşım öne sürülür; Bauman ve May'e göre <mark>ikisi de sorunludur</mark>:</p>
<div class="cols two">
<div class="box"><h4>1. İncelenen alan ayrımı</h4>
<p>Farklılıklar yalnızca sorgulanan dünyadaki ayrımları yansıtır: siyaset bilimi devleti ve hükümet kurumlarını, ekonomi piyasa ilişkilerini, sosyoloji bu ikisinin dışında kalanı inceler.</p>
<p><b>Eleştiri:</b> Toplumsal yaşam bölünemez bir bütündür.</p></div>
<div class="box"><h4>2. Araştırma yöntemi ayrımı</h4>
<p>Kullanılan yöntemler ve izlenen yollar farklıdır.</p>
<p><b>Eleştiri:</b> Bütün sosyal bilimler belli bir sistem dahilinde <b>benzer prosedürleri</b> izler; yöntem üzerinden ayırmak imkânsızdır.</p></div>
</div>
<blockquote>"Deneyimlerimizden yola çıkarak baktığımızda, toplumu ekonomiye, coğrafyaya, politikaya, tarihe yahut sosyal politikalara ayırabilir miyiz? Siyaset biliminin veya ekonominin ayırdığı alanlarda ayrı yaşamlar sürdürmüyoruz. Ne kuzey yarımküreden güneye geçerken sosyolojiden antropolojiye geçiyoruz ne de yaşlandıkça tarihten sosyolojiye!" (s. 15)</blockquote>
<blockquote>"Hepsi araştırma yöntemleriyle ilgili olguları derlemeye çalışırlar, bunların doğruluklarından emin olurlar ve ardından ilgili bilgiyi geçerli kılmak için bu olguları tekrar tekrar kontrol ederler." (s. 16)</blockquote>
<div class="tip"><span class="tip-label">Basit örnek</span><b>Kantinde kahve almak:</b> kahvenin fiyatı (ekonomi), kantin işletme kuralları (siyaset), arkadaşlarınla masada sohbet (sosyoloji) ve kahve içme kültürünün geçmişi (tarih/antropoloji) aynı anda gerçekleşir. Yaşam parçalara bölünmez.</div>

<h3>Asıl fark: bilişsel perspektif</h3>
<ul>
<li>Sosyal bilimleri ayıran, <mark>tek tek disiplinleri harekete geçiren sorular ve bakış açılarıdır</mark>: eylemleri gözlerken, keşfederken, betimlerken, kavrarken ve açıklarken kullanılan bakış açıları.</li>
<li>May ve Bauman bunlara <b>bilişsel (cognitive) perspektif</b> der: bir şeyi incelerken kullanılan genel zihinsel çerçeve.</li>
<li>Ayırt edici olan dış dünyadaki farklılıklar değil, <b>sorulan sorulardaki farklılıklardır</b>.</li>
</ul>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Disiplin</th><th>Neden farklı?</th></tr></thead>
<tbody>
<tr><td><b>Ekonomi</b></td><td>Dış dünyada kendi başına işleyen bir "piyasa" olduğu için değil; insan eylemlerini <b>maliyet-kâr</b> ya da <b>kıt kaynakların düzenlenmesi</b> soruları üzerinden incelediği için.</td></tr>
<tr><td><b>Siyaset bilimi</b></td><td>İnsan eylemlerini <b>güç/otorite</b> ve bunların ürettiği eşitsizlikler ya da etkileşimler üzerinden incelediği için.</td></tr>
</tbody></table></div>

<h3>Sosyolojiyi ne ayırt eder?</h3>
<p>İnsan eylemlerini değerlendirirken ortaya koyduğu farklı sorular, yaklaşım biçimleri ve yorumlama ilkeleri. Sosyoloji bireyleri her zaman <mark>daha geniş bir tarihsel/toplumsal ilişkiler ağının parçası</mark> olarak ele alır.</p>
<blockquote>"Sosyoloji esas olarak ilişkisel bir bakış açısıyla ilgilenir: Bu da bizden önce var olan bir toplum içinde doğmamız ve onun üyeleri olmamızdır. Bu ilişkiler içinde biçimleniriz ve deneyimlerimiz toplumsal yapıların etkisiyle, etrafımızdaki şeyleri görme biçimimiz kültürel referansların çerçevesiyle şekillenir." (s. 18)</blockquote>
<p>Bauman ve May bu ilişkiselliğe <b>"karşılıklı bağımlılık" (inter-dependency)</b> der.</p>

<h3>Sosyoloji ve sağduyu (common sense)</h3>
<p>Sosyolojiyi doğa/fen bilimlerinden ayırmanın en temel yollarından biri, sosyoloji ile sağduyu arasındaki ilişkiye bakmaktır.</p>
<dl class="defs">
<dt>Sağduyu</dt><dd>Günlük hayatımızı yönlendiren <b>sistemsiz, alışkanlığa dayalı</b> bilgiler bütünü; toplumsal çevreyle ilişkimizi gündelik deneyimler çerçevesinde düzenleyen anlamlar dünyası.</dd>
</dl>
<div class="cols two">
<div class="box"><h4>Doğa bilimleri</h4><p>Sağduyuyla bağı yoktur; insanların gündelik deneyimleri onları ilgilendirmez. Doğal fenomenler belli koşullarda gözlenir, deneylere tabi tutulur, bilimsel sonuçlara ulaşılır.</p></div>
<div class="box"><h4>Sosyoloji</h4><p>Sosyologlar toplumsal yapının parçasıdır; <b>sağduyudan tamamen kopamazlar</b>, onu hesaba katmak zorundadırlar. Sosyolojik olgular <b>zaten anlamla yüklüdür</b>; gerçeklik zaten anlam verilmiş bir yapıdır.</p></div>
</div>
<div class="tip"><span class="tip-label">Basit örnek</span><b>Yerçekimi ve evlilik:</b> Bir fizikçi elmanın düşüşünü incelerken elmanın yerçekimi hakkındaki "fikri" önemli değildir. Ama bir sosyolog evlilik kurumunu incelerken insanların evlilik hakkındaki gündelik inançlarını ve sağduyusal fikirlerini hesaba katmak zorundadır.</div>

<h3>Sağduyunun ötesinde sosyoloji</h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Sağduyu</th><th>Sosyoloji</th></tr></thead>
<tbody>
<tr><td>Düzensiz ve sistemsizdir</td><td>Bilimseldir, sistemli prosedürleri izler</td></tr>
<tr><td>Sınırlı ve dar yaşam deneyimleriyle koşullanmıştır</td><td>Daha geniş toplumsal/tarihsel ilişkiler ağını temel alır (C. Wright Mills'i hatırla!)</td></tr>
<tr><td>Gerçekliği sadece bireylerin niyetlerinin sonucu olarak görür</td><td>Niyetlerin ötesinde bütüncül bir yaklaşım sunar (Mills'in biyografi–toplum–tarih ilişkisi)</td></tr>
</tbody></table></div>
<div class="tip"><span class="tip-label">Özet</span>Sosyoloji, verilmiş kabul edilen sağduyusal dünyayı sorgulayarak bireyi <b>geniş toplumsal ve tarihsel ağlar içinde</b> kavramamızı sağlar.</div>
`
  },
  {
    id: `bauman`, group: `h5`, no: `5.2`, title: `Bauman & May: Sosyolojik Mercekleri Yaratmak`,
    short: `<h4>Disiplinli bir pratik <span class="ref">s. 13–14</span></h4>
<ul class="short-list">
<li>Amaç: sosyolojik düşünmenin kendimizi, birbirimizi ve sosyal çevremizi anlamadaki önemi. Sosyoloji kendine has soruları olan <b>disiplinli bir pratik</b>.</li>
<li>Terim 19. yüzyılın erken döneminde; toplumsal düzeni ve değişimi araştırmak için gelişti; biçimi toplumsal dönüşümlerle evrilir.</li>
</ul>
<h4>Alana göre ayırmak neden sorunlu? <span class="ref">s. 14–16</span></h4>
<ul class="short-list">
<li>Basit yanıt (farklar dünyadaki ayrımları yansıtır) sorunlu: beşeri dünyada <mark>doğal ayrım yoktur</mark>; bilgi edinme yollarımız dünyayı kavrama çerçeveleridir.</li>
<li>Pratikte de fark yok: hepsi olguları derler, doğrular, tekrar kontrol eder; sistematik disiplin idealine uyar; gözlem ve tarihsel bulguları analitik modellerle yorumlar.</li>
</ul>
<h4>Bilişsel perspektifler <span class="ref">s. 17–18</span></h4>
<ul class="short-list">
<li>Son umut: disiplinleri harekete geçiren <b>sorular</b>. <b>İktisat:</b> eylemlerin maliyet–yarar ilişkisi, kıt kaynakların idaresi ve paylaşımı · <b>Siyaset bilimi:</b> iktidar ve <b>nüfuz</b> asimetrisi üzerinden eylemler.</li>
<li>Sosyolojinin farkı: eylemleri daha geniş temsillerin unsuru görmek; temsil = <mark>karşılıklı bağımlılık ağı</mark>nda eklemlenmiş aktörlerin tesadüf olmayan topluluğu. Bireyler araştırmaya ağın <b>üyeleri/partnerleri</b> olarak girer.</li>
</ul>
<h4>Sağduyu ve sosyoloji <span class="ref">s. 19–21</span></h4>
<ul class="short-list">
<li>Sağduyu: zengin ama düzensiz, sistemsiz, kimi zaman tarif edilemez bilgi. Fen bilimleri sağduyuyla ilgilenmez; nesneleri özel koşullarda (partikül hızlandırıcı, mikroskop) çıkar, bilgisi sağduyuyla <b>rekabet etmez</b>.</li>
<li>Hepimiz örtük bilgisi olan <b>yetenekli aktörleriz</b>, ama rutine gömülüyken başımızdan geçenleri sistematik düşünemeyiz. Sosyolog da deneyimin parçası, bilgiden tamamen kopamaz.</li>
</ul>
<h4>Sağduyudan üç fark <span class="ref">s. 22–24</span></h4>
<ul class="short-list">
<li>Sosyolog hem <b>içsel hem dışsal</b> bakış açısına sahip olmalı; aile, mahalle, ulus, kilise zaten anlamla yüklü.</li>
<li><b>1. Sorumlu yöntem:</b> kurumsal yöntemlere bağlı; delilli ifadeyi test edilmemiş fikirden ayırır · <b>2. Sahanın boyutları:</b> tek yaşam deneyimi taraflı; birden çok yaşam dünyası karşılaştırılır.</li>
<li><b>3. Anlama ve açıklama biçimi:</b> sağduyu açıklamayı kendi yaşam dünyasından çeker, olayı birinin <b>kasıtlı eylemine</b> bağlar; sosyoloji tek aktörden değil <b>temsillerden</b> başlar, yalıtılmış birey metaforunu reddeder.</li>
</ul>
<h4>Alışkanlığı kırmak ve tepkiler <span class="ref">s. 25–28</span></h4>
<ul class="short-list">
<li>Sağduyunun gücü <b>ikili</b>: yol gösterir ama sorgulamaz, pratikte kendini onaylar. Sık tekrarlanan tanıdık olur, tanıdık açıklama gerektirmez.</li>
<li>Alışkanlığın kalkması: daha çok öz-farkındalık, diğerlerini anlama, daha çok özgürlük ve kontrol. Doğal ve değişmez görünenin beşeri güçlerce kurulduğunu görmek olasılıklar açar.</li>
<li>"Politik sadakatsizlik" suçlamaları genelde şirketler, hükümetler ve iktidar sahiplerinden gelir; mevcut durumun "doğal" olduğunu iddia edenlerde belirgin.</li>
</ul>`,
    fromPdf: {
      name: `Zygmunt Bauman & Tim May, <i>Sosyolojik Düşünmek</i> (çev. Akın Emre Pilgir, Ayrıntı Yayınları), Giriş: "Sosyolojik Mercekleri Yaratmak" (s. 13–28)`,
      note: `Parantez içindeki sayfa numaraları kitabın sayfalarıdır. PDF sayfası = kitap sayfası + 3 (ör. s. 13 → PDF 16).`,
      file: `materyal/5-hafta/Bauman_May_Sosyolojik_Dusunmek.pdf`,
      pdfOffset: 3
    },
    html: `
<h3>Disiplinli bir pratik olarak sosyoloji <span class="ref">s. 13–14</span></h3>
<ul>
<li>Bölümün amacı: sosyolojik düşünmek fikrini ve bunun kendimizi, birbirimizi ve sosyal çevrelerle ilişkilerimizi anlamadaki önemini irdelemek.</li>
<li>Sosyoloji, <mark>kendine has soruları ve yaklaşım biçimleri olan disiplinli bir pratiktir</mark>.</li>
<li>Terim <b>19. yüzyılın erken dönemlerinde</b> kullanıldı; gelişimi toplumsal düzeni ve değişimi araştırma amacıyla oldu. Disiplinin biçimi ve içeriği toplumsal dönüşümlerle birlikte evrim geçirir.</li>
<li>Sosyolojiyi konumlandırmak için, diğer disiplinlerden farklı sorular yöneltmesi bakımından pratiğinin bazı <b>ayırt edici özellikleri</b> olmalıdır.</li>
</ul>

<h3>Disiplinleri alanlarına göre ayırmak neden sorunlu? <span class="ref">s. 14–16</span></h3>
<ul>
<li>Tarih, antropoloji, siyaset bilimi, hukuk, sosyal politikalar, psikoloji, idare ve örgütlenme çalışmaları… <b>tümü beşeri dünyayla</b> ilgilidir. O halde onları ayıran nedir?</li>
<li>Basit yanıt: disiplinler arasındaki farklılıklar yalnızca sorguladıkları dünyadaki ayrımları yansıtır. Ama sınırları bu yolla haklı çıkarmaya başladığımızda mesele <b>sorunlu</b> hale gelir: beşeri dünyanın net ayrımları yansıttığını ve bunların kendine has sorgulama yöntemlerine karşılık geldiğini varsayarız.</li>
<li>"Ne kuzey yarımküreden güneye geçerken sosyolojiden antropolojiye geçiyoruz ne de yaşlandıkça tarihten sosyolojiye!"</li>
<li><mark>Bilgi edinme yollarımız, dünyayı kavramak için kullandığımız çerçevelerdir</mark>; farklı disiplinlere yansıyan beşeri dünyada <b>hiçbir doğal ayrım yoktur</b>.</li>
<li>Pratiklerine bakınca da fark bulunmaz: hepsi olguları derler, doğrular, tekrar tekrar kontrol eder; hepsi <b>sistematik bir disiplin idealine</b> göre yaşamaya ve bulgularını sorumlu biçimde sunmaya çalışır; gözlem ve tarihsel bulgulardan yararlanıp analitik modellerle yorumlar.</li>
</ul>

<h3>Bilişsel perspektifler: iktisat ve siyaset bilimi <span class="ref">s. 17</span></h3>
<p>Son umut, disiplinleri harekete geçiren <b>sorularda</b>: eylemleri gözlerken, keşfederken, betimlerken, kavrarken ve açıklarken kullanılan bakış açılarını (<mark>bilişsel perspektifler</mark>) çerçeveleyen sorular.</p>
<div class="table-wrap"><table class="tbl">
<tbody>
<tr><td><b>İktisat</b></td><td>İnsan eylemlerinin <b>maliyetleri ve yararları</b> arasındaki ilişki; kıt kaynakların idare edilmesi ve paylaşılması, maksimum avantaj için kullanılma biçimleri.</td></tr>
<tr><td><b>Siyaset bilimi</b></td><td>İktidar ve nüfuz bakımından başka aktörlerin davranışlarını değiştiren ya da onlardan etkilenerek değişen eylemler; eylemler <b>iktidar ve nüfuz asimetrisi</b> üzerinden değerlendirilir. <span class="muted">(PDF'te "nüfus" diye geçer.)</span></td></tr>
</tbody></table></div>

<h3>Sosyolojinin ayırt edici yanı: karşılıklı bağımlılık ağları <span class="ref">s. 18</span></h3>
<ul>
<li>Sosyoloji de bilişsel perspektiflerin yanı sıra <b>kendi yorumlama ilkelerine</b> sahiptir.</li>
<li>Sosyolojinin farkı: <mark>beşeri eylemleri daha geniş temsillerin unsurları olarak görmesi</mark>. Bu temsil, karşılıklı bağımlılık ağı içinde birbirine eklemlenmiş aktörlerin <b>tesadüf olmayan topluluğudur</b>.</li>
<li>Bireysel aktörler sosyolojik araştırmaya <b>karşılıklı bağımlılık ağının üyeleri / partnerleri</b> olarak girer.</li>
<li>"Sosyoloji esas olarak ilişkisel bir bakış açısıyla ilgilenir: Bu da bizden önce varolan bir toplum içinde doğmamız ve onun üyeleri olmamızdır…"</li>
</ul>

<h3>Sosyoloji ve sağduyu <span class="ref">s. 19–21</span></h3>
<ul>
<li>Sosyolojik düşünmek, dünyayı kavramada onu <b>farklı şekillerde düşünme olasılığını açan</b> ilişkisel bir yoldur.</li>
<li>Sosyolojik düşünmenin <mark>"sağduyu"</mark> ile özel bir ilişkisi vardır. Sağduyu: zengin ama düzensiz, sistemli olmayan, kimi zaman anlaşılmaz ve tarif edilmez bilgiler.</li>
<li><b>Fen bilimleri</b> sağduyuyla ilişkilerini söze dökmekle pek ilgilenmez: sağduyunun fizikçileri ya da kimyacıları meşgul eden konularda söyleyecek bir şeyi yoktur; bu konular gündelik deneyime dahil değildir. Nesneleri çok özel koşullarda ortaya çıkar (dev partikül hızlandırıcıları, güçlü mikroskopların mercekleri).</li>
<li>Bilim insanları bu fenomenleri belli koşullarda gözler, deneylere tabi tutar ve bulgularını <b>sınırlı bir araştırmacı topluluğu</b> içinde savunur. Ortaya çıkan bilgi <b>sağduyuyla rekabet etmez</b>.</li>
<li>Oysa hepimiz başkalarıyla yan yana yaşar, etkileşime gireriz; gündelik yaşamla baş etmemizi sağlayan muazzam bir <b>örtük bilgi</b> birikimimiz var: <mark>her birimiz yetenekli birer aktörüz</mark>.</li>
<li>Ama pratik bilgiyle şekillenen rutinlere gömülüyken başımızdan geçenlerin anlamını ve nedenlerini sistematik olarak düşünemeyiz; kendi deneyimlerimizi başkalarınınkiyle karşılaştıramayabiliriz.</li>
<li>Sosyolojik düşünme bizi <b>ilişkisel bir kavrayışa</b> götürür: bireyin farkındadır ama onu <b>toplumsal çevre içinde konumlandırır</b>. Bireysel yaşamöykülerimiz başkalarıyla paylaştığımız tarihle nasıl iç içe geçer?</li>
<li>Sosyologlar da bu deneyimin parçasıdır; çalışma nesneleriyle aralarına ne kadar mesafe koymaya çalışsalar da kavramaya çalıştıkları bilgiden <b>tamamen kopamazlar</b>.</li>
</ul>

<h3>Sosyolojik bilginin sağduyudan üç farkı <span class="ref">s. 22–24</span></h3>
<p>Sosyolog hem <b>içsel hem dışsal</b> bakış açılarına sahip olmalıdır. Aktörler ailelere, örgütlere, akrabalık ağlarına, mahallelere, kent ve köylere, uluslara ve kiliselere zaten anlam ve önem atfetmiştir; <mark>sosyolojik fenomenler zaten anlamla yüklüdür</mark>.</p>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Fark</th><th>Sosyoloji</th></tr></thead>
<tbody>
<tr><td><b>1. Sorumlu yöntem</b></td><td>Bulgulara dayalı kavrayış ve izahat oluştururken <b>kabul edilmiş, kurumsallaşmış yöntemlere</b> bağlıdır. Mevcut delillerle desteklenmiş ifadeleri, koşullu ve test edilmemiş fikirlerden titizlikle ayırması beklenir.</td></tr>
<tr><td><b>2. Sahanın boyutları</b></td><td>Tek tek yaşam deneyimleri taraflı, hatta önyargılı olabilecek bakış açılarıdır; mesele ancak <b>birden çok yaşam dünyasından</b> çekilen deneyimlerin yan yana getirilip karşılaştırılmasıyla incelenebilir. Tek bir yaşam öyküsünün ötesine uzanan karmaşık bağımlılıklar ağı: sosyolojik bilgi, sağduyunun kendi başına sağlayamadığı önemli bir şey sunar.</td></tr>
<tr><td><b>3. Anlama ve açıklama biçimi</b></td><td>Sağduyuda açıklayıcı araçlarımızı yalnızca kendi yaşam dünyalarımızdan çekeriz; insanlar bir durumun <b>tanımlanabilir bir şahsın kasıtlı eylemlerinin sonucu olmadığını</b> kabullenmekte zorlanır. Sosyoloji ise araştırmaya tek tek aktörlerden değil <mark>temsillerden (bağımlılık ağlarından)</mark> başlar ve yalıtılmış, dürtülerle hareket eden bireyi beşeri dünyanın anahtarı sayan yaygın metaforun uygun olmadığını gösterir.</td></tr>
</tbody></table></div>

<h3>Sağduyunun ikili gücü ve alışkanlığı kırmak <span class="ref">s. 25–27</span></h3>
<ul>
<li>Sağduyunun gücü <b>ikili bir karaktere</b> sahiptir: yolumuzu bulmamızı sağlar ama izahı gerekmeyen şeylere bağımlıdır; temel kaidelerini sorgulamaz ve pratik içinde kendini onaylar. Gündelik yaşamın rutin ve alışkanlığa dayalı karakterine kolayca dayanır.</li>
<li>Yeterince sık tekrarlanan şeyler <mark>tanıdık hale gelir ve tanıdık şeyler açıklama gerektirmez</mark>; sorun teşkil etmez, merak konusu olmaz.</li>
<li><b>Alışkanlığın kalkmasının faydaları:</b> kişinin yaşamını daha büyük bir öz-farkındalıkla yaşaması, diğerlerini anlaması ve etrafındakileri daha fazla bilgiyle, belki daha fazla özgürlük ve kontrolle idrak etmesi için yeni olasılıklar açar.</li>
<li>Sosyolojik düşünme duyularımızı keskinleştirir ve gözlerimizi anlık deneyimlerimizin ötesindeki <b>ilişkisel ufka</b> açar.</li>
<li>Yaşamlarımızın görünüşte <b>doğal, kaçınılmaz, değişmez, ebedi</b> yönlerinin beşeri güç ve kaynaklar eliyle nasıl gerçeğe dönüştürüldüğünü anladığımızda, bu bize onlarca olasılık açan bir güce dönüşür.</li>
</ul>

<h3>Sosyolojiye yöneltilen tepkiler <span class="ref">s. 28</span></h3>
<p><mark>"Politik sadakatsizlik"</mark> suçlamaları ya da disiplin olarak statüsünü sorgulayan tutumlar genelde <b>şirketler, hükümetler ve hâkim toplumsal düzenin iktidar sahipleri</b> tarafından yöneltilir; mevcut durumun bir şekilde "doğal" olduğunu iddia edenler arasında bu çok belirgindir.</p>
`
  },
  {
    id: `comte`, group: `h6`, no: `6.1`, title: `Auguste Comte: Pozitivizm ve Sosyoloji`,
    short: `<h4>Hayatı ve görüşleri</h4>
<ul class="short-list">
<li><mark>1798</mark> Katolik, monarşist bir ailede doğar; École Polytechnique'te doğa bilimleri · <mark>1817–1824</mark> <b>Saint-Simon</b>'un çalışma arkadaşı (endüstri toplumu) · <mark>1830–1842</mark> <i>Pozitif Felsefe Dersleri</i> · <mark>1851–1854</mark> <i>Pozitif Yönetim Biçimi</i>.</li>
<li>Fizik, kimya ve matematiğin yöntemi toplumsal sorunlara uygulanırsa çatışmanın kaynağı olan fikir ayrılıkları giderilir. Fransız Devrimi sonrası kargaşadan etkilendi, <b>düzenli toplum</b> modeli aradı.</li>
<li><b>Otorite + ilerleme</b> sentezi: muhafazakârlar gibi hiyerarşiye, devrimciler gibi reforma inanır. Amaç: düzeni ve birliği kuracak kanunları tespit etmek.</li>
</ul>
<h4>Pozitif felsefe ve sosyoloji</h4>
<blockquote>"Pozitif Felsefe'nin ilk karakteristik özelliği bütün olguları değişmez doğa yasalarına tabi şeyler olarak görmesidir." — Comte</blockquote>
<ul class="short-list">
<li>Yasalar fiziksel, biyolojik ve <b>toplumsal</b> olguları da kapsar. Empirik ve pozitivist sosyal bilim → sosyolojinin <b>isim babası</b>; önce <mark>"sosyal fizik"</mark> dedi.</li>
</ul>
<h4>Üç hâl yasası</h4>
<ul class="short-list">
<li>İnsanlık tarihini evrimsel olarak belirleyen temel yasa; zihnin üç düşünce biçimi üç toplum biçimine denk düşer: <mark>teolojik → metafizik → pozitif</mark>.</li>
<li><b>Teolojik:</b> Mutlak bilgi arayışı, olgular doğaüstü varlıkların eylemi (Avrupa Ortaçağı) · <b>Metafizik (soyut):</b> teolojiğin uzantısı, soyut kavramlarla açıklama (14. yy'dan Fransız Devrimi'ne) · <b>Pozitif:</b> doğa ve toplum yasaları, bilimsel yöntem (en ileri; Fransız Devrimi'yle başladı).</li>
</ul>
<h4>Bilimler hiyerarşisi ve toplum</h4>
<ul class="short-list">
<li>Basitten karmaşığa: <mark>matematik → astronomi → fizik → kimya → biyoloji → sosyoloji</mark>; en karmaşık olduğu için sosyoloji <b>"kraliçe bilim"</b>.</li>
<li>Toplum bireylere indirgenemez; bireylerden <b>daha temel ve somut</b>.</li>
<li>Sosyoloji toplumu iyileştirmek için de kullanılmalı: yasaları bulur, öngörür, müdahale eder. <b>"Bilmek öngörmek, öngörmek yapmaktır."</b></li>
<li>Düzensizlik bütün kötülüklerin kaynağı; düzen + ilerleme. Hiyerarşi zorunlu, devlet düzenler (<b>otoriter devletçilik</b>): en üstte pozitivist sosyologlar, en altta işçiler (proletarya); toplum iş bölümlü bir <b>organizma</b>.</li>
</ul>
<h4>Eleştiriler</h4>
<ul class="short-list">
<li><b>Alain Touraine:</b> Comte için asıl mesele "bireyciliğin yanılsamalarından kurtulmak, <b>Ben'den Biz'e</b> geçmek" (<i>Modernliğin Eleştirisi</i>).</li>
<li><b>Herbert Marcuse</b> (<i>Akıl ve Devrim</i>): toplumsal düzeni yasal olgu alanı gördüğü için pozitivizm <b>muhafazakâr amaçlara</b> hizmet eder.</li>
</ul>`,
    files: [`materyal/6-hafta/Auguste_Comte_Pozitivizm_ve_Sosyoloji.pptx`, `materyal/6-hafta/Auguste_Comte.pptx`],
    html: `
<p class="lead">Toplumsal düzen, <mark>üç hâl yasası</mark> ve pozitif felsefe.</p>

<h3>Hayatı</h3>
<ol class="timeline">
<li><b>1798</b>Fransız Devrimi'nden kısa süre sonra Katolik ve monarşizm yanlısı bir ailede doğar</li>
<li><b>Gençlik</b>Katolik inancından uzaklaşır; liberal ve ilerlemeci düşünceyi savunur; École Polytechnique'te doğa bilimleri okur</li>
<li><b>1817–1824</b>Saint-Simon'un çalışma arkadaşı; onun endüstri toplumu görüşlerinden etkilenir</li>
<li><b>1830–1842</b><i>Pozitif Felsefe Dersleri</i></li>
<li><b>1851–1854</b><i>Pozitif Yönetim Biçimi</i></li>
</ol>

<h3>Siyasi görüşleri</h3>
<ul>
<li>École Polytechnique'te öğrenciyken fizik, kimya ve matematiğin bilimsel yöntemlerinin <b>toplumsal sorunlara uygulanabileceği</b>, böylece siyasi istikrarsızlık ve toplumsal çatışmanın kaynağı olan <b>fikir ayrılıklarının</b> ortadan kaldırılabileceği fikrine ulaştı.</li>
<li>Fransız Devrimi'nden ve ardından gelen siyasi-toplumsal kargaşadan çok etkilendi; kargaşayı ortadan kaldıracak <mark>düzenli bir toplum modeli</mark> aradı.</li>
<li><b>Otorite + ilerleme sentezi:</b> Bir yandan muhafazakârlar gibi otoritenin hiyerarşik yapısına, öte yandan devrimciler gibi ilerlemeye ve reforma inanır.</li>
<li>Amacı: toplumsal düzeni ve birliği kuracak kanunları tespit etmek ve <b>kafalardaki ayrışmaları gidermek</b>. Bunun için matematik ve doğa bilimi gibi yapılandırılmış bir <b>pozitif sosyal bilime</b> gereksinim duyar.</li>
</ul>

<h3>Pozitif felsefe</h3>
<blockquote>"Pozitif Felsefe'nin ilk karakteristik özelliği bütün olguları değişmez doğa yasalarına tabi şeyler olarak görmesidir. Görevimiz… bu yasaları uygun biçimde ortaya koymak, mümkün olan en az sayıya indirmektir." — Auguste Comte, <i>Pozitif Felsefe</i></blockquote>
<p>Bu yasaların hâkimiyeti fiziksel ve biyolojik olgular kadar <b>beşeri ve toplumsal olguları</b> da kapsar; hepsi bütünlüklü bir doğa düzeninin parçalarıdır.</p>

<h3>Sosyoloji ve sosyal fizik</h3>
<ul>
<li>Comte, doğadakine benzer toplum yasalarını kesin biçimde saptayan <b>empirik</b> (gözlem, deney ve duyuya dayalı) ve <b>pozitivist</b> bir sosyal bilim geliştirdi. Altında, bilimsel felsefesinin yanında <mark>kargaşadan uzak bir toplumsal düzen arayışı</mark> vardır.</li>
<li>Böylece pozitif bir sosyal bilim olarak <b>sosyolojinin isim babası</b> oldu. İlk başta sosyoloji yerine <b>"sosyal fizik"</b> ifadesini kullandı.</li>
</ul>

<h3>Üç hâl yasası</h3>
<ul>
<li>Comte'a göre yalnızca içinde bulunduğumuz toplumu değil <b>bütün insanlık tarihini yöneten temel yasalar</b> vardır; insanlık tarihi belli bir örüntüye göre evrimsel olarak ilerler ve temel evrelerden geçer.</li>
<li>Üç hâl yasası, insanlık tarihini evrimsel olarak belirleyen ve evrelere ayıran temel yasadır. İnsan zihninin art arda geçirdiği üç düşünce biçimi, art arda gelen <b>toplum biçimlerine</b> de denk düşer.</li>
<li>İnsan zihni, bilimler ve toplumlar her şeyi önce teolojik, sonra metafizik olarak algılar; en son aşamada <b>"pozitif"</b> olarak değerlendirir.</li>
</ul>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Aşama</th><th>Açıklama biçimi</th><th>Toplum biçimi</th></tr></thead>
<tbody>
<tr><td><b>1. Teolojik hâl</b></td><td>İnsan zihni varlıkların temel doğasını, bütün etkilerin <b>ilk ve nihai nedenlerini</b> (kökenini ve amacını) — kısaca <b>Mutlak bilgiyi</b> — araştırırken bütün olguların doğrudan <b>doğaüstü varlıkların eylemleriyle</b> üretildiğini varsayar.</td><td>Asıl olarak <mark>Avrupa Ortaçağı</mark></td></tr>
<tr><td><b>2. Metafizik (soyut) hâl</b></td><td>Teolojik aşamanın bir uzantısı. <b>Kişisel olmayan soyut kavramlarla</b> açıklama; tanrı soyut bir varlık olarak tanımlanmaya çalışılır; olgular insan benzeri güçlerle değil soyut kavramlarla açıklanır.</td><td><mark>14. yüzyıldan Fransız Devrimi'ne</mark> kadar</td></tr>
<tr><td><b>3. Pozitif hâl</b></td><td>Bütün olguların <b>doğa ve toplum yasalarının işleyişi</b> temelinde açıklandığı, <b>bilimsel yöntemin</b> temel alındığı aşama.</td><td>En iyi ve en ileri aşama; <mark>Fransız Devrimi'yle</mark> ilk adımları atıldı</td></tr>
</tbody></table></div>

<h3>Bilimler hiyerarşisi ve sosyoloji</h3>
<p>İnsan zihni ve toplumlar gibi bilimler de üç evreden geçerek pozitif aşamaya ulaşır. Comte'a göre bilimler arasında bir hiyerarşi vardır; <b>basitten karmaşığa</b> sıralanır, sonra gelenler bilgi alanı açısından daha karmaşıktır:</p>
<ol class="flow"><li>Matematik</li><li>Astronomi</li><li>Fizik</li><li>Kimya</li><li>Biyoloji</li><li>Sosyoloji</li></ol>
<ul>
<li>Toplum bilimleri en karmaşık oldukları için Comte'un hiyerarşisinde <mark>"Kraliçe bilim"</mark> olarak adlandırılır.</li>
<li>Sosyoloji, kendini oluşturan <b>bireylere indirgenemeyen</b> karmaşık bir varlık olarak toplumsal bütünü araştırır. Hatta toplum, kendisini oluşturan bireylerden <b>daha temel ve somuttur</b>.</li>
</ul>

<h3>Sosyolojinin siyasi-toplumsal rolü</h3>
<ul>
<li>Sosyoloji yalnızca toplumu anlamakla kalmamalı, onun <b>iyileştirilmesi ve düzenlenmesi</b> için de kullanılmalıdır: toplumsal yasaları ortaya koyar, onlara dayanarak öngörüde bulunur ve bu öngörülerle topluma müdahale eder.</li>
</ul>
<blockquote>"Bilmek öngörmek, öngörmek yapmaktır."</blockquote>
<ul>
<li>Altta yatan fikir: <mark>toplumsal düzensizlik bütün kötülüklerin kaynağıdır</mark>. Comte'un tüm arayışının altında <b>düzeni ilerleme fikriyle birlikte düşünme</b> çabası yatar; sosyoloji bu ikisini bir araya getirdiği için çok değerlidir.</li>
<li>Otoriter bir devlet düşüncesine göz kırparak toplumda <b>hiyerarşinin zorunlu</b> ve toplumsal düzenin temeli olduğunu iddia eder; bu hiyerarşiyi devlet düzenler ve kontrol eder.</li>
<li>Toplumsal hiyerarşinin <b>en üstünde pozitivist sosyologlar</b>, <b>en altında</b> emek gücü sarf ederek hayatta kalan <b>işçiler (proletarya)</b> yer alır. İki grup da kendi çıkarlarından önce toplumun çıkarlarını düşünür.</li>
<li>Herkesin toplumsal iş bölümünde belli bir rolü ve işlevi olduğu <mark>organizma olarak toplum</mark> görüşü, Comte'un otoriter devletçiliğinin bir uzantısıdır; sosyoloji bu organizmayı anlamaya, açıklamaya ve yasalarını ortaya çıkarmaya çalışır.</li>
</ul>

<h3>Comte eleştirisi: iki yaklaşım</h3>
<div class="cols two">
<div class="box"><h4>Alain Touraine</h4><p>"Auguste Comte için asıl söz konusu olan, bireyciliğin yanılsamalarından kurtulmak, <b>Ben'den Biz'e geçmektir</b>." (<i>Modernliğin Eleştirisi</i>, s. 90–91)</p></div>
<div class="box"><h4>Herbert Marcuse</h4><p><i>Akıl ve Devrim</i>'de Comte'un pozitivist yaklaşımını, toplumsal düzeni yasal bir olgu alanı olarak görmesi bağlamında <b>muhafazakâr amaçlara hizmet eden</b> bir yaklaşım olarak tanımlar.</p></div>
</div>
`
  },
  {
    id: `tekrar`, group: `genel`, no: `T`, title: `Kim, Ne Dedi? Kişiler, Kavramlar, Tarihler`,
    short: `<h4>Kişiler</h4>
<ul class="short-list">
<li><b>Wallerstein:</b> <i>Sosyal Bilimleri Açın</i>; disiplinler "nesnel" bilgi çabasının parçası · <b>Comte:</b> sosyoloji, sosyal fizik, üç hâl, kraliçe bilim · <b>Durkheim:</b> 1895, olgular "şey" · <b>Kant:</b> "Sapere Aude!" · <b>Descartes:</b> metodolojik şüphe · <b>Newton:</b> evrensel yasalar.</li>
<li><b>Diderot & d'Alembert:</b> Ansiklopedi · <b>Voltaire:</b> hoşgörü · <b>Locke:</b> tabula rasa · <b>Hume:</b> kuşkuculuk · <b>Smith:</b> görünmez el · <b>Montesquieu:</b> güçler ayrılığı · <b>Rousseau:</b> Toplum Sözleşmesi · <b>Sieyès:</b> "Üçüncü Zümre Nedir?" · <b>Watt:</b> buhar makinesi.</li>
<li><b>Giddens:</b> modernitenin 3 bileşeni · <b>Mills:</b> sosyolojik imgelem · <b>Bauman & May:</b> bilişsel perspektif, karşılıklı bağımlılık, sağduyu · <b>Saint-Simon:</b> Comte'un arkadaşı · <b>Touraine:</b> Ben'den Biz'e · <b>Marcuse:</b> pozitivizm muhafazakâr.</li>
<li>PDF'ten: <b>Ranke</b> "gerçekten ne oldu?" · <b>C. P. Snow</b> "iki kültür" · <b>Hooke</b> 1663 Royal Society · <b>Mill</b> Comte ile bilimin nesnelliği.</li>
</ul>
<h4>Kavramlar</h4>
<ul class="short-list">
<li>Nomotetik (yasa koyan) / idiografik (tekil olay) · pozitivizm · sosyal fizik · Ancien Régime · États-Généraux · sosyolojik imgelem · teknolojik ethos · bilişsel perspektif · karşılıklı bağımlılık · sağduyu.</li>
<li>PDF'ten: scientia ("bilgi") · Kartezyen dualizm · ceteris paribus.</li>
</ul>
<h4>Tarihler</h4>
<ul class="short-list">
<li>1614 · 1663 · 1776 · 5 Mayıs, 17 Haziran, 20 Haziran, 9 Temmuz, 14 Temmuz 1789 · 1791 · 10 Ağustos ve 21 Eylül 1792 · 1798 Comte · 1817–1824 · 1830–1842 · 1851–1854.</li>
<li>1850–1914 disiplinler üniversitede · 1895 Durkheim · 1900 %62 kentli · 1945 kurumsallaşma tamam · 1958 Mills.</li>
</ul>`,
    html: `
<p class="lead">Sınav öncesi hızlı tekrar: bütün haftalardaki kişiler, kavramlar ve tarihler tek yerde. <span class="badge">PDF</span> işareti olanlar okuma metinlerindeki sarı işaretli yerlerden gelir.</p>

<h3>Kişiler</h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Kişi</th><th>Neyle anılır?</th></tr></thead>
<tbody>
<tr><td><b>Immanuel Wallerstein</b></td><td><i>Sosyal Bilimleri Açın</i>; sosyal bilimler 19. yüzyılda ampirik bulgulara dayalı "nesnel" bilgi elde etme çabasının parçası olarak yaratıldı; sosyoloji modern düzenin pratik ihtiyaçlarından doğdu</td></tr>
<tr><td><b>Auguste Comte</b></td><td>"Sosyoloji" teriminin mucidi; önce "sosyal / toplumsal fizik"; pozitivizm; üç hâl yasası; bilimler hiyerarşisi; sosyoloji "kraliçe bilim"; "Bilmek öngörmek, öngörmek yapmaktır."</td></tr>
<tr><td><b>Émile Durkheim</b></td><td><i>Sosyolojik Yöntemin Kuralları</i> (1895): "Toplumsal olgular birer 'şey' olarak ele alınmalıdır."</td></tr>
<tr><td><b>Immanuel Kant</b></td><td>"Sapere Aude!"; Aydınlanma = insanın kendi suçuyla düştüğü ergin olmama durumundan kurtulması</td></tr>
<tr><td><b>Descartes</b></td><td>Akılcılık; metodolojik şüphe ve metod</td></tr>
<tr><td><b>Newton</b></td><td>Bilimsel Devrim; evrensel doğa yasaları; sosyal bilimin kurucularına model olan fizik</td></tr>
<tr><td><b>Diderot & d'Alembert</b></td><td>Ansiklopedi: insanlık bilgisini tek çatı altında toplama</td></tr>
<tr><td><b>Voltaire</b></td><td>Hoşgörü; dinsel taassuba karşı düşünce ve ifade özgürlüğü</td></tr>
<tr><td><b>John Locke</b></td><td>Doğal haklar; "tabula rasa"; yaşam, özgürlük, mülkiyet</td></tr>
<tr><td><b>David Hume</b></td><td>Eleştirel kuşkuculuk; bilginin kaynağı duyusal deneyim; neden-sonuç ilişkisini sorgular</td></tr>
<tr><td><b>Adam Smith</b></td><td>Politik iktisat; "görünmez el"</td></tr>
<tr><td><b>Montesquieu</b></td><td>Güçler ayrılığı; <i>Kanunların Ruhu</i></td></tr>
<tr><td><b>Rousseau</b></td><td>Toplum Sözleşmesi; halk egemenliği ve genel irade</td></tr>
<tr><td><b>Abbé Sieyès</b></td><td>"Üçüncü Zümre Nedir? Her şey… Hiçbir şey… Bir şey." (1789)</td></tr>
<tr><td><b>James Watt</b></td><td>Verimli buhar makinesi</td></tr>
<tr><td><b>Anthony Giddens</b></td><td>Modernitenin 3 bileşeni: seküler-akılcı yaklaşım, siyasal kurumlar, ekonomik kurumlar</td></tr>
<tr><td><b>C. Wright Mills</b></td><td>Sosyolojik imgelem; biyografi–toplum–tarih; kişisel sorunlar / kamusal sorunlar; ilgisizlik ve huzursuzluk</td></tr>
<tr><td><b>Bauman & May</b></td><td><i>Sosyolojik Düşünmek</i>; bilişsel perspektif; karşılıklı bağımlılık; sağduyu</td></tr>
<tr><td><b>Saint-Simon</b></td><td>Comte'un çalışma arkadaşı (1817–1824); endüstri toplumu görüşleri</td></tr>
<tr><td><b>Alain Touraine</b></td><td>Comte için asıl mesele "Ben'den Biz'e geçmek"</td></tr>
<tr><td><b>Herbert Marcuse</b></td><td><i>Akıl ve Devrim</i>: Comte'un pozitivizmi muhafazakâr amaçlara hizmet eder</td></tr>
<tr><td><b>Ranke</b> <span class="badge">PDF</span></td><td>Tarihin sorusu: "gerçekten ne oldu?"</td></tr>
<tr><td><b>C. P. Snow</b> <span class="badge">PDF</span></td><td>"İki kültür"</td></tr>
<tr><td><b>Thomas Hooke</b> <span class="badge">PDF</span></td><td>1663 Kraliyet Cemiyeti (Royal Society) tüzüğü</td></tr>
<tr><td><b>John Stuart Mill</b> <span class="badge">PDF</span></td><td>Comte ile birlikte, bilimin nesnel gerçekliği keşfettiği görüşünü savundu</td></tr>
</tbody></table></div>

<h3>Kavramlar</h3>
<dl class="defs">
<dt>Nomotetik</dt><dd>Yasa koyan; genel yasalar ve nedensel ilişkiler arar (siyaset bilimi, ekonomi, sosyoloji).</dd>
<dt>İdiografik</dt><dd>Her olayı kendi tekliği içinde betimleyen; tekil, tarihsel olaylar (tarih).</dd>
<dt>Pozitivizm</dt><dd>Yalnızca gözlem ve deneye dayalı bilgi meşrudur; spekülatif felsefe yerine pozitif olgular.</dd>
<dt>Sosyal fizik</dt><dd>Comte'un "sosyoloji"den önce kullandığı ad; doğa bilimlerinin kesinliğini topluma taşıma hedefi.</dd>
<dt>Ancien Régime</dt><dd>Zümrelere ve ayrıcalıklara dayalı eski düzen.</dd>
<dt>États-Généraux</dt><dd>Zümre temsilcilerinin meclisi; 1614'ten sonra ilk kez 5 Mayıs 1789'da toplandı.</dd>
<dt>Sosyolojik imgelem</dt><dd>Kendi dışımızdaki dünyada ve kendi benliğimizde olup bitenleri anlamamızı sağlayan düşünsel nitelik.</dd>
<dt>Teknolojik ethos</dt><dd>Teknolojiyi yücelten değer sistemi (Mills).</dd>
<dt>Bilişsel perspektif</dt><dd>Bir şeyi incelerken kullanılan genel zihinsel çerçeve (Bauman & May).</dd>
<dt>Karşılıklı bağımlılık</dt><dd>Sosyolojinin ilişkisel bakışı; bireyler bağımlılık ağlarının üyeleri olarak ele alınır.</dd>
<dt>Sağduyu</dt><dd>Sistemsiz, alışkanlığa dayalı gündelik bilgiler bütünü.</dd>
<dt>Scientia <span class="badge">PDF</span></dt><dd>Sistemli, dünyevi bilgi üretme çabasına verilen ad; "bilgi" demektir.</dd>
<dt>Kartezyen dualizm <span class="badge">PDF</span></dt><dd>Doğa–insan, madde–akıl, fiziksel–sosyal/manevi dünya arasında köklü ayrım varsayımı.</dd>
<dt>Ceteris paribus <span class="badge">PDF</span></dt><dd>"Diğer bütün koşullar aynıyken"; iktisatçıların temel varsayımı.</dd>
</dl>

<h3>Tarihler</h3>
<div class="table-wrap"><table class="tbl">
<tbody>
<tr><td><b>1614</b></td><td>États-Généraux'nun 1789 öncesi son toplantısı</td></tr>
<tr><td><b>1663</b> <span class="badge">PDF</span></td><td>Hooke, Royal Society tüzüğü</td></tr>
<tr><td><b>1776</b></td><td>Amerikan Devrimi</td></tr>
<tr><td><b>5 Mayıs 1789</b></td><td>États-Généraux Versailles'da toplanır</td></tr>
<tr><td><b>17 Haziran 1789</b></td><td>Ulusal Meclis ilanı</td></tr>
<tr><td><b>20 Haziran 1789</b></td><td>Tenis Kortu Yemini</td></tr>
<tr><td><b>9 Temmuz 1789</b></td><td>Ulusal Kurucu Meclis</td></tr>
<tr><td><b>14 Temmuz 1789</b></td><td>Bastille</td></tr>
<tr><td><b>1791</b></td><td>Anayasal monarşi</td></tr>
<tr><td><b>10 Ağustos 1792</b></td><td>Tuileries baskını</td></tr>
<tr><td><b>21 Eylül 1792</b></td><td>Monarşinin kaldırılması, Cumhuriyet</td></tr>
<tr><td><b>1798</b></td><td>Comte'un doğumu</td></tr>
<tr><td><b>1817–1824</b></td><td>Comte, Saint-Simon'un çalışma arkadaşı</td></tr>
<tr><td><b>1830–1842</b></td><td><i>Pozitif Felsefe Dersleri</i></td></tr>
<tr><td><b>1851–1854</b></td><td><i>Pozitif Yönetim Biçimi</i></td></tr>
<tr><td><b>1850–1914</b> <span class="badge">PDF</span></td><td>Disiplinlerin üniversitelere resmen yansıması</td></tr>
<tr><td><b>1895</b></td><td>Durkheim, <i>Sosyolojik Yöntemin Kuralları</i></td></tr>
<tr><td><b>1900</b></td><td>Britanya nüfusunun %62'si kentte</td></tr>
<tr><td><b>1945</b> <span class="badge">PDF</span></td><td>Sosyal bilimlerin kurumsallaşmasının tamamlanması</td></tr>
<tr><td><b>1958</b></td><td>Mills'in bağlamı: 1958 Amerikası, 2. Dünya Savaşı sonrası</td></tr>
</tbody></table></div>
`
  }
],

cards: [
  // 2.1 · dogus
  [`dogus`, `Bir bilgiyi bilim yapan 5 kriter nedir?`, `Sistematiklik, ampirik dayanak, yöntemsel açıklık, nesnellik, genelleme.`],
  [`dogus`, `19. yüzyılda "bilim" neyi ifade ediyordu?`, `<b>Doğa bilimlerini</b>; dünyayı anlamanın ve meşru bilgi üretmenin tek geçerli yolu. Varsayım: dışarıda nesnel bir gerçeklik var ve deneysel, objektif yöntemlerle ulaşılabilir.`],
  [`dogus`, `Wallerstein'a göre sosyal bilimler neden yaratıldı?`, `19. yüzyılda "gerçeklik" hakkında <b>ampirik bulgulara dayalı "nesnel" bilgi</b> elde etme çabalarının parçası olarak.`],
  [`dogus`, `Beş sosyal bilim disiplini hangileridir?`, `Siyaset bilimi, ekonomi, sosyoloji, tarih, antropoloji.`],
  [`dogus`, `Fransız Devrimi sosyal bilimlerin doğuşunu nasıl etkiledi?`, `Değişimi <b>meşru bir gerçeklik</b> yaptı; halk egemenliği norm oldu. Soru: kaçınılmaz değişimi nasıl anlayacak, örgütleyecek, rasyonelleştireceğiz?`],
  [`dogus`, `Nomotetik yaklaşım nedir?`, `<b>Genel yasalar</b> ve nedensel ilişkiler arar, soyut modellerle açıklar; doğa bilimi ideali. Siyaset bilimi, ekonomi, sosyoloji.`],
  [`dogus`, `İdiografik yaklaşım nedir?`, `<b>Tekil, tarihsel</b> olayları bağlamıyla anlamaya odaklanır. Tarih. "Bu olay neden tam da bu biçimde gerçekleşti?"`],
  [`dogus`, `Siyaset bilimi, ekonomi ve sosyolojinin alanları?`, `Siyaset bilimi: <b>devlet ve yönetim</b><br>Ekonomi: <b>piyasa mekanizmaları</b><br>Sosyoloji: <b>sivil toplum</b> (devlet ve piyasa dışı ilişkiler)`],
  [`dogus`, `Antropoloji neyi incelemek üzere ayrıştı?`, `<b>Avrupa dışındaki toplumları</b>; bu topluluklar Batılı güçlerce "kabile" gibi şemsiye kavramlarla adlandırıldı.`],
  [`dogus`, `Comte'un sosyolojiye katkıları?`, `"Sosyoloji" teriminin mucidi; meşru bilgi yalnızca gözlem ve deneyle; "toplumsal fizik" — doğa bilimleri düzeyinde kesinlik.`],
  [`dogus`, `Durkheim'ın temel ilkesi ve eseri?`, `<i>Sosyolojik Yöntemin Kuralları</i> (1895): toplumsal olgular bireylerden bağımsız, nesnel ve dışsal birer <b>"şey"</b> gibi incelenmeli.`],
  [`dogus`, `Wallerstein'a göre sosyolojinin doğuşundaki pratik ihtiyaçlar?`, `Kent krizleri, çatışmayı açıklamak, düzeni anlamak, istikrar sağlamak.`],
  [`dogus`, `Sosyolojinin konusu nedir?`, `"Toplum"u soyut biçimde değil; <b>belirli toplumsal ilişkileri, yapıları ve değişim süreçlerini ampirik olarak</b> araştırmak.`],

  // 2.2 · wallerstein (PDF)
  [`wallerstein`, `Sosyal bilim hangi çabaya dayanır? (s. 12)`, `Modern dünyada gerçeklik hakkında <b>ampirik olarak doğrulanan sistemli, dünyevi bilgi</b> üretme çabasına; bu çabaya <b>scientia</b> denir.`],
  [`wallerstein`, `Kartezyen dualizm nedir?`, `Doğa–insan, madde–akıl, fiziksel dünya–sosyal/manevi dünya arasında <b>köklü ayrımlar</b> olduğu varsayımı.`],
  [`wallerstein`, `"İki kültür" kavramı kime ait?`, `<b>C. P. Snow</b>. Hooke'un 1663 Royal Society tüzüğü bu ayrımı zaten içeriyordu.`],
  [`wallerstein`, `19. yüzyılda bilim–felsefe ilişkisi nasıl değişti?`, `"Ayrı ama eşit" anlayışı kayboldu; bilimi üstün gören <b>hiyerarşi</b> kuruldu. Sıfatsız "bilim" = doğa bilimi oldu.`],
  [`wallerstein`, `Meşru bilgi mücadelesinin asıl konusu neydi?`, `Doğayla ilgili bilgiyi değil, <b>insanların dünyasıyla ilgili bilgiyi kimin denetleyeceği</b>.`],
  [`wallerstein`, `19. yüzyıl entelektüel tarihine damgasını vuran süreç?`, `Bilginin <b>disiplinlere ayrılması ve meslekleşmesi</b>; rasyonel bölümleme üretkenlik vaat ediyordu.`],
  [`wallerstein`, `Sosyal bilimin kurucuları neden Newton fiziğine yöneldi?`, `Yeni sosyal düzenin istikrarı için bilimin olabildiğince <b>kesin ("pozitif")</b> olması gerekiyordu.`],
  [`wallerstein`, `Epistemolojik yelpazenin iki ucu ve ortası?`, `Bir uç: matematik ve deneysel doğa bilimleri. Öbür uç: felsefe ve insan bilimleri. Ortada: <b>tarih (idiografik)</b> ve <b>sosyal bilim (nomotetik)</b>.`],
  [`wallerstein`, `Disiplinler üniversitelere resmen ne zaman yansıdı?`, `<b>1850–1914</b> döneminde.`],
  [`wallerstein`, `Sosyal bilimin yürütüldüğü beş yer?`, `Büyük Britanya, Fransa, Almanyalar, İtalyalar, ABD.`],
  [`wallerstein`, `Comte'a göre sosyoloji nedir; uygulamada nasıl gelişti?`, `"<b>Bilimlerin kraliçesi</b>", birleşik ve pozitivist bir sosyal bilim. Uygulamada: kentli işçi sınıflarının sorunlarıyla uğraşan <b>sosyal reform derneklerinin</b> üniversitede kurumsallaşmasıyla.`],
  [`wallerstein`, `Antropoloji nasıl başladı?`, `Kâşifler, seyyahlar ve sömürge memurlarının çalışmalarıyla; "kabile" denilen halkları inceledi.`],
  [`wallerstein`, `Sosyal bilimin asli parçası olamayan üç alan?`, `<b>Coğrafya, psikoloji, hukuk.</b>`],
  [`wallerstein`, `Sosyal bilimin mekân anlayışı neydi?`, `Devlet sınırlarına tabi: sosyologlar için toplum, iktisatçılar için ulusal ekonomi, siyaset bilimciler için siyasal sistem, tarihçiler için ulus.`],
  [`wallerstein`, `Nomotetik disiplinler alanlarını nasıl ayırdı?`, `İktisat: <b>ceteris paribus</b><br>Siyaset bilimi: <b>resmi hükümet yapıları</b><br>Sosyoloji: ihmal edilen <b>sosyal ilişkiler</b>`],
  [`wallerstein`, `1945'te sosyal bilimlerin durumu?`, `Büyük üniversitelerde kurumsallaşmış; <b>doğa bilimlerinden</b> ve <b>insan bilimlerinden</b> kesin olarak ayrışmış.`],

  // 3.1 · aydinlanma
  [`aydinlanma`, `Kant'a göre Aydınlanma nedir?`, `"Sapere Aude!" — insanın <b>kendi suçu ile düşmüş olduğu ergin olmama durumundan kurtulması</b>.`],
  [`aydinlanma`, `Aydınlanmayı hazırlayan dört dönemeç?`, `Rönesans (hümanizm) → Reform (dogmaların sorgulanması) → Akılcılık (Descartes) → Bilimsel Devrim (Newton).`],
  [`aydinlanma`, `Aydınlanmanın dört temel ilkesi?`, `Rasyonalizm, deneycilik, sekülerleşme, ilerleme inancı.`],
  [`aydinlanma`, `Ansiklopedi projesi kimin?`, `<b>Denis Diderot ve d'Alembert</b>: insanlık bilgisini tek çatı altında toplayıp halka yaymak.`],
  [`aydinlanma`, `Locke, Hume ve Smith'in kavramları?`, `Locke: doğal haklar, <b>tabula rasa</b><br>Hume: eleştirel kuşkuculuk, duyusal deneyim<br>Smith: politik iktisat, <b>görünmez el</b>`],
  [`aydinlanma`, `Montesquieu ve Rousseau?`, `Montesquieu: <b>güçler ayrılığı</b> (<i>Kanunların Ruhu</i>)<br>Rousseau: <b>Toplum Sözleşmesi</b>, halk egemenliği, genel irade`],
  [`aydinlanma`, `Kamusal alan nasıl doğdu?`, `Kahvehaneler, edebiyat salonları ve akademiler tartışma merkezi oldu; gazete, broşür ve kitapla fikirler yayıldı.`],
  [`aydinlanma`, `Aydınlanmanın modern dünyaya mirası?`, `Amerikan (1776) ve Fransız (1789) devrimleri; evrensel insan hakları ve yurttaşlık; hukukun üstünlüğü ve laik devlet.`],

  // 3.2 · fransiz
  [`fransiz`, `Ancien Régime'in üç zümresi?`, `1. Ruhban sınıfı (Kilise)<br>2. Soylular (aristokrasi)<br>3. Halk ve burjuvazi — nüfusun <b>%98</b>'i`],
  [`fransiz`, `États-Généraux ne zaman ve neden toplandı?`, `<b>5 Mayıs 1789</b>, Versailles; 1614'ten sonra ilk kez; ağır mali kriz nedeniyle XVI. Louis topladı.`],
  [`fransiz`, `"Bir zümre, bir oy" çatışması neydi?`, `Zümre başına oyda ruhban + soylular halkı <b>2'ye 1</b> yeniyordu; üçüncü zümre <b>kişi başına bir oy</b> istedi.`],
  [`fransiz`, `Sieyès'in ünlü sözü?`, `"Üçüncü Zümre nedir? Her şey. Şimdiye kadar siyasal düzende ne oldu? Hiçbir şey. Ne olmak istiyor? Bir şey." Zümre → temsil yerine <b>Ulus → temsil</b>.`],
  [`fransiz`, `17 Haziran 1789'da ne oldu?`, `<b>Ulusal Meclis</b> ilan edildi: üçüncü zümre tüm ulusu temsil ettiğini ilan edip egemenliği üstlendi.`],
  [`fransiz`, `Tenis Kortu Yemini nedir?`, `<b>20 Haziran 1789</b>: temsilciler anayasa yapılana kadar dağılmama kararı aldı. 9 Temmuz'da Ulusal Kurucu Meclis.`],
  [`fransiz`, `14 Temmuz 1789'un anlamı?`, `<b>Bastille</b>: devrimin toplumsallaşması — halk mobilizasyonu → siyasal baskı → devrim.`],
  [`fransiz`, `1791 ve 1792'de ne oldu?`, `1791: anayasal monarşi<br>10 Ağustos 1792: Tuileries baskını<br>21 Eylül 1792: monarşi kaldırıldı, <b>Cumhuriyet</b>`],
  [`fransiz`, `Fransız Devrimi'nin özeti (zincir)?`, `Zümresel toplum → temsil krizi → Ulusal Meclis → yurttaşlık → ulusal egemenlik → Cumhuriyet.`],

  // 3.3 · sanayi
  [`sanayi`, `Spinning Jenny'nin etkisi?`, `İplik üretim kapasitesi <b>16 kat</b> arttı.`],
  [`sanayi`, `Watt buhar makinesinin önemi?`, `Üretimi <b>akarsu kenarlarına bağımlılıktan</b> kurtardı; madenlerde su tahliyesi; kömür kullanımı katlandı.`],
  [`sanayi`, `Fabrika sisteminin üç aşaması?`, `Merkezi üretim, saat disiplini, uzmanlaşma (iş bölümü).`],
  [`sanayi`, `1900'de Britanya nüfusunun ne kadarı kentteydi?`, `<b>%62</b> (Manchester, Liverpool gibi metropoller).`],
  [`sanayi`, `Kırsal yaşam ve kentsel sanayi işçisi farkı?`, `Kırsal: mevsimlik tempo, kendi gıdası, geniş aile dayanışması.<br>Kentsel: haftalık ücret, <b>12–16 saat</b> mesai, kadın ve çocuk işçi.`],
  [`sanayi`, `Sanayi Devrimi'nin şehirdeki sosyal etkileri?`, `Kolera salgınları, dar konutlar, sendikalaşma, çalışma saatlerine kademeli sınırlar.`],

  // 3.4 · modernite
  [`modernite`, `Sosyoloji ile modernitenin ilişkisi?`, `<b>Zamandaştırlar.</b> Sosyolojiyi anlamak modern toplumun doğuş dinamiklerini kavramaktan geçer.`],
  [`modernite`, `Giddens'a göre modernitenin üç bileşeni?`, `Seküler ve akılcı yaklaşım; siyasal kurumlar (ulus-devlet, kitle demokrasisi); ekonomik kurumlar (endüstriyel üretim, kapitalist pazar).`],
  [`modernite`, `Moderniteyi doğuran üç devrim ve sonuçları?`, `Aydınlanma → bilimsel yöntem ve pozitivizm<br>Fransız Devrimi → yeni siyasal düzen<br>Sanayi Devrimi → sınıflı sanayi toplumu`],
  [`modernite`, `Comte'un pozitivist yöntem ilkeleri?`, `Yalnızca gözlem ve deneye dayalı bilgi meşru; spekülatif felsefe yerine pozitif olgular; toplum evrensel kanunlarla işleyen bir <b>organizma</b>.`],
  [`modernite`, `Durkheim'a göre toplumsal olgular?`, `Bireysel bilincin <b>dışındadır</b>, bireylere <b>zorlayıcı</b> güç uygular, <b>nesnel</b> yöntemlerle incelenebilir.`],
  [`modernite`, `İnsan ve Yurttaş Hakları Bildirgesi?`, `<b>1789</b>: "İnsanlar özgür ve eşit doğar, eşit yaşarlar." Slogan: Eşitlik, Özgürlük, Kardeşlik.`],
  [`modernite`, `Sosyolojinin oluşum dinamiği (sentez)?`, `Aydınlanma aklı (analiz araçları) + çifte devrim (Fransız + Sanayi; yeni problemler) → modern bir sosyal bilim olarak <b>sosyoloji</b>.`],

  // 4.1 · imgelem
  [`imgelem`, `Sosyolojik imgelem nedir?`, `Sosyolojik düşünme biçimini diğerlerinden ayıran genel özelliklerin bütünü; kendi dışımızdaki dünyada ve benliğimizde olup biteni anlamamızı sağlayan <b>düşünsel nitelik</b>.`],
  [`imgelem`, `Mills'in kilit sözü (s. 8)?`, `"Toplumu ve bireyi birlikte ele almadıkça, ne bireyin hayatını ne de toplumun tarihini anlayabiliriz."`],
  [`imgelem`, `Mills hangi bağlamda yazdı?`, `<b>1958 Amerikası</b>, 2. Dünya Savaşı sonrası; birey büyük değişimler karşısında şaşkınlık ve güçsüzlük içinde.`],
  [`imgelem`, `Sosyolojik imgelemin üç ekseni?`, `<b>Biyografi, toplum, tarih</b> ve aralarındaki etkileşim.`],
  [`imgelem`, `Sosyoloğun üç sorusu?`, `1) Toplum nasıl bir yapıya sahip? 2) Hangi tarihsel dönemin parçası? 3) Ne tür insan tipleri üretiyor / üzerine kurulu?`],
  [`imgelem`, `Kişisel sorun ile kamusal sorun ayrımı neden yapılır?`, `<b>Bireysel sorunların toplumsal yapının sorunlarının yansıması</b> olduğunu göstermek için. Biyografi, tarihsel/toplumsal yapıyı yansıtır.`],
  [`imgelem`, `İşsizlik örneği neyi gösterir?`, `Birey işsizliği kişisel başarısızlık sanır; ama milyonların işsizliği <b>yapının çöküşüdür</b>.`],
  [`imgelem`, `Modern insanın iki duygu durumu?`, `<b>İlgisizlik/kayıtsızlık:</b> değerler sisteminin ortadan kalkması.<br><b>Huzursuzluk/endişe:</b> değerler tehdit altında ama tehdidin kaynağı belirsiz.`],
  [`imgelem`, `Doğa bilimleri neden sorgulanmaya başladı?`, `Hidrojen bombası, <b>teknolojik ethos</b> (teknolojiyi yücelten değer sistemi); bilim yıkımın temsilcisi, askeri ve ekonomik güçlerce denetleniyor.`],
  [`imgelem`, `Sosyolojik imgelemin yükselişi neden olumlu?`, `Bilimin yıkım için kullanılmasına karşı duyarlı, etik, eleştirel; toplumsal sorunları birey–toplum–tarih ekseninde saptayıp çözüm üretir.`],

  // 5.1 · dusunmek
  [`dusunmek`, `Bauman ve May'e göre sosyoloji nedir?`, `<b>Kendine özgü soruları ve yaklaşım biçimleri olan</b> bilimsel bir disiplin.`],
  [`dusunmek`, `Disiplinleri ayırmak için öne sürülen iki yaklaşım ve sorunu?`, `1) Alan ayrımı — ama toplumsal yaşam bölünemez.<br>2) Yöntem ayrımı — ama hepsi benzer prosedür izler.`],
  [`dusunmek`, `"Ne kuzey yarımküreden güneye geçerken…" cümlesi neyi anlatır?`, `Yaşamı disiplinlere göre ayrı alanlarda yaşamadığımızı; <b>toplumsal yaşamın bölünemez</b> olduğunu.`],
  [`dusunmek`, `Bilişsel perspektif nedir?`, `Bir şeyi incelerken kullanılan <b>genel zihinsel çerçeve</b>; disiplinleri ayıran asıl şey bu soru ve bakış açılarıdır.`],
  [`dusunmek`, `Ekonomi ve siyaset bilimini ayıran sorular?`, `Ekonomi: maliyet-kâr, kıt kaynakların düzenlenmesi.<br>Siyaset bilimi: güç/otorite ve ürettiği eşitsizlikler.`],
  [`dusunmek`, `Sosyolojinin ayırt edici bakışı?`, `<b>İlişkisel</b>: bireyi daha geniş tarihsel/toplumsal ilişkiler ağının parçası olarak ele alır; bu ilişkiselliğe <b>karşılıklı bağımlılık</b> denir.`],
  [`dusunmek`, `Sağduyu nedir?`, `Günlük hayatı yönlendiren <b>sistemsiz, alışkanlığa dayalı</b> bilgiler bütünü.`],
  [`dusunmek`, `Doğa bilimleri ve sosyolojinin sağduyuyla ilişkisi?`, `Doğa bilimlerinin sağduyuyla bağı yok. Sosyologlar toplumun parçası; <b>sağduyudan kopamaz</b>, onu hesaba katmak zorundadır.`],
  [`dusunmek`, `Sağduyu ile sosyolojinin üç farkı?`, `Sistemsiz ↔ sistemli; dar deneyim ↔ geniş ilişkiler ağı; bireysel niyetler ↔ bütüncül yaklaşım.`],

  // 5.2 · bauman (PDF)
  [`bauman`, `Bauman & May'in giriş bölümünün adı?`, `"<b>Sosyolojik Mercekleri Yaratmak</b>" (<i>Sosyolojik Düşünmek</i>, s. 13–28).`],
  [`bauman`, `"Sosyoloji" terimi ne zaman ve hangi amaçla kullanıldı? (s. 14)`, `<b>19. yüzyılın erken dönemlerinde</b>; toplumsal düzeni ve değişimi araştırma amacıyla.`],
  [`bauman`, `Bilgi edinme yollarımız nedir? (s. 16)`, `<b>Dünyayı kavramak için kullandığımız çerçevelerdir</b>; beşeri dünyada doğal bir ayrım yoktur.`],
  [`bauman`, `Sosyolojinin ayırt edici yanı? (s. 18)`, `Beşeri eylemleri <b>daha geniş temsillerin unsurları</b> olarak görmek: karşılıklı bağımlılık ağında eklemlenmiş aktörlerin tesadüf olmayan topluluğu.`],
  [`bauman`, `Fen bilimlerinin bilgisi neden sağduyuyla rekabet etmez? (s. 19–20)`, `Nesneleri çok özel koşullarda ortaya çıkar (partikül hızlandırıcı, mikroskop); gündelik deneyime dahil değildir.`],
  [`bauman`, `"Her birimiz yetenekli birer aktörüz" — ama? (s. 21)`, `Rutinlere gömülüyken başımızdan geçenlerin anlamını <b>sistematik olarak düşünemeyiz</b>, deneyimlerimizi başkalarınınkiyle karşılaştıramayabiliriz.`],
  [`bauman`, `Sosyolojik bilginin sağduyudan üç farkı? (s. 22–24)`, `1) <b>Sorumlu, kurumsallaşmış yöntem</b><br>2) <b>Sahanın boyutları</b> (birden çok yaşam dünyası)<br>3) <b>Anlama/açıklama biçimi</b> (kasıtlı eylem yerine bağımlılık ağları)`],
  [`bauman`, `Sağduyunun gücünün ikili karakteri? (s. 25)`, `Yolumuzu bulmamızı sağlar ama <b>izahı gerekmeyen şeylere</b> dayanır; temel kaidelerini sorgulamaz, pratikte kendini onaylar.`],
  [`bauman`, `Alışkanlığın kalkmasının faydaları? (s. 26–27)`, `Daha büyük öz-farkındalık, başkalarını anlama, çevreyi daha fazla bilgi, özgürlük ve kontrolle idrak etme olasılıkları.`],
  [`bauman`, `Sosyolojiye "politik sadakatsizlik" suçlamasını kimler yöneltir? (s. 28)`, `<b>Şirketler, hükümetler ve hâkim düzenin iktidar sahipleri</b>; mevcut durumun "doğal" olduğunu iddia edenler.`],

  // 6.1 · comte
  [`comte`, `Comte'un hayatından kilit bilgiler?`, `<b>1798</b> doğum (Katolik, monarşi yanlısı aile); École Polytechnique; <b>1817–1824</b> Saint-Simon'un çalışma arkadaşı.`],
  [`comte`, `Comte'un en bilinen eserleri?`, `<i>Pozitif Felsefe Dersleri</i> (1830–1842) ve <i>Pozitif Yönetim Biçimi</i> (1851–1854).`],
  [`comte`, `Comte'un siyasi görüşünün özü?`, `Muhafazakârlar gibi <b>otoritenin hiyerarşisine</b>, devrimciler gibi <b>ilerlemeye ve reforma</b> inanır; amaç düzeni kuracak kanunları bulmak.`],
  [`comte`, `Pozitif felsefenin ilk karakteristik özelliği?`, `Bütün olguları <b>değişmez doğa yasalarına tabi</b> görmek; bu yasaları en az sayıya indirmek.`],
  [`comte`, `Üç hâl yasasının aşamaları?`, `<b>Teolojik → Metafizik → Pozitif</b>; insan zihni, bilimler ve toplumlar bu sırayla ilerler.`],
  [`comte`, `Hangi aşama hangi toplum biçimine denk düşer?`, `Teolojik: <b>Avrupa Ortaçağı</b><br>Metafizik: <b>14. yy – Fransız Devrimi</b><br>Pozitif: <b>Fransız Devrimi'yle</b> başlayan`],
  [`comte`, `Teolojik hâlde olgular nasıl açıklanır?`, `İlk ve nihai nedenler (Mutlak bilgi) aranır; olgular <b>doğaüstü varlıkların eylemleriyle</b> açıklanır.`],
  [`comte`, `Metafizik hâlin özelliği?`, `Teolojik aşamanın uzantısı; <b>kişisel olmayan soyut kavramlarla</b> açıklama; tanrı soyut varlık olarak tanımlanır.`],
  [`comte`, `Bilimler hiyerarşisi?`, `Matematik → astronomi → fizik → kimya → biyoloji → <b>sosyoloji</b> (basitten karmaşığa).`],
  [`comte`, `Sosyoloji neden "kraliçe bilim"?`, `En karmaşık olduğu için; bireylere <b>indirgenemeyen</b> toplumsal bütünü inceler.`],
  [`comte`, `"Bilmek öngörmek, öngörmek yapmaktır" ne anlatır?`, `Sosyoloji yasaları bulur, öngörüde bulunur ve bu öngörülerle <b>topluma müdahale eder</b>; düzen ile ilerlemeyi birleştirir.`],
  [`comte`, `Comte'a göre toplumsal hiyerarşi?`, `En üstte <b>pozitivist sosyologlar</b>, en altta <b>işçiler (proletarya)</b>; devlet düzenler. Organizma olarak toplum.`],
  [`comte`, `Touraine ve Marcuse'un Comte eleştirileri?`, `Touraine: "Ben'den Biz'e geçmek."<br>Marcuse (<i>Akıl ve Devrim</i>): pozitivizmi <b>muhafazakâr amaçlara</b> hizmet eder.`]
],

questions: [
  // 2.1 · dogus
  { u: `dogus`, q: `Aşağıdakilerden hangisi derste sayılan bilimsellik kriterlerinden biri değildir?`,
    o: [`Otoriteye dayanma`, `Sistematiklik`, `Ampirik dayanak`, `Yöntemsel açıklık`],
    e: `Kriterler: sistematiklik, ampirik dayanak, yöntemsel açıklık, nesnellik ve genelleme.` },
  { u: `dogus`, q: `"Bulguların kişisel kanılara değil, sınanabilir öznelerarası kanıtlara dayanması" hangi kriterdir?`,
    o: [`Nesnellik`, `Genelleme`, `Sistematiklik`, `Yöntemsel açıklık`],
    e: `Genelleme ise tekil bulguların ötesine geçip nedensel ilişkileri ve kalıpları açıklamaktır.` },
  { u: `dogus`, q: `19. yüzyıl epistemolojisinde "bilim" neyi ifade ediyordu?`,
    o: [`Doğa bilimlerini`, `Felsefeyi`, `İnsan bilimlerini`, `Teolojiyi`],
    e: `Fizik, kimya ve biyoloji ile somutlaşan doğa bilimleri, meşru bilgi üretmenin tek geçerli yolu sayıldı.` },
  { u: `dogus`, q: `Derste sosyal bilimlerin doğuşunda "tarihsel katalizör" olarak gösterilen olay hangisidir?`,
    o: [`Fransız Devrimi`, `Reform`, `Rönesans`, `Amerikan Bağımsızlık Bildirgesi`],
    e: `Fransız Devrimi toplumsal değişimi meşru bir gerçeklik olarak kabul ettirdi; halk egemenliği norm haline geldi.` },
  { u: `dogus`, q: `Tekil ve tarihsel olayları bağlamıyla anlamaya odaklanan yaklaşım ve disiplin hangisidir?`,
    o: [`İdiografik yaklaşım — tarih`, `Nomotetik yaklaşım — sosyoloji`, `Nomotetik yaklaşım — ekonomi`, `İdiografik yaklaşım — siyaset bilimi`],
    e: `Siyaset bilimi, ekonomi ve sosyoloji nomotetik; tarih idiografiktir.` },
  { u: `dogus`, q: `Sosyal bilimler arasındaki iş bölümünde sosyolojinin alanı nedir?`,
    o: [`Sivil toplum (devlet ve piyasa dışındaki toplumsal ilişkiler)`, `Devlet ve yönetim`, `Piyasa mekanizmaları`, `Avrupa dışındaki toplumlar`],
    e: `Siyaset bilimi devleti, ekonomi piyasayı, antropoloji Avrupa dışı toplumları inceler.` },
  { u: `dogus`, q: `Antropoloji hangi amaçla ayrı bir disiplin olarak ayrıştı?`,
    o: [`Avrupa dışındaki toplumları betimlemek, analiz etmek ve anlamak`, `Devletlerin yönetim yapılarını incelemek`, `Piyasa dinamiklerini incelemek`, `Avrupa'nın ulusal tarihlerini yazmak`],
    e: `Bu topluluklar Batılı güçlerce "kabile" gibi şemsiye kavramlarla adlandırıldı.` },
  { u: `dogus`, q: `"Sosyoloji" teriminin mucidi kimdir?`,
    o: [`Auguste Comte`, `Émile Durkheim`, `Immanuel Wallerstein`, `C. Wright Mills`],
    e: `Comte toplumu inceleyen yeni alana adını veren ilk düşünürdür ve önce "toplumsal fizik" demiştir.` },
  { u: `dogus`, q: `"Toplumsal olguların bireylerden bağımsız, nesnel ve dışsal birer 'şey' gibi incelenmesi gerektiği" hangi düşünüre aittir?`,
    o: [`Émile Durkheim`, `Auguste Comte`, `Immanuel Kant`, `Zygmunt Bauman`],
    e: `Durkheim, Sosyolojik Yöntemin Kuralları (1895).` },
  { u: `dogus`, q: `Wallerstein'a göre sosyolojinin ortaya çıkışında aşağıdakilerden hangisi pratik ihtiyaçlardan biri değildir?`,
    o: [`Doğa yasalarını keşfetmek`, `Kent krizlerini incelemek`, `Çatışmayı açıklamak`, `İstikrar sağlamak`],
    e: `Pratik ihtiyaçlar: kent krizleri, çatışmayı açıklamak, düzeni anlamak, istikrar sağlamak.` },

  // 2.2 · wallerstein (PDF)
  { u: `wallerstein`, q: `Wallerstein'a göre sosyal bilim hangi çabaya dayanır?`,
    o: [`Gerçeklik hakkında ampirik olarak doğrulanan sistemli, dünyevi bilgi üretmeye`, `Vahiy yoluyla inmiş doğruları yorumlamaya`, `Sezgiyle doğruyu bulmaya`, `Sözlü bilgeliği yazıya geçirmeye`],
    e: `Bu çabaya "scientia" (bilgi) adı verildi (s. 12).` },
  { u: `wallerstein`, q: `Doğa ile insan, madde ile akıl arasında köklü ayrımlar bulunduğunu varsayan görüş hangisidir?`,
    o: [`Kartezyen dualizm`, `Pozitivizm`, `Nomotetik yaklaşım`, `İki kültür`],
    e: `Klasik bilim görüşünün dayandığı varsayımlardan biridir (s. 12).` },
  { u: `wallerstein`, q: `Bilmenin farklı yolları arasındaki ayrıma "iki kültür" adını veren kimdir?`,
    o: [`C. P. Snow`, `Thomas Hooke`, `Ranke`, `John Stuart Mill`],
    e: `Hooke'un 1663 tarihli Royal Society tüzüğü bu ayrımı zaten içeriyordu (s. 12).` },
  { u: `wallerstein`, q: `Wallerstein'a göre meşru bilgi konusundaki epistemolojik mücadelenin asıl konusu neydi?`,
    o: [`İnsanların dünyasıyla ilgili bilgiyi kimin denetleyeceği`, `Doğayla ilgili bilgiyi kimin denetleyeceği`, `Üniversitelerin hangi ülkede kurulacağı`, `Teolojinin üniversitede kalıp kalmayacağı`],
    e: `18. yüzyılda doğa bilimcileri doğa konusunda tek söz sahibi olmuşlardı (s. 15).` },
  { u: `wallerstein`, q: `Wallerstein'a göre 19. yüzyılın entelektüel tarihine damgasını vuran süreç hangisidir?`,
    o: [`Bilginin disiplinlere ayrılması ve meslekleşmesi`, `Teoloji fakültelerinin güçlenmesi`, `Felsefenin bilimin üstüne çıkması`, `Coğrafyanın sosyal bilimlere öncülük etmesi`],
    e: `Yeni bilgi üretmek ve bilgi üretenleri yeniden üretmek için sürekli kurumsal yapılar kuruldu (s. 16).` },
  { u: `wallerstein`, q: `Modern sosyal bilimin kurucuları, özellikle Britanya ve Fransa'da, model olarak neye yöneldiler?`,
    o: [`Newton fiziğine`, `Aristoteles metafiziğine`, `Ortaçağ teolojisine`, `Edebiyat incelemelerine`],
    e: `Yeni sosyal düzen için bilimin olabildiğince kesin ("pozitif") olması gerekiyordu (s. 17).` },
  { u: `wallerstein`, q: `Wallerstein'ın metnine göre "idiografik" ne demektir?`,
    o: [`Her olayı kendi tekliği içinde betimleme özelliğine sahip`, `Yasa koyma, yasalar oluşturma özelliğine sahip`, `Deneye tabi tutulamayan önermeler geliştiren`, `Nicel verilere dayanan`],
    e: `Nomotetik ise yasa koyma özelliğine sahip olandır (s. 18).` },
  { u: `wallerstein`, q: `Sosyal bilimlerin bugün bildiğimiz disiplinlere ayrışmış hâli büyük üniversitelere resmen hangi dönemde yansıdı?`,
    o: [`1850–1914`, `1500–1850`, `1945–1960`, `1789–1815`],
    e: `Ayrışma 19. yüzyılın ilk yarısında billurlaşsa da üniversitelere ancak 1850–1914'te yansıdı (s. 20).` },
  { u: `wallerstein`, q: `Birinci Dünya Savaşı dolaylarında üzerinde uzlaşılan sosyal bilim disiplinleri hangileridir?`,
    o: [`Tarih, iktisat, sosyoloji, siyaset bilimi, antropoloji`, `Coğrafya, psikoloji, hukuk, tarih, iktisat`, `Felsefe, teoloji, tarih, hukuk, tıp`, `Sosyoloji, psikoloji, coğrafya, edebiyat, iktisat`],
    e: `Listeye belki Doğu Bilimleri eklenebilir; ama bu alandakiler kendilerini sosyal bilim saymıyordu (s. 22).` },
  { u: `wallerstein`, q: `Wallerstein'a göre sosyoloji uygulamada nasıl gelişti?`,
    o: [`Sosyal reform derneklerinin çalışmalarının üniversitede kurumsallaşmasıyla`, `Hukuk fakültelerinin içinden`, `Sömürge memurlarının raporlarından`, `Ortaçağ rahiplerinin incelemelerinden`],
    e: `Bu dernekler kentli işçi sınıflarının yol açtığı hoşnutsuzluk ve düzensizliklerle başa çıkmayı amaçlıyordu (s. 25).` },
  { u: `wallerstein`, q: `Wallerstein'a göre sosyal bilimlerin hiçbir zaman asli parçası olamayan üç alan hangisidir?`,
    o: [`Coğrafya, psikoloji ve hukuk`, `Tarih, iktisat ve sosyoloji`, `Antropoloji, sosyoloji ve siyaset bilimi`, `Matematik, fizik ve kimya`],
    e: `Coğrafya, tarih gibi çok eskiden beri yapılan bir uygulamaydı (s. 30).` },
  { u: `wallerstein`, q: `Nomotetik sosyal bilimciler kendi alanlarını ayırırken iktisatçılar hangi varsayımı vurguladı?`,
    o: [`Ceteris paribus (diğer bütün koşullar aynıyken)`, `Resmi hükümet yapılarıyla sınırlandırma`, `Sosyal ilişkiler alanını öne çıkarma`, `Katılımcı gözlem`],
    e: `Siyaset bilimciler resmi hükümet yapılarına, sosyologlar sosyal ilişkiler alanına odaklandı (s. 36).` },
  { u: `wallerstein`, q: `Wallerstein'a göre sosyal bilimler mekânı nasıl ele aldı?`,
    o: [`Devlet sınırlarına tabi; toplum, ulusal ekonomi, siyasal sistem ve ulus bu sınırlarla belirlenir`, `Dünya çapında, sınırları önemsemeden`, `Yalnızca kentler düzeyinde`, `Mekânı tümüyle coğrafyaya bıraktı ve hiç ele almadı`],
    e: `Sosyal bilim, toplumun sınırları içine hapsolduğu bir kutu işlevi gören devletlere tabi nitelikteydi (s. 32).` },

  // 3.1 · aydinlanma
  { u: `aydinlanma`, q: `Kant'a göre Aydınlanma nedir?`,
    o: [`İnsanın kendi suçu ile düşmüş olduğu ergin olmama durumundan kurtulması`, `Kilisenin otoritesinin güçlenmesi`, `Bilginin tek bir çatı altında toplanması`, `Güçler ayrılığının kurulması`],
    e: `Kant'ın sloganı: "Sapere Aude!"` },
  { u: `aydinlanma`, q: `Descartes ile metodolojik şüphe ve metodun öne çıktığı dönemeç hangisidir?`,
    o: [`Akılcılık (17. yüzyıl)`, `Rönesans (15.–16. yüzyıl)`, `Reform (16. yüzyıl)`, `Bilimsel Devrim (17.–18. yüzyıl)`],
    e: `Bilimsel Devrim Newton fiziği ve evrensel doğa yasalarıyla anılır.` },
  { u: `aydinlanma`, q: `Aşağıdakilerden hangisi Aydınlanmanın temel ilkelerinden biri değildir?`,
    o: [`Dogmatizm`, `Rasyonalizm`, `Sekülerleşme`, `İlerleme inancı`],
    e: `Dört ilke: rasyonalizm, deneycilik, sekülerleşme, ilerleme inancı.` },
  { u: `aydinlanma`, q: `İnsanlık bilgisini tek bir çatı altında toplama ve halka yayma projesi (Ansiklopedi) kime aittir?`,
    o: [`Diderot ve d'Alembert`, `Voltaire ve Rousseau`, `Locke ve Hume`, `Montesquieu ve Smith`],
    e: `Voltaire ise hoşgörü ve ifade özgürlüğüyle anılır.` },
  { u: `aydinlanma`, q: `Zihni "tabula rasa" (boş levha) olarak kabul eden düşünür kimdir?`,
    o: [`John Locke`, `David Hume`, `Adam Smith`, `Immanuel Kant`],
    e: `Locke ayrıca yaşam, özgürlük ve mülkiyet haklarını savunur (doğal haklar kuramı).` },
  { u: `aydinlanma`, q: `"Görünmez el" kavramı hangi düşünürle ilişkilidir?`,
    o: [`Adam Smith`, `John Locke`, `Montesquieu`, `Rousseau`],
    e: `Smith: politik iktisat, serbest piyasa ve bireysel girişimcilik.` },
  { u: `aydinlanma`, q: `Yasama, yürütme ve yargının birbirinden bağımsızlaştırılmasını "Kanunların Ruhu"nda kavramsallaştıran kimdir?`,
    o: [`Montesquieu`, `Rousseau`, `Voltaire`, `Diderot`],
    e: `Rousseau ise Toplum Sözleşmesi ile halk egemenliği ve genel iradeyi savunur.` },
  { u: `aydinlanma`, q: `Aydınlanmanın modern dünyaya mirası arasında aşağıdakilerden hangisi sayılmıştır?`,
    o: [`Amerikan (1776) ve Fransız (1789) devrimlerine zemin hazırlaması`, `Mutlak monarşinin güçlenmesi`, `Zümre ayrıcalıklarının korunması`, `Dinin hukuki yapıdaki rolünün artması`],
    e: `Ayrıca evrensel insan hakları ve demokratik anayasacılık (hukukun üstünlüğü, laik devlet).` },

  // 3.2 · fransiz
  { u: `fransiz`, q: `Ancien Régime'de nüfusun %98'ini oluşturan zümre hangisidir?`,
    o: [`Üçüncü zümre (halk ve burjuvazi)`, `Birinci zümre (ruhban sınıfı)`, `İkinci zümre (soylular)`, `Saray aristokrasisi`],
    e: `Üçüncü zümre: köylüler, zanaatkârlar, tüccarlar ve profesyoneller.` },
  { u: `fransiz`, q: `États-Généraux 1789'da hangi tarihte toplandı?`,
    o: [`5 Mayıs 1789`, `17 Haziran 1789`, `14 Temmuz 1789`, `21 Eylül 1792`],
    e: `1614'ten sonraki ilk toplantıydı; ağır mali kriz nedeniyle XVI. Louis Versailles'da topladı.` },
  { u: `fransiz`, q: `"Zümre başına bir oy" sisteminin sorunu neydi?`,
    o: [`Ayrıcalıklı iki zümre ittifak yaparak halkı 2'ye 1 mağlup ediyordu`, `Kral hiç oy kullanamıyordu`, `Üçüncü zümre her zaman çoğunluğu alıyordu`, `Kararlar kişi başına alınıyordu`],
    e: `Üçüncü zümre bu yüzden kişi başına bir oy (bireysel temsil) talep etti.` },
  { u: `fransiz`, q: `"Üçüncü Zümre Nedir? Her şey..." sözü kime aittir?`,
    o: [`Abbé Sieyès`, `XVI. Louis`, `Rousseau`, `Montesquieu`],
    e: `Sieyès ile siyasal mantık "Zümre → Temsil"den "Ulus → Temsil"e döndü.` },
  { u: `fransiz`, q: `Üçüncü Zümre'nin tüm Fransız ulusunu temsil ettiğini ilan ederek egemenliği üstlendiği olay hangisidir?`,
    o: [`17 Haziran 1789: Ulusal Meclis'in ilanı`, `20 Haziran 1789: Tenis Kortu Yemini`, `14 Temmuz 1789: Bastille`, `10 Ağustos 1792: Tuileries baskını`],
    e: `Yeni egemenlik ilkesi: Ulus → Temsilciler → Siyasal otorite.` },
  { u: `fransiz`, q: `Temsilcilerin anayasa yapılana kadar dağılmama kararı aldığı yemin hangisidir?`,
    o: [`Tenis Kortu (Jeu de Paume) Yemini — 20 Haziran 1789`, `Ulusal Konvansiyon — 21 Eylül 1792`, `États-Généraux — 5 Mayıs 1789`, `Anayasal monarşi — 1791`],
    e: `9 Temmuz 1789'da meclis kendini Ulusal Kurucu Meclis ilan etti.` },
  { u: `fransiz`, q: `Monarşinin kaldırılıp Cumhuriyetin ilan edildiği tarih hangisidir?`,
    o: [`21 Eylül 1792`, `10 Ağustos 1792`, `14 Temmuz 1789`, `1791`],
    e: `10 Ağustos 1792 Tuileries baskınıyla monarşi fiilen askıya alınmıştı.` },
  { u: `fransiz`, q: `Derse göre Fransız Devrimi hangi dönüşümün temel tarihsel örneğidir?`,
    o: [`Siyasal meşruiyetin kaynağının ulusal egemenliğe dönüşmesi`, `Tarım toplumundan sanayi toplumuna geçiş`, `Teolojik aşamadan metafizik aşamaya geçiş`, `Doğa bilimlerinin hegemonyasının başlaması`],
    e: `Zümresel toplum → temsil krizi → Ulusal Meclis → yurttaşlık → ulusal egemenlik → Cumhuriyet.` },

  // 3.3 · sanayi
  { u: `sanayi`, q: `Spinning Jenny ile iplik üretim kapasitesi ne kadar arttı?`,
    o: [`16 kat`, `2 kat`, `62 kat`, `100 kat`],
    e: `Tekstilde mekanikleşmenin simgesidir ("çıkrık devrimi").` },
  { u: `sanayi`, q: `James Watt'ın buhar makinesinin en önemli etkisi neydi?`,
    o: [`Üretimi akarsu kenarlarına bağımlı olmaktan kurtarması`, `Kanal ağını ortadan kaldırması`, `Kömür kullanımını azaltması`, `Kadın ve çocuk işçiliğini bitirmesi`],
    e: `Ayrıca maden ocaklarında su tahliyesi sağlandı; kömür kullanımı katlandı.` },
  { u: `sanayi`, q: `Aşağıdakilerden hangisi fabrika sisteminin aşamalarından biri değildir?`,
    o: [`Ev içi atölye üretimi`, `Merkezi üretim`, `Saat disiplini`, `Uzmanlaşma`],
    e: `Fabrika sisteminde ev içi atölyeler yerini dev fabrika binalarına bıraktı.` },
  { u: `sanayi`, q: `1900 yılında Britanya nüfusunun yüzde kaçı kentte yaşıyordu?`,
    o: [`%62`, `%16`, `%98`, `%40`],
    e: `Manchester ve Liverpool gibi merkezler birkaç on yılda metropole dönüştü.` },
  { u: `sanayi`, q: `Aşağıdakilerden hangisi kentsel sanayi işçisinin özelliğidir?`,
    o: [`Günde 12–16 saatlik ağır mesai`, `Mevsimlik ve esnek çalışma temposu`, `Kendi ürettiği gıda ile geçim`, `Geniş aile ve topluluk dayanışması`],
    e: `Diğerleri geleneksel kırsal yaşama aittir.` },
  { u: `sanayi`, q: `Sanayi Devrimi döneminde şehir hayatındaki zorluklardan hangisi derste sayılmıştır?`,
    o: [`Altyapısız kentlerde kolera salgınları`, `Kırsal nüfusun artması`, `Fabrikaların kapanması`, `Kömür kıtlığı`],
    e: `Ayrıca dar konutlar; buna karşı sendikalaşma ve yasal reformlar.` },

  // 3.4 · modernite
  { u: `modernite`, q: `Derse göre sosyoloji ile modernite arasındaki ilişki nasıldır?`,
    o: [`Zamandaştırlar`, `Sosyoloji moderniteden çok önce doğmuştur`, `Birbirleriyle ilgisizdirler`, `Modernite sosyolojinin bir alt dalıdır`],
    e: `Sosyolojiyi anlamak modern toplumun ortaya çıkış dinamiklerini kavramaktan geçer.` },
  { u: `modernite`, q: `Anthony Giddens'a göre aşağıdakilerden hangisi modernitenin üç temel bileşeninden biri değildir?`,
    o: [`Zümre ayrıcalıkları`, `Seküler ve akılcı yaklaşım`, `Siyasal kurumlar`, `Ekonomik kurumlar`],
    e: `Siyasal kurumlar: ulus-devlet ve kitle demokrasisi; ekonomik kurumlar: endüstriyel üretim ve kapitalist pazar.` },
  { u: `modernite`, q: `Moderniteyi doğuran devrimlerden Sanayi Devrimi'nin sonucu nedir?`,
    o: [`Sınıflı sanayi toplumu`, `Yeni siyasal düzen`, `Bilimsel yöntem ve pozitivizm`, `Halk egemenliği`],
    e: `Aydınlanma → bilimsel yöntem ve pozitivizm; Fransız Devrimi → yeni siyasal düzen.` },
  { u: `modernite`, q: `Comte'un pozitivist yöntem ilkelerine göre toplum nedir?`,
    o: [`Evrensel kanunlara göre işleyen bir organizma`, `Bireylerin rastlantısal toplamı`, `Yalnızca bir piyasa`, `Doğaüstü güçlerin eseri`],
    e: `Ayrıca: yalnızca gözlem ve deneye dayalı bilgi meşrudur; spekülatif felsefe yerine pozitif olgular incelenir.` },
  { u: `modernite`, q: `Durkheim'a göre toplumsal olgular için aşağıdakilerden hangisi doğrudur?`,
    o: [`Bireysel bilincin dışındadır ve bireylere zorlayıcı bir güç uygular`, `Yalnızca bireylerin niyetlerinden oluşur`, `Nesnel yöntemlerle incelenemez`, `Sadece tarihçilerin konusudur`],
    e: `"Toplumsal olgular birer 'şey' olarak ele alınmalıdır." (1895)` },
  { u: `modernite`, q: `İnsan ve Yurttaş Hakları Bildirgesi (1789) ile ilişkilendirilen slogan hangisidir?`,
    o: [`Eşitlik, Özgürlük, Kardeşlik`, `Sapere Aude`, `Bilmek öngörmek, öngörmek yapmaktır`, `Ben'den Biz'e`],
    e: `Bildirge: "İnsanlar özgür ve eşit doğar, eşit yaşarlar."` },
  { u: `modernite`, q: `Derste sosyolojinin tarihsel oluşum dinamiğinde "maddi altüst oluş" olarak gösterilen nedir?`,
    o: [`Çifte devrim: Fransız ve Sanayi devrimleri`, `Aydınlanma aklı`, `Rönesans ve Reform`, `Bilimsel Devrim`],
    e: `Aydınlanma aklı "entelektüel girdi"dir; ikisinin bileşimi modern bir sosyal bilim olarak sosyolojiyi doğurur.` },

  // 4.1 · imgelem
  { u: `imgelem`, q: `"Toplumu ve bireyi birlikte ele almadıkça, ne bireyin hayatını ne de toplumun tarihini anlayabiliriz." sözü kime aittir?`,
    o: [`C. Wright Mills`, `Auguste Comte`, `Émile Durkheim`, `Anthony Giddens`],
    e: `Mills, Sosyolojik İmgelem (s. 8).` },
  { u: `imgelem`, q: `Mills'in sosyolojik imgelemi tartıştığı tarihsel bağlam hangisidir?`,
    o: [`1958 Amerikası ve 2. Dünya Savaşı sonrası`, `1789 Fransası`, `19. yüzyıl Britanyası`, `Ortaçağ Avrupası`],
    e: `Bu dönemde birey büyük değişimler karşısında şaşkınlık ve güçsüzlük yaşıyordu.` },
  { u: `imgelem`, q: `Sosyolojik imgelemin üç temel ekseni hangileridir?`,
    o: [`Biyografi, toplum, tarih`, `Ekonomi, siyaset, hukuk`, `Teolojik, metafizik, pozitif`, `Kaynak, ileti, alıcı`],
    e: `Sosyolojik imgelem biyografi ile tarih arasındaki ilişkinin toplumda nasıl ortaya çıktığını çözümler.` },
  { u: `imgelem`, q: `Aşağıdakilerden hangisi Mills'e göre sosyoloğun sorduğu üç sorudan biri değildir?`,
    o: [`Bu toplumun piyasa fiyatları nasıl oluşur?`, `İncelediğimiz toplum nasıl bir yapısal düzene sahiptir?`, `Bu toplum hangi tarihsel dönemin parçasıdır?`, `Bu yapı ne tür insan tipleri üretir?`],
    e: `Üç soru: yapı, tarihsel dönem ve insan tipleri.` },
  { u: `imgelem`, q: `Mills'in kişisel sorunlar ile kamusal sorunlar arasında ayrım yapmasının amacı nedir?`,
    o: [`Bireysel sorunların toplumsal yapının sorunlarının yansıması olduğunu göstermek`, `Kişisel sorunların toplumla ilgisiz olduğunu kanıtlamak`, `Kamusal sorunları psikolojiye bırakmak`, `Bireyi toplumdan tamamen ayırmak`],
    e: `"Biyografi, içinde bulunduğu tarihsel/toplumsal yapıyı yansıtır."` },
  { u: `imgelem`, q: `Aşağıdakilerden hangisi Mills'e göre "kamusal yapı sorunu"na örnektir?`,
    o: [`Kitlesel işsizlik oranları`, `Tek bir bireyin iş bulamaması`, `Aile içi bir anlaşmazlık`, `Kişisel bir hayal kırıklığı`],
    e: `Kişisel sorunlar bireyin dar/dolaysız çevresinde yaşanan öznel sıkıntılardır.` },
  { u: `imgelem`, q: `"Değerler sisteminin tehdit altında olması ama tehdidin kaynağının belirsiz kalması"nın yarattığı duygu hangisidir?`,
    o: [`Huzursuzluk / endişe`, `İlgisizlik / kayıtsızlık`, `Güven`, `Teknolojik ethos`],
    e: `İlgisizlik ise değerler sisteminin tamamen ortadan kalkmasıyla oluşur.` },
  { u: `imgelem`, q: `Mills'e göre doğa bilimlerinin (özellikle fiziğin) kuşkulu hale gelmesinin nedeni nedir?`,
    o: [`Hidrojen bombası yapımında araç olması ve teknolojik bir ethosun önünü açması`, `Sosyolojinin yöntemlerini taklit etmesi`, `Deney yapmayı bırakması`, `Sağduyuya fazla bağlı olması`],
    e: `Doğa bilimleri ilerlemenin değil yıkımın temsilcisine dönüştü; bilim askeri ve ekonomik güçlerce denetleniyor.` },
  { u: `imgelem`, q: `Sosyolojik imgelemin doğa bilimlerinin yerini almaya başlaması neden olumlu bir gelişme olarak görülür?`,
    o: [`Bilimin insan ve doğa yıkımı için kullanılmasına karşı duyarlı bir yaklaşım önerdiği için`, `Teknolojiyi daha çok yücelttiği için`, `Toplumsal sorunları bireysel başarısızlık olarak gördüğü için`, `Tarihi analizin dışında bıraktığı için`],
    e: `Ayrıca toplumsal sorunları saptayıp çözüm üretmenin önünü açar.` },

  // 5.1 · dusunmek
  { u: `dusunmek`, q: `Bauman ve May'e göre sosyolojiyi diğer disiplinlerden ayıran nedir?`,
    o: [`Kendine özgü soruları ve yaklaşım biçimleri`, `İncelediği alanın dünyada ayrı bir bölge olması`, `Kullandığı araştırma yöntemlerinin tamamen farklı olması`, `Yalnızca devleti incelemesi`],
    e: `Alan ve yöntem ayrımı yaklaşımlarının ikisi de onlara göre sorunludur.` },
  { u: `dusunmek`, q: `"Ne kuzey yarımküreden güneye geçerken sosyolojiden antropolojiye geçiyoruz ne de yaşlandıkça tarihten sosyolojiye!" cümlesi hangi yaklaşımın eleştirisidir?`,
    o: [`Disiplinleri incelenen alana göre ayırma yaklaşımının`, `Disiplinleri yönteme göre ayırma yaklaşımının`, `Bilişsel perspektif yaklaşımının`, `Karşılıklı bağımlılık yaklaşımının`],
    e: `Toplumsal yaşam bölünemez bir bütündür (s. 15).` },
  { u: `dusunmek`, q: `Bauman ve May'e göre sosyal bilimleri yöntem üzerinden ayırmak neden imkânsızdır?`,
    o: [`Hepsi belli bir sistem dahilinde benzer prosedürleri izler`, `Hiçbiri yöntem kullanmaz`, `Her biri doğa bilimlerinin yöntemini reddeder`, `Yöntemleri gizlidir`],
    e: `"Hepsi... olguları derlemeye çalışırlar... tekrar tekrar kontrol ederler." (s. 16)` },
  { u: `dusunmek`, q: `Bauman ve May'in "bir şeyi incelerken kullanılan genel zihinsel çerçeve" için kullandığı kavram hangisidir?`,
    o: [`Bilişsel perspektif`, `Sosyolojik imgelem`, `Sağduyu`, `Pozitif hâl`],
    e: `Disiplinleri ayıran asıl şey bu bakış açıları ve onları çerçeveleyen sorulardır.` },
  { u: `dusunmek`, q: `Bauman ve May'e göre siyaset bilimini farklı kılan nedir?`,
    o: [`İnsan eylemlerini güç/otorite ve ürettiği eşitsizlikler üzerinden incelemesi`, `Dış dünyada "devlet" diye ayrı bir bölge bulunması`, `Maliyet-kâr sorularını sorması`, `Yalnızca nicel veri kullanması`],
    e: `Ekonomi ise maliyet-kâr ve kıt kaynakların düzenlenmesi soruları üzerinden farklılaşır.` },
  { u: `dusunmek`, q: `Bauman ve May, sosyolojinin ilişkisel bakışına hangi adı verir?`,
    o: [`Karşılıklı bağımlılık (inter-dependency)`, `Teknolojik ethos`, `Ceteris paribus`, `Tabula rasa`],
    e: `Sosyoloji bireyleri daha geniş tarihsel/toplumsal ilişkiler ağının parçası olarak ele alır (s. 18).` },
  { u: `dusunmek`, q: `Derse göre sağduyu nedir?`,
    o: [`Günlük hayatı yönlendiren sistemsiz, alışkanlığa dayalı bilgiler bütünü`, `Bilimsel ve sistemli prosedürlerle üretilen bilgi`, `Doğa bilimlerinin deney sonuçları`, `Devletin resmi bilgisi`],
    e: `Sağduyu toplumsal çevreyle ilişkimizi gündelik deneyimler çerçevesinde düzenleyen anlamlar dünyasını da içerir.` },
  { u: `dusunmek`, q: `Sosyolojinin sağduyuyla ilişkisi için hangisi doğrudur?`,
    o: [`Sosyologlar toplumsal yapının parçası olduğundan sağduyudan tamamen kopamaz, onu hesaba katmak zorundadır`, `Sosyolojinin sağduyuyla hiçbir bağı yoktur`, `Sosyoloji sağduyuyu tamamen yok sayar`, `Sosyoloji yalnızca sağduyudan oluşur`],
    e: `Sağduyuyla bağı olmayanlar doğa bilimleridir; sosyolojik olgular zaten anlamla yüklüdür.` },
  { u: `dusunmek`, q: `Aşağıdakilerden hangisi sağduyunun özelliğidir?`,
    o: [`Gerçekliği sadece bireylerin niyetlerinin sonucu olarak görür`, `Geniş toplumsal/tarihsel ilişkiler ağını temel alır`, `Bilimsel ve sistemli prosedürleri izler`, `Bireysel niyetlerin ötesinde bütüncül bir yaklaşım sunar`],
    e: `Diğer üçü sosyolojinin özellikleridir.` },

  // 5.2 · bauman (PDF)
  { u: `bauman`, q: `Bauman & May'in Sosyolojik Düşünmek kitabının giriş bölümünün adı nedir?`,
    o: [`Sosyolojik Mercekleri Yaratmak`, `Sosyolojik İmgelem`, `Sosyal Bilimleri Açın`, `Modernliğin Eleştirisi`],
    e: `Giriş, kitabın 13–28. sayfalarıdır.` },
  { u: `bauman`, q: `Bauman & May'e göre "sosyoloji" terimi ne zaman kullanılmaya başlanmıştır?`,
    o: [`19. yüzyılın erken dönemlerinde`, `Ortaçağda`, `20. yüzyılın sonunda`, `Rönesans döneminde`],
    e: `Gelişimi toplumsal düzeni ve değişimi araştırma amacıyla olmuştur (s. 14).` },
  { u: `bauman`, q: `Bauman & May'e göre "bilgi edinme yollarımız" nedir?`,
    o: [`Dünyayı kavramak için kullandığımız çerçeveler`, `Doğada hazır bulunan ayrımlar`, `Yalnızca deney sonuçları`, `Devletin belirlediği kurallar`],
    e: `Farklı disiplinlere yansıyan beşeri dünyada hiçbir doğal ayrım yoktur (s. 16).` },
  { u: `bauman`, q: `Bauman & May'e göre sosyolojinin ayırt edici yanı nedir?`,
    o: [`Beşeri eylemleri daha geniş temsillerin (karşılıklı bağımlılık ağlarının) unsurları olarak görmesi`, `Yalnızca bireysel niyetleri incelemesi`, `Maliyet-yarar ilişkisine odaklanması`, `İktidar ve nüfuz asimetrisini incelemesi`],
    e: `Bu temsil, birbirine eklemlenmiş aktörlerin tesadüf olmayan topluluğudur (s. 18).` },
  { u: `bauman`, q: `Bauman & May'e göre fen bilimlerinin ürettiği bilgi sağduyuyla neden rekabet etmez?`,
    o: [`Nesneleri çok özel koşullarda ortaya çıkar ve gündelik deneyime dahil değildir`, `Fen bilimleri sağduyuyu tamamen benimser`, `Fen bilimleri hiç deney yapmaz`, `Sağduyu fen bilimlerinden daha sistemlidir`],
    e: `Örnek: dev partikül hızlandırıcıları ve güçlü mikroskoplar (s. 19–20).` },
  { u: `bauman`, q: `Bauman & May'e göre sosyolojik bilgiyi sağduyudan ayıran üç farktan biri aşağıdakilerden hangisidir?`,
    o: [`Bulgulara dayalı izahat oluştururken kabul edilmiş, kurumsallaşmış yöntemlere bağlı olması`, `Kişisel yaşam dünyasıyla sınırlı kalması`, `Her durumu tanımlanabilir bir şahsın kasıtlı eylemine bağlaması`, `Temel kaidelerini hiç sorgulamaması`],
    e: `Diğer farklar: sahanın boyutları (birden çok yaşam dünyası) ve anlama/açıklama biçimi (s. 22–24).` },
  { u: `bauman`, q: `Bauman & May'e göre insanlar sağduyuyla düşünürken neyi kabullenmekte zorlanır?`,
    o: [`Bir durumun tanımlanabilir bir şahsın kasıtlı eylemlerinin sonucu olmadığını`, `Doğa yasalarının varlığını`, `Kendi deneyimlerinin önemli olduğunu`, `Gündelik rutinlerin varlığını`],
    e: `Sosyoloji araştırmaya tek tek aktörlerden değil bağımlılık ağlarından başlar (s. 24–25).` },
  { u: `bauman`, q: `Bauman & May'e göre yeterince sık tekrarlanan şeylerle ilgili hangisi doğrudur?`,
    o: [`Tanıdık hale gelir ve tanıdık şeyler açıklama gerektirmez`, `Daha çok merak uyandırır`, `Bilimsel yasaya dönüşür`, `Sağduyunun dışına çıkar`],
    e: `Sağduyunun gücü ikili bir karaktere sahiptir; alışkanlığı kırmak yeni olasılıklar açar (s. 25–26).` },
  { u: `bauman`, q: `Bauman & May'e göre sosyolojiye "politik sadakatsizlik" suçlaması genelde kimlerden gelir?`,
    o: [`Şirketler, hükümetler ve hâkim toplumsal düzenin iktidar sahipleri`, `Sosyoloji öğrencileri`, `Doğa bilimciler`, `Antropologlar`],
    e: `Bu tepki, mevcut durumun "doğal" olduğunu iddia edenler arasında çok belirgindir (s. 28).` },

  // 6.1 · comte
  { u: `comte`, q: `Auguste Comte hangi yıl doğmuştur?`,
    o: [`1798`, `1789`, `1817`, `1830`],
    e: `Devrimden kısa süre sonra, Katolik ve monarşizm yanlısı bir ailede doğdu.` },
  { u: `comte`, q: `Comte 1817–1824 yılları arasında kimin çalışma arkadaşı olmuştur?`,
    o: [`Saint-Simon`, `Durkheim`, `John Stuart Mill`, `Marcuse`],
    e: `Saint-Simon'un endüstri toplumu üzerine görüşlerinden etkilendi.` },
  { u: `comte`, q: `Aşağıdakilerden hangisi Comte'un eserlerinden biridir?`,
    o: [`Pozitif Felsefe Dersleri`, `Sosyolojik Yöntemin Kuralları`, `Akıl ve Devrim`, `Modernliğin Eleştirisi`],
    e: `Diğer eseri: Pozitif Yönetim Biçimi (1851–1854).` },
  { u: `comte`, q: `Comte'un siyasi görüşü için hangisi doğrudur?`,
    o: [`Muhafazakârlar gibi otoritenin hiyerarşik yapısına, devrimciler gibi ilerlemeye ve reforma inanır`, `Her türlü otoriteyi reddeder`, `İlerlemeye ve reforma karşıdır`, `Toplumsal düzenin gereksiz olduğunu savunur`],
    e: `Amacı toplumsal düzeni ve birliği kuracak kanunları tespit etmek, kafalardaki ayrışmaları gidermektir.` },
  { u: `comte`, q: `Comte'un üç hâl yasasındaki aşamaların doğru sırası hangisidir?`,
    o: [`Teolojik → Metafizik → Pozitif`, `Metafizik → Teolojik → Pozitif`, `Pozitif → Metafizik → Teolojik`, `Teolojik → Pozitif → Metafizik`],
    e: `İnsan zihni, bilimler ve toplumlar her şeyi önce teolojik, sonra metafizik, en son pozitif olarak algılar.` },
  { u: `comte`, q: `Comte'a göre metafizik hâl hangi toplumsal düzene karşılık gelir?`,
    o: [`14. yüzyıldan Fransız Devrimi'ne kadar olan düzen`, `Avrupa Ortaçağı`, `Fransız Devrimi'yle başlayan düzen`, `Antik Yunan`],
    e: `Teolojik hâl Avrupa Ortaçağı'na, pozitif hâl Fransız Devrimi'yle başlayan aşamaya denk düşer.` },
  { u: `comte`, q: `Olguların doğrudan doğaüstü varlıkların eylemleriyle üretildiğinin varsayıldığı aşama hangisidir?`,
    o: [`Teolojik hâl`, `Metafizik hâl`, `Pozitif hâl`, `Soyut hâl`],
    e: `Teolojik hâlde insan zihni ilk ve nihai nedenleri, yani Mutlak bilgiyi arar.` },
  { u: `comte`, q: `Comte'un bilimler hiyerarşisinde doğru sıralama hangisidir?`,
    o: [`Matematik, astronomi, fizik, kimya, biyoloji, sosyoloji`, `Sosyoloji, biyoloji, kimya, fizik, astronomi, matematik`, `Fizik, matematik, kimya, astronomi, sosyoloji, biyoloji`, `Matematik, fizik, astronomi, biyoloji, kimya, sosyoloji`],
    e: `Bilimler basitten karmaşığa doğru sıralanır.` },
  { u: `comte`, q: `Comte'un hiyerarşisinde sosyolojinin "kraliçe bilim" sayılmasının nedeni nedir?`,
    o: [`En karmaşık bilim olması`, `En eski bilim olması`, `En basit bilim olması`, `Matematiğe dayanmaması`],
    e: `Sosyoloji, bireylere indirgenemeyen karmaşık bir varlık olarak toplumsal bütünü araştırır.` },
  { u: `comte`, q: `"Bilmek öngörmek, öngörmek yapmaktır." sözü hangi fikri ifade eder?`,
    o: [`Sosyolojinin toplumsal yasalara dayanarak öngörüde bulunup topluma müdahale etmesi`, `Bilginin hiçbir pratik yararı olmadığı`, `Toplumun bireylere indirgenebileceği`, `Teolojik aşamaya dönüş`],
    e: `Comte'a göre sosyoloji toplumu anlamakla kalmamalı, iyileştirmek ve düzenlemek için de kullanılmalıdır.` },
  { u: `comte`, q: `Comte'a göre toplumsal hiyerarşinin en üstünde kim yer alır?`,
    o: [`Pozitivist sosyologlar`, `İşçiler (proletarya)`, `Din adamları`, `Soylular`],
    e: `En altta emek gücü sarf ederek hayatta kalan işçiler yer alır; hiyerarşiyi devlet düzenler.` },
  { u: `comte`, q: `Comte'un pozitivist yaklaşımını "muhafazakâr amaçlara hizmet eden" bir yaklaşım olarak tanımlayan düşünür kimdir?`,
    o: [`Herbert Marcuse`, `Alain Touraine`, `C. Wright Mills`, `Anthony Giddens`],
    e: `Marcuse, Akıl ve Devrim. Touraine ise Comte için meselenin "Ben'den Biz'e geçmek" olduğunu söyler.` }
]
});
