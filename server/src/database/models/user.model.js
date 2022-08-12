const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    }
});


module.exports = user_schema;