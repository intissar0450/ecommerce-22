const express = require('express');
const connectDB = require('./config/connectDB');
const user = require('./routes/user');
const product = require('./routes/product');
const app = express();

app.use(express.json());

app.use('/user', user);
app.use('/products', product);

connectDB();

app.listen(5000, (err) =>
  err ? console.error(err) : console.log('Server is runnig on port 5000')
);
