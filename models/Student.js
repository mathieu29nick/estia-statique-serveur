const mongoose = require( 'mongoose')
const Schema = mongoose.Schema;
  
const diplomaSchema = new mongoose.Schema({
    id: String,
    label: String
});

const studentSchema = new mongoose.Schema({
    label: String,
    numETU: Number,
    first_name : String,
    last_name: String,
    email : String,
    gender: String,
    diploma: [diplomaSchema]
});


let Student = mongoose.model("StudentESTIA", studentSchema,"StudentESTIA");

module.exports = {Student}