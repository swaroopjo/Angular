
module.exports = function(app) {
	
	var https = require('https');
	
	var httpClient = require('request');
	
	app.get('/login', function(req, res) {
		console.log("PATH: /login GET  returning login.html")
		res.sendfile('./public/login.html');
		
	});
//	
	app.post('/middleware', function(req, res) {
		
		/**
		 * Supposed to check the user information. 
		 * I am too lazy for this. 
		 * */
		console.log(" Path : /logon POST returning spa.html")
		// Set the cookie only then the Angular picks up and starts running. other wise we will endup in login page forever
		var cookieValue = JSON.stringify({globals: {currentUser:"swaroop"}});
		/**
		 * Check from mongo if this user has some domains set up already. if so, set it as cookies under 
		 * JSON.stringify({globals: {currentUser:"swaroop",accounts:accounts}});
		 * */
		res.cookie('globals',cookieValue);
		
		res.sendfile('./public/spa.html');
		//res.redirect('/oneclient');
		
	});
	
//	At the root of the application return spa.html. Authentication checkis handled by the Angular JS. 
	app.get('/', function(req, res) {
		console.log("Path : / returning spa.html");
		res.sendfile('./public/spa.html');
		
		
	});
	
	app.get('/auth/account',function(request,response){
		
		var options = {
				uri: 'https://openshift.redhat.com/broker/rest/user',
				port:443,
				method:'GET',
				headers : {'accept':'application/json',
					'Authorization':''+request.get('Authorization')}
		};
		httpClient(options,function(error, res,body){
			if(error){
				response.send(error);
				console.log(error);
			}
			else{
				response.send(body);
			}
		});
	
		console.log("Redirected to spa.html");
		
	});


};