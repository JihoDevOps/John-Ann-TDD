// exports.hello = (req, res) => { res.send("Hello Products!") }

const productModel = require("../models/Product");

exports.createProduct = async (request, response, next) => {
  try {
    const createdProduct = await productModel.create(request.body);
    console.log(createdProduct);
    response.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};
