// const express = require('express');
// const router=express.Router();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use('/api',require('./api'));

//error handling middleware
app.use(function(err,req,res,next){
	console.log(err);
	res.status(422).send({error:err.message});
});

//listen for requests
app.listen(process.env.port || 4000, function() {
	console.log('now listening to requests');
});