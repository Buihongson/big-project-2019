'use strict'

const Product = use('App/Models/SanPham');

class DongHoController {

    /*-----------> view page citizen eco and view detail-citizen-eco <----------- */
    async viewPageCitizenEco({ view }) {
        // query all product citizen eco
        const products = await Product.query().where('nha_san_xuat_id', '=', 4).fetch();

        return view.render('user.pages.page_citizen_eco', {
            products: products.toJSON()
        });
    }

    async viewProductCitizenEco({ params, view }) {
        // query product
        const product = await Product.find(params.id);
        const allProducts = await Product.query().where('nha_san_xuat_id', '=', 4).fetch();

        return view.render('user.product_detail.detail_citizen_eco_drive', {
            product: product.toJSON(),
            allProducts: allProducts.toJSON()
        });
    }
    /*-----------> end citizen eco <----------- */

    /*-----------> dong ho thuy si <----------- */
    // dong ho movado
    async viewPageMovado({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 7).fetch();

        return view.render('user.pages.movado', {
            products: products.toJSON()
        });
    }

    // view detail 1 product movado
    async viewProductMovado({ params, view }) {
        // query product
        const product = await Product.find(params.id);
        const allProducts = await Product.query().where('nha_san_xuat_id', '=', 7).fetch();

        return view.render('user.product_detail.detail_movado', {
            product: product.toJSON(),
            allProducts: allProducts.toJSON()
        });
    }

    // dong ho longines
    async viewPageLongines({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 8).fetch();

        return view.render('user.pages.longines', {
            products: products.toJSON()
        });
    }

    async viewProductLongines({ params, view }) {
        const product = await Product.find(params.id);
        const allProducts = await Product.query().where('nha_san_xuat_id', '=', 8).fetch();

        return view.render('user.product_detail.detail_longines', {
            product: product.toJSON(),
            allProducts: allProducts.toJSON()
        });
    }
    /*-----------> end dh thuy si <----------- */

    /*-----------> dong ho chinh hang <----------- */
    // duong ho bulova
    async viewPageBulova({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 12).fetch();

        return view.render('user.pages.bulova', {
            products: products.toJSON()
        });
    }

    // view detail 1 product
    async viewProductBulova({ params, view }) {
        // query product
        const product = await Product.find(params.id);
        const allProducts = await Product.query().where('nha_san_xuat_id', '=', 12).fetch();

        return view.render('user.product_detail.detail_bulova', {
            product: product.toJSON(),
            allProducts: allProducts.toJSON()
        });
    }

    // dong ho caravelle
    async viewPageCaravelle({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 13).fetch();

        return view.render('user.pages.caravelle', {
            products: products.toJSON()
        });
    }

    async viewProductCaravelle({ params, view }) {
        // query product
        const product = await Product.find(params.id);
        const allProducts = await Product.query().where('nha_san_xuat_id', '=', 13).fetch();

        return view.render('user.product_detail.detail_caravelle', {
            product: product.toJSON(),
            allProducts: allProducts.toJSON()
        });
    }
    /*-----------> end dh chinh hang <----------- */

}

module.exports = DongHoController
