angular.module('app').service('cartSvc', function ($http, $q, $localStorage) {

// create the cart
  if(!$localStorage.cart) {
    this.cart = [];
  }
  else{
    this.cart = $localStorage.cart;
  }

// add an item to the cart
  this.addToCart = function(product) {
    let foundProduct = this.cart.find((cartItem) => {
      return cartItem.product_id === product.product_id;
    })
    if(!foundProduct) {
      product.quantity = 1;
      this.cart.push(product);
    }
    else {
      foundProduct.quantity++;
    }
    $localStorage.cart = this.cart;
    return this.cart;
  }

// remove an item from the cart
  this.removeItem = (item, cart) => {
    this.cart = cart.filter(product => {
      return product.product_id != item.product_id
    });
    $localStorage.cart = this.cart;
    return this.cart;
  }
});
