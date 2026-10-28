// Siteye kullanıcı adı ve şifreyle giriş (HTTP Basic Auth).
// Vercel bunu her istekte çalıştırır: sayfalar, özet PDF'leri ve orijinal materyaller dahil.
// Bilgileri kodu değiştirmeden güncellemek için Vercel > Settings > Environment Variables'a
// SITE_USER ve SITE_PASSWORD ekleyip yeniden deploy etmen yeterli.

const env = typeof process !== 'undefined' ? process.env : {};
const USER = env.SITE_USER || 'ecem';
const PASSWORD = env.SITE_PASSWORD || 'alp';

export default function middleware(request) {
  const [scheme, encoded] = (request.headers.get('authorization') || '').split(' ');
  if (scheme === 'Basic' && encoded) {
    try {
      const decoded = atob(encoded);
      const i = decoded.indexOf(':');
      if (i > -1 && decoded.slice(0, i) === USER && decoded.slice(i + 1) === PASSWORD) {
        // @vercel/functions next() ile aynı: isteği statik dosyaya devam ettir
        return new Response(null, { headers: { 'x-middleware-next': '1' } });
      }
    } catch (e) { /* bozuk başlık: giriş iste */ }
  }
  return new Response('Giriş gerekli.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Ecem\'in Dersleri", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
}
