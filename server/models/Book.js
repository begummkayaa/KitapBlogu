// server/models/Book.js (Güncellendi)
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  reviewContent: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  // --- YENİ EKLENEN KISIM ---
  readingLists: [{ // Bir kitabın ait olduğu okuma listelerinin isimlerini tutan dizi
    type: String,
    enum: ['Favorilerim', 'Keşfetmeye Değer', 'Yeniden Okuyacaklarım'], // Sadece bu değerler kabul edilir
  }],
  // --- YENİ EKLENEN KISIM SONU ---
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

bookSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;