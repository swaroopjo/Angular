
 
 app.controller("mainController",function($scope,markitService){
	
	 	$scope.matches = [];
	 	
	 	$scope.message = {error:false,text:""};
	 	
		$scope.lookup = function(textInput){
			console.log("User Input : "+textInput);
			var results = [];
			var callback = function(response){
				$scope.matches = response;
			}
			results = markitService.lookup(textInput,callback);
			
		};
		
		$scope.getQuote = function(stockSymbol){
			var callback = function(response){
				$scope.stock = response;
			};
			
			markitService.getStockBySymbol(stockSymbol,callback);
			
		};
			
	});