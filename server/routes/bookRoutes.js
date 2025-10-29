const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// '/api/books' adresine gelen istekler
router.route('/')
  .get(bookController.getAllBooks)   // GET gelirse getAllBooks çalışsın
  .post(bookController.createBook);  // POST gelirse createBook çalışsın

// '/api/books/:id' adresine gelen istekler
router.route('/:id')
  .get(bookController.getOneBook)     // GET gelirse getOneBook çalışsın
  .patch(bookController.updateBook)  // PATCH gelirse updateBook çalışsın (PUT yerine PATCH kullanmak daha yaygındır)
  .delete(bookController.deleteBook); // DELETE gelirse deleteBook çalışsın

module.exports = router;