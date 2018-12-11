const fetch = require('node-fetch');
const apiKey = 'u83D7ql4RggokuyKsGHV7noCEF6IWAjIzfK14mqCyUcuqZzVRFl4MXjMfv2FgJEyLMxyICtAfmv9XQNO1-xu1E5n4YtuWc5GqQz6FVlcydzwwOIIsoa2qMQE0WnKWnYx';


let availableSearchParams = {
    term: true,
    radius: false,
    categories: true,
    price: true,
    limit: true
};

class YelpAPI{
    static async getBusiness(id){
        return await this.search(`https://api.yelp.com/v3/businesses/${id}`);
    }


     static async getBusinesses(params){
         const url = this.createUrl(
             "https://api.yelp.com/v3/businesses/search",
                {
                    // latitude: 37.78825,
                    // longitude: -122.4324
                }, params);
            

        let data = await this.search(url);
        let businesses = [];

        data = data.businesses;

        for(let i = 0; i < data.length; i++)
            businesses.push(await this.getBusiness(data[i].id))
        // businesses = data;
        return businesses;
    }


    static async search(url){
        const search = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization':  'Bearer ' + apiKey
            },
        });
        return await search.json();
    }


    static createUrl(baseUrl, defaults, params){
        const url = new URL(baseUrl),
              def = Object.assign({
                 latitude: 37.78825,
                 longitude: -122.4324
              }, params);
            
        Object.keys(def).forEach(key => url.searchParams.append(key, def[key]))        
        return url;
    }
}


async function start() {
    const data = await YelpAPI.getBusinesses({term: 'dispensaries', limit: 50});

    console.log(data.length);
    
}


module.exports = YelpAPI;

