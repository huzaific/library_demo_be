const express = require('express');
const bookRouter = require('./book');
const userRouter = require('./user');
const router = express.Router();

/* GET home page. */
router.use('/users', userRouter);
router.use('/books', bookRouter)

module.exports = router;
