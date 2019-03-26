'use strict'

const Admin = use('App/Models/Admin')

const Hash = use('Hash')

class AdminController {
    async showFormLogin({ view }) {
        return view.render('admin.admin_login');
    }

    async showDashboard({ view }) {
        return view.render('admin.dashboard');
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

        const admin = await Admin.query().where('email', email).first();
        
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
