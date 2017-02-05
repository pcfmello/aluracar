angular.module('starter').controller('CheckoutController', function($stateParams, $scope, $ionicPopup, $state, HttpService) {

    $scope.totalOrder = angular.fromJson($stateParams.totalOrder);
    $scope.customerData = {};

    $scope.confirmOrder = () => {
        let orderData = {
            carro: 'Carro',
            preco: $scope.totalOrder,
            nome: $scope.customerData.name,
            endereco: $scope.customerData.address,
            email: $scope.customerData.email
        };

        HttpService.saveOrder(orderData)
        .then(function(response) {
           $ionicPopup.alert({
                title: 'Thanks for your order!',
                template: 'Your order will be send in 5 days.'
           }).then(function(res) {
                $state.go('list');
           });
        }, function(response) {
            $ionicPopup.alert({
                title: 'Internal error',
                template: 'Our servers are bads. Sorry us!'
            });
        });
    }
});