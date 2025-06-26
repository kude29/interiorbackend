const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json(err.message);
  }
};  

//fetch a single product by ID
exports.fetchSingleProduct = async (req, res) => {
    try{
        // find the product by ID
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json("Product not found");
        }
        res.json(product);
    } catch (err) {
        res.status(500).json(err.message);
    }
}

// Update product
exports.updateProduct = async (req, res) => {
    try{
        // find the product by ID and update it
        const updatedProduct = await product.findById(req.params.id);

        // check if the product exists
        if (!updatedProduct) {
            return res.status(404).json("Product not found");
        }
    } catch (err) {
        res.status(500).json(err.message);
    }   
    // update product
     const updateProduct = await Product.updateOne({
       _id: product._id,
       name: req.body.name,
       price: req.body.price,
       description: req.body.description,
       inStock: req.body.inStock,
       image: req.body.image,
})
};

