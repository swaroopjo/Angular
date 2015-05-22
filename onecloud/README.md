# One Cloud Client Built with Angular JS, Node JS, Express JS, MongoDB.

One cloud Application allows users to download files from Google Drive, Dropbox, skydrive and ICloud, all from one single UI. 

Technical Details: 
	App uses Node JS and Express JS on the Backend and Angular JS on the front end. 
	User AUthentication is handled by the server. 
	The initial request "/" GET is sent to Express JS which returns spa.html. 
	spa.html initializes Angular JS which checks if the cookie exists or not, 
	If the cookie does not exist, It redirects to http://hostname:port/login
	Express JS authenticates the user and sets a cookie and returns the spa.html.
	Angular JS again checks if the cookie exists wich resolves to true and returns the home page. 
	
## Installation
1. Download the repository
2. Install npm modules: `npm install`
4. Start up the server: `node server.js`
5. View in browser at http://localhost:8080


## Future Additions
- Develop Dropbox, Drive Services that call the API services to get the stored files. 
- Add encryption to the application login. 

