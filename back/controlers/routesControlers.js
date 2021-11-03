const Product = require('../models/product');

exports.getAll = (req,res,next) => {
  console.log('GETall URLreq:', req.url);
  console.log('############');
  Product.find()
    .then(products => res.status(200).json({'products': products}))
    .catch(err => res.status(400).json({ err }));
};

exports.getOne = (req,res,next) => {
  console.log('GETone URLreq:', req.url);
  console.log('############');
  Product.findOne({_id: req.params.id})
    .then(product => res.status(200).json({'product': product}))
    .catch(err => res.status(400).json({ err }));
};

exports.createProduct = (req,res,next) => {
  console.log('POST URLreq:', req.url,'\nPOST BODYreq:', req.body);
  console.log('############');
  const product = new Product({...req.body});
  product.save()
    .then(product => res.status(201).json({'product': product }))
    .catch(err => res.status(400).json({ err }));
};

exports.modifyProduct = (req,res,next) => {
  console.log('PUT URLreq:', req.url,'\nPUT BODYreq:', req.body);
  console.log('############');
  Product.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Modified!'}))
    .catch(err => res.status(400).json({ err }));
};

exports.delete = (req,res,next) => {
  console.log('DELETE URLreq:', req.url);
  console.log('############');
  Product.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message: 'Deleted!'}))
    .catch(er=> res.status(400).json({ err }));
};