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

Route.get('/', 'Admin/ProductController.home');

// Route.on('/signupAdmin').render('admin.signup_test_admin');
// Route.post('/signupAdmin', 'admin/AdminController.signupAdmin');

Route.get('/logout', async({ auth, response }) => {
    await auth.logout();
    return response.redirect('/admin');
});

Route.group(() => {
    Route.get('', 'Admin/Admincontroller.showFormLogin');
    Route.post('', 'Admin/AdminController.login').validator('LoginAdmin').middleware(['authenticated']);

    Route.get('/dashboard', 'Admin/Admincontroller.showDashboard');
    Route.get('/settings', 'Admin/Admincontroller.showSettings');

    // Catalog (Admin)
    Route.get('/catalog/add-catalog', 'Admin/ProducerController.viewAddProducer');
    Route.post('/catalog/add-catalog', 'Admin/ProducerController.addProducer');
    Route.get('/catalog/view-catalog', 'Admin/ProducerController.viewAllProducer');
    Route.get('/catalog/delete-catalog/:id', 'Admin/ProducerController.deleteProducer');
    Route.get('/catalog/edit-catalog/:id', 'Admin/ProducerController.editProducer');
    Route.post('/catalog/update-catalog/:id', 'Admin/ProducerController.updateProducer');

    // Product (Admin)
    Route.get('/product/add-product', 'Admin/ProductController.viewAddProduct');
    Route.post('/product/add-product', 'Admin/ProductController.addProduct');
    Route.get('/product/view-product', 'Admin/ProductController.viewAllProduct');
    Route.get('/product/delete-product/:id', 'Admin/ProductController.deleteProduct');
    Route.get('/product/edit-product/:id', 'Admin/ProductController.editProduct');
    Route.post('/product/edit-product/:id', 'Admin/ProductController.updateProduct');

    // User (Admin)
    Route.get('/user/add-user', 'Admin/UserController.viewAddUser');
    Route.post('/user/add-user', 'Admin/UserController.addUser');
    Route.get('/user/view-user', 'Admin/UserController.viewAllUser');
    Route.get('/user/delete-user/:id', 'Admin/UserController.deleteUser');
    Route.get('/user/edit-user/:id', 'Admin/UserController.viewEditUser');
    Route.post('/user/edit-iser/:id', 'Admin/UserController.updateUser');

    // Order (Amin)
    Route.get('/order/view-order', 'Admin/OrderController.viewOrder');
    Route.get('/order/view-order-detail', 'Admin/OrderController.viewOrderDetail');
}).prefix('/admin');

Route.on('/signin').render('user.signin');
Route.post('/signin', 'User/UserController.signin')
Route.get('/logoutUser', async({ auth, response }) => {
    await auth.logout();
    return response.redirect('/');
});

Route.on('/signup').render('user.signup');
Route.post('/signup', 'User/UserController.signup');

Route.post('/search', 'User/SearchController.search');

// detail page and detail product
Route.get('/dong-ho-citizen/citizen-eco-drive', 'User/DongHoController.viewPageCitizenEco');
Route.get('/dong-ho-citizen/citizen-eco-drive/:id', 'User/DongHoController.viewProductCitizenEco');

Route.group(() => {
    Route.get('/movado', 'User/DongHoController.viewPageMovado');
    Route.get('/movado/:id', 'User/DongHoController.viewProductMovado');

    Route.get('/longines', 'User/DongHoController.viewPageLongines');
    Route.get('/longines/:id', 'User/DongHoController.viewProductLongines');
}).prefix('/dong-ho-thuy-si')

Route.group(() => {
    Route.get('/bulova', 'User/DongHoController.viewPageBulova');
    Route.get('/bulova/:id', 'User/DongHoController.viewProductBulova');

    Route.get('/caravelle', 'User/DongHoController.viewPageCaravelle');
    Route.get('/caravelle/:id', 'User/DongHoController.viewProductCaravelle');
}).prefix('/dong-ho-chinh-hang');

// watch men
Route.group(() => {
    Route.get('', 'User/DongHoNamController.viewDHNam')
    Route.get('/:id', 'User/DongHoNamController.viewDetailDHNam');

    // prices
    Route.get('/min_price=0000000&max_price=4999999', 'User/DongHoNamController.viewDH5tr');
    Route.get('/min_price=5000000&max_price=15000000', 'User/DongHoNamController.viewDH5tr_15tr');
    Route.get('/min_price=15000001&max_price=30000000', 'User/DongHoNamController.viewDH15tr_30tr');
    Route.get('/max_price=30000001', 'User/DongHoNamController.viewDH30tr');

    // albert
    Route.get('/day-da', 'User/DongHoNamController.viewDayDa')
    Route.get('/day-kim-loai', 'User/DongHoNamController.viewDayKimLoai')
    Route.get('/thep-khong-ri', 'User/DongHoNamController.viewThepKhongRi')
}).prefix('/dong-ho-nam');


// cart
Route.group(() => {
    Route.get('', 'User/CartController.viewCart');
    Route.get('/thanh-toan', 'User/CartController.viewCheckOut').middleware(['auth']);
    Route.post('/thanh-toan', 'User/CartController.checkOut');
    Route.get('/thanh-toan-thanh-cong', 'User/CartController.checkOutSuccess');
}).prefix('/gio-hang');

Route.get('/sua-chua', 'User/UserController.viewRepair')
Route.get('/lien-he', 'User/UserController.viewContact')
