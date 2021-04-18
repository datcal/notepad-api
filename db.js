const mongoose = require('mongoose');
module.exports = () => {

   const uri = process.env.DB_URI;
    mongoose.connect(uri, {useFindAndModify: false,useCreateIndex : true,useNewUrlParser: true, useUnifiedTopology: true});

  mongoose.connection.on('open', () => {
     //console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
};