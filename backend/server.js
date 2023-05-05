const express = require('express');
const connectDB = require('./database/db');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoute'));
app.use('/api/projects', require('./routes/projectRoute'));

app.use(errorHandler);

app.listen(port, function () {
  console.log("Server started on port ".concat(port));
});
