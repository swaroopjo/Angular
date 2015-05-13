
var leClient = angular.module('leClient',[]);

leClient.factory('leServices',function(){
	
	var leServices = {};
	
	leServices.search = function(){
		
		return "";
	};
	
	leServices.getSubsetMembers = function(){
		
		return "";
	};
	
	leServices.getSearchSpec  = function(){
		
		return "";
	};
	
	return leServices;
	
});

leClient.controller('leSearch',function(leServices,$scope){
	
	$scope.items = leServices.search();
	
	
});