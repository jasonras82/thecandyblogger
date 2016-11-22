angular.module('app').service('productsSvc', function($http, $q) {
  this.getProducts = function() {
    return $http.get(
      '/api/products'
    ).then(response => {
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

  this.addToCart = function(product) {
    if(!this.cart) {
      this.cart = [];
      this.cart.push(product);
      console.log(product);
      console.log(this.cart);
    }

    else {
      let added = false;
      for(let i = 0; i < this.cart.length; i++) {
        if(this.cart[i].product_id === product.product_id) {
          console.log(this.cart[i]);
          if (!product.quantity) {
            product.quantity = 2;
            console.log(product.quantity);
            added = true;
          }
          else {
            product.quantity++;
            console.log(product.quantity);
            added = true;
          }
        }
      }
      if(added === false) {
        console.log(product);
        this.cart.push(product);
        console.log(this.cart);
      }
    }
    console.log(this.cart);
    return this.cart;
  }

});
