var angApp = angular.module('angApp', []);

angApp.controller('MainCtrl', function($scope, $http){
	$scope.outputDate = {
	};
	$scope.inputDate = '';
	$scope.getDate = function(){
		$http.get('/'+$scope.inputDate).then(
			function(res){
				if (res.data.unix == null){
					$scope.outputDate.unix = 'null';
					$scope.outputDate.natural = 'null';
				} else {
					$scope.outputDate = res.data;
				}
			}, 
			function(err){
			console.log(err);
		})
	};
});

