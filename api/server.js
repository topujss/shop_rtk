const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors');

// routes
const categoryRoute = require('./routes/categoryRoute.js');
// const brandRoute =  require('./routes/brandRoute.js');
// import tagRoute from './routes/tagRoute.js';
// import productRoute from './routes/productRoute.js';

// error handler
const mongoDBConnect = require('./config/db.js');
const serverError = require('./middlewares/serverErrorHandler.js');

// init express
const app = express();

// env setup
const PORT = process.env.PORT || 5050;

// middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// set static folder
app.use(express.static('api/public'));

// route prefix
app.use(process.env.API_PREFIX, categoryRoute);
// app.use(process.env.API_PREFIX, brandRoute);
// app.use(process.env.API_PREFIX, tagRoute);
// app.use(process.env.API_PREFIX, productRoute);

app.use(serverError);

// listen the server
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Server running: ${PORT}`.bgCyan);
});
