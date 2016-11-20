angular.module('app').controller('productsCtrl', function($scope, $state, $localStorage, $sessionStorage, $log, productsSvc) {

  // $scope.test = 'hey hey hey!';

  productsSvc.getProducts()
  .then((data) => {
    $scope.products = data;
  });

  if($state.params.id) {
    productsSvc.getProduct($state.params.id)
    .then((data) => {
      $scope.product = data;
    });
  }

  $scope.cart = productsSvc.cart;

  $scope.addToCart = function(product) {
      $localStorage.cart = productsSvc.addToCart(product);
      // $localStorage.cart = cart;
    // console.log(product);
    // console.log($localStorage.cart);
  };

  // $scope.getCart = function() {
  //   $scope.cart = $localStorage.cart;
  // }

  // $scope.addToCart = function(product) {
  //   productsSvc.addToCart(product);
  // };

});
