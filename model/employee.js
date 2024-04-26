const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name must required"]
    },
    email:{
        type:String,
        required: [true, "Email must required"],
        unique: true
    },
    phone:{
        type: String,
        required: [true, "Phone must required"],
        unique: true
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
        type: String,
        default:""
    },
    state:{
        type:String,
        default:""
    }
});

const Employee = new mongoose.model("Employee", EmployeeSchema);

module.exports = Employee