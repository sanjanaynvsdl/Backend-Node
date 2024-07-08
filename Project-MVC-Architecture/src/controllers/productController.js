const productModel=require('../models/product');


exports.getProductById=async(req,res)=> {
    const product=await productModel.findById(req.params.id,req.body);
    return res.json(product);
}
exports.getAllProducts=async (req,res)=> {
    const allProducts=await productModel.find();
    return res.json(allProducts);
}


exports.createProduct=async (req,res)=> {
    productModel.create({
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        isInStock:req.body.isInStock,
        category:req.body.category
    });
    return res.status(201).json({"message":"Product created successfully"});
}


exports.updateProduct=async (req,res)=> {
    const product=await productModel.findByIdAndUpdate(req.params.id,req.body);
    return res.json(product);
}

exports.deleteProduct=async (req,res)=> {
    const product=await productModel.findByIdAndDelete(req.params.id);
    res.json(product);
}
//BY exporting we can use them in routes