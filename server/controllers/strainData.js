const strainData = require(SERVER + '/scrapers/leafly/data/newestData');

class StrainDataController{
	getData(){
		return strainData;
	}
}

module.exports = new StrainDataController();