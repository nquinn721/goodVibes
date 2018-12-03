const request = require('async-request');
const cheerio = require('cheerio');
const fs = require('fs');

class Scrape{
	constructor(){
		this.data = [];
		this.result = 0;
		this.totalResult = 1400;
		this.url = `https://www.wikileaf.com/strains/?result=`;
		this.pageLinks = '.content-box';
		this.scrapeData = {
			'description': '.strain-content', 
			'thcPercent': '#strain_thc h3'
		}
	}

	async start(){
		console.log('RESULT', this.result);
		
		const page = await request(this.getUrl());
		const $ = cheerio.load(page.body);
		const links = $(this.pageLinks);
		const self = this;

		if(links.length > 1){
			
			$(this.pageLinks).each(async function(index) {
				let url = $(this).attr('onclick'),
					d = {};
				if(url){
					url = url.split('=')[1].replace(/"/g, '');
					d.title = url.replace(/https:\/\/www\.wikileaf\.com\/strain\/(\w+)/, '$1').replace(/\//, '');
					
					const p = await request(url);
					const $p = cheerio.load(p.body);

					for(let i in self.scrapeData){
						d[i] = $p(self.scrapeData[i]).text().trim();
					}
					console.log(self.data.length, url);
					
					
					self.data.push(d);

					if(self.data.length === self.result + 50 || (self.result === 1400 && self.data.length === 1439)){
						self.result += 50;
						self.start();
					}
					
				}

				
			})
		}else{
			this.saveData();
		}
		
	}

	getUrl(){
		return this.url + this.result;
	}

	saveData() {
		console.log('saving');
		console.log('saving');
			
		fs.writeFileSync('wikileafData.json', JSON.stringify(this.data, null, 4));
	}

}


const scrape = new Scrape;
scrape.start();