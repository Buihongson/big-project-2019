'use strict'

const Admin = use('App/Models/Admin')
const User = use('App/Models/User')
const Order = use('App/Models/DonHang')

const Hash = use('Hash')
const moment = require('moment')

class AdminController {
    async showFormLogin({ view }) {
        return view.render('admin.admin_login');
    }

    async showDashboard({ view }) {
        // get total all user
        const countAllUser = await User
            .query()
            .count('* as total');
        const totalAllUser = countAllUser[0].total;

        // get total all user registered 7 days ago or before
        const yesterday = moment().subtract(7, 'days').format('YYYY-MM-DD HH:mm:ss')
        const user = await User
            .query()
            .count('* as total')
            .where('created_at', '<', yesterday)

        const userRecentRegis = totalAllUser-user[0].total;

        // get total order payed
        const countAllOrderPay = await Order
            .query()
            .count('* as total')
            .where('tinh_trang', '=', '1');
        const totalOrderPayed = countAllOrderPay[0].total;

        // get total order not pay
        const countAllOrderNotPay = await Order
            .query()
            .count('* as total')
            .where('tinh_trang', '=', '0');
        const totalOrderNotPay = countAllOrderNotPay[0].total;

        return view.render('admin.dashboard', {
            totalAllUser,
            userRecentRegis,
            totalOrderPayed,
            totalOrderNotPay
        });
    }

    async showSettings({ view }) {
        return view.render('admin.settings');
    }

    async signupAdmin({ request, response, auth }) {
        // const admin = await Admin.create(request.only(['username, email, password']));

        const admin = await Admin.create({
            username: request.input('username'),
            email: request.input('email'),
            password: request.input('password')
        });

        await auth.login(admin);
        return response.redirect('/admin_login');
    }

    async login({ request, auth, response, session }) {
        const { email, password } = request.all();

        const admin = await Admin
            .query()
            .where('email', email)
            .first();
        
        if(admin) {
            const passwordVerifued = await Hash.verify(password, admin.password);
            if(passwordVerifued) {
                return response.redirect('/admin/dashboard');
            }
        } else {
            session.flash({ loginError: 'Invalid Email or Password.' });
            return response.redirect('/admin');
        }

        // try {
        //     await auth.attempt(email, password);
        //     return response.redirect('/dashboard');
        // } catch {
        //     session.flash({ loginError: 'These credentials do not work.' });
        //     return response.redirect('/admin');
        // }
    }

}

module.exports = AdminController
