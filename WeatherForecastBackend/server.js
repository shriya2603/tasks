const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api',require('./api'));

app.use(function(err,req,res,next){
	res.status(422).send({error:err.message});
});

app.listen(process.env.port || 4000, function() {
	console.log('Listening to requests');
});