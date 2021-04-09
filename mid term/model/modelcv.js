const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let cvschema = new Schema({
    name : { type: String, require:true, max: 100},
    age : { type: Number, require: true, max: 100},
    education: { type: String, require:true, max: 100 },
    degree: { type: String, require:true, max: 100 },
    workexp: { type: String, require:true, max: 100 },
    major: { type: String, require:true, max: 100 },
    lang: { type: String, require:true, max: 100 }
    
});

module.exports = mongoose.model("Home", cvschema)

