# Kütüphaneler

- react
- axios : api istekleri için
- tailwindcss : stillendirme için
- react-router-dom : birden fazla sayfa için
- react-icons : ikonlar için

# Kaynaklar

- API: https://rapidapi.com/ytjar/api/yt-api

# Enviroment Variables

- Ortam değişkenleri, projenizde kullanmanız gereken ama herkesle paylaşmak istemeyeceğiniz ve githuna gönderilmesini engelleyeceğiniz değişkenlerdir.
- Projeyi yeniden yayınlamadan bu değerleri değiştirebiliriz.
- (api key, varitabanı url, admin variables, project variables)

- proje içerisinde bir `.env` isimli dosya aç
- `VITE_DEĞİŞKEN_İSMİ=değişkenin değeri` formatıyla tanımlanır
- proje içerisinde `import.meta.env.VITE_DEĞİŞKEN_İSMİ` ifadesyile env değişkenlere erişebiliriz.
- .env klasörünü .gitignore'a ekleyerek githuba gönderilmesini engelleriz
- daha sonra projeyi indirip başlatacak kişilere yardımcı olma amacıyla `.env.example` dosyası oluşturup hangi değişkenlerin tanımlanması gerektiğini belirtebiliriz
