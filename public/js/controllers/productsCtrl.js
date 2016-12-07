angular.module('app').controller('productsCtrl', function($scope, $state, $localStorage, $sessionStorage, $log, productsSvc, cartSvc) {

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

  $scope.addToCart = function(product) {
    $scope.cart = cartSvc.addToCart(product);
    $localStorage.cart = $scope.cart;
  };
});
