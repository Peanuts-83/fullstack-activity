const express = require('express'),
      router = express.Router();
const controlers = require('../controlers/routesControlers');

// GET all
router.get('/', controlers.getAll);
// GET one
router.get('/:id', controlers.getOne);
// POST
router.post('/', controlers.createProduct);
// PUT
router.put('/:id', controlers.modifyProduct);
// DELETE
router.delete('/:id', controlers.delete);

module.exports = router;