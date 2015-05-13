
var ShoppingCart = angular.module('ShoppingCart',[]);

ShoppingCart.factory('Items',function(){
	var items = {};
	items.query = function() {
	// In real apps, we'd pull this data from the server...
	return [
	{title: 'Paint pots', description: 'Pots full of paint', price: 3.95},
	{title: 'Polka dots', description: 'Dots with polka', price: 2.95},
	{title: 'Pebbles', description: 'Just little rocks', price: 6.95}
		];
	};
	
	return items;
});

ShoppingCart.controller('ShoppingSVController', function($scope,Items){
	
	$scope.items = Items.query();
	
});

	var person = function(salary){
		var personObj = {}; 
		
		personObj.getSalary = function(){
			return this.salary;
		}
		
		return personObj;
	}