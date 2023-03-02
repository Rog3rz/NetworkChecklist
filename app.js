const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// Configuration
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + "/index.html"))
});

app.use(function(req, res, next) {
    next(createError(404));
  });

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
});