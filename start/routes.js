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

Route.get('/', 'User/DongHoController.home');

// Route.on('/signupAdmin').render('admin.signup_test_admin');
// Route.post('/signupAdmin', 'admin/AdminController.signupAdmin');

Route.get('/logout', async ({ auth, response }) => {
    await auth.logout();
    return response.redirect('/admin');
});

// group admin
Route.group(() => {
    Route.get('', 'Admin/Admincontroller.showFormLogin');
    Route.post('', 'Admin/AdminController.login').validator('LoginAdmin');

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

    // Statistical
    Route.get('/statistic/product', 'Admin/StatisticController.product')
}).prefix('/admin');

Route.on('/signin').render('user.signin');
Route.post('/signin', 'User/UserController.signin')
Route.get('/logoutUser', async ({ auth, response }) => {
    await auth.logout();
    return response.redirect('/');
});

Route.on('/signup').render('user.signup');
Route.post('/signup', 'User/UserController.signup');

// account user
Route.group(() => {
    Route.get('', 'User/UserController.account');

    Route.get('/cap-nhap-tt', 'User/UserController.viewAccountUpdate');
    Route.post('/cap-nhap-tt', 'User/UserController.accountUpdate')

    Route.get('/doi-mat-khau', 'User/UserController.viewPasswordChange');
    Route.post('/doi-mat-khau', 'User/UserController.passwordChange')
}).prefix('/khach-hang/tai-khoan');

// search product
Route.post('/search', 'User/SearchController.search');

Route.get('/thuong-hieu', 'User/DongHoController.viewThuongHieu');
// view detail product
Route.get('/san-pham/:id', 'User/DongHoController.viewDetailDHNam')

// detail page
Route.group(() => {
    Route.get('/citizen-eco-drive', 'User/DongHoController.viewPageCitizenEco');
    Route.get('/citizen-automatic', 'User/DongHoController.viewPageCitizenAuto');

}).prefix('/dong-ho-citizen')

Route.group(() => {
    Route.get('/movado', 'User/DongHoController.viewPageMovado');

    Route.get('/longines', 'User/DongHoController.viewPageLongines');
}).prefix('/dong-ho-thuy-si')

Route.group(() => {
    Route.get('/bulova', 'User/DongHoController.viewPageBulova');

    Route.get('/caravelle', 'User/DongHoController.viewPageCaravelle');
}).prefix('/dong-ho-chinh-hang');

// watch men
Route.group(() => {
    Route.get('', 'User/DongHoNamController.viewDHNam')

    // prices
    Route.get('/min_price=0000000&max_price=4999999', 'User/DongHoNamController.viewDH5tr');
    Route.get('/min_price=5000000&max_price=15000000', 'User/DongHoNamController.viewDH5tr_15tr');
    Route.get('/min_price=15000001&max_price=30000000', 'User/DongHoNamController.viewDH15tr_30tr');
    Route.get('/max_price=30000001', 'User/DongHoNamController.viewDH30tr');

    // albert
    Route.get('/day-da', 'User/DongHoNamController.viewDayDa')
    Route.get('/day-kim-loai', 'User/DongHoNamController.viewDayKimLoai')
    Route.get('/thep-khong-ri', 'User/DongHoNamController.viewThepKhongRi')

    // movado
    Route.get('/movado', 'User/DongHoNamController.viewMovado')
    // longines
    Route.get('/longines', 'User/DongHoNamController.viewLongines')
    // bulova
    Route.get('/bulova', 'User/DongHoNamController.viewBulova')
    // caravelle
    Route.get('/caravelle', 'User/DongHoNamController.viewCaravelle')

}).prefix('/dong-ho-nam');

// watch women
Route.group(() => {
    Route.get('', 'User/DongHoNuController.viewDHNu')

    // prices
    Route.get('/min_price=0000000&max_price=4999999', 'User/DongHoNuController.viewDH5tr');
    Route.get('/min_price=5000000&max_price=15000000', 'User/DongHoNuController.viewDH5tr_15tr');
    Route.get('/min_price=15000001&max_price=30000000', 'User/DongHoNuController.viewDH15tr_30tr');
    Route.get('/max_price=30000001', 'User/DongHoNuController.viewDH30tr');

    // albert
    Route.get('/day-da', 'User/DongHoNuController.viewDayDa')
    Route.get('/day-kim-loai', 'User/DongHoNuController.viewDayKimLoai')
    Route.get('/thep-khong-ri', 'User/DongHoNuController.viewThepKhongRi')

    // movado
    Route.get('/movado', 'User/DongHoNuController.viewMovado')
    // longines
    Route.get('/longines', 'User/DongHoNuController.viewLongines')
    // bulova
    Route.get('/bulova', 'User/DongHoNuController.viewBulova')
    // caravelle
    Route.get('/caravelle', 'User/DongHoNuController.viewCaravelle')

}).prefix('/dong-ho-nu');

// cart
Route.group(() => {
    Route.get('', 'User/CartController.viewCart');
    Route.get('/thanh-toan', 'User/CartController.viewCheckOut').middleware(['auth']);
    Route.post('/thanh-toan', 'User/CartController.checkOut');
    Route.get('/thanh-toan-thanh-cong', 'User/CartController.checkOutSuccess');
}).prefix('/gio-hang');

Route.get('/sua-chua', 'User/UserController.viewRepair')
Route.get('/lien-he', 'User/UserController.viewContact')
