const app = require('express')();
const Scrape = require('./scrape');
const request = require('async-request');
const regRequest = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const dispensaries = require('./data/dispensaries');




app.get('/', async (req, res) => {
});

app.get('/:a/:b/:c', async (req, res) => {
	const { a, b, c } = req.params;
	
	const data = await request('https://www.leafly.com/' + a + '/' + b + (c ? '/' + c : ''));

	res.send(cheerio.load(data.body).html());
})


app.listen(3000);

