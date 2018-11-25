const express = require('express'),
	  app = express();



const DB = require('./db');
const Yelp = require('./apis/yelp');
console.log(__dirname + '/web/build');

app.use(express.static(process.cwd() + '/web/build'))
// const Leafly = require('./scrapers/leafly');
// const yelpScraper = require('./scrapers/dispensariesFromYelp')(Yelp);

// Yelp.search({apiCall: 'businesses/wP9zn3HkkssRWf7wG4JEag'}, (data) => {
// 	console.log(data);
// })
app.get('/', (req, res) => {
	res.sendFile(process.cwd() + '/web/build/index.html');
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