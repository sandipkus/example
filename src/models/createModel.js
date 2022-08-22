const mongoose = require('mongoose')

const createUser = new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },

    email:{
        type:String,
        unique:true,
        require:true
    },

    phone:{
        type:String,
        unique:true,
    },

})

module.exports = mongoose.model('example', createUser)