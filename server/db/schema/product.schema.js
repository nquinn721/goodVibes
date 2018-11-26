const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	dispensary: String,
	img: String,
	name: String,
	type: String,
	cost: Number,
	description: String,
	stars: Number,
	totalRatings: Number,
	moods: {
		happy: Number,
		relaxed: Number,
		euphoric: Number,
		giggy: Number
	},
	addedToCart: Boolean,
	canAddToCart: Boolean,
	images: [ String ]
});

global.Product = mongoose.model('Product', ProductSchema);
