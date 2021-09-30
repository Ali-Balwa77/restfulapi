const mongoose = require('mongoose');
const validator = require('validator');

 const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
        unique: true,
        minlength: 3
    },
    email : {
        type: String,
        require: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
    mobile : {
        type: Number,
        min: 10,
        unique: true,
        require: true,
        },
    address :{
        type: String,
        require: true,
    }
})

const studentModel = new mongoose.model("studentdata",studentSchema);

module.exports = studentModel;


