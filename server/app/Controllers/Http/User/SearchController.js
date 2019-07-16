'use strict'

const Product = use('App/Models/SanPham');

class SearchController {
    async viewSearch({ view }) {

    }

    async search({ request, response, view }) {
        const valueInput = request.input('search');

        // query with database
        const resultSearch = await Product
            .query()
            .where('ten_san_pham', 'like' , '%'+valueInput.trimEnd().trimStart()+'%')
            .orWhere('ma_san_pham', 'like', '%'+valueInput.trimEnd().trimStart()+'%')
            .fetch();

        if(resultSearch.toJSON().length > 0 ) {
            return view.render('user.search.product_search', {
                product: resultSearch.toJSON(),
                valueInput
            });
        } else {
            return view.render('user.search.error_search', {
                valueInput
            });
        }
    }
}

module.exports = SearchController
