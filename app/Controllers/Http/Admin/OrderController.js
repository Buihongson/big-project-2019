'use strict'

const Order = use('App/Models/DonHang')
const OrderDetail = use('App/Models/ChiTietDonHang')
const Product = use('App/Models/SanPham')

class OrderController {
    // view order
    async viewOrder ({ view }) {
        const orders = await Order
            .query()
            .with('users')
            .fetch();

        return view.render('admin.orders.view_order', {
            orders: orders.toJSON()
        });
    }

    // delete order
    async deleteOrder({ response, session, params }) {
        // get catalog by id
        const order = await Order.find(params.id);

        // delete catalog
        await order.delete();

        // notify when delete success
        session.flash({ delete_notification: 'Xóa thành công'});

        return response.redirect('/admin/orders/view-order');
    }

    async viewOrderDetail ({ view }) {
        const details = await Order
            .query()
            .with('san_phams')
            .with('users')
            .fetch();

        console.log(details.toJSON());

        return view.render('admin.orders.view_order_detail', {
            details: details.toJSON()
        });
    }
}

module.exports = OrderController
