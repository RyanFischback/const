"use strict";
var express = require('express');
var app = express();
var cors = require('cors')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your React app's URL
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
  next();
});

var userRoute = require('./routes/userRoute');

app.use(express.json());
app.use(cors({origin: true}))

app.use('/api', userRoute);

var port = 8887;
app.listen(port, function () {
  console.log("Server started on port ".concat(port));
});
