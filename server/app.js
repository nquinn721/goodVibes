const express = require('express'),
	  app = express();



const DB = require('./db');
const Yelp = require('./apis/yelp');

app.use(express.static(__dirname + '/assets'))
// const Leafly = require('./scrapers/leafly');
// const yelpScraper = require('./scrapers/dispensariesFromYelp')(Yelp);

// Yelp.search({apiCall: 'businesses/wP9zn3HkkssRWf7wG4JEag'}, (data) => {
// 	console.log(data);
// })
app.get('/', (req, res) => {
	res.send('Thanks for visiting Good Vibes Technologies!');
});
app.get('/:lat/:lon', (req, res) => {
	Yelp.search({term: 'dispensary', lat: req.params.lat, lon: req.params.lon}, (data) => {
		res.send({data})
	});
});


app.get('/yelp-dispensaries', (req, res) => {
	YelpDispensary.find({}, (e, data) => {
		res.send({data});
	});
});

app.get('/leafly', async (req, res) => {
	res.send( await Leafly());
})

app.listen(process.env.PORT || 3000);