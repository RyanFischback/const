"use strict";
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8887;

connectDB();
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your React app's URL
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
  next();
});

const userRoute = require('./routes/userRoute');

app.use(express.json());
app.use(cors({origin: true}))

app.use('/api', userRoute);

app.listen(port, function () {
  console.log("Server started on port ".concat(port));
});
