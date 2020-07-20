const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const app = express();

// middleware
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/workout';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
});

// set up routes
app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
