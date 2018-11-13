const fetch = require('node-fetch');
const apiKey = 'u83D7ql4RggokuyKsGHV7noCEF6IWAjIzfK14mqCyUcuqZzVRFl4MXjMfv2FgJEyLMxyICtAfmv9XQNO1-xu1E5n4YtuWc5GqQz6FVlcydzwwOIIsoa2qMQE0WnKWnYx';


let availableSearchParams = {
    term: true,
    radius: false,
    categories: true,
    price: true,
    limit: true
};

module.exports = class YelpAPI{

    static search(term, apiCall, cb){

        this.getBusinessList(term, cb);
    }

    static requestYelp(params, cb){
        let lat = params.lat || 37.78825;
        let lng = params.lng || -122.4324;
        let paramString = 'latitude=' + lat + '&longitude=' + lng;


        // Filters
        let limit = 50,
            radius = 1500,
            sortBy = 'distance',
            openNow = true;


        if(typeof params == 'object'){
            for(let i in params) {
                if (availableSearchParams[i]) {
                    if(i === 'radius')
                        params[i] = Math.round(params[i] * mile);

                    paramString += '&' + i + '=' + params[i];
                }
            }
        }



        paramString += `&limit=${limit}`//&radius=${radius}&sort_by=${sortBy}&open_now=${openNow}`; 

        if(!params.term)
            paramString += '&term=food';



        fetch('https://api.yelp.com/v3/businesses/search?' + paramString, {
            method: 'GET',
            headers: {
                'Authorization':  'Bearer ' + apiKey
            },
        })
            .then(d => d.json())
            .then(d => {
                cb(d.businesses)
            })
            .catch(e => console.error(e))
    }


    static async getBusiness(id){
        const search = await fetch(`https://api.yelp.com/v3/businesses/${id}`, {
            method: 'GET',
            headers: {
                'Authorization':  'Bearer ' + apiKey
            },
        })
        return await search.json();
    }
}