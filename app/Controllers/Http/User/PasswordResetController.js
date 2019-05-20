'use strict'

const User = use('App/Models/User')
const PasswordReset = use('App/Models/PasswordReset')

const Hash = use('Hash')
const Mail = use('Mail')
const randomstring = require('randomstring')

class PasswordResetController {
    async viewFormForgotPass({ view }) {
        return view.render('user.password.email')
    }

    async sendResetLink({ request, session, response }) {
        try {
            const user = await User.findBy('email', request.input('email'));

            await PasswordReset.query().where('email', user.email).delete();

            const { token } = await PasswordReset.create({
                email: user.email,
                token: randomstring.generate(50)
            });

            const mailData = {
                user: user.toJSON(),
                token
            }

            await Mail.send('user.password.password_reset', mailData, message => {
                message
                    .to(user.mail)
                    .from('hello@adonisjs.com')
                    .subject('Link reset password')
            });

            session.flash({ success_notification: 'Link đã được gửi.'});

            return response.redirect('back')
        } catch (error) {
            session.flash({ error_notification: 'Không tồn tại email này.'});

            return response.redirect('back')
        }
    }

}

module.exports = PasswordResetController
