const fs = require('fs');
const leafly = require('./data/dispensariesFromLeafly');


fs.writeFileSync('./data/dispensariesFromLeafly.json', JSON.stringify(leafly.dispensaries, null, 4));