'use strict'

const Order = use('App/Models/DonHang');

class CartController {
    // view cart
    async viewCart({ view }) {
        return view.render('user.cart.cart');
    }

    async viewCheckOut({ auth, view }) {
        return view.render('user.cart.cart_checkout', {
            user: auth.user.toJSON()
        });
    }

    async checkOut({ request, response, auth }) {
        const order = new Order();

        order.user_id = auth.user.id
        order.so_luong = request.input('so_luong')
        order.tong_tien = request.input('tong_tien')
        order.ghi_chu = request.input('ghi_chu')

        await order.save();

        return response.redirect('/gio-hang/thanh-toan-thanh-cong');
    }

    async checkOutSuccess({ view }) {
        return view.render('user.cart.cart_checkout_success')
    }
}

module.exports = CartController
