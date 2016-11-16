angular.module('app').service('productsService', function($http, $q) {
  this.getProducts = function() {
    return $http.get(
      '/api/products'
    ).then(response => {
      console.log(response.data);
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
});
