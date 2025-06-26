const router = require('express').Router();
const parser = require(',../config/uploads');
const { createProduct, getProducts } = require('../controllers/productController');
const { verifyAdmin } = require('../middlewares/authMiddleware');


// create product
router.post('/create', verifyAdmin, createProduct);

//get all products
router.get('/fetch-all', getProducts);

module.exports = router;