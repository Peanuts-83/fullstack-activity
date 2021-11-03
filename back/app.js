const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/product');
const userRoutes = require('./routes/user');


const app = express();

// connect MongoDB
mongoose.connect('mongodb+srv://Peanuts-83:H9pcNdqR4VT4jhqi@peanutsmongo.17rt9.mongodb.net/fullstack-activity?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('MongoDB connected!'))
    .catch(error => console.log('MongoDB NOT connected: ', error));

// HEADERS -- CORS management
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
  next();
});

// BodyParser from Express -- reads form -> json (req.body)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Router call routes/products.js
app.use('/api/products', routes);
// Router call routes/user.js
app.use('/api/users', userRoutes)

module.exports = app;