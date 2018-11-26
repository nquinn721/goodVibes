const request = require('async-request');
const cheerio = require('cheerio');

class Scrape{


	static async start(url, links, selectors){
		const $ = await this.getPage(url),
			  self = this,
			  data = {};

		return $.html();
		if(links){
			
			$(links).each(async function() {
				console.log($(this));
				
				const url = $(this).attr('href');
				console.log(url);
				
				// const p = await self.getPage(url);

				// for(let title in this.selectors){
				// 	const sel = this.selectors[i];

				// 	data[title] = p(sel).text();
				// }
			});
		}
	}

	static async getPage(url){
		const data = await request(url); 
		return cheerio.load(data.body);
	}

}

async function start() {
	const data = await Scrape.start(
		// 'https://www.leafly.com/explore/sort-alpha',
		// 'https://www.leafly.com/products/vaping', 
		'https://www.leafly.com/finder',
		'.item.item-col',
		{
			'brandName': '.brand-name', 
			'productName': '.product-name', 
			'description': '.product-short-description', 
			'rating': '.product-rating', 
			'price': '.product-price',
			'details': '.product-details .product-description'
		},
	);

	// console.log(data);
	return data;
}

module.exports = start()
