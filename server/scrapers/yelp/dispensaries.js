const fs = require('fs');
const YelpApi = require('../../apis/yelp');
const cities = require('./cities');


class YelpDispensaries{
	constructor(){
		this.latitude = 37.78825;
		this.longitude = -122.4324;
		this.data =  [];
		this.maxPages = 10;
		this.pageSaved = 0;
	}

	async start(){
		for(let city of cities)
			await this.search(city);
		

	}

	async search(city, data, page){
		data = data || [];
		page = page || 0;

		const d = await YelpApi.getBusinesses({
			term: 'dispensaries', 
			location: city,
			radius: 40000,
			limit: 50,
			offset: page * 50
		});
		
		data = data.concat(d);

		if (page < 10) {
			page++;
			this.search(city, data, page);
		}else{
			console.log('saving', city);
			this.data = this.data.concat(data);
			this.pageSaved++;
			this.save();
		}
	}


	save(){
		if(this.pageSaved === cities.length - 1){
			console.log('SAVING....');
			
			fs.writeFileSync('../data/yelpDispensaries.json', JSON.stringify(this.data, null, 4));
		}
	}
}


const yd = new YelpDispensaries();
yd.start();