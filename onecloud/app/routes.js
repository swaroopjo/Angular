module.exports = function(app) {
	
	app.get('/login', function(req, res) {
		console.log("PATH: /login GET  returning login.html")
		res.sendfile('./public/login.html');
		
	});
//	
	app.post('/logon', function(req, res) {
		
		/**
		 * Supposed to check the user information. 
		 * I am too lazy for this. 
		 * */
		console.log(" Path : /logon POST returning spa.html")
		// Set the cookie only then the Angular picks up and starts running. other wise we will endup in login page forever
		var cookieValue = JSON.stringify({globals: {currentUser:"swaroop"}});
		res.cookie('globals',cookieValue);
		
		//res.sendfile('./public/spa.html');
		res.redirect('/oneclient');
		
	});
	
//	At the root of the application return spa.html. Authentication checkis handled by the Angular JS. 
	app.get('/', function(req, res) {
		console.log("Path : / returning spa.html");
		res.sendfile('./public/spa.html');
		
		
	});
	
	app.get('/oneclient',function(req,res){
		
		console.log("Redirected to spa.html");
		res.sendfile('./public/spa.html');
	});

};