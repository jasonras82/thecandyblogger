angular.module('app').service('productsService', function($http, $q) {
  this.getProducts = function() {
    return $http.get(
      '/api/products'
    ).then(response => {
      // console.log(response.data);
      return response.data;
    });
  };

  this.getProduct = function() {
    return $http.get(
      '/api/product/:id'
    ).then(response => {
      console.log(response.data);
      return response.data;
    })
  }
});
