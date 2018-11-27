const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://nate:nate123@ds253713.mlab.com:53713/goodvibes', 
         { useNewUrlParser: true },
         () => console.log('DB connected'));



requireFiles('/db/schema/');
requireFiles('/db/seeds/');

function requireFiles(url) {
	fs.readdirSync(SERVER + url)
		.forEach(file => require(SERVER + url + file));
}

