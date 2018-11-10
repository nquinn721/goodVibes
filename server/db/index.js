const mongoose = require('mongoose');
mongoose.connect('mongodb://nate:nate123@ds253713.mlab.com:53713/goodvibes', 
				 { useNewUrlParser: true },
				 () => console.log('DB connected'));


var Schema = mongoose.Schema;

var YelpDispensarySchema = new Schema({
	alias: String,
      categories: [ {
          alias: String,
          title: String,
        },
      ],
      coordinates: {
        latitude: Number,
        longitude: Number,
      },
      display_phone: String,
      distance: Number,
      id: String,
      image_url: String,
      is_closed: Boolean,
      location: {
        address1: String,
        city: String,
        country:String,
        display_address:  [ String ],
        state: String,
        zip_code:String,
      },
      name: String,
      phone: String,
      rating: Number,
      review_count: Number,
      transactions:  [],
      url: String,
      photos: [String]
});

const YelpDispensary = mongoose.model('YelpDispensary', YelpDispensarySchema)
global.YelpDispensary = YelpDispensary;