# RSVP Analytics 



RSVP Analytics is used to analyze the RSVP meetup data that is stored in the solr server. 
Build using Angular JS,Node JS, Consumes the REST services exposed by Solr server to search the meetups. 
Example: searching for "volleyball" should return all the meetups related to volleyball. 

Dependencies: 
https://github.com/swaroopjo/solr-rabbitmq-spring/tree/master/rsvp-mq-publisher
https://github.com/swaroopjo/solr-rabbitmq-spring/tree/master/rsvp-mq-subscriber
https://github.com/swaroopjo/solr-rabbitmq-spring/tree/master/rsvp-solr-server

Workflow: 
	rsvp-mq-publisher publishes the data to Rebbit MQ(MOM). 
	rsvp-mq-subscriber subscribes the rsvp data and sends it to the solr server to index the data for faster search. 
	Meetup data is differentiated by States ex(NJ,NY..). 
	NJ-Listener sends the data to the solr server to have the facets indexed. 
	rsvp-solr-server indexes the data and stores in temp directory managed by Jetty server and exposes the search by REST calls. 

	
## Installation
1. Download the repository
2. Install npm modules: `npm install`
4. Start up the server: `node server.js`
5. View in browser at http://localhost:8080


## Thanks to startbootstrap.com for awesome layout. 
http://startbootstrap.com/template-overviews/sb-admin/

