const cheerio = require('cheerio');
const request = require('async-request');
const fs = require('fs');

class GetCities{

	static async start(){
		const page = await request('https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population');
		const $ = cheerio.load(page.body);
		const cities = [];

		$('.wikitable.sortable').first().each(function() {
			$(this).find('tr').each(function() {
				const city = $(this).find('td').eq(1).text().replace(/\[.+\]|\n/g, '');
				if(city)
					cities.push(city);	
			});
									
		})

		this.save(cities);

	}

	static save(data){
		fs.writeFileSync('cities.json', JSON.stringify(data, null, 4));
	}
}

GetCities.start()

