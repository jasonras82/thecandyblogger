angular.module('app', ['ui.router', 'ngStorage'])
  .run(function($rootScope, $window) {
    $rootScope.$on('$stateChangeSuccess', function() {
      $window.scrollTo(0, 0);
    });
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../views/home.html'
      })
      .state('products', {
        url: '/products',
        templateUrl: '../views/products.html',
        controller: 'productsCtrl',
        controllerAs: 'vm'
      })
      .state('product', {
        url: '/product/:id',
        templateUrl: '../views/product.html',
        controller: 'productsCtrl',
        controllerAs: 'vm'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: '../views/blog.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: '../views/about.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: '../views/contact.html',
        controller: 'contactCtrl',
        controllerAs: 'vm',
      })
      .state('press', {
        url: '/press',
        templateUrl: '../views/press.html'
      })
      .state('account', {
        url: '/account',
        templateUrl: '../views/account.html'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: '../views/cart.html',
        controller: 'cartCtrl',
        controllerAs: 'vm'
      })

    $urlRouterProvider
      .otherwise('/');
  });
