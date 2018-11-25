const app = require('express')();
const ImageLoader = require('./imageLoader');

app.get('/', (req, res) => {
	res.send(JSON.stringify(ImageLoader.getImageUrls(), null, 4));
})


app.listen(3000);

