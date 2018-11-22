const app = require('express')();
const request = require('async-request');
const fs = require('fs');
const cheerio = require('cheerio');
const download = require('image-downloader')
const mkdirp = require('mkdirp');

let leaflyData = require('./data');


clearUnusedData(leaflyData, 'Name', 'Tags');
clearUnusedData(leaflyData, 'Name', 'NegativeEffects');
clearUnusedData(leaflyData, 'Name', 'Flavors');
clearUnusedData(leaflyData, 'Name', 'Symptoms');
clearUnusedData(leaflyData, 'Name', 'Conditions');
save(leaflyData);

function clearUnusedData(data, keyToKeep, listToSearch){

	for(let i = 0; i < data.length; i++){
		const item = data[i];
		const list = item[listToSearch];
		
		if(!list)continue;

		for(let j = 0; j < list.length; j++){
			let item = list[j];
			for(let key in item){
				if(key !== keyToKeep){
					delete item[key];
				}
			}
			list[j] = item[keyToKeep];
		}
	}

	return data;	
}
// let one = leaflyData[0];
// console.log(leaflyData.length);

// start(one);



async function start(item){
	const url = 'https://www.leafly.com/' + item.DisplayCategory.toLowerCase() + '/' + item.UrlName;

	const data = await request(url);
	
	const $ = cheerio.load(data.body);
	const html = $('.strain-details').text();
	console.log(html);
	
	
	// getEffects($, item);
	// getAllImages(url, item);

	// save(item);
}

function getEffects($, item) {
	let effects = {};

	item.description = $('.description').text();

	// Effects/Medical/Negative
	$('.m-histogram').each(function(){
		const category = $(this).attr('ng-show').split('===')[1].replace(/'/g, '');

		effects[category] = [];
		
		$(this).find('.m-histogram-item-wrapper').each(function(){
			const name = $(this).find('.m-attr-label').text(),
				  amount = parseInt($(this).find('.m-attr-bar').attr('style').split(':')[1], 10);
			effects[category].push({name, amount});
		})
		
	});


	item.effects = effects;
}

async function save(data) {
	fs.writeFileSync('newData.json', JSON.stringify(data, null, 4));
	process.exit();
}


async function getAllImages(pageUrl, item) {
	const data = await request(pageUrl + '/photos');
	const $ = cheerio.load(data.body);
	const strain = item.UrlName;

	await mkdirp('./images/' + strain);

	$('img').each(function() {
		const url = $(this).attr('src');

		if(url){
			const options = {
			  url,
			  dest: './images/'+ strain
			}
			 
			download.image(options)
		}
	});
	
}

// Leafly.hitServer(); 
// Leafly.searchForData();



app.listen(3000);

