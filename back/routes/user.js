const express = require('express'),
      router = express.Router();
const userCtl = require('../controlers/userControlers');

router.post('/signup', userCtl.signup);
router.post('/login', userCtl.login);

module.exports = router;