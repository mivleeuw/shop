'use strict';

/* App Module */


 var guitarShop = angular.module("guitarShop", ['ngRoute', 'pageControllers']);
             
    guitarShop.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                    when('/shop', {
                        templateUrl: 'parts/shop.html',
                        controller: 'ShopCtrl'
                    }).
                   when('/items/:param', {
                        templateUrl: 'parts/detail.html',
                        controller: 'DetailCtrl'
                    }).  
                    when('/cart', {
                        templateUrl: 'parts/shoppingCart.html',
                        controller: 'CartCtrl'
                    }).
                   otherwise({
                        redirectTo: '/shop'
                    });
        }]);


   