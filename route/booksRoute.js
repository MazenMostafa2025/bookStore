const bookController = require('../controller/bookController');

var express = require('express');
const router = express.Router();

router.get('/books', bookController.getBooks);
router.get('/books/details/:bookId', bookController.getBookDetails);
router.post('/books/create', bookController.createBook);
router.put('/books/update', bookController.updateBook);
router.delete('/books/delete/:bookId', bookController.deleteBook);
module.exports = router;