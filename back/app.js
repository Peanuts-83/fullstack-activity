const express = require('express');
const bodyParser = require('body-parser');
const Product = require('./models/product');
const { json } = require('body-parser');

const app = express();

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

// GET all
app.get('/api/products', (req,res,next) => {
  console.log('GETall URLreq:', req.url);
  console.log('############');
  Product.find()
    .then(products => res.status(200).json({'products': products}))
    .catch(err => res.status(400).json({ err }));
});
// GET one
app.get('/api/products/:id', (req,res,next) => {
  console.log('GETone URLreq:', req.url);
  console.log('############');
  Product.findOne({_id: req.params.id})
    .then(product => res.status(200).json({'product': product}))
    .catch(err => res.status(400).json({ err }));
});
// POST
app.post('/api/products', (req,res,next) => {
  console.log('POST URLreq:', req.url,'\nPOST BODYreq:', req.body);
  console.log('############');
  const product = new Product({...req.body});
  product.save()
    .then(product => res.status(201).json({'product': product }))
    .catch(err => res.status(400).json({ err }));
});
// PUT
app.put('/api/products/:id', (req,res,next) => {
  console.log('PUT URLreq:', req.url,'\nPUT BODYreq:', req.body);
  console.log('############');
  Product.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Modified!'}))
    .catch(err => res.status(400).json({ err }));
});
// DELETE
app.delete('/api/products/:id', (req,res,next) => {
  console.log('DELETE URLreq:', req.url);
  console.log('############');
  Product.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message: 'Deleted!'}))
    .catch(er=> res.status(400).json({ err }));
});

module.exports = app;