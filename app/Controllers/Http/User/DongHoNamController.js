'use strict'

const Product = use('App/Models/SanPham')

class DongHoNamController {
    async viewDHNam({ view }) {
        const products = await Product.query().where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.dong_ho_nam', {
            products: products.toJSON()
        });
    }

    async viewDH5tr({ view }) {
        //query all product <= 4999999
        const products = await Product.query().where('gia_tien', '<=', 4999999).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.prices.dh_5tr', {
            products: products.toJSON()
        });
    }

    async viewDH5tr_15tr({ view }) {
        //query all 5000000 = product <= 15000001
        const products = await Product.query().where('gia_tien', '>=', 5000000).where('gia_tien', '<=', 15000000).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.prices.5tr_dh_15tr', {
            products: products.toJSON()
        })
    }

    async viewDH15tr_30tr({ view }) {
        //query all 15000001 <= product <= 30000000
        const products = await Product.query().where('gia_tien', '>=', 15000001).where('gia_tien', '<=', 30000000).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.prices.15tr_dh_30tr', {
            products: products.toJSON()
        });
    }

    async viewDH30tr({ view }) {
        // query all product > 300000000
        const products = await Product.query().where('gia_tien', '>=', 30000001).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.prices.dh_30tr', {
            products: products.toJSON()
        });
    }

    async viewDayDa({ view }) {
        // query all product by day da
        const products = await Product.query().where('loai_day', '=', 'Dây da').where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.albert.day_da', {
            products: products.toJSON()
        });
    }

    async viewDayKimLoai({ view }) {
        // query all product by day kim loai
        const products = await Product.query().where('loai_day', '=', 'Dây kim loại').where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.albert.day_kim_loai', {
            products: products.toJSON()
        });
    }

    async viewThepKhongRi({ view }) {
        // query all product by day thep khong ri
        const products = await Product.query().where('loai_day', '=', 'Thép không rỉ').where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.watchMen.albert.thep_khong_ri', {
            products: products.toJSON()
        });
    }

    async viewMovado({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 7).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.pages.movado', {
            products: products.toJSON()
        });
    }

    async viewLongines({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 8).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.pages.longines', {
            products: products.toJSON()
        });
    }

    async viewBulova({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 12).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.pages.bulova', {
            products: products.toJSON()
        });
    }

    async viewCaravelle({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 13).where('gioi_tinh', '=', 'Nam').fetch();

        return view.render('user.pages.caravelle', {
            products: products.toJSON()
        });
    }
}

module.exports = DongHoNamController
