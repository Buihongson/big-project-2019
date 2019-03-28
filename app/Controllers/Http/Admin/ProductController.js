'use strict'

const Catelog = use('App/Models/NhaSanXuat');
const Product = use('App/Models/SanPham');

class ProductController {
    // show form add product
    async viewAddProduct({ view }) {
        // get all catalog
        const catelogs = await Catelog.query().where('parent_id', '=', 0).fetch();
        const sub_catelog = await Catelog.query().where('parent_id', '>', 0).fetch();

        return view.render('admin.products.add_product', {
            catelogs: catelogs.toJSON(),
            sub_catelog: sub_catelog.toJSON()
        });
    }

    // add a new product
    async addProduct ({ request, response, session, auth }) {
        const product = new Product();

        // get value from input
        product.dm_id = request.input('parent_id');
        product.ten_san_pham = request.input('name_product');
        product.ma_san_pham = request.input('code_product');
        product.gioi_tinh = request.input('gender_product');
        product.kinh = request.input('glass_product');
        product.duong_kinh_vo = request.input('diameter_product') + " millimeters";
        product.do_day_vo = request.input('thickness_product') + " millimeters";
        product.ap_suat_nuoc = request.input('water_resistance_product') + " bar";
        product.xuat_su = request.input('origin_product');
        product.gia_tien = request.input('price_product');
        product.bao_hanh = request.input('guarantee_product') + " năm";
        product.tinh_trang = request.input('status_product');
        product.hinh_anh = "";

        await product.save();

        // notify when add success
        session.flash({ add_notification: 'Thêm thành công' });
    }
}

module.exports = ProductController
