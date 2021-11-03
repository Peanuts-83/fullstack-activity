const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// enregistrer new user
exports.signup = (req,res,next) => {
  bcrypt.hash(req.body.password)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({msg: 'User registered'}))
        .catch(err => res.status(400).json({err}));

    })
    .catch(err => res.status(500).json({err}));
};

// login user
exports.login = (req,res,next) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (!user) {
        return res.status(401).json({msg: 'user not found'})
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({msg: 'wrong password'});
          }
          // give TOKEN
          res.status(200).json({
            user: user._id,
            token: jwt.sign({userId: user._id}, 'ENCRYPTION_PHRASE', {expiresIn: '24h'})
          });
        })
        .catch(err => res.status(500).json({err}))
    })
    .catch(err => res.status(500).json({err}));
};