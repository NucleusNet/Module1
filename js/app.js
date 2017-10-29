(function () {
'use strict';

angular.module('NameModule1', [])

.controller('NameModule1Controller', function ($scope) {
	$scope.name = '';
	$scope.checkyourluck = '';
	$scope.fontcolor='';
	
	$scope.check = function () {
		var items = calculateNumericForItem($scope.name);
		if ( items === 0) {
			$scope.checkyourluck = 'Please enter data first';
			$scope.fontcolor='red';
		}
		else {
			$scope.checkyourluck = ( items > 3) ? 'Too much! ':'Enjoy!';
			$scope.fontcolor='green';
		}
  };
  
  $scope.deletecheck = function () {
	  $scope.checkyourluck = '';
  }
  
  function calculateNumericForItem(str) {
	  if (str==='') return 0;
	  var items=str.split(',');
	  for ( var i = 0, j = items.length ; i < j; i++ ) {
		  if ( items[ i ] === '' ) {
			  items.splice( i, 1 );
			  i--;
		  }else if (!( typeof items[ i ] === 'undefined' || !items[ i ] )){
			  if ( items[ i ].trim() === '' ) {
				  items.splice( i, 1 );
				  i--;
			  }
		  }
	  }
	  return items.length	  
  }

});

})();
