
app.factory("oAuthService",function($rootScope,$location,$cookieStore,$http, $window){
	var clientID = "";
	var bitlysecureURL = 'https://bitly.com/oauth/authorize?state=&redirect_uri=http%3A%2F%2Flocalhost%3A8030%2Fbitly-client%2F%23%2Foauth_page&client_id=';
	
	var redirectToBitly = function(){
		
		  $rootScope.globals.clientId = '9d5850519e3f95c486ea42907a28972f96ef1008';
		  $rootScope.globals.accessCode = "";
		  $cookieStore.put('globals', $rootScope.globals);
		  $window.location.href = bitlysecureURL+$rootScope.globals.clientId;
		  
	};
	var extractCodeFromURL = function(){
		var absURL = $location.absUrl();
		  var code = absURL.match(/code=[0-9,a-z,A-Z]+/g)+"";
		  var code = code.replace("code=","");
		  if(code != ""){
			  console.log("Code received... setting cookie..");
			  $rootScope.globals.accessCode = code;
			  $cookieStore.put('globals', $rootScope.globals);
		  }
		  else{
			  $window.location.href = bitlysecureURL+$rootScope.globals.clientId;
		  }
		
	};
	var refreshToken = function(){
		  console.log("Getting Token from access Code...");
		$http.post("https://api-ssl.bitly.com/oauth/access_token?client_id=9d5850519e3f95c486ea42907a28972f96ef1008&client_secret=c421bd7e291344b6f784eccdae88b0a664a2a843&code="+$rootScope.globals.accessCode+
	  				"&redirect_uri=http%3A%2F%2Flocalhost%3A8030%2Fbitly-client%2F%23%2Foauth_page")
	  			.success(function(data){
	  				
	  			}).error(function(data){
	  				console.log("Error occured with https Request.")
	  			}).then(function(response){
	  				console.log(response.data.status_txt);
	  				if(response.data.status_txt == "INVALID_CODE"){
	  					//$rootScope.globals.accessCode = "";
	  					redirectToBitly();
	  				}
	  				else{
	  					var temp = response.data.match(/access_token=[a-z,A-Z,0-9]+/g)+"";
	  					var accessToken = temp.replace("access_token=","");
	  					$rootScope.globals.accessToken = accessToken;
	  					
	  					temp = response.data.match(/login=[a-z,A-Z,0-9]+/g)+"";
	  					var userName = temp.replace("login=","");
	  					$rootScope.globals.userName = userName; 
	  					
	  					$cookieStore.put('globals',$rootScope.globals);
	  					$location.path("/lookup");
	  				}
	  			});
		
	};
	
	return {
		redirectToBitlySSL: redirectToBitly,
		getAccessCode:extractCodeFromURL,
		refreshToken:refreshToken
	};
});

app.factory("markitService",function($http, $location){
	
	return {
		lookup: function(text,showResult){
			console.log("looking up Market API with partial Name: "+text);	
			//Call back function is executed when the success is called. This is Just a workaround for CrossDomain Issue. 
			var JSON_CALLBACK = function(response){
				console.log("Callback function called");
				//showResult(response)
			};
			
			$http.jsonp("http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input="+text+"&&callback=JSON_CALLBACK")
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
			$http.jsonp("http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol="+symbol+"&&callback=JSON_CALLBACK")
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

app.factory('Base64',function(){
	 var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	  
	    return {
	        encode: function (input) {
	            var output = "";
	            var chr1, chr2, chr3 = "";
	            var enc1, enc2, enc3, enc4 = "";
	            var i = 0;
	  
	            do {
	                chr1 = input.charCodeAt(i++);
	                chr2 = input.charCodeAt(i++);
	                chr3 = input.charCodeAt(i++);
	  
	                enc1 = chr1 >> 2;
	                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	                enc4 = chr3 & 63;
	  
	                if (isNaN(chr2)) {
	                    enc3 = enc4 = 64;
	                } else if (isNaN(chr3)) {
	                    enc4 = 64;
	                }
	  
	                output = output +
	                    keyStr.charAt(enc1) +
	                    keyStr.charAt(enc2) +
	                    keyStr.charAt(enc3) +
	                    keyStr.charAt(enc4);
	                chr1 = chr2 = chr3 = "";
	                enc1 = enc2 = enc3 = enc4 = "";
	            } while (i < input.length);
	  
	            return output;
	        },
	  
	        decode: function (input) {
	            var output = "";
	            var chr1, chr2, chr3 = "";
	            var enc1, enc2, enc3, enc4 = "";
	            var i = 0;
	  
	            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
	            var base64test = /[^A-Za-z0-9\+\/\=]/g;
	            if (base64test.exec(input)) {
	                window.alert("There were invalid base64 characters in the input text.\n" +
	                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
	                    "Expect errors in decoding.");
	            }
	            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	  
	            do {
	                enc1 = keyStr.indexOf(input.charAt(i++));
	                enc2 = keyStr.indexOf(input.charAt(i++));
	                enc3 = keyStr.indexOf(input.charAt(i++));
	                enc4 = keyStr.indexOf(input.charAt(i++));
	  
	                chr1 = (enc1 << 2) | (enc2 >> 4);
	                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	                chr3 = ((enc3 & 3) << 6) | enc4;
	  
	                output = output + String.fromCharCode(chr1);
	  
	                if (enc3 != 64) {
	                    output = output + String.fromCharCode(chr2);
	                }
	                if (enc4 != 64) {
	                    output = output + String.fromCharCode(chr3);
	                }
	  
	                chr1 = chr2 = chr3 = "";
	                enc1 = enc2 = enc3 = enc4 = "";
	  
	            } while (i < input.length);
	  
	            return output;
	        }
	    };
});

	
app.factory('authenticationService',function(Base64, $http, $cookieStore, $rootScope, $timeout) {
    var service = {};
    
    service.Login = function (username, password, callback) {

        /* Dummy authentication for testing, uses $timeout to simulate api call
         ----------------------------------------------*/
        $timeout(function(){
            var response = { success: username === 'test' && password === 'test' };
            if(!response.success) {
                response.message = 'Username or password is incorrect';
            }
            callback(response);
        }, 1000);


        /* Use this for real authentication
         ----------------------------------------------*/
        //$http.post('/api/authenticate', { username: username, password: password })
        //    .success(function (response) {
        //        callback(response);
        //    });

    };

    service.SetCredentials = function (username, password) {
        var authdata = Base64.encode(username + ':' + password);

        $rootScope.globals = {
            currentUser: {
                username: username,
                authdata: authdata
            }
        };

        $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
        $cookieStore.put('globals', $rootScope.globals);
    };

    service.ClearCredentials = function () {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
        $http.defaults.headers.common.Authorization = 'Basic ';
    };

    return service;
	
});
