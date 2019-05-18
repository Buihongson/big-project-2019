'use strict'

const User = use('App/Models/User');
const Order = use('App/Models/DonHang')
const Product = use('App/Models/SanPham');

const Hash = use('Hash');

class UserController {
    async viewRepair({ view }) {
        return view.render('user.repair')
    }

    async viewContact({ view }) {
        return view.render('user.contact')
    }

    async signup({ request, response, session }) {
        // get all email of user
        const emailUser = await User.all();
        const convertJson = emailUser.toJSON();

        // get value from input 
        let ten = request.input('ten');
        let email = request.input('email');
        let password = request.input('password');
        let dia_chi = request.input('dia_chi');
        let so_dien_thoai = request.input('so_dien_thoai')

        for (let key in convertJson) {
            // if email had exist in database then notify error
            if (convertJson[key].email === email) {
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
        const { email, password } = request.all();

        try {
            // compare with email and password in database
            await auth.attempt(email, password);
            return response.redirect('/');
        } catch {
            session.flash({ loginError: 'Email hoặc mật khẩu sai.' })
            return response.redirect('/signin');
        }
    }

    // view account setting
    async account({ view, auth }) {
        // console.log(auth.user.toJSON())

        return view.render('user.account.my_account', {
            inforUser: auth.user.toJSON()
        });
    }

    // view account update
    async viewAccountUpdate({ auth, view }) {
        return view.render('user.account.update_account', {
            inforUser: auth.user.toJSON()
        })
    }

    // account update
    async accountUpdate({ request, response, session, auth }) {
        const user = await User.find(auth.user.id);

        user.ten = request.input('user_name');
        user.email = request.input('user_email');
        user.dia_chi = request.input('user_address');
        user.so_dien_thoai = request.input('user_tel');

        await user.save();

        // notify when update success
        session.flash({ update_notification: 'Cập nhập thành công'});

        return response.redirect('/khach-hang/tai-khoan');
    }

    // view password change
    async viewPasswordChange({ view }) {
        return view.render('user.account.change_password')
    }

    // change password
    async changePassword({ request, response, auth, session }) {
        const user = await User.find(auth.user.id);

        const oddPassword = request.input('password');
        const passwordVerifyed = await Hash.verify(oddPassword, user.password);
        if(passwordVerifyed) {
            user.password = request.input('new-password');

            user.save();

            session.flash({ update_notification: 'Đổi mật khẩu thành công.'});
            return response.redirect('/khach-hang/tai-khoan');
        } else {
            session.flash({ error_notification: 'Mật khẩu cữ không chính xác.'});

            return response.redirect('/khach-hang/tai-khoan/doi-mat-khau');
        }
    }

    // view bill of account
    async viewBillAccount({ view, auth }) {
        const orders = await Order
            .query()
            .whereHas('users', (builder) => {
                builder.where('id', auth.user.id)
            })
            .with('san_phams')
            .fetch();

        return view.render('user.account.bill_account', {
            orders: orders.toJSON()
        })
    }
}

module.exports = UserController
