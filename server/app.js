const express = require('express'),
	  app = express(),
	  fs = require('fs');
	  // DB = require('./db');

require('./global');

app.use(express.static(process.cwd() + '/admin/build'))
app.use(express.static(process.cwd() + '/web/build'))


app.get('/', (req, res) => {
	res.sendFile(process.cwd() + '/web/build/index.html');
});


const routes = fs.readdirSync(SERVER + '/routes');
routes.forEach(r => {
	r = '/' + r.replace(/\..+/, '');
	
	app.use(r, require(SERVER + '/routes' + r));
})




app.listen(process.env.PORT || 3000);