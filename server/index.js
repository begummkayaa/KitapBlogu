const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Rotlarımızı buraya import ediyoruz
const bookRoutes = require('./routes/bookRoutes');
const readingListRoutes = require('./routes/readingListRoutes'); // YENİ: Okuma listesi rotalarını import et

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kitapblogu';

// --- MIDDLEWARE'LER ---
app.use(cors());
app.use(express.json()); // Body parser middleware'i

// --- VERİTABANI BAĞLANTISI ---
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB\'ye başarıyla bağlandı!');
  })
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

// --- API ROTLARI YÖNLENDİRMELERİ ---

// Kitap API rotaları için: '/api/books' ile başlayan tüm istekleri bookRoutes'a yönlendir.
app.use('/api/books', bookRoutes);

// Okuma Listesi API rotaları için: '/api/readinglists' ile başlayan tüm istekleri readingListRoutes'a yönlendir.
app.use('/api/readinglists', readingListRoutes); // YENİ: Okuma listesi rotalarını ekle

// Ana rota (sunucunun çalıştığını kontrol etmek için)
app.get('/', (req, res) => {
  res.send('Kitapların Nabzı Sunucusu ve MongoDB Bağlı, API hazır!');
});

// --- SUNUCUYU DİNLEMEYE BAŞLA ---
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});