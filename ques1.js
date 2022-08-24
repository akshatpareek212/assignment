const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name:{
        type: String,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    phone:{
        type: Number,
        validate(value) {
            if(!validator.isNumeric(value)){
                throw new Error('Phone number is invalid')
            }
        }
    }
})

module.exports = User