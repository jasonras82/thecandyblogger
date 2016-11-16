angular.module('app').controller('productsCtrl', function($scope, $state, $log, productsService) {

  // $scope.test = 'hey hey hey!';

  productsService.getProducts()
  .then((data) => {
    $scope.products = data;
  });

  productsService.getProduct()
  .then((data) => {
    // let product = data;
    console.log($state.params.id);
    for(var i = 0; i < data.length; i++) {
      if(data[i].id === $state.params.id) {
        console.log(data[i]);
        $scope.products = data[i];
      }
    }
    console.log(data[i]);
  });

});
