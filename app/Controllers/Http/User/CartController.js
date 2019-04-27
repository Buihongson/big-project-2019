'use strict'

class CartController {
    // view cart
    async viewCart({ view }) {
        return view.render('user.cart.cart');
    };

    async viewThanhToan({ view, response }) {
        response.send('Alo alo');

        return view.render('user.page.bulova')
    }
}

module.exports = CartController
