const Router = require('express').Router;
const router = new Router();
const books = require('../controllers/book.controller');

router.post('/create', books.create);
router.get('/readByID/:id', books.readByID);
router.get('/readAll', books.readAll);
router.put('/update', books.update);
router.get('/search/:categoryId', books.search);
router.delete('/delete/:id', books.delete);

module.exports = router;
