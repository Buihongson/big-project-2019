'use strict'

const Product = use('App/Models/SanPham');

class DongHoController {
    // query product with keyword 'hot' for home
    async home ({ view }) {
        // query product from database
        const hotThuySis = await Product.query().where('nha_san_xuat_id', '=' , 7).where('tinh_trang', '=', 'hot').fetch();
        const hotCitizens = await Product.query().where('nha_san_xuat_id', '=' , 4).where('tinh_trang', '=', 'hot').fetch();
        const hotChinhHangs = await Product.query().where('nha_san_xuat_id', '=', 15).where('tinh_trang', '=', 'hot').fetch();

        return view.render('home', {
            hotThuySis: hotThuySis.toJSON(),
            hotCitizens: hotCitizens.toJSON(),
            hotChinhHangs: hotChinhHangs.toJSON()
        });
    }
    
    /*-----------> view page citizen and view detail-citizen <----------- */
    async viewPageCitizenEco({ view }) {
        // query all product citizen eco
        const products = await Product.query().where('nha_san_xuat_id', '=', 4).fetch();

        return view.render('user.pages.page_citizen_eco', {
            products: products.toJSON()
        });
    }

    async viewPageCitizenAuto({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 5).fetch();

        return view.render('user.pages.citizen_auto', {
            products: products.toJSON()
        });
    }
    /*-----------> end citizen <----------- */

    /*-----------> dong ho thuy si <----------- */
    // dong ho movado
    async viewPageMovado({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 7).fetch();

        return view.render('user.pages.movado', {
            products: products.toJSON()
        });
    }

    // dong ho longines
    async viewPageLongines({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 8).fetch();

        return view.render('user.pages.longines', {
            products: products.toJSON()
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

    // dong ho caravelle
    async viewPageCaravelle({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 13).fetch();

        return view.render('user.pages.caravelle', {
            products: products.toJSON()
        });
    }
    /*-----------> end dh chinh hang <----------- */

    // view thuong hieu
    async viewThuongHieu({ view }) {
        const products = await Product.all();

        return view.render('user.pages.thuonghieu', {
            products: products.toJSON()
        });
    }

    async viewDetailDHNam({ params, view }) {
        const product = await Product.find(params.id);
        const allProducts = await Product.all();
        const cvProductJson = product.toJSON();

        if(cvProductJson.ten_san_pham.slice(0,14) === "Đồng hồ BULOVA") {
            return view.render('user.product_detail.detail_bulova', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else if(cvProductJson.ten_san_pham.slice(0,14) === "Đồng hồ MOVADO") {
            return view.render('user.product_detail.detail_movado', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else if(cvProductJson.ten_san_pham.slice(0,7) === "Citizen"){
            return view.render('user.product_detail.detail_citizen_eco_drive', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else if(cvProductJson.ten_san_pham.slice(0,15) === "Đồng Hồ Longines") {
            return view.render('user.product_detail.detail_longines', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else if(cvProductJson.ten_san_pham.slice(0,17) === "Đồng Hồ Caravelle") {
            return view.render('user.product_detail.detail_caravelle', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else {
            return false;
        }
    }
}

module.exports = DongHoController
