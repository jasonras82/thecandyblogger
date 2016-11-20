angular.module('app').service('productsSvc', function($http, $q) {
  this.getProducts = function() {
    return $http.get(
      '/api/products'
    ).then(response => {
      // console.log(response.data);
      return response.data;
    });
  };

  this.getProduct = function(id) {
    return $http.get(
      `/api/product/${id}`
    ).then(response => {
      return response.data;
    })
  }

  this.cart = [];
  let quantity = 1;

  this.addToCart = function(product) {
    // console.log(cart);
    // console.log(product.product_id);
    // if(!cart) {
    //   let cart = [];
    // }
    if(cart === []) {
      cart.push(product);
      console.log(product);
      console.log(cart);
    }
    else {
      console.log(cart);
      for(var i = 0; i < cart.length; i++) {
        if(cart[i].product_id === product.product_id) {
          console.log(cart[i]);
          if (!product.quantity) {
            product.quantity = 2;
          }
          else {
            product.quantity++;
          }
        }
        else {
          cart.push(product);
        }
      }
    }
    // console.log(product);
    // console.log(cart);
    return cart;
  }

  // this.getCart = function() {
  //   return cart;
  // }
});
