const Book = require('../models/Book'); // Kitaplara erişmek için Book modelini de çağırıyoruz
const ReadingList = require('../models/ReadingList');

// 1. Tüm Okuma Listesi İsimlerini Getirme (GET /api/readinglists/names)
exports.getAllReadingListNames = async (req, res) => {
  try {
    const lists = await ReadingList.find({}, 'name -_id'); // Sadece 'name' alanını getir
    res.status(200).json(lists.map(list => list.name)); // Sadece isimleri bir dizi olarak dön
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2. Belirli Bir Okuma Listesindeki Kitapları Getirme (GET /api/readinglists/:listName)
exports.getBooksInReadingList = async (req, res) => {
  try {
    const listName = req.params.listName;
    // Okuma listelerinin isimlerini doğrudan veritabanından çekmek daha sağlam bir yaklaşımdır
    // Ancak initializeReadingLists kaldırıldığı için şimdilik hardcoded bırakıyorum.
    // İdealde, bu listelerin veritabanında var olduğundan emin olunmalı.
    const validLists = ['Favorilerim', 'Keşfetmeye Değer', 'Yeniden Okuyacaklarım']; // Bu listeler ReadingList modelinizde olmalı

    if (!validLists.includes(listName)) {
      return res.status(404).json({ message: 'Geçersiz okuma listesi adı.' });
    }

    const books = await Book.find({ readingLists: listName }).sort({ title: 1 }); // Başlığa göre alfabetik sıralama
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
