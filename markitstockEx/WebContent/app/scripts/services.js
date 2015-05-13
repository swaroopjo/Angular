
app.factory("markitService",function($http, $location){
	
	return {
		lookup: function(text,showResult){
			console.log("looking up Market API with partial Name: "+text);	
			$http.get("http://dev.markitondemand.com/Api/v2/Lookup/json?input="+text)
					.success(function(response){
						console.log("Data Received: "+response);
						showResult(response)
					})
					.error(function(){
						console.log("Error Occured !!.");
					});
			},
		getStockBySymbol: function(symbol,showResult){
			console.log("Looking for exact Match on "+symbol);
			$http.get("http://dev.markitondemand.com/Api/v2/Quote/json?symbol="+symbol)
				.success(function(response){
					console.log("Data Received: "+response);
					showResult(response);
				})
				.error(function(response){
					console.log("Error Getting Data..");
				});
		}
	};
});
	