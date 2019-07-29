"use strict";

const Products = use("App/Models/SanPham");
const Catelogs = use("App/Models/NhaSanXuat");
const CloudinaryService = use("App/Services/CloudinaryService");

class ProductController {
  // Get all catelogs
  async getAllCatelogs({ response }) {
    const catelogs = await Catelogs.all();

    return response.status(200).json(catelogs);
  }

  // Add new catelog
  async addNewCatelog({ request, response }) {
    try {
      const { parent_id, ten_th, mo_ta_th } = request.all();
      // Recive file image
      const picture = request.file("hinh_anh_infor", {
        types: ["image"],
        size: "2mb"
      });

      // Upload image into cloundinary
      const cloudinaryResponse = await CloudinaryService.v2.uploader.upload(
        picture.tmpPath,
        { folder: "test-upload-file" }
      );

      // Generate link
      const hinh_anh_info = cloudinaryResponse.secure_url;

      const catelog = await Catelogs.create({
        parent_id,
        ten_th,
        mo_ta_th,
        hinh_anh_info
      });

      return response.status(201).json({
        message: "Successly created a new catelog",
        data: catelog
      });
    } catch (error) {
      console.log(error);
    }
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

    try {
      if (catelog) {
        const { parent_id, ten_th, mo_ta_th } = request.all();

        // Recive file image
        const picture = request.file("hinh_anh_infor", {
          types: ["image"],
          size: "2mb"
        });

        // Upload image into cloundinary
        const cloudinaryResponse = await CloudinaryService.v2.uploader.upload(
          picture.tmpPath,
          { folder: "test-upload-file" }
        );

        // Generate link
        const hinh_anh_info = cloudinaryResponse.secure_url;

        catelog.parent_id = parent_id;
        catelog.ten_th = ten_th;
        catelog.mo_ta_th = mo_ta_th;
        catelog.hinh_anh_info = hinh_anh_info;

        await catelog.save();

        const catelogs = await Catelogs.all();

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
    } catch (error) {
      console.log(error);
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

  // Add new product
  async addNewProduct({ request, response }) {
    // Recive request from server
    const {
      nha_san_xuat_id,
      ten_san_pham,
      ma_san_pham,
      gioi_tinh,
      kinh,
      loai_day,
      duong_kinh_vo,
      do_day_vo,
      ap_suat_nuoc,
      xuat_su,
      gia_tien,
      bao_hanh,
      tinh_trang,
      so_luong,
      mo_ta
    } = request.all();

    // Recive file image
    const picture = request.file("hinh_anh", {
      types: ["image"],
      size: "2mb"
    });

    try {
      // Upload image into cloundinary
      const cloudinaryResponse = await CloudinaryService.v2.uploader.upload(
        picture.tmpPath,
        { folder: "test-upload-file" }
      );

      // Generate link
      const hinh_anh = cloudinaryResponse.secure_url;

      // Save new product into database
      const product = await Products.create({
        nha_san_xuat_id,
        ten_san_pham,
        ma_san_pham,
        gioi_tinh,
        kinh,
        loai_day,
        duong_kinh_vo,
        do_day_vo,
        ap_suat_nuoc,
        xuat_su,
        gia_tien,
        bao_hanh,
        tinh_trang,
        so_luong,
        mo_ta,
        hinh_anh
      });

      return response.status(200).json({
        message: "Successly upload file",
        data: product
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Update product
  async updateProduct({ request, response, params }) {
    const { id } = params;

    // Find product
    const product = await Products.find(id);

    try {
      if (product) {
        const {
          nha_san_xuat_id,
          ten_san_pham,
          ma_san_pham,
          gioi_tinh,
          kinh,
          loai_day,
          duong_kinh_vo,
          do_day_vo,
          ap_suat_nuoc,
          xuat_su,
          gia_tien,
          bao_hanh,
          tinh_trang,
          so_luong,
          mo_ta,
          hinh_anh
        } = request.all();

        if (typeof hinh_anh === "string") {
          product.nha_san_xuat_id = nha_san_xuat_id;
          product.ten_san_pham = ten_san_pham;
          product.ma_san_pham = ma_san_pham;
          product.gioi_tinh = gioi_tinh;
          product.kinh = kinh;
          product.loai_day = loai_day;
          product.duong_kinh_vo = duong_kinh_vo;
          product.do_day_vo = do_day_vo;
          product.ap_suat_nuoc = ap_suat_nuoc;
          product.xuat_su = xuat_su;
          product.gia_tien = gia_tien;
          product.bao_hanh = bao_hanh;
          product.tinh_trang = tinh_trang;
          product.so_luong = so_luong;
          product.mo_ta = mo_ta;
          product.hinh_anh = hinh_anh;

          await product.save();

          const products = await Products.all();

          return response.status(200).json({
            message: "Successly deteled a product",
            dataEdit: product,
            data: products
          });
        } else {
          // Recive file image
          const picture = request.file("hinh_anh", {
            types: ["image"],
            size: "2mb"
          });

          // Upload image into cloundinary
          const cloudinaryResponse = await CloudinaryService.v2.uploader.upload(
            picture.tmpPath,
            { folder: "test-upload-file" }
          );

          // Generate link
          const hinh_anh = cloudinaryResponse.secure_url;

          product.nha_san_xuat_id = nha_san_xuat_id;
          product.ten_san_pham = ten_san_pham;
          product.ma_san_pham = ma_san_pham;
          product.gioi_tinh = gioi_tinh;
          product.kinh = kinh;
          product.loai_day = loai_day;
          product.duong_kinh_vo = duong_kinh_vo;
          product.do_day_vo = do_day_vo;
          product.ap_suat_nuoc = ap_suat_nuoc;
          product.xuat_su = xuat_su;
          product.gia_tien = gia_tien;
          product.bao_hanh = bao_hanh;
          product.tinh_trang = tinh_trang;
          product.so_luong = so_luong;
          product.mo_ta = mo_ta;
          product.hinh_anh = hinh_anh;

          await product.save();

          const products = await Products.all();

          return response.status(200).json({
            message: "Successly deteled a product",
            dataEdit: product,
            data: products
          });
        }
      } else {
        return response.status(404).json({
          message: "Not found product",
          id
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Delete product
  async deleteProduct({ request, response, params }) {
    const { id } = params;

    const product = await Products.find(id);

    // Delete product
    if (product) {
      await product.delete();

      return response.status(200).json({
        message: "Successly deleted a product",
        data: product
      });
    } else {
      return response.status(404).json({
        message: "Not found product",
        id
      });
    }
  }

  // Get details product
  async getDetailsProduct({ request, response, params }) {
    const { id } = params;

    // Find product
    const product = await Products.find(id);
    const imageInforCatelog = await Catelogs.find(product.nha_san_xuat_id);
    const data = Object.assign(product, {
      hinh_anh_infor: imageInforCatelog.hinh_anh_info
    });
    // console.log(data);

    if (product) {
      return response.status(200).json({
        message: "Successly find product",
        data: data
      });
    } else {
      return response.status(404).json({
        message: "Not found product",
        data: id
      });
    }
  }
}

module.exports = ProductController;
