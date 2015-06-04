
rsvpAnalytics.factory('solrAPI',function($http,$location,$cookieStore){
	console.log('Solr API service Initialized');
	
	return {
		query:function(params,callback){
			var queryUrl = "/"+params.state+"/select?q="+params.searchText+"&wt=json&indent=true"; 
			// Example : http://localhost:8983/NJ-core/select?q=*volleyball*&wt=json&indent=true
			
			$http.get("http://localhost:8983"+queryUrl).success(function(response){
				callback(response);
			}).error(function(error){
				console.log("Error occured while calling API"+error);
			});
		}
	};
});


//middleware.factory('domainService',function($http,$location,$cookieStore){
//	
//	return {
//		listAllDomains:function(){
//			if($cookieStore.get('globals').globals.accounts && $cookieStore.get('globals').globals.accounts.length > 0){
//				var accounts = $cookieStore.get('globals').globals.accounts;
//				
//				for(var i=0;i<accounts.length;i++){
//					var crypto = accounts[i].authData;
//					$http.defaults.headers.common['Authorization'] = 'Basic '+ crypto;
//					$http.get('https://openshift.redhat.com/broker/rest/domains')
//					.success(function(response){
//						console.log(response);
//					})
//					.error(function(error){
//						console.log(error);
//					});
//				}
//				var crypto = $cookieStore.get('globals').globals.accounts[0];
//				
//			}
//			
//		}
//	};
//});
