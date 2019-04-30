'use strict'

const Order = use('App/Models/DonHang')
const User = use('App/Models/User')

class OrderController {
    // view order
    async viewOrder({ view }) {
        const orders = await Order.query().with('users').fetch();

        return view.render('admin.orders.view_order', {
            orders: orders.toJSON()
        })
    }
}

module.exports = OrderController
