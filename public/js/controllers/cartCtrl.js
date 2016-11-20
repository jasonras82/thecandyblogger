angular.module('app').controller('cartCtrl', function($scope, $localStorage, $sessionStorage, cartSvc) {

  $scope.getCart = function() {
    let quantity = 1;
    $scope.cart = $localStorage.cart;
  }

  $scope.getCart();
  // $scope.cart = productsSvc.getCart();
  // console.log($scope.cart)


});
