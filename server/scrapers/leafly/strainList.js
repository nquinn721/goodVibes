const request = require('async-request');
const fs = require('fs');

class StrainList{
	constructor(){
		this.page = 1;
		// this.totalPages = 1;
		this.totalPages = 54;
		this.url = `https://www.leafly.com/explore/page-1/sort-alpha`;
		this.data = [];

		this.options = {
		    headers: {
		        Referer: 'https://www.leafly.com/explore/sort-alpha',
		        Accept: 'application/json, text/plain, */*'
		    }
		};
	}

	async gatherList(){
		await this.hitServer();

		if(this.page === this.totalPages){
			console.log('saving');
			console.log(this.data.length);
			
			
			this.saveFile(this.data);
		}else{
			this.incrementPage();
			this.gatherList();
		}
	}

	async hitServer(){
		console.log('hitting server Page:', this.page);
		
		let data = await request(this.url, this.options);
		data = JSON.parse(data.body).Model.Strains;
		this.clearUnusedData(data);
		this.data = this.data.concat(data);
		
	}

	incrementPage(){
		this.page++;
		this.url = `https://www.leafly.com/explore/page-${this.page}/sort-alpha`;
	}

	saveFile(){
		fs.writeFile('data/strainData.json', JSON.stringify(this.data, null, 4), () => {
			process.exit();
		});
	}



	clearUnusedData(data){

		remove(data, 'Tags');
		remove(data, 'NegativeEffects');
		remove(data, 'Flavors');
		remove(data, 'Symptoms');
		remove(data, 'Conditions');

		function remove(data, listToSearch){

			for(let i = 0; i < data.length; i++){
				const item = data[i];
				const list = item[listToSearch];
				
				if(!list)continue;

				for(let j = 0; j < list.length; j++){
					let item = list[j];
					for(let key in item){
						if(key !== 'Name'){
							delete item[key];
						}
					}
					list[j] = item.Name;
				}
			}

		}
	}
}


const strainList = new StrainList();
strainList.gatherList();