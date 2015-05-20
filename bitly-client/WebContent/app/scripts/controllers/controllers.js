
app.controller('accessController',function($scope,$location){

		console.log($location.search);
		console.log($location.search().code);
	
});


app.controller("homeController",function($scope,markitService){
	
	
});

app.controller("loginController",function($scope,$location,authenticationService){
	console.log("Inside Login COntroller");
	authenticationService.ClearCredentials();
	
	$scope.login = function(){
		console.log("Trying to log in User... "+$scope.userName+" "+$scope.password );
		authenticationService.Login($scope.userName,$scope.password,function(response){
			
			if(response.success){
				console.log("User Successfully authenticated");
				authenticationService.SetCredentials($scope.userName,$scope.password);
				$location.path('/');
			}
			else{
				console.log(response.message);
			}
		});
	}
	
});


 
 app.controller("lookupController",function($scope,markitService){
	
	 	$scope.matches = [];
	 	
	 	$scope.message = {error:false,text:""};
	 	
		$scope.lookup = function(textInput){
			console.log("User Input : "+textInput);
			var results = [];
			var callback = function(response){
				if(response.length == 0){
					$scope.message.error = true;
					$scope.message.text = "No Matches have been found";
					console.log("Response was null");
					return;
				}
				$scope.message = {error:false,text:""};
				$scope.matches = response;
			}
			results = markitService.lookup(textInput,callback);
			
		};
		
		$scope.getQuote = function(stockSymbol){
			var callback = function(response){
				if(response == undefined || response.length == 0){
					$scope.message.error = true;
					$scope.message.text = "No Matches have been found";
					return;
				}
				$scope.message = {error:false,text:""};
				$scope.stock = response;
				
			};
			
			markitService.getStockBySymbol(stockSymbol,callback);
			
		};
			
	});