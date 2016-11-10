angular.module('app', ['ui-router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../views/home.html'
      })
      .state('products', {
        url: '/products',
        templateUrl: '../view/products.html',
        controller: 'productsCtrl',
        controllerAs: 'vm'
      })

    $urlRouterProvider
      .otherwise('/');
  });
