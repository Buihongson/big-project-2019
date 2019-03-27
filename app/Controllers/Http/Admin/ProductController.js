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
}

module.exports = ProductController
