angular.module('starter').controller('CartController', function($stateParams, $scope) {

    $scope.itemList = angular.fromJson($stateParams.itemList);

    $scope.totalOrder = $scope.itemList.reduce(function(prev, curr) {
            return prev + curr.preco;
        }, 0);


});