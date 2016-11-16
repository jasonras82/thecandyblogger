angular.module('app').controller('productsCtrl', function($scope, $state, $log, productsService) {

  // $scope.test = 'hey hey hey!';

  productsService.getProducts()
  .then((data) => {
    $scope.products = data;
  });

  if($state.params.id) {
    productsService.getProduct($state.params.id)
    .then((data) => {
      $scope.product = data;
    });
  }

});
