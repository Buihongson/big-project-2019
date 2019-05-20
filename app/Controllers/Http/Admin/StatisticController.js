'use strict'

const Product = use('App/Models/SanPham')
const Catalog = use('App/Models/NhaSanXuat')
const Order = use('App/Models/DonHang')

class StatisticController {
    async product ({ view }) {
        const countAllProduct = await Product
            .query()
            .count('* as total');
        const total = countAllProduct[0].total;

        // query all catolog
        const catalogs = await Catalog.query().where('parent_id', '>', 0).fetch();
        // cv toJSON
        const cvCatalogs = catalogs.toJSON();

        const totalEverProduct = [];

        for(let key in cvCatalogs) {
            // count by nha_san_xuat_id and name product
            const count = await Product
                .query()
                .select('nha_san_xuat_id')
                .select('ten_san_pham')
                .count('* as total')
                .where('nha_san_xuat_id', '=', cvCatalogs[key].id)
                .orderBy('nha_san_xuat_id', 'desc');

            totalEverProduct.push(count);
        }

        const cvTotalEverProductToJSON = [];
        for(let i = 0; i < totalEverProduct.length; i++){
            cvTotalEverProductToJSON.push(totalEverProduct[i][0]);
        }

        return view.render('admin.statistic.product', {
            total,
            cvTotalEverProductToJSON
        });
    }

    async order({ view }) {
        const countAllOrderPay = await Order
            .query()
            .count('* as total')
            .where('tinh_trang', '=', '1');
        const totalOrderPayed = countAllOrderPay[0].total;

        // get total order not pay
        const countAllOrderNotPay = await Order
            .query()
            .count('* as total')
            .where('tinh_trang', '=', '0');
        const totalOrderNotPay = countAllOrderNotPay[0].total;

        return view.render('admin.statistic.order', {
            totalOrderPayed,
            totalOrderNotPay
        });
    }
}

module.exports = StatisticController
