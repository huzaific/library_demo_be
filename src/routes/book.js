const express = require('express');
const bookRouter = express.Router();
const bookController = require('../controllers/book')

bookRouter.get('/', bookController.fetchAllBooks);

bookRouter.get('/:id', bookController.fetchSingleBook);

bookRouter.put('/:id', bookController.updateBook);

module.exports = bookRouter;
