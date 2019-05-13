'use strict'

const Product = use('App/Models/SanPham')
const Catalog = use('App/Models/NhaSanXuat')

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
}

module.exports = StatisticController
