angular.module('app').controller('cartCtrl', function($scope, $sessionStorage, cartSvc) {

  $scope.getCart = () => {
    $scope.cart = cartSvc.cart;
  }

  $scope.getCart();

  $scope.removeItem = (item) => {
    console.log(item);
    console.log($localStorage.cart);
    console.log($scope.cart);
    $scope.cart = cartSvc.removeItem(item, $scope.cart);
  }

  $scope.getSubtotal = () => {
    return $scope.cart.reduce((previous, current) => {
      return previous + current.price * current.quantity;
    }, 0);
  }
});
