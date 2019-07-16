"use strict";

const Products = use("App/Models/SanPham");
const Catelogs = use("App/Models/NhaSanXuat");

class ProductController {
  async getAllProducts({ response }) {
    const products = await Products.all()

    return response.status(200).json(products);
  }
}

module.exports = ProductController;
