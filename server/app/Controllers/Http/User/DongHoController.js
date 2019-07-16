'use strict'

const Product = use('App/Models/SanPham');

class DongHoController {
    // query product with keyword 'hot' for home
    async home ({ view, response }) {
        // query product from database
        const hotThuySis = await Product.query().where('nha_san_xuat_id', '=' , 7).where('tinh_trang', '=', 'hot').fetch();
        const hotCitizens = await Product.query().where('nha_san_xuat_id', '=' , 4).where('tinh_trang', '=', 'hot').fetch();
        const hotChinhHangs = await Product.query().where('nha_san_xuat_id', '=', 15).where('tinh_trang', '=', 'hot').fetch();

        return view.render('home', {
            hotThuySis: hotThuySis.toJSON(),
            hotCitizens: hotCitizens.toJSON(),
            hotChinhHangs: hotChinhHangs.toJSON()
        });

        // return response.status(200).json(hotThuySis, hotChinhHangs, hotCitizens);
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

    async viewMovadoDH5tr({ view }) {
        //query all product <= 4999999
        const products = await Product
            .query()
            .where('nha_san_xuat_id', '=', 7)
            .where('gia_tien', '<=', 4999999)
            .fetch();

        return view.render('user.watchMen.prices.dh_5tr', {
            products: products.toJSON()
        });
    }

    async viewMovadoDH5tr_15tr({ view }) {
        //query all 5000000 = product <= 15000001
        const products = await Product
            .query()
            .where('nha_san_xuat_id', '=', 7)
            .where('gia_tien', '>=', 5000000)
            .where('gia_tien', '<=', 15000000)
            .fetch();

        return view.render('user.watchMen.prices.5tr_dh_15tr', {
            products: products.toJSON()
        })
    }

    async viewMovadoDH15tr_30tr({ view }) {
        //query all 15000001 <= product <= 30000000
        const products = await Product
            .query()
            .where('nha_san_xuat_id', '=', 7)
            .where('gia_tien', '>=', 15000001)
            .where('gia_tien', '<=', 30000000)
            .fetch();

        return view.render('user.watchMen.prices.15tr_dh_30tr', {
            products: products.toJSON()
        });
    }

    async viewMovadoDH30tr({ view }) {
        // query all product > 300000000
        const products = await Product
            .query()
            .where('nha_san_xuat_id', '=', 7)
            .where('gia_tien', '>=', 30000001)
            .fetch();

        return view.render('user.watchMen.prices.dh_30tr', {
            products: products.toJSON()
        });
    }

    async viewMovadoDayDa({ view }) {
        // query all product by day da
        const products = await Product
            .query()
            .where('nha_san_xuat_id', '=', 7)
            .where('loai_day', '=', 'Dây da')
            .fetch();

        return view.render('user.watchMen.albert.day_da', {
            products: products.toJSON()
        });
    }

    async viewMovadoDayKimLoai({ view }) {
        // query all product by day kim loai
        const products = await Product
            .query()
            .where('nha_san_xuat_id', '=', 7)
            .where('loai_day', '=', 'Dây kim loại')
            .fetch();

        return view.render('user.watchMen.albert.day_kim_loai', {
            products: products.toJSON()
        });
    }

    async viewMovadoThepKhongRi({ view }) {
        // query all product by day thep khong ri
        const products = await Product
            .query()
            .where('nha_san_xuat_id', '=', 7)
            .where('gioi_tinh', '=', 'Nam')
            .fetch();

        return view.render('user.watchMen.albert.thep_khong_ri', {
            products: products.toJSON()
        });
    }

    async viewMovadoNam({ view }) {
        // query all product by day kim loai
        const products = await Product
            .query()
            .where('nha_san_xuat_id', '=', 7)
            .where('gioi_tinh', '=', 'Nam')
            .fetch();

        return view.render('user.watchMen.dong_ho_nam', {
            products: products.toJSON()
        });
    }

    async viewMovadoNu({ view }) {
        // query all product by day kim loai
        const products = await Product
            .query()
            .where('nha_san_xuat_id', '=', 7)
            .where('gioi_tinh', '=', 'Nữ')
            .fetch();

        return view.render('user.watchWomen.dong_ho_nu', {
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

    // dong ho gronava
    async viewPageGronava({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 9).fetch();

        return view.render('user.pages.gronava', {
            products: products.toJSON()
        });
    }

    // dong ho omega
    async viewPageOmega({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 10).fetch();

        return view.render('user.pages.omega', {
            products: products.toJSON()
        });
    }

    // dong ho tissot
    async viewPageTissot({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 16).fetch();

        return view.render('user.pages.tissot', {
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

    // dong ho seiko
    async viewPageSeiko({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 15).fetch();

        return view.render('user.pages.seiko', {
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

    async viewDH5tr({ view }) {
        //query all product <= 4999999
        const products = await Product
            .query()
            .where('gia_tien', '<=', 4999999)
            .fetch();

        return view.render('user.watchMen.prices.dh_5tr', {
            products: products.toJSON()
        });
    }

    async viewDH5tr_15tr({ view }) {
        //query all 5000000 = product <= 15000001
        const products = await Product
            .query()
            .where('gia_tien', '>=', 5000000)
            .where('gia_tien', '<=', 15000000)
            .fetch();

        return view.render('user.watchMen.prices.5tr_dh_15tr', {
            products: products.toJSON()
        })
    }

    async viewDH15tr_30tr({ view }) {
        //query all 15000001 <= product <= 30000000
        const products = await Product
            .query()
            .where('gia_tien', '>=', 15000001)
            .where('gia_tien', '<=', 30000000)
            .fetch();

        return view.render('user.watchMen.prices.15tr_dh_30tr', {
            products: products.toJSON()
        });
    }

    async viewDH30tr({ view }) {
        // query all product > 300000000
        const products = await Product
            .query()
            where('gia_tien', '>=', 30000001)
            .fetch();

        return view.render('user.watchMen.prices.dh_30tr', {
            products: products.toJSON()
        });
    }

    async viewDayDa({ view }) {
        // query all product by day da
        const products = await Product
            .query().
            where('loai_day', '=', 'Dây da')
            .fetch();

        return view.render('user.watchMen.albert.day_da', {
            products: products.toJSON()
        });
    }

    async viewDayKimLoai({ view }) {
        // query all product by day kim loai
        const products = await Product
            .query()
            .where('loai_day', '=', 'Dây kim loại')
            .fetch();

        return view.render('user.watchMen.albert.day_kim_loai', {
            products: products.toJSON()
        });
    }

    async viewNam({ view }) {
        // query all product by day kim loai
        const products = await Product
            .query()
            .where('gioi_tinh', '=', 'Nam')
            .fetch();

        return view.render('user.watchMen.albert.day_kim_loai', {
            products: products.toJSON()
        });
    }

    async viewNu({ view }) {
        // query all product by day kim loai
        const products = await Product
            .query()
            .where('gioi_tinh', '=', 'Nữ')
            .fetch();

        return view.render('user.watchMen.albert.day_kim_loai', {
            products: products.toJSON()
        });
    }

    /*-----------> end thuong hieu <----------- */

    async viewDetailDHNam({ params, view }) {
        const product = await Product.find(params.id);
        const cvProductJson = product.toJSON();

        if(cvProductJson.ten_san_pham.slice(0,14) === "Đồng hồ BULOVA") {
            const allProducts = await Product.query().where('nha_san_xuat_id', '=', 12).fetch()

            return view.render('user.product_detail.detail_bulova', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else if(cvProductJson.ten_san_pham.slice(0,14) === "Đồng hồ MOVADO") {
            const allProducts = await Product.query().where('nha_san_xuat_id', '=', 7).fetch()

            return view.render('user.product_detail.detail_movado', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else if(cvProductJson.ten_san_pham.slice(0,7) === "Citizen"){
            const allProducts = await Product.query().where('nha_san_xuat_id', '=', 4).fetch()

            return view.render('user.product_detail.detail_citizen_eco_drive', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else if(cvProductJson.ten_san_pham.slice(0,17) === "Đồng Hồ Longines") {
            const allProducts = await Product.query().where('nha_san_xuat_id', '=', 8).fetch()

            return view.render('user.product_detail.detail_longines', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else if(cvProductJson.ten_san_pham.slice(0,17) === "Đồng Hồ Caravelle") {
            const allProducts = await Product.query().where('nha_san_xuat_id', '=', 13).fetch()

            return view.render('user.product_detail.detail_caravelle', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else if(cvProductJson.ten_san_pham.slice(0,13) === "Đồng hồ Seiko"){
            const allProducts = await Product.query().where('nha_san_xuat_id', '=', 15).fetch()

            return view.render('user.product_detail.detail_seiko', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else if(cvProductJson.ten_san_pham.slice(0,14) === "Đồng hồ Tissot"){
            const allProducts = await Product.query().where('nha_san_xuat_id', '=', 16).fetch()

            return view.render('user.product_detail.detail_tissot', {
                product: cvProductJson,
                allProducts: allProducts.toJSON()
            });
        } else {
            return view.render('user.error');
        }
    }
}

module.exports = DongHoController
