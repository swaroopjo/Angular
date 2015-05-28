/**
 * New node file
 */

	middleware.controller('dashboardController',function($scope){
		console.log("Dashboard Controller");
	});
	
	
	middleware.controller('setupController',function($scope, $cookieStore, authenticationService){
		console.log("Setup Controller Initializing");
		
		$scope.newAccount={};
		
		$scope.authorizeAccount = function(){
			
			authenticationService.login($scope.newAccount.userID,$scope.newAccount.password,
					function(response){
					console.log(response);
						if(response.data.login){
							authenticationService.SetCredentials($scope.newAccount.userID,$scope.newAccount.password);
							$scope.accounts = $cookieStore.get('globals').globals.accounts;
						}
					}
			);
			
			
		};
		
	});
	
	middleware.controller('domainController', function(domainService, $scope,$cookieStore) {
		
		console.log("Domain Controller Initializing");
		domainService.listAllDomains();
	});
	
	middleware.controller('applicationController', function($scope) {
		//$scope.message = 'Welcome to Dropbox';
		console.log("Application Controller Initializing");
	});
	
	middleware.controller('catridgeController', function($scope) {
		//$scope.message = 'Welcome to I cloud';
		console.log("Catridge Controller Initializing");
	});
	
