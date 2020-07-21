'use strict'

const express = require('express')
const mongoose = require("./index");
const dbConfig=require('./config')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes')
const path = require('path')
const expressValidator = require('express-validator')


//const uuid = require('uuid/v4');
//const { format } = require('timeago.js');
const app = express()
var cors = require('cors')
const PORT = 3000;

// Settings
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', routes)
///
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(require('./routes/index'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, function() {
 console.log(`Listening on ${PORT}`);
});
module.exports = app