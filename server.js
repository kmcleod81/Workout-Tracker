const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 5000;

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
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
