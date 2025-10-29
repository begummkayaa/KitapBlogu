const express = require('express');
const router = express.Router();
const readingListController = require('../controllers/readingListController');

// '/api/readinglists/names' adresine gelen istekler
router.get('/names', readingListController.getAllReadingListNames);

// '/api/readinglists/:listName' adresine gelen istekler
router.get('/:listName', readingListController.getBooksInReadingList);

module.exports = router;