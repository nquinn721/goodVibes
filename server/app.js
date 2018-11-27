const express = require('express'),
	  app = express(),
	  fs = require('fs'),
	  session = require('express-session');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


require('./global');
const DB = require('./db');

// app.use(express.static(process.cwd() + '/admin/build'))
app.use(express.static(process.cwd() + '/web/build'))


app.get('/', (req, res) => {
	res.sendFile(process.cwd() + '/web/build/index.html');
});



/**
 * ROUTES
 */
const routes = fs.readdirSync(SERVER + '/routes');
routes.forEach(r => {
	r = '/' + r.replace(/\..+/, '');
	app.use(r, require(SERVER + '/routes' + r));
});
/**
 * END ROUTES
 */


/**
 * CONTROLLERS
 */
const controllers = fs.readdirSync(SERVER + '/controllers');
controllers.forEach(c => {
	global[c.replace(/\w/, c => c.toUpperCase()).replace('.js', 'Controller')] = require(SERVER + '/controllers/' + c)
});
/**
 * END CONTROLLERS
 */



app.listen(process.env.PORT || 5000);