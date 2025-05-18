const mongoose = require('mongoose');
//creating a schema
const UserSchema = new mongoose.Schema({
    //creating a collection
    //validating the data(validation)
    Username:{
        type : String ,
        required : true ,
        unique : true ,
    },
    password :{
        type : String ,
        required : true ,
    }
})
//creating a model
const User  = mongoose.model("User",UserSchema);
module.exports = User ;