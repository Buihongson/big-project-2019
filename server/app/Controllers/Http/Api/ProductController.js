"use strict";

const Products = use("App/Models/SanPham");
const Catelogs = use("App/Models/NhaSanXuat");

class ProductController {
  // Get all catelogs
  async getAllCatelogs({ response }) {
    const catelogs = await Catelogs.all();

    return response.status(200).json(catelogs);
  }

  // Add new catelog
  async addNewCatelog({ request, response }) {
    const { parent_id, ten_th, mo_ta_th } = request.all();

    const catelog = await Catelogs.create({ parent_id, ten_th, mo_ta_th });

    return response.status(201).json({
      message: "Successly created a new catelog",
      data: catelog
    });
  }

  // Detele catelog
  async deleteCatelog({ request, response, params }) {
    const { id } = params;

    const catelog = await Catelogs.find(id);

    if (catelog) {
      await catelog.delete();

      return response.status(200).json({
        message: "Successly deteled a catelog",
        data: catelog
      });
    } else {
      return response.status(404).json({
        message: "Not found catelog",
        id
      });
    }
  }

  // Update catelog
  async updateCatelog({ request, response, params }) {
    const { id } = params;

    const catelog = await Catelogs.find(id);

    if (catelog) {
      const { parent_id, ten_th, mo_ta_th } = request.all();

      catelog.parent_id = parent_id;
      catelog.ten_th = ten_th;
      catelog.mo_ta_th = mo_ta_th;

      await catelog.save();

      const catelogs = await Catelogs.all()

      return response.status(200).json({
        message: "Successly deteled a catelog",
        dataEdit: catelog,
        data: catelogs
      });
    } else {
      return response.status(404).json({
        message: "Not found catelog",
        id
      });
    }
  }

  // Get all products
  async getAllProducts({ response }) {
    const products = await Products.all();

    return response.status(200).json({
      message: "Successly geted all products",
      data: products
    });
  }
}

module.exports = ProductController;
