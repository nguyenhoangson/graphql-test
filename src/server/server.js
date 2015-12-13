
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../data/schema';
import User from '../../data/user';
import mongoose from 'mongoose';

// connect to database	
mongoose.connect('mongodb://localhost/graphql');

// declare variables
var app = express();
const PORT = 8080;

// handle requests
app
	.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true, pretty: true}))

	.get('/', function(){
		User.find({name: "Nguyen Hoang Son"}, function(err, user){
			if(err) return err;
			console.log(user);
		});

		
	})

	.get('/data', function(req, res){
		res.send('Hi data here');
	})

	.listen(PORT, function(){
		console.log('Listen on port ' + PORT + '...');
	});
