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

  // if(!$localStorage.cart) {
  //   $localStorage.cart = productsSvc.cart;
  //   console.log($localStorage.cart);
  //   $scope.cart = $localStorage.cart;
  //   console.log($scope.cart);
  // }

  $scope.addToCart = function(product) {
    $scope.cart = productsSvc.addToCart(product);
    $localStorage.cart = $scope.cart;
  };


  // $scope.getCart = function() {
  //   $scope.cart = $localStorage.cart;
  // }

  // $scope.addToCart = function(product) {
  //   productsSvc.addToCart(product);
  // };

});
