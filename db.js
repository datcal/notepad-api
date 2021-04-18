const mongoose = require('mongoose');
module.exports = () => {

   const uri = process.env.DB_URI;
   console.log("URI : ",uri);

   const HASAN = process.env.HASAN;
   console.log("HASAN : ",HASAN);
   
   const DB_USERNAME = process.env.DB_USERNAME;
   console.log("DB_USERNAME : ",DB_USERNAME);

   const DB_PASSWORD = process.env.DB_PASSWORD;
   console.log("DB_PASSWORD : ",DB_PASSWORD);

   const TEST1 = process.env.TEST1;
   console.log("TEST1 : ",TEST1);

   const TEST2 = process.env.TEST2;
   console.log("TEST2 : ",TEST2);


    mongoose.connect(uri, {useFindAndModify: false,useCreateIndex : true,useNewUrlParser: true, useUnifiedTopology: true});

  mongoose.connection.on('open', () => {
     console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
};