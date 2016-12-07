angular.module('app').service('cartSvc', function ($http, $q, $localStorage) {

  this.cart = [];

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
    product.subtotal = product.price * product.quantity;
    return this.cart;
  }

  this.removeItem = (item, cart) => {
    return cart.filter(product => {
      return product.product_id != item.product_id
    });
  }
});
