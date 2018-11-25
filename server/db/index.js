const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://nate:nate123@ds253713.mlab.com:53713/goodvibes', 
         { useNewUrlParser: true },
         () => console.log('DB connected'));



fs.readdir(process.cwd() + '/server/db/schema', (err, files) => {
  files.forEach(file => {
    require('./schema/' + file);
  });
})