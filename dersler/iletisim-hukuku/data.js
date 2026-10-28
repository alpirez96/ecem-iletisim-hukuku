// İletişim Hukuku — vize çalışma notlarından derlenen içerik.
// Her şey ders notlarına (sunum) dayanır; notlarda olmayan bilgi eklenmemiştir.
// Alanların açıklaması için README.md > "Yeni ders eklemek".

(window.DERSLER = window.DERSLER || []).push({
  id: `iletisim-hukuku`,
  title: `İletişim Hukuku`,
  exam: `Vize`,
  hue: 8,
  description: `Hukukun temel kavramlarından kitle iletişim özgürlüğüne; basın, radyo-TV ve internet mevzuatından kişilik hakları, unutulma hakkı, cevap hakkı ve sosyal medyada hakarete kadar vize konuları.`,
  source: `İletişim Hukuku vize çalışma notları (153 slayt)`,
  materials: [
    { title: `İletişim Hukuku Vize Çalışma Notları`, kind: `Sunum · 153 slayt`, size: `1,3 MB`, file: `materyal/Iletisim_Hukuku_Vize_Calisma_Notlari.pptx` }
  ],

units: [
  {
    id: `giris`, no: 1, title: `Hukuka Giriş: Kurallar, Kaynaklar, Dallar`, slides: `Slayt 3–25`,
    short: `<ul class="short-list">
<li>Toplumsal kurallar: din, ahlak, görgü, örf ve adet, hukuk. Hukuku ayıran: <b>maddi yaptırım</b> (devletin kamu gücü).</li>
<li>Kaynaklar: <b>yazılı</b> (Anayasa, kanun, milletlerarası antlaşma, KHK, tüzük, yönetmelik), <b>yazısız</b> (örf ve adet), <b>yardımcı</b> (bilimsel ve yargısal içtihat).</li>
<li>Normlar hiyerarşisi: <mark>Anayasa › Milletlerarası Andlaşmalar › Kanun › KHK › Tüzük › Yönetmelik</mark>.</li>
<li>Hukuk dalları: kamu, özel, karma. <b>İletişim Hukuku karma hukuktur.</b></li>
<li>Ceza hukuku ilkeleri: kanunilik, ölçülülük, eşitlik, kanunların bağlayıcılığı, cezaların şahsiliği.</li>
<li>Vergi: adalet, genellik, kanunilik. Medeni hukuk: kişiler, aile, miras, eşya; ilkeler: dürüstlük, iyi niyet, ispat yükü.</li>
</ul>`,
    html: `
<p class="lead">Hukuk, günlük yaşamdaki eylemlerimizin çoğunu düzenleyen kurallar bütünüdür. Doğum ve ölüm bile hukuku ilgilendirir; bu yüzden hukukçu olsun olmasın <mark>herkesi ilgilendiren</mark> bir bilim dalıdır.</p>

<h3>Toplum hayatını düzenleyen kurallar</h3>
<p>İnsan sosyal bir varlıktır. Birlikte yaşayan, iletişim kuran, teşkilatlanan ve iş bölümü yapan insan topluluklarına <b>toplum</b> denir. Toplumsal hayat, insanların <mark>toplumsal davranış kurallarına</mark> uymasıyla sürer.</p>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Kural</th><th>Tanım</th><th>Yaptırım / Örnek</th></tr></thead>
<tbody>
<tr><td><b>Örf ve adet</b></td><td>Toplumda uzun zamandır yapılan, kendiliğinden ortaya çıkan ve toplumun uygulanmasını zorunlu saydığı ortak davranış kuralları</td><td>Örnek: kına</td></tr>
<tr><td><b>Din</b></td><td>Tanrı'nın koyduğuna ve peygamberler aracılığıyla ulaştırıldığına inanılan emir ve yasaklar</td><td>Uyulursa sevap, uyulmazsa günah</td></tr>
<tr><td><b>Ahlak</b></td><td>Toplumun çok uzun bir zamanda oluşturduğu değer yargıları ve kurallar bütünü</td><td>Manevi: ayıplanma, dışlanma</td></tr>
<tr><td><b>Görgü</b></td><td>Aynı çevrede yaşayanların karşılaştıklarında takınması gereken tavırlar (konuşma, selamlaşma)</td><td>Manevi: görgüsüz, saygısız, kaba nitelendirilme</td></tr>
<tr><td><b>Hukuk</b></td><td>İnsanların birbirleriyle ve devletle ilişkilerini hak ve yükümlülükler çevresinde düzenleyen kurallar</td><td><b>Maddi</b> yaptırım</td></tr>
</tbody></table></div>
<div class="tip"><span class="tip-label">Dikkat</span>Hukuk kurallarını diğer sosyal kurallardan ayıran en önemli özellik, <b>maddi yaptırımla desteklenmiş</b> olmasıdır.</div>

<h3>Yaptırım (müeyyide)</h3>
<ul>
<li><b>Yaptırım:</b> Bir hukuk kuralının emir ve yasaklarına uygun davranılmadığında karşılaşılan tepki.</li>
<li><b>Maddi yaptırım:</b> Kurala aykırılık halinde devletin, <mark>kamu gücünü kullanarak</mark> kuralı ihlal edenin bu davranışın sonucuna katlanmasını sağlaması.</li>
</ul>

<h3>Hukukun amaçları</h3>
<ul class="chips">
<li>Toplumsal güven ve güvenlik</li><li>Toplumsal düzen</li><li>Toplumsal ihtiyaçları karşılamak</li><li>Toplumsal eşitlik</li><li>Adalet</li><li>Barış</li><li>Özgürlük</li>
</ul>

<h3>Hukuk kurallarının kaynakları</h3>
<div class="cols">
<div class="box"><h4>Yazılı kaynaklar</h4><ul><li>Anayasa</li><li>Kanun</li><li>Milletlerarası antlaşmalar</li><li>Kanun hükmünde kararnameler</li><li>Tüzük</li><li>Yönetmelikler</li></ul></div>
<div class="box"><h4>Yazısız kaynaklar</h4><ul><li>Örf ve adet kuralları</li></ul></div>
<div class="box"><h4>Yardımcı kaynaklar</h4><ul><li>Bilimsel içtihatlar</li><li>Yargısal içtihatlar</li></ul></div>
</div>

<h3>Normlar hiyerarşisi</h3>
<p><b>Norm = kural.</b> Hukuk kuralları arasındaki <mark>«öncelik» ilişkisine</mark> normlar hiyerarşisi denir. Normlar hiyerarşisi, normları bir yığın olmaktan çıkarıp anlamlı bir bütüne dönüştürür.</p>
<div class="pyramid" aria-label="Normlar hiyerarşisi, yukarıdan aşağıya">
<div style="--w:34%">1. Anayasa</div>
<div style="--w:50%">2. Milletlerarası Andlaşmalar</div>
<div style="--w:62%">3. Kanun</div>
<div style="--w:76%">4. Kanun Hükmünde Kararname</div>
<div style="--w:88%">5. Tüzük</div>
<div style="--w:100%">6. Yönetmelik</div>
</div>
<p class="note">Diğerleri: Yönerge · Tebliğ · Genelge · Talimat</p>

<h3>Hukuk sistemi (dalları)</h3>
<div class="cols">
<div class="box"><h4>Kamu hukuku</h4><ul><li>Anayasa Hukuku</li><li>İdare Hukuku</li><li>Ceza Hukuku</li><li>Vergi Hukuku</li><li>Yargılama Hukuku</li><li>Devletler Genel Hukuku</li><li>İcra ve İflas Hukuku</li></ul></div>
<div class="box"><h4>Özel hukuk</h4><ul><li>Medeni Hukuk</li><li>Ticaret Hukuku</li><li>Borçlar Hukuku</li><li>Devletler Özel Hukuku</li></ul></div>
<div class="box"><h4>Karma hukuk</h4><ul><li>Fikir ve Sanat Eserleri Hukuku</li><li>İş Hukuku</li><li>Bankacılık Hukuku</li><li><mark>İletişim Hukuku</mark></li></ul></div>
</div>

<dl class="defs">
<dt>Anayasa Hukuku</dt><dd>Kişi hak ve hürriyetlerini ve güvencelerini, devletin şekil ve teşkilatlanmasını, yasama-yürütme-yargı organlarının işleyişini düzenler.</dd>
<dt>İdare Hukuku</dt><dd>Yürütme organı içindeki kamu hizmetlerinin teşkilatını ve işleyişini, şahısların bu teşkilatla ilişkilerini ve kamu hizmetlerinin usul ve esaslarını düzenler.</dd>
<dt>Ceza Hukuku</dt><dd>Suç teşkil eden eylem ve davranışları ve bunlara uygulanacak cezaları düzenler.</dd>
<dt>Vergi Hukuku</dt><dd>Devlet ile kişiler arasındaki vergi hak ve ödevlerini, vergi tahsilini ve vergiye konu olayları düzenler.</dd>
<dt>Devletler Genel Hukuku</dt><dd>Devlet–devlet, devlet–uluslararası kuruluş ve uluslararası kuruluş–uluslararası kuruluş ilişkilerini düzenler.</dd>
<dt>İcra ve İflas Hukuku</dt><dd>Borçlarını kendi isteğiyle yerine getirmeyenlere nasıl muamele edileceğini, mahkeme kararları yerine getirilmezse yapılacakları düzenler.</dd>
<dt>Devletler Özel Hukuku</dt><dd>Farklı milletlerden bireylerin ilişkilerini, hukuki statülerini ve uyuşmazlıklarında hangi ülke hukukunun uygulanacağını düzenler.</dd>
<dt>Ticaret Hukuku</dt><dd>Kişiler arasındaki ticari ilişkileri düzenler.</dd>
<dt>Borçlar Hukuku</dt><dd>Kişiler arası borç ilişkilerini düzenler.</dd>
</dl>

<h3>Ceza hukukuna hâkim olan ilkeler</h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>İlke</th><th>Anlamı</th></tr></thead>
<tbody>
<tr><td><b>Suçta ve cezada kanunilik</b></td><td>Kanunun açıkça suç saymadığı bir fiil için kimseye ceza verilemez, güvenlik tedbiri uygulanamaz.</td></tr>
<tr><td><b>Ölçülülük</b></td><td>Fiilin ağırlığıyla orantılı ceza ve güvenlik tedbirine hükmolunur.</td></tr>
<tr><td><b>Adalet ve kanun önünde eşitlik</b></td><td>Kişiler arasında ayrım yapılamaz, kimseye ayrıcalık tanınamaz.</td></tr>
<tr><td><b>Kanunların bağlayıcılığı</b></td><td>Ceza kanunlarını bilmemek mazeret sayılmaz.</td></tr>
<tr><td><b>Cezaların şahsiliği</b></td><td>Ceza sorumluluğu şahsidir; kimse başkasının fiilinden sorumlu tutulamaz.</td></tr>
</tbody></table></div>

<h3>Vergi hukukunun ilkeleri</h3>
<ul>
<li><b>Vergide adalet:</b> Herkes gelirine göre vergi ödemekle yükümlüdür.</li>
<li><b>Vergide genellik:</b> Din, ırk, sınıf, cinsiyet ayrımı yapılmaksızın herkes vergi verir.</li>
<li><b>Verginin kanuniliği:</b> Vergiler kanunla konulur, kaldırılır ve düzenlenir.</li>
</ul>

<h3>Medeni hukuk</h3>
<dl class="defs">
<dt>Kişiler Hukuku</dt><dd>Kişilik türleri, ehliyet, kişisel durum, akrabalık ve yerleşim yeri; kişiliğin başlangıcı, sona ermesi ve korunması.</dd>
<dt>Aile Hukuku</dt><dd>Nişanlanma, evlilik, boşanma, eşlerin birbirine karşı sorumlulukları, velayet, soy bağı ve veraset ilişkileri.</dd>
<dt>Miras Hukuku</dt><dd>Vasiyet, miras hükümleri ve mirasın nasıl dağıtılacağı.</dd>
<dt>Eşya Hukuku</dt><dd>Kişilerin eşyalar üzerindeki hak ve tasarrufları.</dd>
</dl>
<p><b>Medeni hukukta geçerli ilkeler:</b></p>
<ul>
<li><b>Dürüstlük:</b> Herkes haklarını kullanırken ve borçlarını yerine getirirken dürüstlük kurallarına uymak zorundadır.</li>
<li><b>İyi niyet:</b> Kanunun iyi niyete hukuki sonuç bağladığı durumda iyi niyet var sayılır.</li>
<li><b>İspat yükü:</b> Kanunda aksine hüküm olmadıkça herkes iddiasını ispatla yükümlüdür.</li>
</ul>
`
  },
  {
    id: `hak`, no: 2, title: `Hak, Kişilik ve Ehliyet`, slides: `Slayt 26–37`,
    short: `<ul class="short-list">
<li>Hak: hukuk düzeninin tanıdığı yetki, korunan menfaat. <b>Özel haklar</b> kişi–kişi; <b>kamu hakları</b> kişi–devlet (kişinin hakları, sosyal-ekonomik, siyasi).</li>
<li>Hakları doğuran olgular: <b>hukuki olay</b> (doğum, ölüm), <b>hukuki fiil</b> (aykırı: suç / haksız fiil; uygun), <b>hukuki işlem</b> (vasiyet, sözleşme).</li>
<li>Kişi: gerçek kişi / tüzel kişi (dernek, vakıf, şirket).</li>
<li><b>Hak ehliyeti:</b> medeni haklardan yararlanma; sağ ve tam doğmak koşuluyla ana rahmine düşüldüğü anda.</li>
<li><b>Fiil ehliyeti:</b> medeni hakları kullanma; şartlar: ergin (18), <mark>ayırt etme gücü (en önemlisi)</mark>, kısıtlı olmamak.</li>
</ul>`,
    html: `
<h3>Hak kavramı</h3>
<p><b>Hak:</b> Hukuk düzeninin kişilere tanıdığı yetkiler ve kişilerin hukuk düzeni tarafından korunan menfaatleri. <mark>"Hukuk" kelimesi "hak" kelimesinden türetilmiştir.</mark></p>
<div class="cols two">
<div class="box"><h4>Özel haklar</h4><p>Kişiler arasındaki ilişkiyi düzenleyen, özel hukuktan doğan haklar. <b>Eşitlik ilkesi</b> geçerlidir.</p></div>
<div class="box"><h4>Kamu hakları</h4><p>Kişiler ile devlet arasındaki ilişkileri düzenleyen, kamu hukukundan doğan haklar. Üçe ayrılır: <b>kişinin hakları</b>, <b>sosyal ve ekonomik haklar</b>, <b>siyasi haklar</b>.</p></div>
</div>

<h3>Hakları doğuran olgular</h3>
<ol class="steps">
<li><b>Hukuki olay:</b> Kişinin iradesiyle gerçekleşip gerçekleşmediğine bakılmaksızın hukuki sonuç bağlanmış olaylar. <i>Örnek: doğum, ölüm.</i></li>
<li><b>Hukuki fiil:</b> Kişinin iradesiyle gerçekleşen ve hukuki sonuç doğuran olaylar. Fiil iradidir ama <mark>sonuç her zaman istenen sonuç olmayabilir</mark>. İkiye ayrılır:
  <ul>
  <li><b>Hukuka aykırı fiiller:</b> Hukuk düzenine aykırı fiiller. Ceza hukukunda <b>suç (cürüm veya kabahat)</b> — örn. bir kişinin başkasını öldürmesi; özel hukukta <b>haksız fiil</b> — örn. başkasının malına kasten veya tedbirsizlikle zarar vermek.</li>
  <li><b>Hukuka uygun fiiller:</b> Hukuk düzeninin istediği şekildeki hareketler; kişi hukukun emrettiğini yapar veya yasakladığından kaçınır.</li>
  </ul></li>
<li><b>Hukuki işlem:</b> Bir kişinin veya aynı amaca yönelik birden fazla kişinin <b>irade beyanıyla</b> hukuki sonuç yaratması. <i>Örnek: vasiyetname düzenlemek, sözleşme yapmak.</i></li>
</ol>

<h3>Kişilik</h3>
<p><b>Kişi:</b> Haklardan yararlanan, hak sahibi olan varlık. Bugün her insan hukuken kişidir; bütün hukuk sistemlerinde <mark>tam ve sağ doğum</mark> hak sahibi olmak için yeterlidir.</p>
<div class="cols two">
<div class="box"><h4>Gerçek kişi</h4><p>Cinsiyet, ırk, din, dil farkı gözetmeksizin bütün insanlar.</p></div>
<div class="box"><h4>Tüzel kişi</h4><p>Başlı başına bir varlığı olacak şekilde örgütlenmiş kişi toplulukları ve belli bir amaca özgülenmiş mal toplulukları: <b>dernekler, vakıflar, şirketler, kurum ve kuruluşlar</b>.</p></div>
</div>

<h3>Ehliyet</h3>
<div class="cols two">
<div class="box"><h4>Hak ehliyeti</h4><p>Haklara ve borçlara sahip olabilme, yani <b>medeni haklardan yararlanabilme</b> gücü. <mark>Sağ ve tam doğmak koşuluyla ana rahmine düşüldüğü anda</mark> kazanılır.</p></div>
<div class="box"><h4>Fiil ehliyeti</h4><p>Kendi fiil ve işlemleriyle lehine hak, aleyhine borç yaratabilme gücü; yani <b>medeni hakları kullanabilme</b>.</p></div>
</div>
<p><b>Fiil ehliyetinin şartları:</b></p>
<ol>
<li><b>Ergin olmak:</b> 18 yaşından büyük olmak.</li>
<li><b>Ayırt etme gücüne sahip olmak:</b> Fiil ehliyetinin <mark>en önemli koşulu</mark>. Yoksa kişi tam ehliyetsizdir; işlemleri hukuki sonuç doğurmaz, sorumluluk altına girmez. Yaş, akıl hastalığı, akıl zayıflığı, sarhoşluk gibi hallerde ayırt etme gücü yoktur.</li>
<li><b>Kısıtlı olmamak:</b> Kısıtlılık, kanunda sayılan bir sebep varsa ergin bir kimsenin fiil ehliyetinin <b>mahkeme kararıyla</b> sınırlandırılması veya tamamen kaldırılmasıdır.</li>
</ol>
<p><b>Kısıtlama sebepleri (MK):</b></p>
<ul>
<li>Akıl hastalığı veya akıl zayıflığı</li>
<li>Savurganlık, alkol veya uyuşturucu bağımlılığı, kötü yaşama tarzı, kötü yönetim</li>
<li>Bir yıl veya daha uzun süreli özgürlüğü bağlayıcı cezaya mahkûm olma</li>
<li>Yaşlılık, sakatlık, deneyimsizlik nedeniyle işlerini yönetemediğini ispat eden erginin kendi isteği</li>
</ul>
`
  },
  {
    id: `medya`, no: 3, title: `İletişim ve Medya Hukukuna Giriş`, slides: `Slayt 38–53`,
    short: `<ul class="short-list">
<li>Medya hukuku: kitle iletişiminin kurallarını, araçların yapısını ve ilişkilerini düzenler.</li>
<li>İletişimin ögeleri: kaynak, ileti, alıcı. "Kitle iletişimi": <b>Lasswell</b> (1940'lar); "küresel köy": <b>Mc Luhan</b>.</li>
<li>Kapsam: basın, radyo-TV, sinema, internet. Temeli <b>Anayasa</b> (md. 28); kurallar tek bir yasada toplanmamış.</li>
<li>En önemli kavram: <mark>ifade özgürlüğü</mark> (bilgi edinme hakkı dahil); sınırsız değil.</li>
<li>Sınırlama şartları: kanunla, Anayasaya uygun, demokratik toplum gereklerine uygun, ölçülü.</li>
</ul>`,
    html: `
<p class="lead"><b>Medya hukuku:</b> Kitle iletişiminde uyulması gereken kuralları, kitle iletişim araçlarının yapısını ve ilişkilerini düzenleyen hukuk kuralları bütünü.</p>

<h3>İletişim kavramı</h3>
<ul>
<li>Biyolojik bir varlık olan insanı <mark>sosyal bir varlığa dönüştüren</mark> iletişimdir. Topluma aidiyet ve toplumsal ilişkilerin sürmesi iletişimle mümkündür.</li>
<li><b>TDK tanımı:</b> "Duygu, düşünce veya bilgilerin akla gelebilecek her türlü yolla başkalarına aktarılması, bildirişim, haberleşme, komünikasyon."</li>
<li><b>Teknik anlamda (TDK):</b> Telefon, telgraf, televizyon, radyo vb. araçlardan yararlanarak yürütülen bilgi alışverişi, haberleşme, muhabere.</li>
<li>Tanımların ortak noktası: iletişimle yalnız bilgiler değil, <b>düşünce ve tutumlar</b> da aktarılır.</li>
<li><b>Ögeler:</b> <mark>Kaynak, ileti ve alıcı</mark>. Bunların olmadığı bir iletişim kurgusu eksiktir. İletişim durağan değil, <b>dinamik bir süreçtir</b>.</li>
<li>İletişim, toplumsallaşmanın ve sosyal hayatın vazgeçilmezidir.</li>
</ul>

<h3>Kitle iletişimi</h3>
<ul>
<li><b>Matbaanın icadıyla</b> basılı yayınların ve gazetenin yaygınlaşmasıyla hayatımıza girdi; <b>19. yüzyılda</b> teknolojiyle daha da yaygınlaştı; radyo, sinema, televizyon ve internetle popülerleşti.</li>
<li>Kavramı ilk kez <mark>1940'lı yıllarda Harold D. Lasswell</mark>, siyasal erk ve propaganda çalışmalarında kullandı.</li>
<li>İletişim, <b>bireysel ve kitlesel</b> iletişimi kapsar; kitle iletişimi iletişimi yeni bir boyuta taşıdı.</li>
<li><b>Mc Luhan</b>'ın dünya için yaptığı <mark>"küresel köy"</mark> benzetmesinde kitle iletişim araçlarının ve teknolojinin payı büyüktür.</li>
</ul>

<h3>Medya hukukunun kapsamı</h3>
<ul class="chips"><li>Basın yayın faaliyetleri</li><li>Radyo ve televizyon yayıncılığı</li><li>Sinema yayıncılığı</li><li>İnternet ortamında yayıncılık</li></ul>

<h3>Medya hukukunun temeli ve mevzuat</h3>
<ul>
<li>Ülkemizde medya hukuku düzenlemelerinin temelini <mark>Anayasa</mark> oluşturur.</li>
<li><b>Anayasa md. 28:</b> <q>Basın hürdür, sansür edilemez. Devlet, basın ve haber alma hürriyetini sağlayacak tedbirleri alır.</q></li>
<li>Medya hukuku kuralları <b>tek bir yasada toplanmamıştır</b>; birçok kanun ve çeşitli yönetmeliklerde yer alır.</li>
</ul>
<p><b>Mevzuatı oluşturan en temel kanunlar:</b></p>
<ul>
<li>Basın Kanunu</li>
<li>Türkiye Radyo Televizyon Kurumu Kanunu</li>
<li>Radyo ve Televizyonların Kuruluşu ve Yayın Hizmetleri Hakkında Kanun</li>
<li>Bilgi Edinme Hakkı Kanunu</li>
<li>İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun</li>
<li>Fikir ve Sanat Eserleri Kanunu</li>
</ul>

<h3>İfade özgürlüğü</h3>
<ul>
<li>Medya hukukunun temel kavramlarından <mark>en önemlisi ifade özgürlüğüdür</mark>. İçinde <b>kamuoyunun bilgi edinme hakkı</b> da bulunur.</li>
<li>Hem onu kullananlar hem de gerçekleri öğrenme özgürlüğüne sahip kişiler açısından temel haktır.</li>
<li>Bilgi edinme, yayma, eleştirme, yorumlama ve eser yaratma hakları ifade özgürlüğünden doğar.</li>
<li>Bu hak <b>sınırsız değildir</b>; doğru şekilde sınırlandırılması büyük önem taşır.</li>
</ul>
<div class="cols two">
<div class="box"><h4>Sınırlayan haller</h4><ul><li>Ulusal güvenlik</li><li>Ülke bütünlüğü</li><li>Kamu emniyeti</li><li>Suç işlenmesi veya düzensizliğin önlenmesi</li><li>Genel sağlığın korunması</li></ul></div>
<div class="box"><h4>Sınırlamanın şartları</h4><ul><li>Mutlaka <b>kanunla</b> olmalı</li><li><b>Anayasaya uygunluk</b></li><li><b>Demokratik toplum düzeninin</b> gereklerine uygunluk</li><li><b>Ölçülülük</b></li></ul></div>
</div>
<div class="tip"><span class="tip-label">Dikkat</span>Bu şartlara uyulmadan yapılan sınırlama, insan hakları ihlallerine yol açabilir.</div>
`
  },
  {
    id: `ozgurluk`, no: 4, title: `Kitle İletişim Özgürlüğünün Genel Teorisi`, slides: `Slayt 54–70`,
    short: `<ul class="short-list">
<li>Özgürlükler sınırsız değildir. Tarihsel belgeler: 1215 Magna Carta → 1679 Haklar Bildirisi → 1776 → 1789.</li>
<li>İnsan hakları devlet güvencesine kavuşunca <b>"temel haklar"</b> olur; ihlalde AYM'ye bireysel başvuru.</li>
<li>Kitle iletişim özgürlüğü: bilgi, haber, fikirlerin kitle iletişim araçlarıyla serbestçe elde edilmesi ve yayılması; düşünce özgürlüğüyle <b>birbirini tamamlar</b>.</li>
<li>Unsurlar: ulaşabilme, ifade, yayabilme. Kapsam: basın, görsel-işitsel, internet özgürlüğü.</li>
<li>Maddeler: İHEB 18–19 (10 Aralık 1948) · Anayasa 25, 26, <mark>28 (basın hürdür)</mark> · AİHS 9 · genel sınırlama <b>Anayasa 13</b>.</li>
</ul>`,
    html: `
<h3>Özgürlük ve sınırları</h3>
<ul>
<li><b>Özgürlük:</b> Herhangi bir kısıtlamaya, zorlamaya bağlı olmaksızın düşünme veya davranma; herhangi bir şarta bağlı olmama, serbesti. Kısaca, dış etki ve kısıtlama olmadan insanın istediğini yapabilmesi.</li>
<li><b>Özgürlükler sınırsız değildir:</b> İnsan hemcinsleriyle birlikte yaşamak zorundadır; toplumsal hayatın olduğu yerde sınırsız özgürlük mümkün değildir. <mark>Yalnızlık söz konusu değilse özgürlük sınırlıdır.</mark></li>
</ul>

<h3>Tarihsel gelişim</h3>
<ol class="timeline">
<li><b>1215</b> Magna Carta</li>
<li><b>1679</b> Haklar Bildirisi</li>
<li><b>1776</b> Amerikan Bağımsızlık Bildirgesi</li>
<li><b>1789</b> Fransız Devrimi</li>
</ol>

<h3>Temel haklar ve otorite: paradoksal ilişki</h3>
<ul>
<li>Anayasa'ya göre herkes temel hak ve özgürlüklerinin <b>kamu gücü tarafından ihlal edildiği</b> iddiasıyla <mark>Anayasa Mahkemesine bireysel başvuru</mark> yapabilir.</li>
<li>Öte yandan bu hakların korunması ve hak ihlali kararlarının uygulanması da <b>kamu gücünün kullanılmasını</b> gerektirir.</li>
<li>İnsan hakları <b>devletten önce de var olan</b> haklardır; devlet güvencesi sağlandığında <mark>"temel haklar"</mark> adını alır.</li>
</ul>

<h3>Kitle iletişim özgürlüğü</h3>
<ul>
<li>Kitle iletişim araçlarının (gazete, dergi, sinema, radyo, televizyon, internet) ortaya çıkmasıyla doğmuştur.</li>
<li><b>Tanım:</b> Bilgi ve haberlerin, fikir ve kanaatlerin <mark>kitle iletişim araçlarıyla serbestçe elde edilmesi ve yayılması</mark> özgürlüğü. Hem <b>bireysel</b> hem <b>toplu</b> kullanılır.</li>
<li>Bu sayede bireyler de yöneticiler de fikir ve kanaatlerini serbestçe açıklar; temelinde bu serbestlik yatar.</li>
<li>Düşünce ve ifade özgürlüğü ile kitle iletişim özgürlüğü <mark>birbirini tamamlar</mark>: biri olmadan diğerinden söz edilemez.</li>
</ul>

<h3>Düşünce ve ifade özgürlüğü bağlamında</h3>
<ul>
<li><b>Düşünceyi açıklama özgürlüğü:</b> Haber, düşünce ve bilgilere serbestçe ulaşabilme ve oluşan kanaatlerden dolayı kınanmama; ayrıca düşünceleri serbestçe açıklama ve yayma.</li>
<li>Toplu hâlde açıklanması <b>dernek ve sendikalara katılmakla</b> gerçekleşir.</li>
<li>Kapsamı geniştir: <b>toplanma ve dernek kurma</b>, <b>din ve vicdan</b> özgürlüğünü içerir; <b>eğitim ve bilim</b> özgürlüğü de bu kapsamda değerlendirilebilir.</li>
<li>Bu özgürlükler kitle iletişim araçlarıyla açıklanırsa <mark>kitle iletişim özgürlüğünden</mark> söz edilir.</li>
</ul>

<h3>Ulusal ve uluslararası düzenlemeler</h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Düzenleme</th><th>İçerik</th></tr></thead>
<tbody>
<tr><td><b>İnsan Hakları Evrensel Beyannamesi</b><br><span class="muted">BM, 10 Aralık 1948 (Türkiye taraf)</span></td><td><b>md. 18:</b> Düşünce, vicdan ve din özgürlüğü.<br><b>md. 19:</b> Düşünce ve anlatım özgürlüğü — düşüncelerinden dolayı rahatsız edilmemek, ülke sınırı gözetmeksizin bilgi ve düşünceleri araştırmak, elde etmek ve yaymak.</td></tr>
<tr><td><b>Anayasa md. 25</b><br><span class="muted">"Kişi Hak ve Ödevleri" kısmı</span></td><td>Herkes düşünce ve kanaat hürriyetine sahiptir. Kimse düşünce ve kanaatlerini açıklamaya <b>zorlanamaz</b>; bu sebeple <b>kınanamaz ve suçlanamaz</b>.</td></tr>
<tr><td><b>Anayasa md. 26</b><br><span class="muted">Düşünceyi açıklama ve yayma hürriyeti</span></td><td>Herkes düşünce ve kanaatlerini söz, yazı, resim veya başka yollarla tek başına veya toplu olarak açıklama ve yayma hakkına sahiptir. Resmî makamların müdahalesi olmaksızın haber veya fikir alma ya da verme serbestliğini de kapsar.</td></tr>
<tr><td><b>AİHS md. 9</b></td><td>Düşünce, vicdan ve din özgürlüğü; din veya inanç değiştirme ve açıklama özgürlüğünü içerir.</td></tr>
<tr><td><b>AİHS – ifade özgürlüğü hükmü</b></td><td>Kanaat özgürlüğü ile haber ve görüş alma-verme özgürlüğü. Devletlerin <mark>radyo, televizyon ve sinema işletmelerini bir izin rejimine tabi tutmasına engel değildir</mark>.</td></tr>
<tr><td><b>Anayasa md. 28</b><br><span class="muted">Basın hürriyeti</span></td><td><q>Basın hürdür, sansür edilemez.</q> Basımevi kurmak <b>izin alma ve mali teminat yatırma</b> şartına bağlanamaz. Devlet, basın ve haber alma hürriyetlerini sağlayacak tedbirleri alır.</td></tr>
</tbody></table></div>
<p><b>Anayasa md. 26'ya göre sınırlama amaçları:</b> millî güvenlik, kamu düzeni, kamu güvenliği, Cumhuriyetin temel nitelikleri ve Devletin ülkesi ve milletiyle bölünmez bütünlüğü, suçların önlenmesi, suçluların cezalandırılması, Devlet sırrı olarak belirtilmiş bilgilerin açıklanmaması, başkalarının şöhret veya hakları, özel ve aile hayatı, meslek sırları, yargılama görevinin gereğine uygun yerine getirilmesi.</p>
<p><b>Anayasa md. 28'e göre sorumluluk:</b> Devletin iç ve dış güvenliğini, ülkesi ve milletiyle bölünmez bütünlüğünü tehdit eden, suç işlemeye, ayaklanma veya isyana teşvik eden ya da Devlete ait gizli bilgilere ilişkin haber veya yazıyı yazanlar, bastıranlar, aynı amaçla basanlar ve başkasına verenler ilgili kanun hükümlerine göre sorumlu olur.</p>

<h3>Unsurları ve kapsamı</h3>
<div class="cols two">
<div class="box"><h4>Unsurları</h4><p>Haber, bilgi, düşünce ve kanılara serbestçe…</p><ul><li><b>ulaşabilme</b> hakkı</li><li><b>ifade</b> hakkı</li><li><b>yayabilme</b> hakkı</li></ul></div>
<div class="box"><h4>Kapsamı</h4><ul><li>Basın özgürlüğü</li><li>Görsel-işitsel iletişim özgürlüğü</li><li>İnternet özgürlüğü</li></ul></div>
</div>

<h3>Sınırlandırma</h3>
<ul>
<li>Kitle iletişim özgürlüğü, <mark>Anayasa'da öngörülen sebepler dışında sınırlanamaz</mark>; aksi hâlde özgürlüğe müdahale ve hukuka aykırı sınırlama olur.</li>
<li><b>Anayasa md. 13:</b> Genel kural — temel hak ve özgürlükler <b>ancak kanunla</b> ve Anayasa'nın ilgili maddelerindeki nedenlere dayanılarak sınırlanabilir.</li>
<li><b>Anayasa md. 26 ve 28:</b> Hangi nedenlerle ve hangi usulle sınırlanabileceğini düzenler.</li>
</ul>
`
  },
  {
    id: `basin`, no: 5, title: `Basın Hukukunun Temelleri`, slides: `Slayt 71–83`,
    short: `<ul class="short-list">
<li>Dar ve teknik anlamda basın: düşüncelerin basılmış eserlerle yazılı olarak kamuoyuna açıklandığı kitle iletişim aracı; <b>"dördüncü kuvvet"</b>.</li>
<li><b>İlkeli</b> yayıncılık: doğruyu dürüstçe ve etik aktarmak. <b>Sorumlu</b> yayıncılık: zarar vermemek, kamu yararı.</li>
<li>Kavramlar Basın Kanunu <b>md. 2</b>'de. Basılmış eser haber ajansı yayınlarını da kapsar.</li>
<li>Süreli yayın: gazete, dergi (yaygın, bölgesel, yerel). Süresiz yayın: bir defalık kitap.</li>
<li>Eser sahibi içeriği oluşturur; <b>yayıncı</b> yayımlar; <b>basımcı</b> basar/çoğaltır.</li>
</ul>`,
    html: `
<h3>Basın kavramı</h3>
<ul>
<li><b>Dar anlam (günlük dil):</b> Belirli aralıklarla yayımlanan gazete ve dergi gibi basılmış eserler.</li>
<li><b>Geniş anlam:</b> Düşüncelerin sınırlı olmayan sayıda basılıp (çoğaltılıp) kamuoyuna açıklanması. Basın kurumları ve basın görevlileri için de kullanılır.</li>
<li><b>Dar ve teknik anlam:</b> <mark>Düşüncelerin basılmış eserlerle yazılı olarak kamuoyuna açıklandığı kitle iletişim aracı.</mark></li>
</ul>
<p>Basın, ifade özgürlüğünün önemli bir aracıdır ve siyasi hayatta etkinliğini korumuştur. İlkeli ve sorumlu yayıncılık yapmak kaydıyla iktidarı denetler, bireylerin özgürlüklerini korur; bu nedenle yasama, yürütme ve yargının yanında <mark>"dördüncü kuvvet"</mark> olarak nitelendirilir.</p>

<h3>İlkeli ve sorumlu yayıncılık</h3>
<p>Basın, televizyon, radyo, internet ve sosyal medya dahil <b>tüm medya organlarının</b> topluma karşı görevlerini yerine getirirken uyması gereken etik, hukuki ve toplumsal sorumluluk kuralları.</p>
<div class="cols two">
<div class="box"><h4>İlkeli yayıncılık</h4><ul>
<li><b>Doğruluk ve tarafsızlık:</b> Gerçeğe uygun, nesnel, doğrulanabilir içerik</li>
<li><b>Şeffaflık:</b> Kaynakları saklamamak, manipülasyon yapmamak</li>
<li><b>Özel hayata saygı:</b> Onur, itibar ve özel yaşamın korunması</li>
<li><b>Toplumsal değerlere uyum:</b> Ayrımcılık, nefret söylemi, şiddeti özendiren içerikten kaçınmak</li>
<li><b>Editoryal bağımsızlık:</b> Reklam ile haberin ayrılması, gizli reklam yapılmaması</li>
</ul></div>
<div class="box"><h4>Sorumlu yayıncılık</h4><ul>
<li><b>Kamu yararı gözetmek:</b> Reyting/tıklanma değil, toplumu bilgilendirmek</li>
<li><b>Hesap verebilirlik:</b> Hatalı içerik için düzeltme ve özür mekanizmaları</li>
<li><b>Çocuk ve hassas grupların korunması:</b> Çocuk, engelli, yaşlılara zarar veren/istismar eden yayından kaçınmak</li>
<li><b>Reklam etiğine uyum:</b> Aldatıcı, yanıltıcı, şiddet veya istismar içeren reklam yayınlamamak</li>
</ul></div>
</div>
<div class="tip"><span class="tip-label">Kısaca</span><b>İlkeli yayıncılık</b> = "doğruyu, dürüstçe ve etik kurallara bağlı kalarak aktarmak". <b>Sorumlu yayıncılık</b> = "topluma ve bireylere zarar vermemek, kamu yararını gözetmek".</div>

<h3>Basın Kanunu ve temel kavramlar</h3>
<p>Basın yayın faaliyetlerine ilişkin en önemli yasal düzenleme <b>Basın Kanunu</b>dur. Kavramlar kanunun <mark>2. maddesinde</mark> tanımlanmıştır: basılmış eser, yayım, süreli yayın, yaygın süreli yayın, yayın türü, süresiz yayın, eser sahibi, yayıncı, basımcı, tüzel kişi temsilcisi.</p>
<dl class="defs">
<dt>Basılmış eser</dt><dd>Yayımlanmak üzere her türlü basım araçlarıyla basılan veya diğer araçlarla çoğaltılan yazı, resim ve benzeri eserler ile <b>haber ajansı yayınları</b>.</dd>
<dt>Süresiz yayın</dt><dd>Belli aralıklarla yayımlanmayan, <b>bir defalığına basılmış kitap türü</b> eserler.</dd>
<dt>Süreli yayın</dt><dd>Birbirini izleyen ayrı bölümler halinde, genellikle numaralandırılmış olarak yayımlanan ve <b>önceden belirlenmiş bitişi olmayan</b> yayınlar (gazete, dergi). Türleri: <b>yaygın süreli</b>, <b>bölgesel süreli</b>, <b>yerel süreli</b> yayın.</dd>
<dt>Eser sahibi</dt><dd>Yayının içeriğini oluşturan kişi.</dd>
<dt>Yayıncı</dt><dd>Bir eseri basılmış eser durumuna getirip <b>yayımlayan</b> gerçek veya tüzel kişi.</dd>
<dt>Basımcı</dt><dd>Bir eseri basım araçlarıyla <b>basan ya da çoğaltan</b> gerçek veya tüzel kişi.</dd>
</dl>
`
  },
  {
    id: `yayincilik`, no: 6, title: `Radyo-Televizyon ve İnternet Yayıncılığı`, slides: `Slayt 84–95`,
    short: `<ul class="short-list">
<li>İlk radyo <b>1927</b>, ilk TV <b>1968</b>; TRT tekeli <b>1990</b>'a kadar.</li>
<li>RTV Kuruluş ve Yayın Hizmetleri Kanunu: RTÜK'ün kuruluşu, görev ve yetkileri; isteğe bağlı yayınlar da kapsamda.</li>
<li>İnternette en kapsamlı düzenleme: <mark>5651 sayılı Kanun</mark>.</li>
<li><b>İçerik sağlayıcı</b> üretir/sağlar · <b>yer sağlayıcı</b> barındırır, suç içeriğini <mark>24 saatte</mark> kaldırır · <b>erişim sağlayıcı</b> (TTNET) bildirilen içeriğe ve alternatif yollara erişimi engeller.</li>
</ul>`,
    html: `
<h3>Radyo ve televizyon</h3>
<ol class="timeline">
<li><b>1927</b> Türkiye'de ilk radyo yayını</li>
<li><b>1968</b> İlk televizyon yayını</li>
<li><b>1990</b> O tarihe kadar TRT eliyle devlet tekeli; sonra özel televizyonlar</li>
</ol>
<dl class="defs">
<dt>Türkiye Radyo ve Televizyon Kanunu</dt><dd>Her türlü teknik usul ve araçla, elektromanyetik dalga yoluyla yurt içine ve yurt dışına yapılan radyo ve televizyon yayınlarıyla ilgili tüm esasları düzenlemeyi amaçlar.</dd>
<dt>Radyo ve Televizyonların Kuruluş ve Yayın Hizmetleri Hakkında Kanun</dt><dd>
Radyo-TV yayınlarını ve <mark>Radyo ve Televizyon Üst Kurulu'nun</mark> kuruluş, görev, yetki ve sorumluluklarını düzenler.
<ul>
<li>Tüm radyo-TV kuruluş ve yayınları ile <b>isteğe bağlı yayın hizmetleri</b> kapsamdadır.</li>
<li>Özel yayıncıların yükümlülükleri: hisse devirleri, şirket birleşme ve devralmalarının üst kurula bildirilmesi; logo ve çağrı işareti kullanma zorunluluğu.</li>
<li>Tüm yayın kuruluşları <b>aynı ilkelere</b> tabidir.</li>
<li>Ayrıca: hizmet içerikleri, ticari iletişimin genel esasları, reklam ve tele alışveriş, sponsorluk ve ürün yerleştirme.</li>
</ul></dd>
</dl>

<h3>İnternet yayıncılığı</h3>
<ul>
<li>Düzenlemeler; internet erişimi ve kullanımı, ifade özgürlüğü, özel hayatın korunması gibi konuları kapsar.</li>
<li>Geniş kitleye ulaşması ve <b>zaman ve mekândan bağımsızlığı</b> yasal yükümlülükleri gerektirmiştir.</li>
<li>En önemli kaynaklar: 5651 sayılı Kanun, Türk Ceza Kanunu, Fikir ve Sanat Eserleri Kanunu.</li>
<li>Türkiye'de internetle ilgili <mark>en kapsamlı düzenleme: 5651 sayılı</mark> İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun.</li>
</ul>
<p><b>5651 sayılı Kanun ile:</b></p>
<ul>
<li>İçerik, yer ve erişim sağlayıcı kavramları tanımlandı; hak ve sorumlulukları belirlendi.</li>
<li>Erişimin engellenmesinin usul ve esasları düzenlendi.</li>
<li>Hakları ihlal edilenler için içeriğin yayından çıkarılması ve cevap hakkı usulleri belirlendi.</li>
</ul>

<div class="table-wrap"><table class="tbl">
<thead><tr><th>Aktör</th><th>Tanım</th><th>Örnek / not</th></tr></thead>
<tbody>
<tr><td><b>İçerik sağlayıcı</b></td><td>İnternet üzerinden sunulan her türlü bilgi veya veriyi <b>üreten, değiştiren ve sağlayan</b> gerçek veya tüzel kişi</td><td>Üyelik gerektiren sitelerde içeriği paylaşan üyeler</td></tr>
<tr><td><b>Yer sağlayıcı</b></td><td>Hizmet ve içerikleri <b>barındıran</b> sistemleri sağlayan veya işleten gerçek veya tüzel kişi</td><td>İçeriğin paylaşıldığı web adresinin sahibi</td></tr>
<tr><td><b>Erişim sağlayıcı</b></td><td>Kullanıcılara internet ortamına <b>erişim olanağı</b> sağlayan gerçek veya tüzel kişi</td><td>TTNET, Turkcell Superonline</td></tr>
</tbody></table></div>

<div class="cols two">
<div class="box"><h4>Yer sağlayıcının yükümlülükleri</h4><ul>
<li>Kural olarak içeriği <b>kontrol etmek</b> ve hukuka aykırılığı <b>araştırmak zorunda değildir</b>.</li>
<li>Suç teşkil eden içeriği haberdar edildikten itibaren <mark>24 saat içinde</mark> yayından çıkarır.</li>
<li>Trafik bilgilerini saklar; doğruluğunu, bütünlüğünü ve güvenliğini sağlar.</li>
</ul></div>
<div class="box"><h4>Erişim sağlayıcının sorumluluğu</h4><ul>
<li>İçerikleri <b>kontrol etmekle</b> ve hukuka aykırılığı tespit etmekle <b>yükümlü değildir</b>.</li>
<li>Hukuka aykırı içerik <b>bildirilirse</b> erişimi engeller.</li>
<li>Engellenen içeriğe <mark>alternatif erişim yollarını</mark> da engeller.</li>
</ul></div>
</div>
`
  },
  {
    id: `ceza`, no: 7, title: `Medyada Cezai Sorumluluk ve Suç Tipleri`, slides: `Slayt 96–104`,
    short: `<ul class="short-list">
<li>Basın suçu: suç niteliğindeki eylemin basılmış eserler yoluyla işlenmesi.</li>
<li>RTV'de ilkeler basına göre daha net: yayınlar daha hızlı ve daha geniş kitleye yayılır.</li>
<li>İçerik sağlayıcı kendi içeriğinden sorumlu, bağlantı verdiği içerikten değil.</li>
<li><mark>Sosyal medya platformu = yer sağlayıcı</mark>; platformda paylaşan kişi = içerik sağlayıcı.</li>
<li>TCK'daki medya suçları: hakaret, özel hayatın gizliliğini ihlal, suçu övme, kin ve düşmanlığa tahrik, müstehcenlik, iftira…</li>
</ul>`,
    html: `
<p class="lead">Medyada cezai sorumluluk; basın-yayın, radyo ve televizyon faaliyetleri ile internet yayınlarından doğabilecek cezai sorumlulukları kapsar.</p>

<h3>Basın suçları</h3>
<ul>
<li><b>Basın suçu:</b> <mark>Suç niteliği olan bir eylemin basılmış eserler yoluyla işlenmesi.</mark></li>
<li>Basın Kanunu'nda tanımlanan suçları ve TCK'daki bazı suçların basın yoluyla işlenmesine ilişkin hükümleri içerir.</li>
</ul>

<h3>Radyo ve televizyon</h3>
<p>Basın Kanunu'na göre <b>daha net ilkeler ve yasaklar</b> vardır. Sebep: RTV yayınlarının <mark>daha hızlı, daha geniş kitlelere yayılması</mark> ve toplumun bu yayınlara kolayca ulaşabilmesi.</p>
<p><b>Yayın hizmeti ilkeleri — yayın hizmetleri:</b></p>
<ul>
<li>Devletin varlık ve bağımsızlığına, ülkesi ve milletiyle bölünmez bütünlüğüne, Atatürk ilke ve inkılaplarına <b>karşıt olamaz</b>.</li>
<li>Irk, din, dil, sınıf, cinsiyet, mezhep ve bölge ayırt ederek toplumu kin ve düşmanlığa tahrik edemez, nefret hisleri oluşturamaz.</li>
<li>Özel hayatın gizliliğine ve şerefe saygı ilkesinin dışına çıkamaz; eleştiri sınırları dışında aşağılayıcı, karalayıcı veya iftira niteliğinde ifade bulunduramaz.</li>
<li>Terörü destekleyemez, özendiremez; terör örgütlerini haklı ya da güçlü gösteremez.</li>
<li>Suça teşvik edemez; suçu, suçluyu, suç örgütlerini övemez; suç işleme metotlarını öğretemez.</li>
<li>Zayıflara, çocuklara ve engellilere yönelik şiddeti özendiremez, istismar edici içerik taşıyamaz.</li>
<li>Sigara, alkol, uyuşturucu gibi bağımlılık yapan maddelere ve kumara özendiremez.</li>
</ul>

<h3>İnternet ortamında cezai sorumluluk</h3>
<p>İnternette hakaret, telif haklarına aykırılık, şiddet içerikleri gibi ihlaller doğabilir; sorun <b>kimin sorumlu tutulacağıdır</b>. 5651 sayılı Kanun'a göre sorumlular: içerik, yer ve erişim sağlayıcılardır.</p>
<dl class="defs">
<dt>İçerik sağlayıcı</dt><dd>Kullanıma sunduğu <b>her türlü içerikten sorumludur</b>; ancak <mark>bağlantı sağladığı başkasına ait içerikten sorumlu olmaz</mark>. Facebook, YouTube, Twitter gibi platformlara üye olarak paylaşım yapan kişiler içerik sağlayıcıdır.</dd>
<dt>Yer sağlayıcı</dt><dd>Hukuka aykırı içerikten <b>haberdar edildiğinde</b>, teknik imkân ölçüsünde içeriği yayından kaldırır. <mark>Facebook, Twitter, Instagram, YouTube, LinkedIn</mark> gibi sosyal medya araçları yer sağlayıcıdır.</dd>
<dt>Erişim sağlayıcı</dt><dd>Hukuka aykırı içeriğe erişimi engeller; sağladığı hizmete ilişkin trafik bilgilerinin <b>doğruluğunu, bütünlüğünü ve gizliliğini</b> sağlar. Örnek: TTNET, Turkcell Superonline.</dd>
</dl>
<div class="tip"><span class="tip-label">Dikkat</span>Sosyal medya platformunun kendisi <b>yer sağlayıcı</b>, platformda paylaşım yapan kişi <b>içerik sağlayıcıdır</b>.</div>

<h3>TCK'da medya yoluyla işlenebilen başlıca suçlar</h3>
<ul class="chips">
<li>Hakaret</li><li>Haberleşmenin gizliliğini ihlal</li><li>Kişiler arasındaki konuşmaların dinlenmesi ve kayda alınması</li><li>Özel hayatın gizliliğini ihlal</li><li>Suç işlemeye tahrik</li><li>Suçu ve suçluyu övme</li><li>Halkı kin ve düşmanlığa tahrik</li><li>Aşağılama, kanunlara uymamaya tahrik</li><li>Müstehcenlik</li><li>İftira</li><li>Gizliliğin ihlali</li><li>Türk Milletini ve Devletin kurum ve organlarını aşağılama</li>
</ul>
`
  },
  {
    id: `kisilik`, no: 8, title: `Yazılı ve Görsel Medyada Kişilik Hakları`, slides: `Slayt 105–120`,
    short: `<ul class="short-list">
<li>Kişilik hakları: para ile ölçülemez, devredilemez, mirasçılara geçmez, <b>mutlak</b>.</li>
<li>Maddi (bedensel, mülkiyet) ve manevi kişilik hakları; zarara göre maddi / manevi tazminat.</li>
<li>Korunan değerler: ad, hayat-sağlık-vücut tamlığı, haysiyet-onur, resim-ses, sırlar, özel hayat.</li>
<li>Haberin hukuka uygunluğu: <mark>gerçeklik, güncellik, kamu yararı, ölçülülük</mark>.</li>
<li>Düzenlemeler: TMK 23–25, TBK 49, KVKK, TTK, FSEK, 5651, TCK.</li>
</ul>`,
    html: `
<h3>Kişilik hakkı nedir?</h3>
<ul>
<li>Bireylerin <b>insan olması dolayısıyla</b> ayrılmaz biçimde sahip olduğu haklar.</li>
<li>Özellikleri: <mark>para ile ölçülemez, devredilemez, mirasçılara geçmez, mutlak haktır</mark>.</li>
<li>Dayanağını <b>Anayasa</b>dan alır: herkesin maddi ve manevi varlığını geliştirme hakkı vardır.</li>
<li>Kişiye sıkı sıkıya bağlı kişisel varlıklar üzerindeki haklardır: ses, görüntü, yaşam, sağlık, isim, özel hayat, şeref ve şahsiyet.</li>
</ul>
<div class="cols two">
<div class="box"><h4>Maddi kişilik hakları</h4><p><b>Bedensel haklar</b> ve <b>mülkiyet hakları</b>; kişinin yaşamını veya mülkiyetini korur.</p></div>
<div class="box"><h4>Manevi kişilik hakları</h4><p>Manevi varlığı geliştirme özgürlüğü, din ve vicdan özgürlüğü, haberleşme özgürlüğü, özel yaşamın gizliliği.</p></div>
</div>
<ul>
<li>Yayın araçlarıyla saldırılar çoğunlukla kişinin <b>ismine, resmine, kişiliğine ve saygınlığına</b> ve <b>özel hayatın gizliliğine</b> yöneliktir.</li>
<li>Maddi zarar varsa <mark>maddi tazminat</mark>, manevi zarar varsa <mark>manevi tazminat</mark> davası açılabilir.</li>
</ul>

<h3>Kişilik hakkının konusu olan değerler</h3>
<dl class="defs">
<dt>Ad</dt><dd>Öz ad ve soyadının yanında müstear ad, lakap, kısaltılmış ad, temsili adres, elektronik posta ve telgraf adresleri de korunur.</dd>
<dt>Hayat, sağlık ve vücut tamlığı</dt><dd>Vücut tamlığı hem fiziki hem ruhsal iyi olma hâlidir; ihlali kişilik hakkına saldırıdır. Tedaviye rıza doktorun müdahalesini hukuka uygun kılar; hayat için <b>derhal müdahale</b> gerekir ve rıza alınamıyorsa müdahale <b>hukuka aykırı sayılmaz</b>. Hasta, kanunen zorunlu haller dışında, sonuçların sorumluluğu kendisine ait olmak üzere tedaviyi reddedebilir veya kesebilir.</dd>
<dt>Haysiyet ve onur</dt><dd>Tanınmış kişilerde kamu yararı ve eleştiriye açıklık nedeniyle koruma sınırları gevşer. Şeref ve haysiyeti hedef alan haberin hukuka uygunluk ölçütleri: <mark>gerçeklik, güncellik, kamu yararı, ölçülülük</mark> (hakaret içeren söz bulunmamalı).</dd>
<dt>Resim ve ses</dt><dd>Fotoğrafların bozularak, aynen veya ticari, reklam amaçlı, istismar edici şekilde çoğaltılması ihlaldir. Ancak bir haber içindeki fotoğrafta yer almak, toplumun haber alma ihtiyacını karşıladığından <b>hukuka aykırı tecavüz değildir</b>.</dd>
<dt>Kişinin sırları</dt><dd>Gizli tutulmasında menfaati olan sırlar: <b>sağlık durumu, ticari sırlar, gizli çekimle kaydedilmiş görüntüler</b>.</dd>
<dt>Özel hayat</dt><dd>Bilinmesinde kamu yararı olan olayların açıklanması hukuka aykırı değildir; kamuya mal olmuş kişilerin özel alanı oldukça dardır (yine de uygun biçimde öğrenilmelidir). Kişisel verilerin işlenmesinde ilkeler: <b>güncel olma; açık ve meşru amaç; amaçla bağlantılı ve ölçülü olma; mevzuata ve amaca uygun süre</b>.</dd>
</dl>

<h3>Kişilik haklarını koruyan düzenlemeler</h3>
<ul class="chips">
<li>TMK md. 23, 24, 25</li><li>TBK md. 49</li><li>Kişisel Verileri Koruma Kanunu</li><li>Türk Ticaret Kanunu</li><li>Fikir ve Sanat Eserleri Kanunu</li><li>5651 sayılı İnternet Kanunu</li><li>Türk Ceza Kanunu</li>
</ul>
<ul>
<li>İhlallerin en çok yaşandığı mecralardan biri internet olduğundan <mark>5651 sayılı Kanun özel önem</mark> taşır.</li>
<li>Unutulma hakkı ve sosyal medyadaki ihlaller, İnternet Kanunu ile <b>içeriğin kaldırılması ve erişimin engellenmesi</b> mekanizmasını getirmiştir.</li>
</ul>
`
  },
  {
    id: `unutulma`, no: 9, title: `Unutulma Hakkı`, slides: `Slayt 121–132`,
    short: `<ul class="short-list">
<li>Hukuka uygun içeriğin arama motorlarında <mark>listelenmemesini (delisting)</mark> isteme hakkı; içeriğin silinmesi değil.</li>
<li>Mevzuatta olmasa da devletin <b>pozitif yükümlülüğü</b>.</li>
<li>Şartlar: güncelliğini yitirme, kamu yararı yok, tarihsel/bilimsel değil, yayında kalma süresi, ünlü olup olmama, olgu mu değer yargısı mı, halkın ilgisi.</li>
<li>Makul süre somut olaya göre (örn. 1 yıl istenemez, 5 yıl istenebilir).</li>
<li>Başvuru: arama motoru → KVKK veya Sulh Ceza Hakimliği. Şirketler yararlanamaz.</li>
</ul>`,
    html: `
<p class="lead"><b>Unutulma hakkı:</b> Kişinin, internet arama sonuçlarında kendisiyle ilgili çıkan haber, fotoğraf, video, bilgi vb. verilerin artık <mark>arama sonuçlarında olmasını istememe</mark> hakkıdır.</p>
<div class="tip"><span class="tip-label">En önemli nokta</span>Unutulma hakkı içeriğin internetten <b>kaldırılmasını</b> talep hakkı <b>değildir</b>; içeriğin arama motorlarında <b>listelenmemesini (delisting)</b> talep hakkıdır.</div>
<ul>
<li><b>Temel talep hakkından farkı:</b> Unutulma hakkının yöneldiği içeriğin internette bulunması <mark>hukuki ve meşru bir sebebe dayanır</mark>. Kısaca: <b>hukuka uygun içeriğin</b> arama motorlarında listelenmemesini talep hakkı.</li>
<li><b>Örnek:</b> Beş yıl önce hakkında çıkan bir gazete haberi, kişinin adı arama motoruna yazıldığında artık görünmez; kişi internette kendine yeni bir sayfa açmış olur.</li>
<li>Politikacılar, siyasetçiler, devlet adamları ve geçmişteki olaylarla anılan vatandaşlar için önemlidir.</li>
<li>Yaşam hakkı gibi <b>evrensel</b> bir haktır; mevzuatta düzenlenmemiş olsa bile devlet sağlamak zorundadır → <mark>devletin pozitif yükümlülüğü</mark>.</li>
</ul>

<h3>Kullanılma şartları</h3>
<ol class="steps">
<li><b>Güncelliğini yitirmiş olmalı.</b> Güncellik sübjektiftir; yere, zamana, olaya ve kişiye göre değişir. <i>Örn. trafikte öldürülen bir kişiye ilişkin haber bir süre sonra haber değerini kaybeder.</i></li>
<li><b>İnternette bulunmasında kamu yararı olmamalı.</b> <i>Örn. bir milletvekilinin karıştığı önemli yolsuzluk skandalı haberinde kamu yararı vardır; kaldırılması istenemez.</i></li>
<li><b>Tarihsel veri içermemeli</b> (tarihçilerin araştırma konusu olabilir).</li>
<li><b>Bilimsel bilgi sunmamalı.</b></li>
<li><b>Yayında kalma süresi:</b> <i>1 yıl gibi kısa süre yayında kalan içerik için istenemez; 5 yıl yayında kalan içerik için istenebilir.</i></li>
<li><b>Siyasetçi veya ünlü olup olmama:</b> Bu kişiler eleştiriye daha fazla katlanmak zorundadır. <i>Örn. Altın Kelebek töreninde yaptığı konuşma çok tartışılan oyuncu 20 yıl geçse de kaldırılmasını isteyemez.</i></li>
<li><b>Olgusal gerçek mi, değer yargısı mı?</b> Olgusal gerçeğe dayalı haberin kaldırılması <b>daha zor</b>; "yapılan alçaklıktır" gibi değer yargısı içerenin <b>daha kolay</b>.</li>
<li><b>Halkın ilgisinin düzeyi:</b> Kamuoyu ilgisi canlı olan içeriğin kaldırılması daha güçtür.</li>
</ol>

<h3>Geçmesi gereken süre</h3>
<p>Yayımlanmasının üzerinden <mark>makul bir süre</mark> geçmelidir. Makul süre önceden kategorik olarak belirlenmez; <b>her somut olaya göre</b> değerlendirilir. <i>Örn. isim, resim, görüntü gibi kişisel verilerin yayımlandığı haberlerde 5 yıl yeterli olabilirken, kişisel veri içermeyen bazı hallerde 15 yıl bile yetmeyebilir.</i></p>

<h3>Başvuru süreci</h3>
<ol class="steps">
<li><b>Doğrudan başvuru:</b> İçeriğin yer aldığı arama motoruna (Google, Yandex vb.) veya veri sorumlusuna başvurularak adıyla yapılan aramalarda içeriğin indeksten çıkarılması (delisting) istenir.</li>
<li><b>Yasal yollar:</b> Talep reddedilir veya süresinde cevap verilmezse <mark>Kişisel Verileri Koruma Kurumu (KVKK)</mark> veya 5651 sayılı Kanun kapsamında <mark>Sulh Ceza Hakimliğine</mark> başvurulabilir.</li>
<li><b>Sınırlamalar:</b> Hak mutlak değildir; ifade özgürlüğü, basın hürriyeti ve haber alma hakkı ile dengelenir. <b>Tüzel kişiler (şirketler) KVKK kapsamında bu haktan yararlanamaz</b>; ticari itibar koruma yollarını kullanır.</li>
</ol>
`
  },
  {
    id: `cevap`, no: 10, title: `Medyada Düzeltme ve Cevap Hakkı`, slides: `Slayt 133–142`,
    short: `<ul class="short-list">
<li>Doğuş: şeref-haysiyete dokunma veya gerçeğe aykırı yayın. Cevap ilgili yazıdan uzun olamaz.</li>
<li><b>Basın:</b> <mark>2 ay</mark> içinde sorumlu müdüre → günlük yayında <mark>3 gün</mark> içinde yayım → yayımlanmazsa <mark>15 gün</mark> içinde sulh ceza.</li>
<li><b>RTV:</b> <mark>60 gün</mark> içinde medya hizmet sağlayıcıya → <mark>7 gün</mark> içinde, aynı saatte ve programda.</li>
<li><b>İnternet:</b> içerik (yoksa yer) sağlayıcı → <mark>2 gün</mark> (yoksa reddedilmiş) → <mark>15 gün</mark> Sulh Ceza; cevap <mark>1 hafta</mark> yayında.</li>
<li>Dikkat: basında süre <b>ay</b>, RTV'de <b>gün</b>.</li>
</ul>`,
    html: `
<div class="cols">
<div class="box"><h4>Süreli yayın · Basın Kanunu</h4><dl class="mini">
<dt>Kime?</dt><dd>İlgili yayının <b>sorumlu müdürü</b></dd>
<dt>Başvuru süresi</dt><dd>Yayın tarihinden itibaren en geç <mark>2 ay</mark></dd>
<dt>Yayımlama</dt><dd>Günlük yayında yazı alındıktan itibaren <mark>3 gün</mark></dd>
<dt>Yargı yolu</dt><dd><mark>15 gün</mark> içinde sulh ceza hâkimi</dd>
</dl></div>
<div class="box"><h4>Radyo-TV · RTV Kanunu</h4><dl class="mini">
<dt>Kime?</dt><dd><b>Medya hizmet sağlayıcı</b></dd>
<dt>Başvuru süresi</dt><dd>Yayın tarihinden itibaren <mark>60 gün</mark></dd>
<dt>Yayımlama</dt><dd>Alındıktan itibaren en geç <mark>7 gün</mark>, aynı saatte ve programda</dd>
</dl></div>
<div class="box"><h4>İnternet · 5651</h4><dl class="mini">
<dt>Kime?</dt><dd>Önce <b>içerik sağlayıcı</b>, ulaşılamazsa <b>yer sağlayıcı</b></dd>
<dt>Yanıt süresi</dt><dd>Talep <mark>2 gün</mark> içinde karşılanır, yoksa reddedilmiş sayılır</dd>
<dt>Yayımlama</dt><dd>Cevap <mark>1 hafta</mark> yayında kalır</dd>
<dt>Yargı yolu</dt><dd><mark>15 gün</mark> içinde yerleşim yeri Sulh Ceza Hakimliği</dd>
</dl></div>
</div>
<div class="tip"><span class="tip-label">Dikkat</span>Basın Kanunu'nda süre <b>ay</b> (2 ay), RTV'de <b>gün</b> (60 gün) olarak belirlenmiştir. Süre hesabında bu farka dikkat!</div>

<h3>Süreli yayınlarda (Basın Kanunu)</h3>
<p><b>Hakkın doğma nedenleri:</b> Yayının kişinin <b>şeref ve haysiyetine dokunması</b> veya kişi hakkında <b>gerçeğe aykırı yayın</b> yapılması.</p>
<p><b>Suiistimali önleyen 4 şart:</b></p>
<ol>
<li>Düzeltme ve cevap yazısı <b>suç unsuru içermemeli</b>.</li>
<li><b>Üçüncü kişilerin</b> hukuken korunan menfaatlerine aykırı olmamalı.</li>
<li>Cevap verilen <b>yayınla ilgili</b> olmalı ve bu, metinde açıkça belirtilmeli.</li>
<li>Uzunluğu ilgili yayına oranla sınırlıdır: <mark>ilgili yazıdan uzun olamaz</mark>.</li>
</ol>
<ul>
<li>Metin, yayın tarihinden itibaren en geç <b>2 ay</b> içinde <b>sorumlu müdüre</b> gönderilir; aksi hâlde hak kaybedilir.</li>
<li>Günlük süreli yayınlarda yayımlama süresi, yazının alındığı tarihten itibaren <b>3 gündür</b>.</li>
<li>Cevap, ilgili yayının yer aldığı <mark>sayfa ve sütunlarda, aynı puntolarla ve aynı şekilde</mark> yayımlanır.</li>
<li>Süresinde yayımlanmazsa sürenin bitiminden, koşullara aykırı yayımlanırsa yayım tarihinden itibaren <b>15 gün</b> içinde kişi, bulunduğu yer <b>sulh ceza hâkiminden</b> yayımın (usulüne uygun) yapılmasına karar verilmesini isteyebilir.</li>
</ul>

<h3>Radyo ve televizyon yayınlarında</h3>
<ul>
<li>RTV Kanunu <b>md. 8</b> (yayın hizmeti ilkeleri): yayın organları kişi veya kuruluşların cevap ve düzeltme hakkına <b>saygılı olmak zorundadır</b>. <b>md. 18</b> (Düzeltme ve Cevap Hakkı) bu hakkın sınırlarını düzenler.</li>
<li>Gerçek veya tüzel kişiler; şeref ve haysiyet ihlali ya da gerçeğe aykırı yayın hâlinde yararlanır.</li>
<li>Metin yayın tarihinden itibaren <b>60 gün</b> içinde <b>medya hizmet sağlayıcıya</b> gönderilir.</li>
<li>Medya hizmet sağlayıcı, <b>hiçbir düzeltme ve ekleme yapmadan</b>, aldığı tarihten itibaren en geç <b>7 gün</b> içinde, konu yayının <mark>yapıldığı saatte ve programda</mark>, kolayca takip edilebilir ve anlaşılır biçimde yayınlar.</li>
</ul>

<h3>İnternet yayınlarında</h3>
<ol class="steps">
<li>Kişilik hakları ihlal edilen kişi önce <b>içerik sağlayıcıya</b> başvurarak içeriğin kaldırılmasını ve cevabın yayınlanmasını ister; ulaşamazsa <b>yer sağlayıcıya</b> başvurur.</li>
<li>Talep <b>2 gün</b> içinde yerine getirilmelidir; getirilmezse <mark>talep reddedilmiş sayılır</mark>.</li>
<li>Cevap metni internette <b>bir hafta</b> yayınlanır.</li>
<li>Talebi reddedilen kişi <b>15 gün</b> içinde yerleşim yeri <b>Sulh Ceza Hakimliğine</b> başvurarak cevabın yayımlanmasını isteyebilir.</li>
</ol>
<p class="note">Notlardaki örnek: Oyuncular Sendikası'nın, hakkında yayımlanan bir habere karşı gönderdiği ve Mimesis Dergi'de yayımlanan tekzip (düzeltme) metni.</p>
`
  },
  {
    id: `hakaret`, no: 11, title: `İnternette Kişilik Haklarına Saldırı ve Sosyal Medyada Hakaret`, slides: `Slayt 143–153`,
    short: `<ul class="short-list">
<li>TCK <b>125</b> (sosyal medya <b>125/2</b>): <mark>3 ay – 2 yıl hapis veya adli para cezası</mark>.</li>
<li>Şikâyete bağlı; şikâyet süresi <b>6 ay</b>; uzlaştırmaya tabi.</li>
<li>Delil: tarih ve kimliği gösteren ekran görüntüsü; şikâyet <b>Cumhuriyet Başsavcılığı</b>'na.</li>
<li>IP sahibi: ISS veya BTK'dan, savcı ya da mahkeme kararıyla. ABD sunucuları hakaret için kimlik paylaşmıyor.</li>
<li>Ceza davasından bağımsız tazminat davası açılabilir; ceza dosyası delil olur.</li>
</ul>`,
    html: `
<h3>İnternette kişilik haklarına saldırı</h3>
<ul>
<li>Geçmişte internet kullanımı yoğun olmadığından bu alanda korunmaya ihtiyaç duyulmuyordu.</li>
<li>İfade ve basın özgürlüğüne önem verilmeli; ancak paylaşımlar <b>kişilik haklarına saldırı niteliği taşımamalıdır</b>.</li>
<li>İnternette kişiler <mark>kimliklerini gizleyebildiği</mark> için başkasının şeref ve haysiyetini zedeleyen açıklamalar kolaylaşır.</li>
<li>İnternete bağlı bilgisayarın <b>IP numarası</b> hangi bilgisayarla girildiğini gösterir; internet kafe gibi toplu ortamlarda tespit zorlaşır. E-posta ile de kişilik hakları kolayca ihlal edilebilir.</li>
</ul>

<h3>Hakaret suçu (TCK md. 125)</h3>
<blockquote>"Bir kimseye onur, şeref ve saygınlığını rencide edebilecek nitelikte somut bir fiil veya olgu isnat eden veya sövmek suretiyle bir kimsenin onur, şeref ve saygınlığına saldıran kişi, <b>üç aydan iki yıla kadar hapis veya adlî para cezası</b> ile cezalandırılır."</blockquote>
<ul>
<li>5237 sayılı TCK'nın 8. bölümü <b>"Şerefe Karşı Suçlar"</b> içinde yer alır. Sosyal medyada en sık görülen sorunların başındadır.</li>
<li>Sosyal medya üzerinden hakaret <mark>TCK md. 125/2</mark>'de düzenlenmiştir; temel şekle ilişkin cezaya tabidir: <b>3 ay – 2 yıl hapis veya adli para cezası</b>.</li>
</ul>

<h3>Şikâyet ve ispat</h3>
<ol class="steps">
<li>Hakaret <mark>şikâyete bağlı</mark> bir suçtur.</li>
<li>İlk iş: hakaretin geçtiği yerin, <b>tarih ve failin kimlik bilgilerini gösterecek şekilde ekran görüntüsünü</b> almak — en hızlı ve pratik delil.</li>
<li>Failin kimliği belirlenebiliyorsa iletinin hangi <b>IP adresinden</b> gönderildiği ve IP'nin kime ait olduğu tespit edilir.</li>
<li>Mağdur, ekran görüntülerini ekleyerek <mark>Cumhuriyet Başsavcılığı'na dilekçeyle</mark> şikâyette bulunur.</li>
<li>Şikâyet <b>en geç 6 ay</b> içinde yapılmalıdır (notlarda: "hakaret suçunda zaman aşımı 6 aydır").</li>
</ol>

<h3>Kimliği tespit edilemeyen failler</h3>
<ul>
<li>Instagram, Facebook, Twitter gibi platformların merkez ve sunucuları <b>ABD'de</b> olduğundan bilgiler ancak <b>uluslararası yazışmalarla</b> alınabilir.</li>
<li>ABD hukukunda hakaret <mark>"hafif suç"</mark> kapsamında olduğundan hakaret için hesap sahibinin kimlik bilgileri paylaşılmamaktadır.</li>
<li>Hangi IP'den girildiği → kullanılan cihaz → cihazın sahibi tespit edilir. IP'nin kime ait olduğu <b>internet servis sağlayıcıdan veya BTK'dan</b> öğrenilir.</li>
<li>Bu tespitler <mark>Cumhuriyet savcıları veya mahkeme kararıyla</mark> yapılabilir.</li>
<li>IP sahibi hesabı kendisi kullanmış, yakınına kullandırmış olabilir; hesaba girilmiş ya da sahte hesap açılmış da olabilir → ifadelerle netleşir.</li>
</ul>

<h3>Uzlaştırma ve tazminat</h3>
<div class="cols two">
<div class="box"><h4>Uzlaştırma</h4><p>Hakaret suçları <b>uzlaştırmaya tabidir</b>. Uzlaştırma ceza yargılaması bakımından bir <b>koşuldur</b>: teklif yapılmadan ve işlemler usulüne göre yürütülmeden soruşturma yapılamaz.</p></div>
<div class="box"><h4>Tazminat davası</h4><p>Mağdur, ceza davasından <b>bağımsız olarak</b> kişilik haklarına saldırı sebebiyle tazminat davası açabilir. Sonuçlanan ceza davası dosyası, tazminat davasında <b>delil</b> niteliği taşır.</p></div>
</div>
`
  },
  {
    id: `ezber`, no: 12, title: `Ezber Tablosu: Süreler, Sayılar, Maddeler`, slides: `Tüm üniteler`,
    short: `<ul class="short-list">
<li><b>Süreler:</b> 24 saat (yer sağlayıcı) · 2 ay / 3 gün / 15 gün (basın) · 60 gün / 7 gün (RTV) · 2 gün / 1 hafta / 15 gün (internet) · 6 ay (hakaret şikâyeti).</li>
<li><b>Ceza ve yaş:</b> 3 ay – 2 yıl (hakaret) · 18 yaş (erginlik) · 1 yıl+ mahkûmiyet (kısıtlama).</li>
<li><b>Maddeler:</b> Anayasa 13 / 25 / 26 / 28 · İHEB 18–19 · AİHS 9 · Basın K. 2 · RTV K. 8 / 18 · TCK 125 · 5651.</li>
<li><b>Tarihler:</b> 1215 · 1679 · 1776 · 1789 · 1927 · 1940'lar · 1948 · 1968 · 1990.</li>
</ul>`,
    html: `
<p class="lead">Sınavda en çok karıştırılan sayısal bilgiler tek yerde.</p>

<h3>Süreler</h3>
<div class="table-wrap"><table class="tbl">
<thead><tr><th>Süre</th><th>Ne için?</th></tr></thead>
<tbody>
<tr><td><b>24 saat</b></td><td>Yer sağlayıcı, suç teşkil eden içeriği haberdar edildikten itibaren yayından çıkarır</td></tr>
<tr><td><b>2 ay</b></td><td>Süreli yayın: cevap metni yayın tarihinden itibaren sorumlu müdüre gönderilir</td></tr>
<tr><td><b>3 gün</b></td><td>Günlük süreli yayın: cevap, yazı alındıktan itibaren yayımlanır</td></tr>
<tr><td><b>15 gün</b></td><td>Süreli yayın: cevap yayımlanmazsa / aykırı yayımlanırsa sulh ceza hâkimine başvuru</td></tr>
<tr><td><b>60 gün</b></td><td>Radyo-TV: cevap metni yayın tarihinden itibaren medya hizmet sağlayıcıya gönderilir</td></tr>
<tr><td><b>7 gün</b></td><td>Radyo-TV: medya hizmet sağlayıcı cevabı yayınlar</td></tr>
<tr><td><b>2 gün</b></td><td>İnternet: kaldırma/cevap talebi karşılanmalı; aksi hâlde reddedilmiş sayılır</td></tr>
<tr><td><b>1 hafta</b></td><td>İnternet: cevap metni yayında kalır</td></tr>
<tr><td><b>15 gün</b></td><td>İnternet: talebi reddedilen, Sulh Ceza Hakimliğine başvurur</td></tr>
<tr><td><b>6 ay</b></td><td>Hakaret suçunda şikâyet süresi</td></tr>
</tbody></table></div>

<h3>Ceza, yaş ve unutulma hakkı süreleri</h3>
<div class="table-wrap"><table class="tbl">
<tbody>
<tr><td><b>3 ay – 2 yıl</b></td><td>Hakaret: hapis veya adli para cezası (TCK 125; sosyal medya 125/2)</td></tr>
<tr><td><b>18 yaş</b></td><td>Erginlik (fiil ehliyeti şartı)</td></tr>
<tr><td><b>1 yıl ve üzeri</b></td><td>Özgürlüğü bağlayıcı cezaya mahkûmiyet → kısıtlama sebebi</td></tr>
<tr><td><b>1 yıl / 5 yıl</b></td><td>Unutulma: 1 yıl yayında kalan içerik için istenemez, 5 yıl kalan için istenebilir</td></tr>
<tr><td><b>5 yıl / 15 yıl</b></td><td>Unutulma: kişisel veri içeren haberde 5 yıl yetebilir; kişisel veri yoksa 15 yıl bile yetmeyebilir</td></tr>
<tr><td><b>20 yıl</b></td><td>Altın Kelebek örneği: ünlü kişi 20 yıl geçse de isteyemez</td></tr>
</tbody></table></div>

<h3>Tarihler</h3>
<ol class="timeline">
<li><b>1215</b> Magna Carta</li>
<li><b>1679</b> Haklar Bildirisi</li>
<li><b>1776</b> Amerikan Bağımsızlık Bildirgesi</li>
<li><b>1789</b> Fransız Devrimi</li>
<li><b>1927</b> İlk radyo yayını</li>
<li><b>1940'lar</b> Lasswell "kitle iletişimi" kavramını kullanır</li>
<li><b>10 Aralık 1948</b> İnsan Hakları Evrensel Beyannamesi</li>
<li><b>1968</b> İlk televizyon yayını</li>
<li><b>1990</b> TRT tekelinin sonu, özel televizyonlar</li>
</ol>

<h3>Kanun ve madde numaraları</h3>
<div class="table-wrap"><table class="tbl">
<tbody>
<tr><td><b>Anayasa 13</b></td><td>Temel hak ve hürriyetlerin sınırlandırılması (genel kural)</td></tr>
<tr><td><b>Anayasa 25</b></td><td>Düşünce ve kanaat hürriyeti</td></tr>
<tr><td><b>Anayasa 26</b></td><td>Düşünceyi açıklama ve yayma hürriyeti</td></tr>
<tr><td><b>Anayasa 28</b></td><td>Basın hürriyeti ("Basın hürdür, sansür edilemez")</td></tr>
<tr><td><b>İHEB 18 / 19</b></td><td>Düşünce, vicdan ve din özgürlüğü / düşünce ve anlatım özgürlüğü</td></tr>
<tr><td><b>AİHS 9</b></td><td>Düşünce, vicdan ve din özgürlüğü</td></tr>
<tr><td><b>Basın Kanunu 2</b></td><td>Temel kavramların tanımları</td></tr>
<tr><td><b>RTV Kanunu 8 / 18</b></td><td>Yayın hizmeti ilkeleri (cevap hakkına saygı) / Düzeltme ve cevap hakkı</td></tr>
<tr><td><b>TMK 23, 24, 25 · TBK 49</b></td><td>Kişilik haklarının korunması</td></tr>
<tr><td><b>TCK 125 · 125/2</b></td><td>Hakaret · sosyal medya üzerinden hakaret</td></tr>
<tr><td><b>5237</b></td><td>Türk Ceza Kanunu</td></tr>
<tr><td><b>5651</b></td><td>İnternet Ortamında Yapılan Yayınların Düzenlenmesi… Kanun</td></tr>
</tbody></table></div>
`
  }
],

cards: [
  // 1 · giris
  [`giris`, `Hukuk kurallarını diğer toplumsal kurallardan ayıran en önemli özellik nedir?`, `<b>Maddi yaptırımla</b> desteklenmiş olması.`],
  [`giris`, `Toplumsal davranış kuralları nelerdir?`, `Din, ahlak, görgü, örf ve adet ile hukuk kuralları.`],
  [`giris`, `Yaptırım (müeyyide) nedir?`, `Bir hukuk kuralının emir ve yasaklarına uygun davranılmadığında karşılaşılan tepki.`],
  [`giris`, `Yaptırımın "maddi" olması ne demektir?`, `Kurala aykırılıkta devletin <b>kamu gücünü kullanarak</b> ihlal edenin bu davranışın sonucuna katlanmasını sağlaması.`],
  [`giris`, `Ahlak ve görgü kurallarının yaptırımı nasıldır?`, `<b>Manevidir.</b><br>Ahlak: ayıplanma, dışlanma.<br>Görgü: görgüsüz, saygısız, kaba nitelendirilme.`],
  [`giris`, `Kına hangi kural türüne örnektir?`, `<b>Örf ve adet</b> kurallarına.`],
  [`giris`, `Hukukun amaçları nelerdir?`, `Toplumsal güven ve güvenlik, toplumsal düzen, toplumsal ihtiyaçları karşılamak, toplumsal eşitlik, adalet, barış, özgürlük.`],
  [`giris`, `Hukukun kaynakları hangi üç gruba ayrılır?`, `<b>Yazılı:</b> Anayasa, kanun, milletlerarası antlaşmalar, KHK, tüzük, yönetmelik<br><b>Yazısız:</b> örf ve adet<br><b>Yardımcı:</b> bilimsel ve yargısal içtihatlar`],
  [`giris`, `Normlar hiyerarşisi nedir?`, `Hukuk kuralları arasındaki <b>«öncelik»</b> ilişkisi. (Norm = kural)`],
  [`giris`, `Normlar hiyerarşisini yukarıdan aşağıya sırala.`, `Anayasa → Milletlerarası Andlaşmalar → Kanun → KHK → Tüzük → Yönetmelik<br>Diğerleri: yönerge, tebliğ, genelge, talimat.`],
  [`giris`, `Hukuk dalları hangi üç gruba ayrılır?`, `Kamu hukuku, özel hukuk, karma hukuk.`],
  [`giris`, `İletişim Hukuku hangi gruptadır?`, `<b>Karma hukuk</b> (Fikir ve Sanat Eserleri, İş, Bankacılık Hukuku ile birlikte).`],
  [`giris`, `Özel hukuk dalları nelerdir?`, `Medeni, Ticaret, Borçlar ve Devletler Özel Hukuku.`],
  [`giris`, `Ceza hukukuna hâkim olan 5 ilke?`, `Suçta ve cezada kanunilik, ölçülülük, adalet ve kanun önünde eşitlik, kanunların bağlayıcılığı, cezaların şahsiliği.`],
  [`giris`, `"Ceza kanunlarını bilmemek mazeret sayılmaz." Hangi ilke?`, `<b>Kanunların bağlayıcılığı</b> ilkesi.`],
  [`giris`, `"Kimse başkasının fiilinden dolayı sorumlu tutulamaz." Hangi ilke?`, `<b>Cezaların şahsiliği</b> ilkesi.`],
  [`giris`, `Vergi hukukunun ilkeleri nelerdir?`, `<b>Vergide adalet</b> (gelire göre), <b>vergide genellik</b> (ayrımsız herkes), <b>verginin kanuniliği</b> (kanunla konur, kaldırılır, düzenlenir).`],
  [`giris`, `Devletler Genel Hukuku hangi ilişkileri düzenler?`, `Devlet–devlet, devlet–uluslararası kuruluş, uluslararası kuruluş–uluslararası kuruluş.`],
  [`giris`, `Devletler Özel Hukuku neyi düzenler?`, `Farklı milletlerden bireylerin ilişkileri, hukuki statüleri ve uyuşmazlıklarında hangi ülke hukukunun uygulanacağı.`],
  [`giris`, `Medeni hukukun alt dalları nelerdir?`, `Kişiler, aile, miras ve eşya hukuku.`],
  [`giris`, `Medeni hukukta geçerli ilkeler nelerdir?`, `<b>Dürüstlük</b>, <b>iyi niyet</b> (iyi niyet var sayılır), <b>ispat yükü</b> (herkes iddiasını ispatla yükümlü).`],

  // 2 · hak
  [`hak`, `Hak nedir?`, `Hukuk düzeninin kişilere tanıdığı yetkiler ve korunan menfaatleri. "Hukuk" kelimesi "hak"tan türemiştir.`],
  [`hak`, `Özel haklar ile kamu hakları arasındaki fark?`, `<b>Özel:</b> kişiler arası, özel hukuktan; eşitlik ilkesi geçerli.<br><b>Kamu:</b> kişi–devlet arası, kamu hukukundan.`],
  [`hak`, `Kamu hakları hangi üç gruba ayrılır?`, `Kişinin hakları, sosyal ve ekonomik haklar, siyasi haklar.`],
  [`hak`, `Hakları doğuran olgular nelerdir?`, `Hukuki olay, hukuki fiil, hukuki işlem.`],
  [`hak`, `Hukuki olay nedir? Örnek?`, `İrade aranmaksızın hukuki sonuç bağlanmış olay. Örnek: <b>doğum, ölüm</b>.`],
  [`hak`, `Hukuka aykırı fiil ceza hukukunda ve özel hukukta hangi adı alır?`, `Ceza hukukunda <b>suç (cürüm veya kabahat)</b>, özel hukukta <b>haksız fiil</b>.`],
  [`hak`, `Hukuki işlem nedir? Örnek?`, `Bir veya aynı amaca yönelik birden fazla kişinin irade beyanıyla hukuki sonuç yaratması. Örnek: <b>vasiyetname, sözleşme</b>.`],
  [`hak`, `Gerçek kişi / tüzel kişi?`, `<b>Gerçek kişi:</b> ayrım gözetmeksizin bütün insanlar.<br><b>Tüzel kişi:</b> örgütlenmiş kişi veya mal toplulukları — dernek, vakıf, şirket, kurum ve kuruluşlar.`],
  [`hak`, `Hak ehliyeti nedir, ne zaman kazanılır?`, `Haklara ve borçlara sahip olabilme gücü. <b>Sağ ve tam doğmak koşuluyla ana rahmine düşüldüğü anda</b> kazanılır.`],
  [`hak`, `Hak ehliyeti ile fiil ehliyeti farkı?`, `Hak ehliyeti medeni haklardan <b>yararlanmayı</b>, fiil ehliyeti medeni hakları <b>kullanmayı</b> ifade eder.`],
  [`hak`, `Fiil ehliyetinin şartları nelerdir?`, `Ergin olmak (18 yaş), ayırt etme gücüne sahip olmak, kısıtlı olmamak.`],
  [`hak`, `Fiil ehliyetinin en önemli koşulu hangisidir?`, `<b>Ayırt etme gücü.</b> Yoksa kişi tam ehliyetsizdir; işlemleri hukuki sonuç doğurmaz.`],
  [`hak`, `Kısıtlama sebepleri nelerdir?`, `Akıl hastalığı/zayıflığı; savurganlık, alkol-uyuşturucu bağımlılığı, kötü yaşama tarzı, kötü yönetim; 1 yıl veya daha uzun özgürlüğü bağlayıcı ceza; yaşlılık, sakatlık, deneyimsizlik nedeniyle kendi isteği.`],

  // 3 · medya
  [`medya`, `Medya hukuku nedir?`, `Kitle iletişiminde uyulması gereken kuralları, kitle iletişim araçlarının yapısını ve ilişkilerini düzenleyen hukuk kuralları bütünü.`],
  [`medya`, `TDK'ya göre iletişim nedir?`, `"Duygu, düşünce veya bilgilerin akla gelebilecek her türlü yolla başkalarına aktarılması, bildirişim, haberleşme, komünikasyon."`],
  [`medya`, `İletişimin temel ögeleri nelerdir?`, `<b>Kaynak, ileti ve alıcı.</b> İletişim dinamik bir süreçtir.`],
  [`medya`, `"Kitle iletişimi" kavramını ilk kim, ne zaman kullandı?`, `<b>Harold D. Lasswell</b>, 1940'lı yıllarda, siyasal erk ve propaganda çalışmalarında.`],
  [`medya`, `"Küresel köy" benzetmesi kime aittir?`, `<b>Mc Luhan</b>.`],
  [`medya`, `Medya hukukunun kapsamındaki alanlar?`, `Basın yayın, radyo ve televizyon yayıncılığı, sinema yayıncılığı, internet ortamında yayıncılık.`],
  [`medya`, `Medya hukuku düzenlemelerinin temeli nedir?`, `<b>Anayasa</b> (örn. md. 28: "Basın hürdür, sansür edilemez…"). Kurallar tek bir yasada toplanmamıştır.`],
  [`medya`, `Medya hukukunun en önemli temel kavramı?`, `<b>İfade özgürlüğü</b> (içinde kamuoyunun bilgi edinme hakkı da vardır).`],
  [`medya`, `İfade özgürlüğünü sınırlayan haller?`, `Ulusal güvenlik, ülke bütünlüğü, kamu emniyeti, suç işlenmesi veya düzensizliğin önlenmesi, genel sağlığın korunması.`],
  [`medya`, `İfade özgürlüğünün sınırlandırılmasının şartları?`, `Kanunla olması, Anayasaya uygunluk, demokratik toplum düzeninin gereklerine uygunluk, ölçülülük.`],

  // 4 · ozgurluk
  [`ozgurluk`, `Özgürlük nedir?`, `Herhangi bir kısıtlama ve zorlamaya bağlı olmaksızın düşünme veya davranma; dış etki olmadan insanın istediğini yapabilmesi.`],
  [`ozgurluk`, `Özgürlükler neden sınırsız değildir?`, `İnsan hemcinsleriyle birlikte yaşamak zorundadır; toplumsal hayatın olduğu yerde sınırsız özgürlük olmaz.`],
  [`ozgurluk`, `Tarihsel belgeleri sırala.`, `1215 Magna Carta → 1679 Haklar Bildirisi → 1776 Amerikan Bağımsızlık Bildirgesi → 1789 Fransız Devrimi.`],
  [`ozgurluk`, `İnsan hakları ne zaman "temel haklar" adını alır?`, `Devlet güvencesi sağlandığında. (İnsan hakları devletten önce de vardır.)`],
  [`ozgurluk`, `Temel haklar ile otorite arasındaki paradoks nedir?`, `Hak ihlali iddiasıyla kamu gücüne karşı AYM'ye bireysel başvuru yapılabilir; ama hakların korunması ve kararların uygulanması da kamu gücü gerektirir.`],
  [`ozgurluk`, `Kitle iletişim özgürlüğü nedir?`, `Bilgi ve haberlerin, fikir ve kanaatlerin kitle iletişim araçlarıyla serbestçe elde edilmesi ve yayılması özgürlüğü. Bireysel ve toplu kullanılır.`],
  [`ozgurluk`, `Düşünce-ifade özgürlüğü ile kitle iletişim özgürlüğü ilişkisi?`, `<b>Birbirini tamamlar;</b> biri olmadan diğerinden söz edilemez.`],
  [`ozgurluk`, `Kitle iletişim özgürlüğünün unsurları?`, `Haber, bilgi, düşünce ve kanılara serbestçe <b>ulaşabilme</b>, bunları serbestçe <b>ifade</b> ve <b>yayabilme</b> hakkı.`],
  [`ozgurluk`, `Kitle iletişim özgürlüğünün kapsamı?`, `Basın özgürlüğü, görsel-işitsel iletişim özgürlüğü, internet özgürlüğü.`],
  [`ozgurluk`, `İHEB ne zaman ilan edildi, hangi maddeler önemli?`, `<b>10 Aralık 1948</b>, BM. md. 18: düşünce, vicdan ve din; md. 19: düşünce ve anlatım özgürlüğü.`],
  [`ozgurluk`, `Anayasa md. 25 / 26 / 28?`, `<b>25:</b> düşünce ve kanaat hürriyeti<br><b>26:</b> düşünceyi açıklama ve yayma hürriyeti<br><b>28:</b> basın hürriyeti`],
  [`ozgurluk`, `Anayasa md. 13 neyi düzenler?`, `Temel hak ve hürriyetlerin sınırlandırılmasının genel kuralı: ancak <b>kanunla</b> ve Anayasa'daki nedenlere dayanılarak.`],
  [`ozgurluk`, `AİHS'nin ifade özgürlüğü hükmü devletlere hangi imkânı bırakır?`, `Radyo, televizyon ve sinema işletmelerini bir <b>izin rejimine</b> tabi tutabilirler.`],
  [`ozgurluk`, `Anayasa md. 28'e göre basımevi kurmak?`, `İzin alma ve mali teminat yatırma şartına <b>bağlanamaz</b>.`],

  // 5 · basin
  [`basin`, `Basının dar ve teknik anlamı?`, `Düşüncelerin basılmış eserlerle yazılı olarak kamuoyuna açıklandığı kitle iletişim aracı.`],
  [`basin`, `Basın neden "dördüncü kuvvet" sayılır?`, `İlkeli ve sorumlu yayıncılıkla iktidarı denetler, bireylerin özgürlüklerini korur; yasama, yürütme ve yargının yanında anılır.`],
  [`basin`, `İlkeli yayıncılığın unsurları?`, `Doğruluk ve tarafsızlık, şeffaflık, özel hayata saygı, toplumsal değerlere uyum, editoryal bağımsızlık.`],
  [`basin`, `Sorumlu yayıncılığın unsurları?`, `Kamu yararı gözetmek, hesap verebilirlik, çocuk ve hassas grupların korunması, reklam etiğine uyum.`],
  [`basin`, `Basın Kanunu'nda kavramlar hangi maddede tanımlanır?`, `<b>2. madde.</b>`],
  [`basin`, `Basılmış eser nedir?`, `Yayımlanmak üzere basılan veya çoğaltılan yazı, resim ve benzeri eserler ile <b>haber ajansı yayınları</b>.`],
  [`basin`, `Süreli yayın / süresiz yayın?`, `<b>Süreli:</b> bölümler halinde, genellikle numaralı, bitişi önceden belirlenmemiş (gazete, dergi).<br><b>Süresiz:</b> bir defalığına basılmış kitap türü eser.`],
  [`basin`, `Süreli yayın türleri?`, `Yaygın süreli, bölgesel süreli, yerel süreli yayın.`],
  [`basin`, `Eser sahibi / yayıncı / basımcı?`, `<b>Eser sahibi:</b> içeriği oluşturan.<br><b>Yayıncı:</b> eseri basılmış eser haline getirip yayımlayan.<br><b>Basımcı:</b> eseri basan ya da çoğaltan.`],

  // 6 · yayincilik
  [`yayincilik`, `İlk radyo ve TV yayını hangi yıllarda? TRT tekeli ne zamana kadar?`, `Radyo <b>1927</b>, televizyon <b>1968</b>; TRT tekeli <b>1990</b>'a kadar.`],
  [`yayincilik`, `RTV Kuruluş ve Yayın Hizmetleri Kanunu neyi düzenler?`, `Radyo-TV yayınlarını ve <b>Radyo ve Televizyon Üst Kurulu</b>'nun kuruluş, görev, yetki ve sorumluluklarını; isteğe bağlı yayın hizmetleri de kapsamdadır.`],
  [`yayincilik`, `İnternetle ilgili en kapsamlı düzenleme?`, `<b>5651 sayılı</b> İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun.`],
  [`yayincilik`, `İçerik sağlayıcı nedir?`, `İnternette sunulan her türlü bilgi veya veriyi <b>üreten, değiştiren ve sağlayan</b> gerçek veya tüzel kişi.`],
  [`yayincilik`, `Yer sağlayıcı nedir?`, `Hizmet ve içerikleri <b>barındıran</b> sistemleri sağlayan veya işleten gerçek veya tüzel kişi.`],
  [`yayincilik`, `Erişim sağlayıcı nedir? Örnek?`, `Kullanıcılara internete <b>erişim olanağı</b> sağlayan kişi. Örnek: TTNET, Turkcell Superonline.`],
  [`yayincilik`, `Yer sağlayıcı suç teşkil eden içeriği ne kadar sürede kaldırır?`, `Haberdar edildikten itibaren <b>24 saat</b> içinde.`],
  [`yayincilik`, `Erişim sağlayıcının yükümlülükleri?`, `İçeriği kontrol etmek zorunda değildir; bildirilen hukuka aykırı içeriğe erişimi ve <b>alternatif erişim yollarını</b> engeller.`],

  // 7 · ceza
  [`ceza`, `Basın suçu nedir?`, `Suç niteliği olan bir eylemin <b>basılmış eserler yoluyla</b> işlenmesi.`],
  [`ceza`, `RTV'de neden Basın Kanunu'ndan daha net ilkeler var?`, `RTV yayınları daha <b>hızlı</b> ve daha <b>geniş kitlelere</b> yayılır; topluma kolayca ulaşır.`],
  [`ceza`, `İçerik sağlayıcı bağlantı verdiği başkasına ait içerikten sorumlu mu?`, `<b>Hayır.</b> Kendi sunduğu her türlü içerikten sorumludur, bağlantı sağladığı başkasına ait içerikten sorumlu olmaz.`],
  [`ceza`, `Facebook, Instagram, YouTube gibi platformların sıfatı?`, `<b>Yer sağlayıcı.</b> (Paylaşım yapan kullanıcı ise içerik sağlayıcı.)`],
  [`ceza`, `TCK'da medya yoluyla işlenebilen suçlardan 6 tanesini say.`, `Hakaret, özel hayatın gizliliğini ihlal, haberleşmenin gizliliğini ihlal, suçu ve suçluyu övme, halkı kin ve düşmanlığa tahrik, müstehcenlik, iftira…`],

  // 8 · kisilik
  [`kisilik`, `Kişilik haklarının özellikleri?`, `Para ile ölçülemez, devredilemez, mirasçılara geçmez, <b>mutlak</b> haktır; dayanağını Anayasa'dan alır.`],
  [`kisilik`, `Maddi ve manevi kişilik hakları?`, `<b>Maddi:</b> bedensel haklar ve mülkiyet hakları.<br><b>Manevi:</b> manevi varlığı geliştirme, din ve vicdan, haberleşme özgürlüğü, özel yaşamın gizliliği.`],
  [`kisilik`, `Kişilik hakkına saldırıda hangi davalar açılabilir?`, `Maddi zarar → <b>maddi tazminat</b>; manevi zarar → <b>manevi tazminat</b> davası.`],
  [`kisilik`, `Şeref ve haysiyeti hedef alan haberin hukuka uygunluk ölçütleri?`, `Gerçeklik, güncellik, kamu yararı, ölçülülük.`],
  [`kisilik`, `"Ad" kapsamında neler korunur?`, `Öz ad ve soyadı; ayrıca müstear ad, lakap, kısaltılmış ad, temsili adres, e-posta ve telgraf adresleri.`],
  [`kisilik`, `Kişinin sırlarına örnekler?`, `Sağlık durumu, ticari sırlar, gizli çekimle kaydedilmiş görüntüler.`],
  [`kisilik`, `Haber içindeki bir fotoğrafta yer almak kişilik hakkı ihlali midir?`, `<b>Hayır;</b> toplumun haber alma ihtiyacını karşıladığından hukuka aykırı tecavüz değildir.`],
  [`kisilik`, `Kişisel verilerin işlenmesinde uyulacak ilkeler?`, `Güncel olma; açık ve meşru amaç; amaçla bağlantılı ve ölçülü olma; mevzuata ve amaca uygun süre.`],
  [`kisilik`, `Kişilik haklarını koruyan düzenlemeler?`, `TMK 23-24-25, TBK 49, KVKK, TTK, FSEK, 5651 sayılı Kanun, TCK.`],

  // 9 · unutulma
  [`unutulma`, `Unutulma hakkı nedir?`, `Kişinin kendisiyle ilgili haber, fotoğraf, video vb. verilerin artık <b>internet arama sonuçlarında olmasını istememe</b> hakkı.`],
  [`unutulma`, `Unutulma hakkı içeriğin silinmesini talep hakkı mıdır?`, `<b>Hayır.</b> İçeriğin arama motorlarında <b>listelenmemesini (delisting)</b> talep hakkıdır.`],
  [`unutulma`, `Unutulma hakkını temel talep hakkından ayıran nokta?`, `Yöneldiği içeriğin internette bulunması <b>hukuki ve meşru bir sebebe</b> dayanır (hukuka uygun içerik).`],
  [`unutulma`, `Devletin unutulma hakkı karşısındaki yükümlülüğü?`, `<b>Pozitif yükümlülük:</b> mevzuatta düzenlenmemiş olsa bile hakkın kullanılmasını sağlamak zorundadır.`],
  [`unutulma`, `Unutulma hakkının kullanılma şartları (8)?`, `Güncelliğini yitirme, kamu yararı olmaması, tarihsel veri olmaması, bilimsel bilgi olmaması, yayında kalma süresi, kişinin ünlü/siyasetçi olup olmaması, olgusal gerçek mi değer yargısı mı, halkın ilgisinin düzeyi.`],
  [`unutulma`, `Olgusal gerçek mi değer yargısı mı: hangisi daha kolay kaldırılır?`, `<b>Değer yargısı</b> içeren ("yapılan alçaklıktır" gibi) içerik daha kolay; olgusal gerçeğe dayalı haber daha zor.`],
  [`unutulma`, `Makul süre nasıl belirlenir?`, `Önceden kategorik belirlenmez, <b>somut olaya göre</b>. Kişisel veri içeren haberde 5 yıl yetebilir; kişisel veri yoksa 15 yıl bile yetmeyebilir.`],
  [`unutulma`, `Unutulma hakkı için başvuru yolları?`, `1) Arama motoruna veya veri sorumlusuna doğrudan başvuru<br>2) Ret/cevapsızlıkta <b>KVKK</b> veya 5651 kapsamında <b>Sulh Ceza Hakimliği</b>`],
  [`unutulma`, `Şirketler unutulma hakkını kullanabilir mi?`, `<b>Hayır;</b> tüzel kişiler KVKK kapsamında yararlanamaz, ticari itibar koruma yollarını kullanır.`],

  // 10 · cevap
  [`cevap`, `Düzeltme ve cevap hakkı hangi durumlarda doğar?`, `Yayının kişinin <b>şeref ve haysiyetine dokunması</b> veya kişi hakkında <b>gerçeğe aykırı</b> yayın yapılması.`],
  [`cevap`, `Süreli yayında cevap yazısının 4 şartı?`, `Suç unsuru içermemesi; 3. kişilerin hukuken korunan menfaatlerine aykırı olmaması; cevap verilen yayınla ilgili olması ve bunun belirtilmesi; ilgili yazıdan uzun olmaması.`],
  [`cevap`, `Süreli yayın: başvuru kime, ne kadar sürede?`, `Yayın tarihinden itibaren en geç <b>2 ay</b> içinde <b>sorumlu müdüre</b>.`],
  [`cevap`, `Günlük süreli yayında cevap kaç günde yayımlanır?`, `Yazının alındığı tarihten itibaren <b>3 gün</b>.`],
  [`cevap`, `Süreli yayında cevap nasıl yayımlanır?`, `İlgili yayının yer aldığı <b>sayfa ve sütunlarda, aynı puntolarla ve aynı şekilde</b>.`],
  [`cevap`, `Süreli yayında cevap yayımlanmazsa?`, `<b>15 gün</b> içinde bulunduğu yer <b>sulh ceza hâkimine</b> başvurulur.`],
  [`cevap`, `RTV: başvuru kime, ne kadar sürede? Yayın süresi?`, `Yayın tarihinden itibaren <b>60 gün</b> içinde <b>medya hizmet sağlayıcıya</b>; o da en geç <b>7 gün</b> içinde, aynı saatte ve programda yayınlar.`],
  [`cevap`, `RTV Kanunu'nda cevap hakkıyla ilgili maddeler?`, `<b>md. 8</b> (yayın hizmeti ilkeleri: cevap hakkına saygı) ve <b>md. 18</b> (Düzeltme ve Cevap Hakkı).`],
  [`cevap`, `İnternette düzeltme ve cevap süreci?`, `Önce içerik sağlayıcı (ulaşılamazsa yer sağlayıcı) → talep <b>2 gün</b> içinde karşılanmazsa reddedilmiş sayılır → <b>15 gün</b> içinde Sulh Ceza Hakimliği. Cevap <b>1 hafta</b> yayında kalır.`],

  // 11 · hakaret
  [`hakaret`, `Hakaret suçu TCK'da nerede düzenlenir?`, `5237 sayılı TCK, 8. bölüm "Şerefe Karşı Suçlar", <b>md. 125</b> (sosyal medya: <b>125/2</b>).`],
  [`hakaret`, `Hakaret suçunun cezası?`, `<b>Üç aydan iki yıla kadar hapis veya adli para cezası.</b>`],
  [`hakaret`, `Hakaret suçunda şikâyet süresi?`, `En geç <b>6 ay</b> (hakaret şikâyete bağlı bir suçtur).`],
  [`hakaret`, `Sosyal medyada hakarete uğrayan ilk ne yapmalı?`, `Tarihi ve failin kimlik bilgilerini gösteren <b>ekran görüntüsü</b> almalı.`],
  [`hakaret`, `Hakaret şikâyeti nereye yapılır?`, `Ekran görüntüleri eklenmiş dilekçeyle <b>Cumhuriyet Başsavcılığı</b>'na.`],
  [`hakaret`, `IP adresinin sahibi nasıl öğrenilir?`, `<b>İnternet servis sağlayıcıdan veya BTK'dan</b>; Cumhuriyet savcıları veya mahkeme kararıyla.`],
  [`hakaret`, `Gizli hesaplarda fail neden zor tespit edilir?`, `Sunucular <b>ABD</b>'de; ABD hakareti "hafif suç" saydığından kimlik bilgisi paylaşmaz.`],
  [`hakaret`, `Hakaret suçlarında uzlaştırma?`, `Uzlaştırmaya tabidir; ceza yargılamasında bir <b>koşuldur</b> — uzlaştırma yapılmadan soruşturma yapılamaz.`],
  [`hakaret`, `Hakaret mağduru tazminat davası açabilir mi?`, `Evet, ceza davasından <b>bağımsız</b> olarak; sonuçlanan ceza dosyası <b>delil</b> olur.`]
],

questions: [
  // 1 · giris
  { u: `giris`, q: `Hukuk kurallarını toplumsal hayatı düzenleyen diğer kurallardan ayıran en önemli özellik nedir?`,
    o: [`Maddi yaptırımla desteklenmiş olması`, `Toplumda uzun süredir uygulanması`, `Yaptırımının ayıplanma ve dışlanma olması`, `Tanrı tarafından konulduğuna inanılması`],
    e: `Hukuk kuralları maddi yaptırımla desteklenir; ahlak ve görgü kurallarının yaptırımı ise manevidir.` },
  { u: `giris`, q: `"Aynı çevrede yaşayan kişilerin karşılaştıklarında takınmaları gereken tavırlar, konuşma ve selamlaşma gibi davranış kuralları" hangisidir?`,
    o: [`Görgü kuralları`, `Ahlak kuralları`, `Örf ve adet kuralları`, `Din kuralları`],
    e: `Görgü kurallarının yaptırımı manevidir: kişi görgüsüz, saygısız, kaba olarak nitelendirilir.` },
  { u: `giris`, q: `Notlarda kına, hangi kural türüne örnek olarak verilmiştir?`,
    o: [`Örf ve adet kuralları`, `Görgü kuralları`, `Hukuk kuralları`, `Din kuralları`],
    e: `Örf ve adet: toplumda uzun zamandır yapılan, kendiliğinden ortaya çıkan ve toplumun uygulanmasını zorunlu saydığı kurallardır.` },
  { u: `giris`, q: `Maddi yaptırım ne anlama gelir?`,
    o: [`Devletin kamu gücünü kullanarak kuralı ihlal edenin sonuca katlanmasını sağlaması`, `Toplumun kuralı ihlal edeni ayıplaması`, `Kuralı ihlal edenin günah işlemiş sayılması`, `Kişinin görgüsüz olarak nitelendirilmesi`],
    e: `Maddi yaptırımda devlet, kamu gücünü kullanarak hukuka aykırı davranışın sonucuna katlanılmasını sağlar.` },
  { u: `giris`, q: `Normlar hiyerarşisinde en üstte yer alan norm hangisidir?`,
    o: [`Anayasa`, `Kanun`, `Milletlerarası andlaşmalar`, `Kanun hükmünde kararname`],
    e: `Sıralama: Anayasa › Milletlerarası Andlaşmalar › Kanun › KHK › Tüzük › Yönetmelik.` },
  { u: `giris`, q: `Normlar hiyerarşisinde Kanun ile Tüzük arasında hangi norm yer alır?`,
    o: [`Kanun Hükmünde Kararname`, `Yönetmelik`, `Milletlerarası Andlaşmalar`, `Genelge`],
    e: `Anayasa › Milletlerarası Andlaşmalar › Kanun › KHK › Tüzük › Yönetmelik.` },
  { u: `giris`, q: `Aşağıdakilerden hangisi hukukun yardımcı kaynaklarındandır?`,
    o: [`Yargısal içtihatlar`, `Örf ve adet kuralları`, `Tüzük`, `Kanun hükmünde kararname`],
    e: `Yardımcı kaynaklar: bilimsel ve yargısal içtihatlar. Örf ve adet yazısız, tüzük ve KHK yazılı kaynaktır.` },
  { u: `giris`, q: `Aşağıdakilerden hangisi kamu hukuku dallarından biridir?`,
    o: [`Vergi Hukuku`, `Ticaret Hukuku`, `Borçlar Hukuku`, `Devletler Özel Hukuku`],
    e: `Ticaret, Borçlar ve Devletler Özel Hukuku özel hukuk dallarıdır.` },
  { u: `giris`, q: `Notlardaki sınıflandırmaya göre İletişim Hukuku hangi grupta yer alır?`,
    o: [`Karma hukuk`, `Kamu hukuku`, `Özel hukuk`, `Yargılama hukuku`],
    e: `Karma hukuk: Fikir ve Sanat Eserleri, İş, Bankacılık ve İletişim Hukuku.` },
  { u: `giris`, q: `"Ceza kanunlarını bilmemek mazeret sayılmaz." ifadesi ceza hukukunun hangi ilkesidir?`,
    o: [`Kanunların bağlayıcılığı ilkesi`, `Cezaların şahsiliği ilkesi`, `Ölçülülük ilkesi`, `Suçta ve cezada kanunilik ilkesi`],
    e: `Kanunların bağlayıcılığı ilkesi gereği ceza kanunlarını bilmemek mazeret değildir.` },
  { u: `giris`, q: `"Kimse başkasının fiilinden dolayı sorumlu tutulamaz." hangi ilkeyi ifade eder?`,
    o: [`Cezaların şahsiliği`, `Kanun önünde eşitlik`, `Suçta ve cezada kanunilik`, `Ölçülülük`],
    e: `Ceza sorumluluğu şahsidir: cezaların şahsiliği ilkesi.` },
  { u: `giris`, q: `Devlet ile devlet ve devlet ile uluslararası kuruluşlar arasındaki ilişkileri düzenleyen hukuk dalı hangisidir?`,
    o: [`Devletler Genel Hukuku`, `Devletler Özel Hukuku`, `Anayasa Hukuku`, `İdare Hukuku`],
    e: `Devletler Özel Hukuku ise farklı milletlerden bireylerin ilişkilerini düzenler.` },
  { u: `giris`, q: `"Din, ırk, sınıf, cinsiyet ayrımı yapılmaksızın herkesin vergi vermesi" hangi vergi ilkesidir?`,
    o: [`Vergide genellik`, `Vergide adalet`, `Verginin kanuniliği`, `Vergide ölçülülük`],
    e: `Vergide adalet: herkesin gelirine göre vergi ödemesi; verginin kanuniliği: vergilerin kanunla konulması.` },
  { u: `giris`, q: `Aşağıdakilerden hangisi notlarda hukukun amaçları arasında sayılmamıştır?`,
    o: [`Ekonomik büyümeyi sağlamak`, `Adaleti gerçekleştirmek`, `Toplumsal düzeni sağlamak`, `Özgürlüğü sağlamak`],
    e: `Amaçlar: toplumsal güven ve güvenlik, toplumsal düzen, toplumsal ihtiyaçlar, toplumsal eşitlik, adalet, barış, özgürlük.` },
  { u: `giris`, q: `"Kanunda aksine bir hüküm olmadıkça herkes iddiasını ispatla yükümlüdür." Medeni hukukun hangi ilkesidir?`,
    o: [`İspat yükü`, `Dürüstlük`, `İyi niyet`, `Kanunilik`],
    e: `Medeni hukukta geçerli ilkeler: dürüstlük, iyi niyet ve ispat yükü.` },
  { u: `giris`, q: `Nişanlanma, evlilik, boşanma ve velayet medeni hukukun hangi alt dalında düzenlenir?`,
    o: [`Aile Hukuku`, `Kişiler Hukuku`, `Miras Hukuku`, `Eşya Hukuku`],
    e: `Aile hukuku ayrıca eşlerin sorumluluklarını, soy bağını ve veraset ilişkilerini düzenler.` },

  // 2 · hak
  { u: `hak`, q: `Doğum ve ölüm, hakları doğuran olgulardan hangisine örnektir?`,
    o: [`Hukuki olay`, `Hukuki fiil`, `Hukuki işlem`, `Haksız fiil`],
    e: `Hukuki olay: kişinin iradesine bakılmaksızın hukuki sonuç bağlanan olaydır.` },
  { u: `hak`, q: `Vasiyetname düzenlemek ve sözleşme yapmak hangisine örnektir?`,
    o: [`Hukuki işlem`, `Hukuki olay`, `Hukuka aykırı fiil`, `Hukuka uygun fiil`],
    e: `Hukuki işlem: bir veya birden fazla kişinin irade beyanıyla hukuki sonuç yaratmasıdır.` },
  { u: `hak`, q: `Hukuka aykırı fiiller özel hukukta hangi adla anılır?`,
    o: [`Haksız fiil`, `Suç`, `Kabahat`, `Hukuki işlem`],
    e: `Ceza hukukunda suç (cürüm veya kabahat), özel hukukta haksız fiil denir.` },
  { u: `hak`, q: `Hukuki fiiller için hangisi doğrudur?`,
    o: [`Fiil iradidir ama sonuç her zaman istenen sonuç olmayabilir`, `Kişinin iradesine hiç bağlı değildir`, `Yalnızca hukuka uygun fiillerden oluşur`, `Sadece sözleşmelerle ortaya çıkar`],
    e: `Hukuki fiiller irade ile gerçekleşir; hukuka aykırı ve hukuka uygun fiiller olarak ikiye ayrılır.` },
  { u: `hak`, q: `Hak ehliyeti ne zaman kazanılır?`,
    o: [`Sağ ve tam doğmak koşuluyla ana rahmine düşüldüğü anda`, `18 yaşın doldurulmasıyla`, `Ayırt etme gücüne sahip olunduğunda`, `Mahkeme kararıyla`],
    e: `Hak ehliyeti medeni haklardan yararlanma gücüdür ve ana rahmine düşüldüğü anda (sağ ve tam doğum koşuluyla) kazanılır.` },
  { u: `hak`, q: `Aşağıdakilerden hangisi fiil ehliyetinin şartlarından biri değildir?`,
    o: [`Tüzel kişi olmak`, `Ergin olmak`, `Ayırt etme gücüne sahip olmak`, `Kısıtlı olmamak`],
    e: `Fiil ehliyetinin şartları: ergin olmak (18 yaş), ayırt etme gücü ve kısıtlı olmamak.` },
  { u: `hak`, q: `Fiil ehliyetinin en önemli koşulu hangisidir?`,
    o: [`Ayırt etme gücüne sahip olmak`, `Ergin olmak`, `Kısıtlı olmamak`, `Tam ve sağ doğmak`],
    e: `Ayırt etme gücü yoksa kişi tam ehliyetsizdir; yaptığı işlemler hukuki sonuç doğurmaz.` },
  { u: `hak`, q: `Aşağıdakilerden hangisi notlarda kısıtlama sebebi olarak sayılmıştır?`,
    o: [`Bir yıl veya daha uzun süreli özgürlüğü bağlayıcı cezaya mahkûm olma`, `18 yaşından küçük olmak`, `Tüzel kişi temsilcisi olmak`, `Başka bir ülke vatandaşı olmak`],
    e: `Diğer sebepler: akıl hastalığı/zayıflığı; savurganlık, bağımlılık, kötü yaşama tarzı, kötü yönetim; yaşlılık, sakatlık, deneyimsizlik nedeniyle kendi isteği.` },
  { u: `hak`, q: `Notlara göre kamu hakları hangi üç gruba ayrılır?`,
    o: [`Kişinin hakları, sosyal ve ekonomik haklar, siyasi haklar`, `Özel haklar, mutlak haklar, siyasi haklar`, `Hak ehliyeti, fiil ehliyeti, kısıtlılık`, `Maddi, manevi ve ticari haklar`],
    e: `Kamu hakları kişiler ile devlet arasındaki ilişkileri düzenler ve kamu hukukundan doğar.` },
  { u: `hak`, q: `Kişiler arasındaki ilişkiyi düzenleyen, özel hukuktan doğan ve eşitlik ilkesinin geçerli olduğu haklar hangileridir?`,
    o: [`Özel haklar`, `Kamu hakları`, `Siyasi haklar`, `Temel haklar`],
    e: `Kamu hakları ise kişi ile devlet arasındaki ilişkileri düzenler.` },
  { u: `hak`, q: `Dernekler, vakıflar ve şirketler hangi kişi türüne girer?`,
    o: [`Tüzel kişi`, `Gerçek kişi`, `Kısıtlı kişi`, `Ehliyetsiz kişi`],
    e: `Tüzel kişi: örgütlenmiş kişi toplulukları ve belli amaca özgülenmiş mal toplulukları.` },
  { u: `hak`, q: `"Hak ehliyeti medeni haklardan …………, fiil ehliyeti ise medeni hakları …………… ifade eder." Boşlukları doğru dolduran seçenek hangisidir?`,
    o: [`yararlanmayı / kullanmayı`, `kullanmayı / yararlanmayı`, `devretmeyi / korumayı`, `kazanmayı / kaybetmeyi`],
    e: `Hak ehliyeti = yararlanma, fiil ehliyeti = kullanma.` },

  // 3 · medya
  { u: `medya`, q: `Notlara göre "kitle iletişimi" kavramı ilk kez ne zaman ve kim tarafından kullanılmıştır?`,
    o: [`1940'lı yıllarda Harold D. Lasswell`, `19. yüzyılda Mc Luhan`, `1927'de TRT`, `1948'de Birleşmiş Milletler`],
    e: `Lasswell kavramı siyasal erk ve propaganda çalışmalarında kullanmıştır.` },
  { u: `medya`, q: `Mc Luhan'ın dünya için yaptığı benzetme hangisidir?`,
    o: [`Küresel köy`, `Dördüncü kuvvet`, `Normlar hiyerarşisi`, `Kitle iletişim özgürlüğü`],
    e: `"Küresel köy" benzetmesinde kitle iletişim araçlarının ve teknolojinin payı büyüktür. "Dördüncü kuvvet" basın için kullanılır.` },
  { u: `medya`, q: `İletişimin oluşabilmesi için bir arada olması gereken temel ögeler hangileridir?`,
    o: [`Kaynak, ileti ve alıcı`, `Yasa, yaptırım ve devlet`, `Gazete, radyo ve televizyon`, `Basımcı, yayıncı ve eser sahibi`],
    e: `Kaynak, ileti ve alıcının yer almadığı bir iletişim kurgusu eksik olur.` },
  { u: `medya`, q: `Medya hukukunun kapsamında aşağıdakilerden hangisi sayılmamıştır?`,
    o: [`Vergi tahsili faaliyetleri`, `Radyo ve televizyon yayıncılığı`, `Sinema yayıncılığı`, `İnternet ortamında yayıncılık`],
    e: `Kapsam: basın yayın, radyo-TV, sinema ve internet yayıncılığı.` },
  { u: `medya`, q: `Ülkemizdeki medya hukuku düzenlemelerinin temelini ne oluşturur?`,
    o: [`Anayasa`, `Basın Kanunu`, `5651 sayılı Kanun`, `Türk Ceza Kanunu`],
    e: `Temel Anayasa'dır; md. 28 bunun en büyük örneğidir.` },
  { u: `medya`, q: `"Basın hürdür, sansür edilemez." ifadesi Anayasa'nın kaçıncı maddesindedir?`,
    o: [`28`, `13`, `25`, `26`],
    e: `Anayasa md. 28 "basın hürriyeti" başlığını taşır.` },
  { u: `medya`, q: `Ülkemizde medya hukukuna ilişkin kurallar için hangisi doğrudur?`,
    o: [`Birçok kanun ve çeşitli yönetmeliklerde yer alır`, `Tek bir yasa metninde toplanmıştır`, `Yalnızca Basın Kanunu'nda düzenlenmiştir`, `Yalnızca uluslararası sözleşmelerde yer alır`],
    e: `Notlar özellikle vurgular: medya hukuku kuralları tek bir yasada toplanmamıştır.` },
  { u: `medya`, q: `Medya hukukunun temel kavramlarından en önemlisi hangisidir?`,
    o: [`İfade özgürlüğü`, `Ticari iletişim`, `Yaptırım`, `Hak ehliyeti`],
    e: `İfade özgürlüğünün içinde kamuoyunun bilgi edinme hakkı da bulunur.` },
  { u: `medya`, q: `Aşağıdakilerden hangisi ifade özgürlüğünün sınırlandırılmasının şartlarından biri değildir?`,
    o: [`Sınırlamanın yönetmelikle yapılması`, `Sınırlamanın kanunla yapılması`, `Anayasaya uygunluk`, `Ölçülülük`],
    e: `Şartlar: kanunla olması, anayasaya uygunluk, demokratik toplum düzeninin gereklerine uygunluk, ölçülülük.` },
  { u: `medya`, q: `Aşağıdakilerden hangisi notlarda ifade özgürlüğünü sınırlayan haller arasında sayılmıştır?`,
    o: [`Genel sağlığın korunması`, `Reyting kaygısı`, `Ticari rekabet`, `Siyasi eleştiri`],
    e: `Diğerleri: ulusal güvenlik, ülke bütünlüğü, kamu emniyeti, suç işlenmesi veya düzensizliğin önlenmesi.` },

  // 4 · ozgurluk
  { u: `ozgurluk`, q: `Aşağıdaki tarihsel belgelerden hangisi en eskidir?`,
    o: [`Magna Carta`, `Haklar Bildirisi`, `Amerikan Bağımsızlık Bildirgesi`, `Fransız Devrimi`],
    e: `1215 Magna Carta → 1679 Haklar Bildirisi → 1776 Amerikan Bağımsızlık Bildirgesi → 1789 Fransız Devrimi.` },
  { u: `ozgurluk`, q: `İnsan haklarına devlet güvencesi sağlandığında bu haklar nasıl adlandırılır?`,
    o: [`Temel haklar`, `Kamu hakları`, `Özel haklar`, `Siyasi haklar`],
    e: `İnsan hakları devletten önce de vardır; devlet güvencesiyle "temel haklar" adını alır.` },
  { u: `ozgurluk`, q: `Anayasa'ya göre temel hak ve özgürlüklerinin kamu gücü tarafından ihlal edildiğini iddia eden kişi nereye bireysel başvuruda bulunabilir?`,
    o: [`Anayasa Mahkemesi`, `Sulh Ceza Hakimliği`, `Radyo ve Televizyon Üst Kurulu`, `Cumhuriyet Başsavcılığı`],
    e: `Bu, temel haklar ile otorite arasındaki paradoksal ilişkinin bir yönüdür.` },
  { u: `ozgurluk`, q: `İnsan Hakları Evrensel Beyannamesi hangi tarihte ilan edilmiştir?`,
    o: [`10 Aralık 1948`, `1679`, `1776`, `1990`],
    e: `Birleşmiş Milletler tarafından ilan edilmiştir; Türkiye de taraftır.` },
  { u: `ozgurluk`, q: `İHEB'de düşünce ve anlatım özgürlüğünü düzenleyen madde hangisidir?`,
    o: [`19. madde`, `18. madde`, `9. madde`, `28. madde`],
    e: `md. 18 düşünce, vicdan ve din özgürlüğünü; md. 19 düşünce ve anlatım özgürlüğünü düzenler.` },
  { u: `ozgurluk`, q: `"Herkes, düşünce ve kanaat hürriyetine sahiptir… kimse düşünce ve kanaatlerini açıklamaya zorlanamaz" hükmü Anayasa'nın hangi maddesindedir?`,
    o: [`25`, `26`, `28`, `13`],
    e: `md. 25 Anayasa'nın "Kişi Hak ve Ödevleri" kısmındadır; md. 26 düşünceyi açıklama ve yayma hürriyetidir.` },
  { u: `ozgurluk`, q: `Temel hak ve hürriyetlerin sınırlandırılmasına ilişkin genel kural Anayasa'nın hangi maddesinde düzenlenmiştir?`,
    o: [`13`, `25`, `26`, `28`],
    e: `md. 13'e göre temel hak ve özgürlükler ancak kanunla ve Anayasa'daki nedenlere dayanılarak sınırlanabilir.` },
  { u: `ozgurluk`, q: `Aşağıdakilerden hangisi kitle iletişim özgürlüğünün unsurlarından biri değildir?`,
    o: [`Haber ve bilgileri devlet iznine bağlı olarak yayabilme`, `Haber, bilgi, düşünce ve kanılara serbestçe ulaşabilme hakkı`, `Haber, bilgi, düşünce ve kanıları serbestçe ifade hakkı`, `Haber, bilgi, düşünce ve kanıları serbestçe yayabilme hakkı`],
    e: `Unsurlar: serbestçe ulaşabilme, ifade ve yayabilme hakkı.` },
  { u: `ozgurluk`, q: `Notlara göre kitle iletişim özgürlüğünün kapsamı hangi üç özgürlükten oluşur?`,
    o: [`Basın, görsel-işitsel iletişim ve internet özgürlüğü`, `Din, vicdan ve toplanma özgürlüğü`, `Eğitim, bilim ve sanat özgürlüğü`, `Basın, reklam ve sinema özgürlüğü`],
    e: `Kapsam: basın özgürlüğü, görsel-işitsel iletişim özgürlüğü, internet özgürlüğü.` },
  { u: `ozgurluk`, q: `Düşünce ve ifade özgürlüğü ile kitle iletişim özgürlüğü arasındaki ilişki nasıl tanımlanmıştır?`,
    o: [`Birbirini tamamlar`, `Birbirinden tamamen bağımsızdır`, `Kitle iletişim özgürlüğü düşünce özgürlüğünü sınırlar`, `Yalnızca basın için geçerlidir`],
    e: `Biri olmadan diğerinden söz edilemez; ikisi birbirini tamamlar.` },
  { u: `ozgurluk`, q: `Anayasa md. 28'e göre basımevi kurmak için hangisi doğrudur?`,
    o: [`İzin alma ve mali teminat yatırma şartına bağlanamaz`, `İzin almak şartıyla kurulabilir`, `Mali teminat yatırılması zorunludur`, `Ancak üst kurul kararıyla kurulabilir`],
    e: `"Basımevi kurmak izin alma ve mali teminat yatırma şartına bağlanamaz."` },
  { u: `ozgurluk`, q: `AİHS'nin ifade özgürlüğüne ilişkin hükmüne göre devletler radyo, televizyon ve sinema işletmelerini ne yapabilir?`,
    o: [`Bir izin rejimine tabi tutabilir`, `Tamamen yasaklayabilir`, `Sansüre tabi tutmak zorundadır`, `Hiçbir şekilde düzenleyemez`],
    e: `Madde, devletlerin bu işletmeleri izin rejimine tabi tutmalarına engel değildir.` },
  { u: `ozgurluk`, q: `Kitle iletişim özgürlüğü hangi sebeplerle sınırlanabilir?`,
    o: [`Yalnızca Anayasa'da öngörülen sebeplerle`, `Yayıncının uygun gördüğü sebeplerle`, `Yönetmelikte belirtilen her sebeple`, `Hiçbir sebeple sınırlanamaz`],
    e: `Anayasa'da öngörülen sebepler dışında sınırlama, özgürlüğe müdahale teşkil eder.` },

  // 5 · basin
  { u: `basin`, q: `Dar ve teknik anlamıyla basın nedir?`,
    o: [`Düşüncelerin basılmış eserlerle yazılı olarak kamuoyuna açıklandığı kitle iletişim aracı`, `Radyo ve televizyon yayınlarının tamamı`, `Yalnızca haber ajansları`, `İnternet ortamındaki tüm içerikler`],
    e: `Geniş anlamda ise düşüncelerin sınırsız sayıda çoğaltılıp kamuoyuna açıklanmasıdır.` },
  { u: `basin`, q: `Basın, yasama, yürütme ve yargının yanında nasıl nitelendirilir?`,
    o: [`Dördüncü kuvvet`, `Üst kurul`, `Yardımcı kaynak`, `Karma hukuk`],
    e: `İlkeli ve sorumlu yayıncılıkla iktidarı denetlediği ve özgürlükleri koruduğu için.` },
  { u: `basin`, q: `Basın Kanunu'nda temel kavramlar kanunun kaçıncı maddesinde tanımlanmıştır?`,
    o: [`2`, `8`, `18`, `28`],
    e: `Basın Kanunu md. 2: basılmış eser, yayım, süreli yayın, süresiz yayın, eser sahibi, yayıncı, basımcı vb.` },
  { u: `basin`, q: `"Belli aralıklarla yayımlanmayan, bir defalığına basılmış kitap türü eserler" hangi kavramın tanımıdır?`,
    o: [`Süresiz yayın`, `Süreli yayın`, `Yaygın süreli yayın`, `Basılmış eser`],
    e: `Süreli yayın ise bölümler halinde, önceden belirlenmiş bitişi olmayan yayındır (gazete, dergi).` },
  { u: `basin`, q: `Bir eseri basım araçlarıyla basan ya da çoğaltan gerçek veya tüzel kişiye ne denir?`,
    o: [`Basımcı`, `Yayıncı`, `Eser sahibi`, `Tüzel kişi temsilcisi`],
    e: `Yayıncı eseri basılmış eser haline getirip yayımlar; eser sahibi içeriği oluşturur.` },
  { u: `basin`, q: `Bir eseri basılmış eser durumuna getirip yayımlayan gerçek veya tüzel kişi kimdir?`,
    o: [`Yayıncı`, `Basımcı`, `Eser sahibi`, `Sorumlu müdür`],
    e: `Basımcı basan/çoğaltan, eser sahibi içeriği oluşturan kişidir.` },
  { u: `basin`, q: `Aşağıdakilerden hangisi notlarda süreli yayının türleri arasında sayılmamıştır?`,
    o: [`Uluslararası süreli yayın`, `Yaygın süreli yayın`, `Bölgesel süreli yayın`, `Yerel süreli yayın`],
    e: `Süreli yayın; yaygın, bölgesel ve yerel süreli yayın olarak ayrılır.` },
  { u: `basin`, q: `Basılmış eser tanımına aşağıdakilerden hangisi açıkça dahil edilmiştir?`,
    o: [`Haber ajansı yayınları`, `Radyo yayınları`, `Televizyon programları`, `Sosyal medya paylaşımları`],
    e: `Basılmış eser: basılan veya çoğaltılan yazı, resim ve benzeri eserler ile haber ajansı yayınları.` },
  { u: `basin`, q: `"Reklam ile haberin ayrılması, gizli reklam yapılmaması" hangi ilkedir?`,
    o: [`Editoryal bağımsızlık`, `Hesap verebilirlik`, `Şeffaflık`, `Kamu yararı gözetmek`],
    e: `Editoryal bağımsızlık ilkeli yayıncılığın unsurlarındandır.` },
  { u: `basin`, q: `"Yayıncıların hatalı içerikler için düzeltme ve özür mekanizmaları kurması" hangi kavramdır?`,
    o: [`Hesap verebilirlik`, `Editoryal bağımsızlık`, `Doğruluk ve tarafsızlık`, `Toplumsal değerlere uyum`],
    e: `Hesap verebilirlik sorumlu yayıncılığın unsurlarındandır.` },
  { u: `basin`, q: `Notlardaki kısa tanıma göre "topluma ve bireylere zarar vermemek, kamu yararını gözetmek" neyi ifade eder?`,
    o: [`Sorumlu yayıncılık`, `İlkeli yayıncılık`, `Basın suçu`, `Editoryal bağımsızlık`],
    e: `İlkeli yayıncılık ise "doğruyu, dürüstçe ve etik kurallara bağlı kalarak aktarmak" demektir.` },

  // 6 · yayincilik
  { u: `yayincilik`, q: `Türkiye'de ilk radyo yayını hangi yıl başlamıştır?`,
    o: [`1927`, `1968`, `1990`, `1948`],
    e: `Radyo 1927, televizyon 1968; 1990'a kadar TRT tekeli.` },
  { u: `yayincilik`, q: `Televizyonculuk hangi tarihe kadar TRT vasıtasıyla devlet tekelinde kalmıştır?`,
    o: [`1990`, `1968`, `1927`, `1948`],
    e: `1990'dan sonra özel televizyonlar kurulmaya başlamıştır.` },
  { u: `yayincilik`, q: `Radyo ve Televizyon Üst Kurulu'nun kuruluş, görev, yetki ve sorumluluklarını düzenleyen kanun hangisidir?`,
    o: [`Radyo ve Televizyonların Kuruluş ve Yayın Hizmetleri Hakkında Kanun`, `Türkiye Radyo Televizyon Kurumu Kanunu`, `Basın Kanunu`, `Bilgi Edinme Hakkı Kanunu`],
    e: `Bu kanun ayrıca reklam, tele alışveriş, sponsorluk ve ürün yerleştirmeyi de düzenler.` },
  { u: `yayincilik`, q: `Türkiye'de internetle ilgili en kapsamlı düzenleme hangisidir?`,
    o: [`5651 sayılı Kanun`, `5237 sayılı Kanun`, `Basın Kanunu`, `Fikir ve Sanat Eserleri Kanunu`],
    e: `5651: İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun. 5237 ise TCK'dır.` },
  { u: `yayincilik`, q: `Hizmet ve içerikleri barındıran sistemleri sağlayan veya işleten gerçek veya tüzel kişilere ne denir?`,
    o: [`Yer sağlayıcı`, `İçerik sağlayıcı`, `Erişim sağlayıcı`, `Medya hizmet sağlayıcı`],
    e: `İçerik sağlayıcı içeriği üretir; erişim sağlayıcı internete erişim olanağı sağlar.` },
  { u: `yayincilik`, q: `Yer sağlayıcı, konusu suç teşkil eden içeriği haberdar edildikten itibaren ne kadar sürede yayından çıkarmakla yükümlüdür?`,
    o: [`24 saat`, `2 gün`, `7 gün`, `15 gün`],
    e: `Yer sağlayıcı ayrıca trafik bilgilerini saklamakla yükümlüdür.` },
  { u: `yayincilik`, q: `TTNET ve Turkcell Superonline gibi firmalar 5651 sayılı Kanun'a göre hangi sıfata sahiptir?`,
    o: [`Erişim sağlayıcı`, `Yer sağlayıcı`, `İçerik sağlayıcı`, `Medya hizmet sağlayıcı`],
    e: `Erişim sağlayıcı: kullanıcılarına internet ortamına erişim olanağı sağlayan kişi.` },
  { u: `yayincilik`, q: `Erişim sağlayıcı için hangisi doğrudur?`,
    o: [`Bildirilen hukuka aykırı içeriğe erişimi ve alternatif erişim yollarını engellemekle yükümlüdür`, `Tüm içerikleri önceden kontrol etmekle yükümlüdür`, `İçerikleri bizzat üretir`, `Hiçbir yükümlülüğü yoktur`],
    e: `Erişim sağlayıcı içerikleri kontrol etmekle yükümlü değildir; ancak bildirim halinde erişimi engeller.` },
  { u: `yayincilik`, q: `Yer sağlayıcı için kural olarak hangisi doğrudur?`,
    o: [`Yer sağladığı içeriği kontrol etmek ve hukuka aykırılığı araştırmak zorunda değildir`, `Tüm içerikleri yayından önce denetlemek zorundadır`, `Trafik bilgilerini saklama yükümlülüğü yoktur`, `Bağlantı verilen tüm sitelerden sorumludur`],
    e: `Yer sağlayıcının araştırma yükümlülüğü yoktur; ama bildirimde 24 saatte kaldırır ve trafik bilgilerini saklar.` },
  { u: `yayincilik`, q: `Üyelik gerektiren bir web sitesinde içerik paylaşan üye hangi sıfata sahiptir?`,
    o: [`İçerik sağlayıcı`, `Yer sağlayıcı`, `Erişim sağlayıcı`, `Basımcı`],
    e: `Paylaşımın yapıldığı web adresinin sahibi ise yer sağlayıcıdır.` },
  { u: `yayincilik`, q: `RTV Kanunu'na göre özel yayıncılık kuruluşlarının yükümlülüklerinden biri hangisidir?`,
    o: [`Hisse devirleri ve şirket birleşmelerini üst kurula bildirmek`, `Basımevi kurmak için mali teminat yatırmak`, `Yayınlarını sorumlu müdüre onaylatmak`, `Her yayını Anayasa Mahkemesine bildirmek`],
    e: `Ayrıca logo ve çağrı işareti kullanmak zorundadırlar.` },

  // 7 · ceza
  { u: `ceza`, q: `Basın suçu nedir?`,
    o: [`Suç niteliği olan bir eylemin basılmış eserler yoluyla işlenmesi`, `Gazetecilere karşı işlenen suçlar`, `Yalnızca Basın Kanunu'ndaki idari yaptırımlar`, `Radyo-televizyon yayınlarında işlenen suçlar`],
    e: `Basın suçları; Basın Kanunu'ndaki suçları ve TCK'daki bazı suçların basın yoluyla işlenmesini kapsar.` },
  { u: `ceza`, q: `Radyo ve televizyon yayınlarında Basın Kanunu'na göre daha net ilkeler ve yasaklar getirilmesinin sebebi nedir?`,
    o: [`Daha hızlı ve daha geniş kitlelere yayılmaları`, `Daha az izlenmeleri`, `Devlet tekelinde olmaları`, `Uluslararası sözleşmelere tabi olmamaları`],
    e: `Ayrıca toplum bu yayınlara kolayca ulaşabilir.` },
  { u: `ceza`, q: `İçerik sağlayıcının sorumluluğu için hangisi doğrudur?`,
    o: [`Sunduğu her türlü içerikten sorumludur, bağlantı sağladığı başkasına ait içerikten sorumlu olmaz`, `Bağlantı verdiği tüm içeriklerden sorumludur`, `Hiçbir içerikten sorumlu değildir`, `Yalnızca trafik bilgilerinden sorumludur`],
    e: `Sosyal medyada paylaşım yapan kişiler de içerik sağlayıcıdır.` },
  { u: `ceza`, q: `Facebook, Twitter, Instagram, YouTube ve LinkedIn gibi sosyal medya araçları hangi sıfata sahiptir?`,
    o: [`Yer sağlayıcı`, `İçerik sağlayıcı`, `Erişim sağlayıcı`, `Basımcı`],
    e: `Platform yer sağlayıcıdır; platformda paylaşım yapan kullanıcı içerik sağlayıcıdır.` },
  { u: `ceza`, q: `Erişim sağlayıcı, sağladığı hizmete ilişkin trafik bilgilerinin hangi özelliklerini sağlamakla yükümlüdür?`,
    o: [`Doğruluk, bütünlük ve gizlilik`, `Hız, kapasite ve süreklilik`, `Tarafsızlık, şeffaflık ve hesap verebilirlik`, `Güncellik, kamu yararı ve ölçülülük`],
    e: `Erişim sağlayıcı ayrıca hukuka aykırı içeriğe erişimi engeller.` },
  { u: `ceza`, q: `Aşağıdakilerden hangisi notlarda TCK'da düzenlenen ve medya yoluyla işlenebilen suçlar arasında sayılmamıştır?`,
    o: [`Vergi kaçakçılığı`, `Müstehcenlik`, `İftira`, `Suçu ve suçluyu övme`],
    e: `Diğerleri: hakaret, özel hayatın ve haberleşmenin gizliliğini ihlal, halkı kin ve düşmanlığa tahrik vb.` },
  { u: `ceza`, q: `Yayın hizmeti ilkelerine göre kişi ve kuruluşlar hakkında aşağıdakilerden hangisi yapılamaz?`,
    o: [`Eleştiri sınırları dışında aşağılayıcı, karalayıcı veya iftira niteliğinde ifadeler bulundurmak`, `Eleştiri sınırları içinde haber yapmak`, `Kamu yararı taşıyan bilgileri aktarmak`, `Düzeltme ve cevap metni yayınlamak`],
    e: `Yayınlar özel hayatın gizliliğine ve şerefe saygılı olmak zorundadır.` },
  { u: `ceza`, q: `Yer sağlayıcı, yer sağladığı hukuka aykırı içerikten haberdar edildiğinde ne yapmakla yükümlüdür?`,
    o: [`Teknik olarak imkân bulduğu ölçüde içeriği yayından kaldırmak`, `İçeriği üreten kişiyi cezalandırmak`, `Hiçbir şey yapmamak`, `Tüm siteye erişimi kalıcı olarak kapatmak`],
    e: `Yer sağlayıcının önceden araştırma yükümlülüğü yoktur; haberdar edilince kaldırır.` },

  // 8 · kisilik
  { u: `kisilik`, q: `Aşağıdakilerden hangisi kişilik haklarının özelliklerinden biri değildir?`,
    o: [`Mirasçılara geçer`, `Para ile ölçülemez`, `Devredilemez`, `Mutlak haktır`],
    e: `Kişilik hakları para ile ölçülemeyen, devredilemeyen ve mirasçılara geçmeyen mutlak haklardır.` },
  { u: `kisilik`, q: `Kişilik hakkına yapılan saldırı sonucu manevi bir zarar meydana gelmişse hangi dava açılabilir?`,
    o: [`Manevi tazminat davası`, `Maddi tazminat davası`, `Cevap ve düzeltme davası`, `Unutulma hakkı davası`],
    e: `Maddi zarar varsa maddi, manevi zarar varsa manevi tazminat davası açılabilir.` },
  { u: `kisilik`, q: `Şeref ve haysiyeti hedef alan bir haberin hukuka uygun olması için gerekli ölçütler hangileridir?`,
    o: [`Gerçeklik, güncellik, kamu yararı, ölçülülük`, `Hız, tıklanma, reyting, reklam geliri`, `Tarafsızlık, şeffaflık, editoryal bağımsızlık, hesap verebilirlik`, `Kanunilik, şahsilik, eşitlik, bağlayıcılık`],
    e: `Ölçülülük: haberde hakaret niteliğinde sözler bulunmamalıdır.` },
  { u: `kisilik`, q: `Öz ad ve soyadının yanında aşağıdakilerden hangisi de kişilik hakkı çerçevesinde "ad" olarak korunur?`,
    o: [`Elektronik posta adresi`, `IP numarası`, `Trafik bilgisi`, `Logo ve çağrı işareti`],
    e: `Müstear ad, lakap, kısaltılmış ad, temsili adres, e-posta ve telgraf adresleri de korunur.` },
  { u: `kisilik`, q: `Bir kişinin haber içinde yer alan bir fotoğrafta bulunması için hangisi doğrudur?`,
    o: [`Toplumun haber alma ihtiyacını karşıladığı için hukuka aykırı tecavüz teşkil etmez`, `Her durumda kişilik hakkı ihlalidir`, `Yalnızca ünlüler için ihlaldir`, `Mutlaka manevi tazminat gerektirir`],
    e: `Ama fotoğrafın bozularak veya ticari, reklam amaçlı, istismar edici şekilde çoğaltılması ihlaldir.` },
  { u: `kisilik`, q: `Aşağıdakilerden hangisi notlarda "kişinin sırları" kapsamında sayılmıştır?`,
    o: [`Sağlık durumu`, `Yayımlanmış gazete haberi`, `Tarihsel veri`, `Bilimsel bilgi`],
    e: `Kişinin sırları: sağlık durumu, ticari sırlar, gizli çekimle kaydedilmiş görüntüler.` },
  { u: `kisilik`, q: `Kişilik haklarının korunmasına ilişkin düzenlemeler arasında Türk Medeni Kanunu'nun hangi maddeleri sayılmıştır?`,
    o: [`23, 24 ve 25. maddeler`, `13, 25 ve 26. maddeler`, `8 ve 18. maddeler`, `125. madde`],
    e: `Ayrıca TBK 49, KVKK, TTK, FSEK, 5651 ve TCK.` },
  { u: `kisilik`, q: `Maddi kişilik hakları hangi iki gruba ayrılır?`,
    o: [`Bedensel haklar ve mülkiyet hakları`, `Din ve vicdan özgürlüğü`, `Özel haklar ve kamu hakları`, `Hak ehliyeti ve fiil ehliyeti`],
    e: `Manevi kişilik hakları ise manevi varlığı geliştirme, din ve vicdan, haberleşme özgürlüğü ve özel yaşamın gizliliğidir.` },
  { u: `kisilik`, q: `Hayatının devamı için derhal müdahale gereken ve rızası alınamayan bir hastaya doktorun müdahalesi için hangisi doğrudur?`,
    o: [`Hukuka aykırı sayılmaz`, `Her durumda hukuka aykırıdır`, `Kişilik hakkına saldırıdır`, `Hastanın tedaviyi reddetme hakkını ortadan kaldırır`],
    e: `Normalde tedaviye rıza müdahaleyi hukuka uygun kılar; acil durumda rıza alınamıyorsa müdahale hukuka aykırı sayılmaz.` },
  { u: `kisilik`, q: `Kişisel verilerin işlenmesinde uyulacak ilkeler arasında hangisi notlarda sayılmıştır?`,
    o: [`Açık ve meşru amaç taşıma`, `Reklam amacı taşıma`, `Süresiz saklama`, `Kamuya açık paylaşım`],
    e: `İlkeler: güncel olma; açık ve meşru amaç; amaçla bağlantılı ve ölçülü olma; mevzuata ve amaca uygun süre.` },

  // 9 · unutulma
  { u: `unutulma`, q: `Unutulma hakkı esas olarak neyi talep etme hakkıdır?`,
    o: [`İçeriğin arama motorlarında listelenmemesini (delisting)`, `İçeriğin internetten tamamen silinmesini`, `Yayıncının cezalandırılmasını`, `Cevap metninin yayımlanmasını`],
    e: `Unutulma hakkı içeriğin kaldırılmasını talep hakkı değildir.` },
  { u: `unutulma`, q: `Unutulma hakkını kişilik haklarının korunmasına ilişkin temel talep hakkından ayıran nokta nedir?`,
    o: [`İçeriğin internette bulunmasının hukuki ve meşru bir sebebe dayanması`, `İçeriğin suç teşkil etmesi`, `İçeriğin yalnızca sosyal medyada bulunması`, `Talebin doğrudan mahkemeye yapılması`],
    e: `Unutulma hakkı, hukuka uygun içeriğin arama motorlarında listelenmemesini talep hakkıdır.` },
  { u: `unutulma`, q: `Unutulma hakkı mevzuatta düzenlenmemiş olsa bile devletin bu hakkı sağlama yükümlülüğü nasıl nitelendirilir?`,
    o: [`Pozitif yükümlülük`, `Negatif yükümlülük`, `Ahlaki yükümlülük`, `İhtiyari yetki`],
    e: `Unutulma hakkı yaşam hakkı gibi evrensel nitelikte bir haktır.` },
  { u: `unutulma`, q: `Bir milletvekilinin karıştığı önemli bir yolsuzluk skandalına ilişkin haber için unutulma hakkı neden kullanılamaz?`,
    o: [`Haberin yayında kalmasında kamu yararı vardır`, `Haber güncelliğini yitirmiştir`, `Haber değer yargısı içerir`, `Haber bilimsel bilgi sunar`],
    e: `Şart: haberin internette bulunmasında hiçbir şekilde kamu yararı olmamalıdır.` },
  { u: `unutulma`, q: `Notlardaki örneğe göre yayında kalma süresi bakımından hangisi doğrudur?`,
    o: [`1 yıl kalan içerik için istenemez, 5 yıl kalan içerik için istenebilir`, `Her içerik 1 yıl sonra kaldırılabilir`, `Süre hiçbir önem taşımaz`, `En az 20 yıl geçmesi gerekir`],
    e: `Yayında kalma süresi, hakkın kullanılıp kullanılamayacağını belirleyen kıstaslardandır.` },
  { u: `unutulma`, q: `Hangi tür içeriğin unutulma hakkı çerçevesinde kaldırılması daha kolaydır?`,
    o: [`Değer yargısı içeren ("yapılan alçaklıktır" gibi) içerik`, `Olgusal gerçeklere dayalı haber`, `Tarihsel veri içeren içerik`, `Bilimsel bilgi sunan içerik`],
    e: `Olgusal gerçeğe dayalı haberin kaldırılması daha zordur; tarihsel ve bilimsel içerikler kaldırılmaz.` },
  { u: `unutulma`, q: `Altın Kelebek ödül töreninde yaptığı konuşma çok tartışılan sinema oyuncusu örneği hangi kıstası açıklar?`,
    o: [`Kişinin siyasetçi veya ünlü olup olmaması`, `Haberin tarihsel veri içermesi`, `Haberin bilimsel bilgi sunması`, `Halkın ilgisinin düşük olması`],
    e: `Ünlüler eleştiriye daha fazla katlanmak zorundadır; oyuncu 20 yıl geçse de kaldırılmasını isteyemez.` },
  { u: `unutulma`, q: `Unutulma hakkı için geçmesi gereken "makul süre" için hangisi doğrudur?`,
    o: [`Önceden kategorik belirlenmez; her somut olaya göre değerlendirilir`, `Kanunda kesin olarak 5 yıl belirlenmiştir`, `Her durumda 15 yıldır`, `Yayından itibaren 1 yıldır`],
    e: `Kişisel veri içeren haberde 5 yıl yetebilir; kişisel veri yoksa 15 yıl bile yetmeyebilir.` },
  { u: `unutulma`, q: `Arama motoru talebi reddederse veya süresinde cevap vermezse Türkiye'de nereye başvurulabilir?`,
    o: [`KVKK'ya veya 5651 kapsamında Sulh Ceza Hakimliğine`, `Radyo ve Televizyon Üst Kurulu'na`, `Yayının sorumlu müdürüne`, `Erişim sağlayıcıya`],
    e: `İlk adım arama motoruna veya veri sorumlusuna doğrudan başvurudur.` },
  { u: `unutulma`, q: `Unutulma hakkı için hangisi doğrudur?`,
    o: [`Tüzel kişiler (şirketler) KVKK kapsamında bu haktan yararlanamaz`, `Mutlak bir haktır, hiçbir hakla dengelenmez`, `Yalnızca siyasetçiler kullanabilir`, `İçeriğin internetten silinmesini sağlar`],
    e: `Hak mutlak değildir; ifade özgürlüğü, basın hürriyeti ve haber alma hakkı ile dengelenir.` },

  // 10 · cevap
  { u: `cevap`, q: `Basın Kanunu'na göre düzeltme ve cevap hakkının doğma nedenleri hangileridir?`,
    o: [`Yayının kişinin şeref ve haysiyetine dokunması veya gerçeğe aykırı olması`, `Yayının ticari reklam içermesi`, `Yayının bir yıldan eski olması`, `Yayının internette de yer alması`],
    e: `Aynı nedenler radyo-TV yayınları için de geçerlidir.` },
  { u: `cevap`, q: `Süreli yayınlarda cevap metni, yayın tarihinden itibaren en geç ne kadar süre içinde gönderilmelidir?`,
    o: [`2 ay`, `60 gün`, `15 gün`, `6 ay`],
    e: `Basın Kanunu'nda süre "ay" (2 ay), RTV'de "gün" (60 gün) olarak belirlenmiştir.` },
  { u: `cevap`, q: `Süreli yayınlarda düzeltme ve cevap metni kime gönderilir?`,
    o: [`İlgili yayının sorumlu müdürüne`, `Medya hizmet sağlayıcıya`, `Yer sağlayıcıya`, `Cumhuriyet Başsavcılığına`],
    e: `Süresinde gönderilmezse cevap hakkı kaybedilir.` },
  { u: `cevap`, q: `Günlük süreli yayınlarda cevap metninin yayımlanma süresi nedir?`,
    o: [`Yazının alındığı tarihten itibaren 3 gün`, `7 gün`, `2 gün`, `Bir hafta`],
    e: `7 gün RTV için, 2 gün internet için geçerli süredir.` },
  { u: `cevap`, q: `Aşağıdakilerden hangisi süreli yayınlarda düzeltme ve cevap yazısının şartlarından biri değildir?`,
    o: [`İlgili yazıdan en az iki kat uzun olması`, `Suç unsuru içermemesi`, `Üçüncü kişilerin hukuken korunan menfaatlerine aykırı olmaması`, `Cevap verilen yayınla ilgili olması`],
    e: `Tam tersine: düzeltme ve cevap, ilgili yazıdan uzun olamaz.` },
  { u: `cevap`, q: `Süreli yayınlarda düzeltme ve cevap yazısı nasıl yayımlanmalıdır?`,
    o: [`İlgili yayının yer aldığı sayfa ve sütunlarda, aynı puntolarla ve aynı şekilde`, `Gazetenin son sayfasında, küçük puntoyla`, `Yalnızca internet sitesinde`, `Yayıncının seçtiği herhangi bir sayfada`],
    e: `Koşullara aykırı yayımlanırsa 15 gün içinde sulh ceza hâkimine başvurulabilir.` },
  { u: `cevap`, q: `Radyo ve televizyon yayınlarında düzeltme ve cevap metni yayın tarihinden itibaren kaç gün içinde gönderilmelidir?`,
    o: [`60 gün`, `2 ay`, `15 gün`, `7 gün`],
    e: `RTV'de süre gün olarak belirlenmiştir; süre hesabında dikkat edilmelidir.` },
  { u: `cevap`, q: `Medya hizmet sağlayıcı cevap metnini aldığı tarihten itibaren en geç ne zaman yayınlamalıdır?`,
    o: [`7 gün içinde`, `3 gün içinde`, `24 saat içinde`, `2 ay içinde`],
    e: `Hiçbir düzeltme ve ekleme yapmadan, konu yayının yapıldığı saatte ve programda yayınlar.` },
  { u: `cevap`, q: `RTV Kanunu'nda düzeltme ve cevap hakkıyla ilgili olarak hangi maddeler anılmıştır?`,
    o: [`8. madde (yayın hizmeti ilkeleri) ve 18. madde`, `Yalnızca 2. madde`, `13. ve 28. maddeler`, `125. madde`],
    e: `md. 8 cevap hakkına saygıyı, md. 18 hakkın sınırlarını düzenler.` },
  { u: `cevap`, q: `İnternette kişilik hakları ihlal edilen kişi ilk olarak kime başvurur?`,
    o: [`İçerik sağlayıcıya`, `Erişim sağlayıcıya`, `BTK'ya`, `Sorumlu müdüre`],
    e: `İçerik sağlayıcıya ulaşılamazsa talep yer sağlayıcıya iletilir.` },
  { u: `cevap`, q: `İnternet yayınlarında içeriğin kaldırılması talebi kaç gün içinde yerine getirilmezse reddedilmiş sayılır?`,
    o: [`2 gün`, `7 gün`, `15 gün`, `24 saat`],
    e: `Ardından kişi 15 gün içinde Sulh Ceza Hakimliğine başvurabilir.` },
  { u: `cevap`, q: `İnternette talebi reddedilen kişi kaç gün içinde Sulh Ceza Hakimliğine başvurabilir?`,
    o: [`15 gün`, `2 gün`, `60 gün`, `6 ay`],
    e: `Başvuru yerleşim yeri Sulh Ceza Hakimliğine yapılır.` },
  { u: `cevap`, q: `İnternet ortamında düzeltme ve cevap metni ne kadar süre yayında kalmalıdır?`,
    o: [`Bir hafta`, `24 saat`, `Bir ay`, `Süresiz`],
    e: `Cevap metninin internet ortamında bir hafta yayınlanması gerekir.` },

  // 11 · hakaret
  { u: `hakaret`, q: `Hakaret suçu Türk Ceza Kanunu'nun hangi maddesinde tanımlanmıştır?`,
    o: [`125. madde`, `28. madde`, `49. madde`, `23. madde`],
    e: `Sosyal medya üzerinden hakaret md. 125/2'de düzenlenmiştir.` },
  { u: `hakaret`, q: `Hakaret suçu TCK'nın hangi bölümünde yer alır?`,
    o: [`Şerefe Karşı Suçlar`, `Basın Suçları`, `Yayın Hizmeti İlkeleri`, `Kişisel Verilerin Korunması`],
    e: `5237 sayılı TCK'nın sekizinci bölümü: "Şerefe Karşı Suçlar".` },
  { u: `hakaret`, q: `Sosyal medya üzerinden işlenen hakaret suçunun cezası nedir?`,
    o: [`Üç aydan iki yıla kadar hapis veya adli para cezası`, `Altı aydan bir yıla kadar hapis`, `Yalnızca idari para cezası`, `Bir yıldan beş yıla kadar hapis`],
    e: `Suçun temel şekline ilişkin cezaya tabidir.` },
  { u: `hakaret`, q: `Hakaret suçunda mağdurun şikâyet süresi en geç ne kadardır?`,
    o: [`6 ay`, `15 gün`, `2 ay`, `1 yıl`],
    e: `Notlar: "Hakaret suçunda zaman aşımı 6 aydır."` },
  { u: `hakaret`, q: `Hakaret suçları için hangisi doğrudur?`,
    o: [`Şikâyete bağlı ve uzlaştırmaya tabi suçlardır`, `Şikâyete bağlı değildir ve uzlaştırma yapılamaz`, `Yalnızca hukuk mahkemesinde görülür`, `Hakaret için tazminat davası açılamaz`],
    e: `Uzlaştırma teklifi yapılmadan soruşturma yapılamaz.` },
  { u: `hakaret`, q: `Sosyal medyada hakarete maruz kalan kişinin ilk yapması gereken nedir?`,
    o: [`Tarih ve failin kimlik bilgilerini gösteren ekran görüntüsü almak`, `Doğrudan tazminat davası açmak`, `Arama motoruna unutulma başvurusu yapmak`, `RTÜK'e şikâyette bulunmak`],
    e: `Ekran görüntüsü en hızlı ve pratik delil yöntemidir.` },
  { u: `hakaret`, q: `Mağdur, hakaret şikâyetini dilekçesiyle nereye yapmalıdır?`,
    o: [`Cumhuriyet Başsavcılığı`, `Radyo ve Televizyon Üst Kurulu`, `Anayasa Mahkemesi`, `Kişisel Verileri Koruma Kurumu`],
    e: `Dilekçeye hakaret içeren ekran görüntüleri eklenir.` },
  { u: `hakaret`, q: `IP adresinin kime ait olduğu nereden öğrenilir?`,
    o: [`İnternet servis sağlayıcı veya BTK`, `Radyo ve Televizyon Üst Kurulu`, `Yayının sorumlu müdürü`, `Arama motorları`],
    e: `IP → kullanılan cihaz → cihazın sahibi şeklinde tespit yapılır.` },
  { u: `hakaret`, q: `IP tespit işlemleri hangi yolla yapılabilir?`,
    o: [`Cumhuriyet savcıları veya mahkeme kararıyla`, `Mağdurun kendi başvurusuyla doğrudan`, `Sosyal medya kullanıcılarının bildirimiyle`, `Yayıncının talebiyle`],
    e: `IP sahibinin hesabı kendisinin kullanıp kullanmadığı ifadelerle netleşir.` },
  { u: `hakaret`, q: `Kimliği gizlenerek açılan hesaplarda failin tespitinin zor olmasının nedeni nedir?`,
    o: [`Sunucular ABD'dedir ve ABD hakareti "hafif suç" saydığından kimlik bilgisi paylaşmaz`, `Türkiye'de IP tespiti yasaktır`, `Hakaret suçu şikâyete bağlı değildir`, `5651 sayılı Kanun sosyal medyayı kapsamaz`],
    e: `Bilgiler ancak uluslararası yazışmalarla temin edilebilir; ABD hakaret için paylaşım yapmamaktadır.` },
  { u: `hakaret`, q: `Hakaret mağdurunun tazminat davası için hangisi doğrudur?`,
    o: [`Ceza davasından bağımsız açılabilir; sonuçlanan ceza dosyası delil niteliği taşır`, `Ceza davası açılmışsa tazminat davası açılamaz`, `Yalnızca ceza davası reddedilirse açılabilir`, `Yalnızca maddi zarar için açılabilir`],
    e: `Mağdurun hem ceza davası hem de hukuk (tazminat) davası hakkı vardır.` }
]
});
