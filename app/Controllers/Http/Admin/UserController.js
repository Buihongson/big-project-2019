'use strict'

const User = use('App/Models/User');

class UserController {
    // view add user
    async viewAddUser({ view }) {
        return view.render('admin.users.add_user');
    }

    // view all user
    async viewAllUser({ view }) {
        // query all user from database
        const users = await User.all();

        return view.render('admin.users.view_user', {
            users: users.toJSON()
        })
    }

    // view edit user
    async viewEditUser({ view, params }) {
        // get user by id
        const user = await User.find(params.id);

        return view.render('admin.users.edit_user', {
            user: user.toJSON()
        })
    }

    // add new user
    async addUser({ request, response, session, auth }) {
        const user = new User();

        // add propotites for user
        user.ten = request.input('user_name');
        user.email = request.input('user_email');
        user.password = request.input('user_password');
        user.dia_chi = request.input('user_address');
        user.so_dien_thoai = request.input('user_tel');

        // save user into database
        user.save();

        // notify when add success
        session.flash({ add_notification: 'Thêm thành công.' });

        // redirect back view all user
        return response.redirect('/admin/user/view-user');
    }

    // delete user
    async deleteUser({ params, response, session }) {
        // query user by id
        const user = await User.find(params.id);

        // delete user
        await user.delete();

        // notify when delete success
        session.flash({ delete_notification: 'Xóa thành công'});

        // redirect back view all user
        return response.redirect('/admin/user/view-user');
    }

    // update user
    async updateUser({ request, response, session }) {
        // get user by id
        const user = await User.find(parent.id);

        // get value from input
        user.ten = request.input('user_name');
        user.email = request.input('user_email');
        user.dia_chi = request.input('user_address');
        user.so_dien_thoai = request.input('user_tel');

        // save user
        await user.save();

        // notify when update success
        session.flash({ update_notification: 'Cập nhập thành công'});

        return response.redirect('/admin/user/view-user');
    }
}

module.exports = UserController
