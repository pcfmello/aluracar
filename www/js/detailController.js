angular.module('starter').controller('DetailController', function($stateParams, $scope) {

	$scope.car = angular.fromJson($stateParams.car);
    $scope.itemList = [$scope.car];
	getSubtotal();
	
	$scope.accessoryList = [
		{nome: 'Freios ABS', preco: 2199.90 },
		{nome: 'Câmbio Automático', preco: 3599.99 },
		{nome: 'Direção Hidraulica', preco: 1000.00 },
	];

	$scope.insertAcessory = (isChecked, item) => {
		if(isChecked) {
			addAccessory(item);
            getSubtotal();
        }
		else {
            removeAccessory(item);
            getSubtotal();
        }
	};

	function addAccessory(item) {
        $scope.itemList.push(item);
	}

    function removeAccessory(item) {
        $scope.itemList.splice($scope.itemList.indexOf(item), 1);
    }

    function getSubtotal() {
		$scope.subtotal = $scope.itemList.reduce(function(prev, curr) {
                return prev + curr.preco;
            }, 0);
	};
});