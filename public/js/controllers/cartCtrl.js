angular.module('app').controller('cartCtrl', function($scope, $localStorage, $sessionStorage, cartSvc) {

  $scope.getCart = function() {
    $scope.cart = $localStorage.cart;
  }

  $scope.getCart();

  $scope.removeItem = (item) => {
    console.log(item);
    console.log($localStorage.cart);
    console.log($scope.cart);
    $localStorage.cart = cartSvc.removeItem(item, $scope.cart);
    $scope.cart = $localStorage.cart;
  }
});
