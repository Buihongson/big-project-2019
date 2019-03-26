'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home');

// Route.on('/signupAdmin').render('admin.signup_test_admin');
// Route.post('/signupAdmin', 'admin/AdminController.signupAdmin');

Route.get('/logout', async({ auth, response }) => {
    await auth.logout();
    return response.redirect('/admin');
});
Route.get('/admin', 'Admin/Admincontroller.showFormLogin').middleware(['authenticated']);
Route.post('/admin', 'Admin/AdminController.login').validator('LoginAdmin');

Route.get('/admin/dashboard', 'Admin/Admincontroller.showDashboard');
Route.get('/admin/settings', 'Admin/Admincontroller.showSettings');

// Catalog (Admin)
Route.group(() => {
    Route.get('/add-catalog', 'Admin/ProducerController.viewAddProducer');
    Route.post('/add-catalog', 'Admin/ProducerController.addProducer');
    Route.get('/view-catalog', 'Admin/ProducerController.viewAllProducer');
    Route.get('/delete-catalog/:id', 'Admin/ProducerController.deleteProducer');
    Route.get('/edit-catalog/:id', 'Admin/ProducerController.editProducer');
    Route.post('/update-catalog/:id', 'Admin/ProducerController.updateProducer');
}).prefix('/admin/catalog');
