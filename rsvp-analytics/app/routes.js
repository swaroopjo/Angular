
module.exports = function(app) {
	
	var https = require('https');
	
	var httpClient = require('request');
	
	
	
//	At the root of the application return spa.html. Authentication checkis handled by the Angular JS. 
	app.get('/', function(req, res) {
		console.log("Path : / returning spa.html");
		res.sendfile('./public/spa.html');
		
		
	});
	

};