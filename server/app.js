const express = require('express'),
	  app = express();



const DB = require('./db');
const Yelp = require('./apis/yelp');

app.get('/:lat/:lon', (req, res) => {
	console.log(req.params);
	Yelp.search({term: 'dispensary', lat: req.params.lat, lon: req.params.lon}, (data) => {
		res.send({data})
	});
});

app.listen(process.env.PORT || 3000);