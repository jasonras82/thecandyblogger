angular.module('app').controller('productsCtrl', function($scope, productsService) {

  // $scope.test = 'hey hey hey!';

  productsService.getProducts()
  .then((data) => {
    $scope.products = data;
  });
  
});
