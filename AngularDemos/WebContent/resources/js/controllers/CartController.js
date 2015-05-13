

function CartController($scope, $http) {
	$scope.bill = {discount:0};
	$scope.items = [
					{title: 'Paint pots', quantity: 8, price: 3.95},
					{title: 'Polka dots', quantity: 17, price: 12.95},
					{title: 'Pebbles', quantity: 5, price: 6.95}
					];
    	    
    	
	$scope.totalCart = function(){
		var total = 0;
		for(var i=0;i<$scope.items.length;i++){
			total = total + $scope.items[i].quantity * $scope.items[i].price ;
		}
		return total;
	}
	
	calculateDiscount = function(){
		if($scope.totalCart() > 100){
			$scope.bill.discount = 10;
		}
		else{
			$scope.bill.discount = 0;
		}
		
	};
	
	$scope.$watch('$scope.totalCart',calculateDiscount);
	
	$scope.subTotal = function(){
		var subTotal = 0;
		subTotal = $scope.totalCart() - $scope.bill.discount;
		return subTotal;
	};
	
}
