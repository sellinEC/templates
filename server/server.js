//imporera constanter inklusive app.js
const app = require('./app');
//databas-hanterare för mongoDB
const mongoose = require('mongoose');
// .env-fil
require('dotenv').config();

const PORT = process.env.PORT || 9999;

const serverURI = 'http://localhost:' + PORT
const mongoURI = process.env.MONGO_URI;

app.listen(PORT, () => console.log('Server running at:' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('connected to db'))

//I .env sätt "hemliga" variabler att plocka in