

function shoppingCartCtrl($scope, $http) {
    		
	$scope.items=[ {description:"Iphone5s",quantity:2},
	               {description:"Iphone6", quantity:3}
	              ];
    	    
    	

	$scope.remove=function(index){
		$scope.items.splice(index,1);
	};
}
