const strainData = require(SERVER_DATA + '/leaflyStrain');
const weedmapsBrands = require(SERVER_DATA + '/weedmapsBrands');
const yelpDispensaries = require(SERVER_DATA + '/yelpDispensaries');
const dispensariesFromLeafly = require(SERVER_DATA + '/dispensariesFromLeafly');

class DataController{
	getStrains(){
		return strainData;
	}

	getBrands(){
		return weedmapsBrands;
	}

	getDispensaries(){
		return {yelpDispensaries, dispensariesFromLeafly};
	}
}

module.exports = new DataController();