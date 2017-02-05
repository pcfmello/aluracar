angular.module('starter').config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('list');

	$stateProvider
		.state('list', {
			url : '/list',
			templateUrl : 'templates/list.html',
			controller : 'ListController'
		})

		.state('detail', {
			url : '/detail/:car',
			templateUrl : 'templates/detail.html',
			controller : 'DetailController'
		})

        .state('cart', {
            url : '/cart/:itemList',
            templateUrl : 'templates/cart.html',
            controller : 'CartController'
        })

        .state('checkout', {
            url : '/checkout/:totalOrder',
            templateUrl : 'templates/checkout.html',
            controller : 'CheckoutController'
        });


});