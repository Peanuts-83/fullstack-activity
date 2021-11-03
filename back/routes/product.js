const express = require('express'),
      router = express.Router();
const controlers = require('../controlers/routesControlers');
const auth = require('../middleware/auth');

// GET all
router.get('/', auth, controlers.getAll);
// GET one
router.get('/:id', auth, controlers.getOne);
// POST
router.post('/', auth, controlers.createProduct);
// PUT
router.put('/:id', auth, controlers.modifyProduct);
// DELETE
router.delete('/:id', auth, controlers.delete);

module.exports = router;