const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    mail : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        minlength : 6,
        maxlenghth : 16
    },
    fullname : String
});

module.exports = mongoose.model('user', UserSchema);