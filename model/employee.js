const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
     name: {
          type: String,
          required: [true, "Name Must Required"]
     },
     email: {
          type: String,
          required: [true, "Email Address Must Required"],
          unique: true
     },
     phone: {
          type: String,
          required: [true, "Phone Must Required"],
          unique: true
     },
     designation: {
          type: String,
          required: [true, "Designation Must Required"]
     },
     salary: {
          type: Number,
          required: [true, "Salary Must Required"]
     },
     city: {
          type: String,
          default: ""
     },
     state: {
          type: String,
          default: ""
     },
})
const Employee = new mongoose.model("Employee",EmployeeSchema)

module.exports = Employee