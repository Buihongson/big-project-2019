'use strict'

const User = use('App/Models/User');

class UserController {
    async signup({ request, response, session}) {
        // get all email of user
        const emailUser = await User.all();
        const convertJson = emailUser.toSON();

        // get value from input 
        let ten = request.input('ten');
        let email = request.input('email');
        let password = request.input('password');
        let dia_chi = request.input('dia_chi');
        let so_dien_thoai = request.input('so_dien_thoai')

        for(let key in convertJson) {
            // if email had exist in database then notify error
            if(convertJson[key].email === email) {
                session.flash({ signupError: 'Email đã tồn tại.' });
            } else {
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
}

module.exports = UserController
