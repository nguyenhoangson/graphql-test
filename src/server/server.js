

import express from 'express';


var app = express();

app
	.get('/', function(){
		console.log('Hello the world');
	})
	.listen(8080, function(){
		console.log('Listen on port 8080...');
	});

