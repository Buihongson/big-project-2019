'use strict'

const User = use('App/Models/User');
const Product = use('App/Models/SanPham');

const Hash = use('Hash');

class UserController {
    // view page citizen eco
    async viewPageCitizenEco({ view }) {
        // query all product citizen eco
        const products = await Product.query().where('nha_san_xuat_id', '=', 4).fetch();

        return view.render('user.pages.page_citizen_eco', {
            products: products.toJSON()
        });
    }

    // view page movado
    async viewPageMovado({ view }) {
        const products = await Product.query().where('nha_san_xuat_id', '=', 7).fetch();

        return view.render('user.pages.movado', {
            products: products.toJSON()
        });
    }

    // view detail 1 product
    async viewProduct({ params, view }) {
        // query product
        const product = await Product.find(params.id);

        console.log(product.toJSON());

        return view.render('user.product.product_deital', {
            product: product.toJSON()
        });
    }

    async signup({ request, response, session}) {
        // get all email of user
        const emailUser = await User.all();
        const convertJson = emailUser.toJSON();

        // get value from input 
        let ten = request.input('ten');
        let email = request.input('email');
        let password = request.input('password');
        let dia_chi = request.input('dia_chi');
        let so_dien_thoai = request.input('so_dien_thoai')

        for(let key in convertJson) {
            // if email had exist in database then notify error
            if(convertJson[key].email === email) {
                // notify when email had exist
                session.flash({ signupError: 'Email đã tồn tại.' });

                return response.redirect('back');
            } else {
                // create new user and save database
                const user = await User.create({
                    ten,
                    email,
                    password,
                    dia_chi,
                    so_dien_thoai
                });

                session.flash({ signupSuccess: 'Đăng ký thành công.' });

                return response.redirect('back');
            }
        }
    }

    async signin({ request, response, session, auth }) {
        // get email and passwrod from page signin
        const {email, password} = request.all();

        try {
            // compare with email and password in database
            await auth.attempt(email, password);
            return response.redirect('/');
        } catch {
            session.flash({loginError: 'Email hoặc mật khẩu sai.'})
            return response.redirect('/signin');
        }
    }
}

module.exports = UserController
