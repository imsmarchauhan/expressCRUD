const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name must required"]
    },
    email:{
        type:String,
        required: [true, "Email must required"]
    },
    phone:{
        type:String,
        required: [true, "Phone must required"]
    },
    designation:{
        type:String,
        required: [true, "Designation must required"]
    },
    salary:{
        type:Number,
        required: [true, "Salary must required"]
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default:""
    }
});

const Employee = new mongoose.Model("Employee", EmployeeSchema);

module.exports = Employee