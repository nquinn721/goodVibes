const cheerio = require('cheerio'),
	  request = require('async-request'),
	  fs = require('fs'),
	  mkdirp = require('mkdirp');

const brandData = require('./data/brandsData');

class GetBrands{
	constructor(){
		this.page = 1;
		// this.totalPages = 2;
		this.data = [];
		this.totalPages = 55;
		this.url = `https://api-g.weedmaps.com/discovery/v1/brands?page=${this.page}&page_size=48&sort_by=name&sort_order=asc`;
	}
	async getBrands(){
		console.log(this.url);
		const data = await request(this.url);
		
		this.data = this.data.concat(JSON.parse(data.body).data.brands);
		if(this.page < this.totalPages){
			this.setUrl();
			this.getBrands();
		}else{
			this.saveFile();
		}
	}

	async getBrandProducts(){
		let url, data;
		for(let i = 0; i < brandData.length; i++){
			url = `https://api-g.weedmaps.com/discovery/v1/brands/${brandData[i].slug}?include%5B%5D=brand.categories&include%5B%5D=brand.social`;
			console.log(i);
			try{
				data = await request(url);
				brandData[i].categories = JSON.parse(data.body).data.brand.categories;
			}catch{

			}
		}
		this.data = brandData;

		this.saveFile();
	}

	setUrl(){
		this.page++;
		this.url = `https://api-g.weedmaps.com/discovery/v1/brands?page=${this.page}&page_size=48&sort_by=name&sort_order=asc`;
		
		
	}


	saveFile(){
		fs.writeFileSync('data/brandsData.json', JSON.stringify(this.data, null, 4));
	}
}

const getBrands = new GetBrands();

getBrands.getBrandProducts();