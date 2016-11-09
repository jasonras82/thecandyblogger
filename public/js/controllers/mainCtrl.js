angular.module('app').controller('productsCtrl', function($scope, productsService) {

  $scope.testing = 'hey hey hey!';

  productsService.getProducts()
  .then((data) => {
    $scope.products = data;
  });
});
