const mongoose = require('mongoose');
const {schema} = mongoose;
const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
   lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }

})
module.exports = mongoose.model('UserList', UserSchema)