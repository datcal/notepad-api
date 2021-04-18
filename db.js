const mongoose = require('mongoose');
module.exports = () => {

    const DB_HOST = process.env.DB_HOST;
    const DB_NAME = process.env.DB_NAME;
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
  
   const uri = "mongodb+srv://"+DB_USERNAME+":"+DB_PASSWORD+"@"+DB_HOST+"/"+DB_NAME+"?retryWrites=true&w=majority";

    mongoose.connect(uri, {useFindAndModify: false,useCreateIndex : true,useNewUrlParser: true, useUnifiedTopology: true});

  mongoose.connection.on('open', () => {
     //console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
};