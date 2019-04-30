$(document).ready(function() {

var shoppingCart = (function() {

    var cart = [];
  
    // constructor item
    function Item(name, image, price, count) {
      this.image = image;
      this.name = name;
      this.price = price;
      this.count = count;
    }
  
    // function save cart
    function saveCart() {
      localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
  
    // function load cart
    function loadCart() {
      cart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
  
    if(localStorage.getItem('shoppingCart') != null) {
      loadCart();
    }
  
    var obj = {};
  
    // add to cart
    obj.addItemToCart = function(name, image, price, count) {
      for(let item in cart) {
        if(cart[item].name === name) {
          cart[item].count++;
          saveCart();
          return;
        }
      }
  
      var item = new Item(name, image, price, count);
      cart.push(item);
      saveCart();
    };
  
    // set count from item
    obj.setCountForItem = function(name, count) {
      for(let i in cart) {
        if(cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
  
    // remove item from cart
    obj.removeItemFromCart = function(name) {
      for(let item in cart) {
        if(cart[item].name === name) {
          cart[item].count--;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
      }
  
      saveCart();
    };
  
    // remove all item from cart
    obj.removeItemFromCartAll = function(name) {
      for(let item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
  
      saveCart();
    };
  
    // count cart
    obj.totalCount = function() {
      var totalCount = 0;
      for(let item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    };
  
    // total cart
    obj.totalCart = function() {
      var totalCart = 0;
      for(let item in cart) {
        totalCart += cart[item].price*cart[item].count;
      }
      return Number(totalCart);
    };
  
    // coppy cart
    obj.listCart = function() {
      var cartCoppy = [];
      for(let i in cart) {
        var item = cart[i];
        var itemCoppy = {};
        for(let p in item) {
          itemCoppy[p] = item[p];
        }
  
        itemCoppy.total = Number(item.price*item.count);
        cartCoppy.push(itemCoppy);
      }
  
      return cartCoppy;
    };
  
    return obj;
  })();
  
  // event & trigger

  $('.add-to-cart').on('click', function(e) {
    e.preventDefault();
    var name = $(this).data('name');
    var image = $(this).data('image');
    var price = Number($(this).data('price'));

    shoppingCart.addItemToCart(name, image, price, 1);

    displayCart();
    alert('Thêm vào giỏ hàng thành công.')
    window.location.href="http://127.0.0.1:3333/cart";
  })

  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = '';
    for(let i in cartArray) {
        output += '<tr class=\'product__top\'>'
            + '<td class=\'product__top__remove item\'><button class=\'delete-item\' data-name=\'' + cartArray[i].name + '\'>x</button></td>'
            + '<td class=\'product__thumbnail item\'><a href=\'#\'><img src=\'' + cartArray[i].image + '\'></a></td>'
            + '<td class=\'product__top__name item\'>' + cartArray[i].name + '</td>'
            + '<td class=\'product__top__price item\'>' + cartArray[i].price + '<span class=\'price__currencySymbol\'>&nbsp;₫</span></td>'
            + '<td class=\'product__top__quantity item\'><div class=\'product__top__quantity--body\'><button class=\'minus-item value__button\' id=\'decrease\' value=\'Decrease Value\' data-name=\'' + cartArray[i].name + '\'>-</button>'
            + '<input class=\'input-text item-count\' type=\'number\' min=\'1\' max=\'99\' step=\'1\' id=\'item-count\' data-name=\''+cartArray[i].name+'\' value=\''+cartArray[i].count+'\'>'
            + '<button class=\'plus-item value__button\' id=\'increase\' value=\'Decrease Value\' data-name=\'' + cartArray[i].name + '\'>+</button></div></td>'
            + '<td class=\'product__top__subtotal item\'><span class=\'price__amount amount\'>' +cartArray[i].total+ '</span><span class=\'price__currencySymbol\'>&nbsp;₫</span></span></td>'
            + '</tr>';
    }

    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.quantity-cart').html(shoppingCart.totalCount());
    $('#paycheck').val(shoppingCart.totalCart());
  }

  // delete item form cart
  $('.show-cart').on('click', '.delete-item', function(e) {
    var name = $(this).data('name');
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  });

  // -1 when lick '-'
  $('.show-cart').on('click', '.minus-item', function(e) {
    var name= $(this).data('name');
    shoppingCart.removeItemFromCart(name);
    displayCart();
  });

  // +1 when click '+'
  $('.show-cart').on('click', '.plus-item', function(e) {
    var name = $(this).data('name');
    shoppingCart.addItemToCart(name);
    displayCart();
  });

  // item count input
  $('.show-cart').on('change', '.item-count', function(e) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });

  $('#item-count').on('input', function(e) {
    var value = $(this).val();

    if ((value !== '') && (value.indexOf('.') === -1)) {
      $(this).val(Math.max(Math.min(value, 99), 1));
    }
  });

  displayCart();

  // $('#checkOut').on('click', function(e) {
  //   e.preventDefault();
  //   window.location.href = "http://127.0.0.1:3333/thanh-toan-thanh-cong";
  // });
});