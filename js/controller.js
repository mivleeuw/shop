'use strict';

/* Controllers */
var pageControllers = angular.module('pageControllers', []);
//SHOP
 pageControllers.controller("ShopCtrl", function($scope, $rootScope, $http) {
    if($scope.shopList == undefined) {
        $http.get('data/guitars.json').success(function(data) {
            $scope.shopList = $rootScope.shopList = data;            
        });
     }
     $scope.orderProp = 'type';
     $scope.reverse = false; 
     
     $scope.setListDirection = function(val){
         $scope.reverse = val;
     }
     if($rootScope.shoppingCartList == undefined) {
        $rootScope.shoppingCartList = [];
     }
  })
 //DETAIL
 pageControllers.controller("DetailCtrl", function($routeParams, $scope, $rootScope, ListService) {
     $scope.curIndex = ListService.getIndex($routeParams.param, $rootScope.shopList);
     if($scope.curIndex != undefined) {
        $scope.curItem = $rootScope.shopList[$scope.curIndex];        
     } 
     $scope.addToCart = function(id){
         var boughtItem = $rootScope.shopList[id];
         boughtItem.quantity = 1;
         $rootScope.shoppingCartList.push(boughtItem);
     }
  })
 //CART
 pageControllers.controller("CartCtrl", function($scope, $rootScope, CalculateService, ListService) {
     $scope.shoppingCartList = $rootScope.shoppingCartList; 
     $scope.totalAmount = CalculateService.calculateTotal($scope.shoppingCartList);
     $scope.removeFromCart = function(id){
         ListService.delete(id, $scope.shoppingCartList);
         $scope.totalAmount = CalculateService.calculateTotal($scope.shoppingCartList);  
     }
     $scope.calculateTotal = function() {
         $scope.totalAmount = CalculateService.calculateTotal($scope.shoppingCartList);         
     }
  })