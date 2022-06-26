const mongoose = require("mongoose")
// const { schema } = require("./item.model")

const customerSchema = mongoose.Schema({
    cno:{type: Number}, 
    cust_name:{type: String},
    cust_phone:{type: String},
    location: {type: String},
    gender:{type:String}
})

module.exports = mongoose.model("Customer", customerSchema)