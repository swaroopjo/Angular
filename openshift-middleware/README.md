# Openshift Middleware application to manage openshift instances using Rest API



Technical Details: 
	Application allows user to manage Openshift Domains, Applications, Catridges etc. 
	Needs User to register to the site, set up Openshift Accounts and then allows user to manage them. 
	Applications,Domains,Catridges can be stopped, restarted, deleted, created, Force Restart etc. 
	Uses MongoDB to store the user accounts and the openshift accounts encrypted. 
	Built with Node JS for Calling the openshift REST API. ajax calls cannot be done from angular due to cross domain bolcking. 
	Openshift uses Basic authentication technique for User authentication. Base64 service is used for encryption. 
	
	
## Installation
1. Download the repository
2. Install npm modules: `npm install`
4. Start up the server: `node server.js`
5. View in browser at http://localhost:8080


## Thanks to startbootstrap.com for awesome layout. 
http://startbootstrap.com/template-overviews/sb-admin/

