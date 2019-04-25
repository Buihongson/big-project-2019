'use strict'

class CartController {
    // view cart
    async viewCart({ view }) {
        return view.render('user.cart.cart');
    };
}

module.exports = CartController
