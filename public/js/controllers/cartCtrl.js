angular.module('app').controller('cartCtrl', function($scope, $localStorage, $sessionStorage, cartSvc) {

  $scope.getCart = function() {
    let quantity = 1;
    $scope.cart = $localStorage.cart;
  }

  $scope.getCart();
  // $scope.cart = productsSvc.getCart();
  // console.log($scope.cart)

  // $scope.removeItem = (item) => {
  //   for(let i = 0; i < $localStorage.cart.length; i ++) {
  //     if($scope.cart[i].product_id === item.product_id) {
  //       $scope.cart.splice(i, 1);
  //     }
  //   }
  //   $scope.cart = $localStorage.cart;
  //   return $scope.cart;
  // }

  $scope.removeItem = (item) => {
    console.log(item);
    console.log($localStorage.cart);
    console.log($scope.cart);
    $localStorage.cart = cartSvc.removeItem(item, $scope.cart);
    $scope.cart = $localStorage.cart;
  }

});
