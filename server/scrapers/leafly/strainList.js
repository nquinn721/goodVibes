const request = require('async-request');
const fs = require('fs');

class ScrapeLeafly{
	constructor(){
		this.page = 1;
		this.totalPages = 54;
		this.url = `https://www.leafly.com/explore/page-${this.page}/sort-alpha`;
		this.data = [];

		this.options = {
		    headers: {
		        Referer: 'https://www.leafly.com/explore/sort-alpha',
		        Accept: 'application/json, text/plain, */*'
		    }
		};
	}

	async searchForData(){
		let data = await this.hitServer();

		if(this.page === this.totalPages){
			this.saveFile();
		}else{
			this.page++;
			this.searchForData();
		}
	}

	changePage(){
		this.page++;
	}

	async hitServer(){
		console.log('hitting server, Page:', this.page);
		
		let data = await request(this.url, this.options);
		data = JSON.parse(data.body).Model.Strains;

		this.data = this.data.concat(data);
		
	}

	saveFile(){
		fs.writeFile('strainData.json', JSON.stringify(this.data, null, 4), () => {
			process.exit();
		});
	}
}


module.exports = new ScrapeLeafly;