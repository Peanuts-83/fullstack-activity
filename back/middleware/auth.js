const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'ENCRYPTION_PHRASE');
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user';
    } else {
      next();
    }
  } catch(error) {
    res.status(401).json({msg: error | 'Unauthentified request!'});
  }
}
