// Model'imizi (M) çağırıyoruz ki veritabanıyla konuşabilsin
const Book = require('../models/Book');

// 1. Tüm kitapları getiren fonksiyon (app.get'in içinden KESTİK)
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2. Tek bir kitabı getiren fonksiyon (diğer app.get'in içinden KESTİK)
exports.getOneBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Kitap bulunamadı' });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3. Yeni Kitap İncelemesi Ekleme (POST /api/books)
exports.createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 4. Kitap İncelemesini Güncelleme (PUT /api/books/:id)
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedBook) return res.status(404).json({ message: 'Kitap bulunamadı' });
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 5. Kitap İncelemesini Silme (DELETE /api/books/:id)
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Kitap bulunamadı' });
    res.status(200).json({ message: 'Kitap başarıyla silindi' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};