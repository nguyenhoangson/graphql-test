

import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

// Declaration
var app = express();
const PORT = 8080;

// Handle requests
app
	.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true, pretty: true}))
	.get('/', function(){
		console.log('Hello the world');
	})
	.get('/data', function(req, res){
		res.send('Hi data here');
	})
	.listen(8080, function(){
		console.log('Listen on port ' + PORT + '...');
	});

