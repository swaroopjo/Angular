/**
 * New node file
 */

	rsvpAnalytics.controller('queryController',function($scope,solrAPI){
		console.log("Query Controller Initialized");
		$scope.queryObject = {}; 
		
		$scope.query = function(){
			console.log("Params: "+$scope.queryObject.searchText+" : "+$scope.queryObject.state);
			if(!$scope.queryObject.searchText && !$scope.queryObject.state){
				console.log("Search Text/select Option is Emplty. Cannot proceed further");
				return; 
			}
			
			solrAPI.query($scope.queryObject,function(response){
				$scope.results = response.response.docs;
			});
		};
	});
	
	
	
	
