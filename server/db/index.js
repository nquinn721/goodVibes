const mongoose = require('mongoose');
mongoose.connect('mongodb://nate:nate123@ds253713.mlab.com:53713/goodvibes', 
				 { useNewUrlParser: true },
				 () => console.log('DB connected'));

