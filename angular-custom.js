var myApp = angular.module('myApp', []);

myApp.controller('sortController', function($http,$scope,$rootScope){
	$http({
		method: 'GET',
		url: 'http://jsonplaceholder.typicode.com/posts'
	}).then(function successCallback(response) {
		$scope.results = response.data;
	}, function errorCallback(response) {
		
	});
	
	$scope.propertyName = 'userId';
	$scope.reverse = true;
	$scope.sortBy = function(propertyName) {
		$scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
			? !$scope.reverse : false;
		$scope.propertyName = propertyName;
		$scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);
	};
});