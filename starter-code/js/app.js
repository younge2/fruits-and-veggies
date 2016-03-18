/* setup your angular app here */

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);

var app = angular.module("FandV",[]);

app.controller("ListsCtrl", ['$scope', function($scope){
	$scope.poolArr = fruit.concat(vegetables);
	$scope.fruitArr = [];
	$scope.vegArr = [];
	$scope.fin = false;


	$scope.moveToFruit = function(idx) {
		var temp = $scope.poolArr[idx];
		$scope.fruitArr.push(temp);
		$scope.poolArr.splice(idx,1);
		if ($scope.poolArr.length === 0) $scope.fin = true;

	}

	$scope.moveToVegetable = function(idx) {
		var temp = $scope.poolArr[idx];
		$scope.vegArr.push(temp);
		$scope.poolArr.splice(idx,1);
		if ($scope.poolArr.length === 0) $scope.fin = true;
	}

	$scope.fruToPool = function(idx) {
		var temp = $scope.fruitArr[idx];
		$scope.poolArr.push(temp);
		$scope.fruitArr.splice(idx,1);
		if ($scope.poolArr.length !==0) $scope.fin = false;

	}

	$scope.vegToPool = function(idx) {
		var temp = $scope.vegArr[idx];
		$scope.poolArr.push(temp);
		$scope.vegArr.splice(idx,1);
		if ($scope.poolArr.length !==0) $scope.fin = false;


	}

	$scope.findFruit = function(idx) {
		var fru = $scope.fruitArr[idx];
		if (fruit.indexOf(fru)===-1) return false;
		else return true;

	}
	$scope.findVeg = function(idx) {
		var veg = $scope.vegArr[idx];
		if (vegetables.indexOf(veg)===-1) return false;
		else return true;

	}

	$scope.checkCorrect = function() {
		for (i=0; i<$scope.fruitArr.length; i++) {
			if (fruit.indexOf($scope.fruitArr[i])===-1) return false;
		}
		for (i=0; i<$scope.vegArr.length; i++) {
			if (vegetables.indexOf($scope.vegArr[i])===-1) return false;
		}
		return true;
		
	}


}]);