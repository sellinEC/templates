const router = require('express').Router();
const itemModel = require('../models/items/itemModel');
// const auth = require('../authentication/auth');

router.get('/', itemModel.getItem);
router.get('/:id', itemModel.getItem);

router.post('/new', itemModel.createItem);
// samma fast med auth
// router.post('/new', auth.verifyToken, productModel.createItem);

router.patch('/:id', itemModel.updateItem);

// router.patch('/:id', auth.verifyToken, productModel.updateItem);

router.delete('/:id', itemModel.deleteItem);
// router.delete('/:id', auth.verifyToken, productModel.deleteItem);

module.exports = router;