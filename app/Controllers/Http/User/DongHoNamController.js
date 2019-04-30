'use strict'

const Product = use('App/Models/SanPham')

class DongHoNamController {
    async viewDHNam ({ view }) {
        const products = await Product.query().where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.dong_ho_nam', {
            products: products.toJSON()
        });
    }

    async viewDH5tr ({ view }) {
        //query all product <= 4999999
        const products = await Product.query().where('gia_tien', '<=', 4999999).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.dh_5tr', {
            products: products.toJSON()
        });
    }

    async viewDH5tr_15tr({ view }) {
        //query all 5000000 = product <= 15000001
        const products = await Product.query().where('gia_tien', '>=', 5000000).where('gia_tien', '<=', 15000000).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.5tr_dh_15tr', {
            products: products.toJSON()
        })
    }

    async viewDH15tr_30tr ({ view }) {
        //query all 15000001 <= product <= 30000000
        const products = await Product.query().where('gia_tien', '>=', 15000001).where('gia_tien', '<=', 30000000).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.15tr_dh_30tr', {
            products: products.toJSON()
        });
    }

    async viewDH30tr ({ view }) {
        const products = await Product.query().where('gia_tien', '>=', 30000001).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.dh_30tr', {
            products: products.toJSON()
        });
    }
}

module.exports = DongHoNamController
