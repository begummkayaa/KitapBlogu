# 📚 Kitapların Nabzı

Bu, kitap incelemelerini yayınlamanıza, yönetmenize, düzenlemenize olanak sağlayan **MERN-stack** bir kitap blog uygulamasıdır.

**Front-end**, video arka planı, gezinme çubuğu ve Ana Sayfa, İncelemeler, Hakkında ve bireysel Kitap Ayrıntıları sayfaları ile temiz ve yönlendirilmiş (routed) bir deneyim sunar.

**Back-end**, MongoDB destekli bir RESTful API sunarak kitap incelemeleri için tam CRUD (Oluşturma, Okuma, Güncelleme, Silme) işlevselliği sağlar.

---

## ✨ Ana Özellikler

* **📝 Kitap İncelemeleri:**
    * Tüm incelemeleri listeleyin.
    * Tek bir incelemeyi (başlık, yazar, tür, puan, kapak resmi, inceleme metni, oluşturulma tarihi) görüntüleyin.
    * Yeni incelemeler oluşturun, mevcutları güncelleyin ve silin.
      
* **🧭 Yönlendirilmiş Kullanıcı Arayüzü:** `react-router-dom` kullanarak Ana Sayfa, İncelemeler, Hakkında ve derin bağlantı destekli Kitap Detayı (`/incelemeler/:id`) sayfaları arasında gezinin.
  
* **📱 Duyarlı Kullanıcı Arayüzü Öğeleri:** Şık bir sunum için kalıcı gezinme çubuğu ve video arka planı.

## 🚀 Amaç

Bu projenin amacı, veri yönetimi için basit bir API ile kitap incelemelerini yayınlamak ve düzenlemek için kişisel ve bakımı kolay bir alan sağlamaktır.

## 🛠️ Kullanılan Teknolojiler

### 🌐 Frontend (İstemci)

* **JavaScript (ES6+)**
* **React**: Kullanıcı arayüzü kütüphanesi
* **React Router (`react-router-dom`)**: Sayfa yönlendirmesi için
* **Axios**: API istekleri için HTTP istemcisi
* **Font Awesome (React)**: İkonlar için
* **React Scripts (`create-react-app`)**: Proje yapılandırması ve scriptler
* **Web Vitals**: Performans takibi
* **Testing Library (`@testing-library/jest-dom`, `@testing-library/react`)**: Bileşen testleri

### 🖥️ Backend (Sunucu)

* **Node.js**: Çalışma zamanı ortamı
* **Express (v5)**: RESTful API oluşturmak için web framework'ü
* **Mongoose**: MongoDB için ODM (Object Data Modeling)
* **MongoDB**: NoSQL veritabanı
* **CORS**: Çapraz kaynak (cross-origin) isteklerine izin vermek için
* **dotenv**: Ortam değişkenlerini yönetmek için

### 🔧 Araçlar

* **npm**: Paket yönetimi
* **ESLint**: Kod kalitesi ve linting (`react-app` yapılandırması)

### 📁 Proje Yapısı

Proje, bir monorepo benzeri yapıda `client` (ön uç) ve `server` (arka uç) olmak üzere iki ana klasöre ayrılmıştır.

```bash
kitap-blog-projesi/
├── 📁 client/               # React SPA (Ön Uç)
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/          # (AnaSayfa, Incelemeler, KitapDetay, Hakkinda)
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── 📁 server/               # Express API (Arka Uç)
│   ├── models/             # (Book.js, ReadingList.js)
│   ├── routes/             # (api.js - /api/books, /api/readinglists)
│   ├── controllers/
│   ├── .env.example        # (MONGO_URI, PORT)
│   ├── server.js           # (API giriş noktası)
│   └── package.json
│
└── .gitignore

### 🚀 Kurulum ve Çalıştırma

Projeyi yerel makinenizde kurmak ve çalıştırmak için aşağıdaki adımları sırasıyla izleyin.

**Ön Koşullar:**
* [Node.js](https://nodejs.org/) (ve npm)
* [MongoDB](https://www.mongodb.com/try/download/community) (Yerel olarak veya bir MongoDB Atlas hesabı)

---

### 1. Adım: Projeyi Klonlayın ve Arka Ucu (Server) Ayarlayın

İlk olarak, `server` dizinindeki API'yi kurup çalıştıracağız.

```bash
# 1. 🐑 Proje deposunu klonlayın (Henüz yapmadıysanız)
git clone [PROJE_URLSİ BURAYA GELECEK]
cd [PROJE_KLASÖRÜ_ADI]

# 2. 📂 Server dizinine gidin
cd server

# 3. 📦 Gerekli paketleri yükleyin
npm install

# 4. 🔑 Ortam değişkenleri için .env dosyası oluşturun
# (server/.env.example dosyasını kopyalayıp düzenleyebilirsiniz)
# İçeriği en az şunları içermelidir:
# MONGO_URI=mongodb://localhost:27017/kitapblog
# PORT=5000
touch .env

# 5. ▶️ Arka uç sunucusunu başlatın
# (Bu terminali sunucu çalışır durumda bırakın)
npm start

### 2. Adım: Ön Ucu (Client) Ayarlayın
# 1. 📂 (Yeni terminalde) Proje kök dizininden client klasörüne gidin
cd [PROJE_KLASÖRÜ_ADI]/client

# 2. 📦 Gerekli paketleri yükleyin
npm install

# 3. 🔗 (Önemli) API Proxy Ayarı
# client/package.json dosyanızı açın ve API isteklerinin
# arka uca yönlendirilmesi için şu satırı ekleyin:
#
# "proxy": "http://localhost:5000"
#

# 4. ▶️ React geliştirme sunucusunu başlatın
npm start
