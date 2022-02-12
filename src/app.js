const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors')

require('dotenv').config()

const router = require('./routes/index');
const errors = require('./utils/error');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/api', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(errors.notFoundError())
});


app.use(function (err, req, res, next) {
  res.status(err.code || 500).json({
    code: err.code || 500,
    message: err.message
  })
});

app.listen(process.env.PORT, () => {
  console.log(`server started at PORT ${process.env.PORT}`)
})

module.exports = app;
