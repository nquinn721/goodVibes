var request = require('async-request');
module.exports = async () => {
    const data = await request('https://www.leafly.com/products/cannabis');
    return data.body;
}