const YelpAPI = require('../apis/yelp');

class Dispensary{
	async getDispensaries({latitude, longitude}){
    	return await YelpAPI.getBusinesses({term: 'dispensaries', limit: 10, latitude, longitude});

	}
}

module.exports = new Dispensary;