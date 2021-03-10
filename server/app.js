//Samlar stardard app.js för atte xportera till server

//consts använda i app
const express = require('express');
const app = express();
const cors = require('cors')

//controllers importeras från /controllers/controllerName och används som middleware - används med router för att sätta listeners på olika endpoints
const itemController = require('./controllers/itemController')
const userController = require('./controllers/itemController')

//middleware
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Använder controllern som middleware, väljer endpoint att lyssna på ex '/api/items/', namnpåControllern
app.use('/api/items/', itemController);
app.use('/api/users/', userController);

module.exports = app;