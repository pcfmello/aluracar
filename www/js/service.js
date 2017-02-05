angular.module('starter').service('HttpService', function($http) {

    const BASE_URL = 'https://aluracar.herokuapp.com/';

    this.getCarList = () => {
       return $http.get(BASE_URL);
    };

    this.saveOrder = () => {
       return $http.get(BASE_URL);
    };
});
