'use strict'

const Order = use('App/Models/DonHang')
const OrderDetail = use('App/Models/ChiTietDonHang')
const Product = use('App/Models/SanPham')

class OrderController {
    // view order
    async viewOrder ({ view }) {
        const orders = await Order.query().with('users').fetch();

        return view.render('admin.orders.view_order', {
            orders: orders.toJSON()
        });
    }

    async viewOrderDetail ({ view }) {
        const details = await Order.query().with('san_phams').fetch();

        console.log(details.toJSON());

        return view.render('admin.orders.view_order_detail', {
            details: details.toJSON()
        });
    }
}

module.exports = OrderController
