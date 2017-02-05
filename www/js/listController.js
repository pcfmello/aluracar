angular.module('starter').controller('ListController', function($scope, HttpService) {

	$scope.title = "PauleteCar App";
	$scope.email = "paulo.mello@floripaweb.com";

	HttpService.getCarList().then((response) => {
        $scope.carList = response.data;
	});

});