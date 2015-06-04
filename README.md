# Angular JS Demo applications

##MarkitStockEx: 
  This application is a Rest client which consumes services from markitondemand data API, which lets you 
  search for a Stock based on partial name and select the appropriate match to view the details of that stock. 
  For now, The client makes use of 2 API's
  1. Lookup
  2. Stock Quote. 
  3. Openshift Middleware
  4. Bitly Client
  5. RSVP Analytics
  
## One Cloud
Single Page Application that allows Users to View/Download the contents in Drive, Dropbox, Skydrive. All in one single UI.
Uses Cookie to authenticate the user. 

## Openshift Middleware
Middleware application to manage the Openshift cloud instances. User can start stop, restart the applications in each domain applicable. Users can view, create applications in the domain. 
Uses Http basic authentication for calling the rest API. 
Developed with Node JS, ExpressJS, Angular JS. 

## RSVP Analytics
RSVP Analytics is used to analyze the RSVP meetup data that is stored in the solr server. 
Build using Angular JS,Node JS, Consumes the REST services exposed by Solr server to search the meetups. 
Example: searching for "volleyball" should return all the meetups related to volleyball. 
