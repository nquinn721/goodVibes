const request = require('async-request');
const fs = require('fs');
const cheerio = require('cheerio');
const strainList = require('./data/strainData');


class StrainData{

	static async start() {
		for(let i = 0; i < strainList.length; i++){
			await this.setupItem(strainList[i], i);
		}
		this.save(strainList);
	}

	static async setupItem(item, index){
		if(!item || !item.DisplayCategory || !item.UrlName)return;

		const url = 'https://www.leafly.com/' + item.DisplayCategory.toLowerCase() + '/' + item.UrlName;
		const data = await request(url);
		const $ = cheerio.load(data.body);
		
		console.log(url, index);
		
		this.getDescription($, item);
		this.getLineage($, item);
		this.getEffects($, item);

	}

	static getDescription($, item) {
		item.description = $('.description').text();
	}

	static getLineage($, item) {
		const arr = [];
		const titles = ['name', '', 'symbol', 'category'];
		$('.strain-tile--md .strain-tile').each(function() {
			let obj = {};
			for(let i = 0; i < titles.length; i++){
				if(titles[i] !== ''){
					let text = $(this).find('tspan').eq(i).text().replace(/\{.+\}/g, '').replace(/\s+/g, ' ').trim();
					obj[titles[i]] = text;
				}
			}
			arr.push(obj);
		})
		item.lineage = arr;
	}

	static getEffects($, item) {
		let effects = {};
		$('.m-histogram').each(function(){
			const category = $(this).attr('ng-show').split('===')[1].replace(/'/g, '');

			effects[category] = [];
			
			$(this).find('.m-histogram-item-wrapper').each(function(){
				const name = $(this).find('.m-attr-label').text(),
					  amount = parseInt($(this).find('.m-attr-bar').attr('style').split(':')[1], 10) / 10;
				effects[category].push({name, amount});
			})
		});
		item.effects = effects;
	}

	static async save(data) {
		fs.writeFileSync('data/newestData.json', JSON.stringify(data, null, 4));
		process.exit();
	}

}
StrainData.start();