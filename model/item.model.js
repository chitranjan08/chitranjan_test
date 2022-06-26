const mongoose = require('mongoose');

// const itemSchema = mongoose.Schema({
//     cno:{type: Number}, 
//     itemno:{type: Number},
//     quantity_purchased:{type: Number},
//     date_purchase: {type: Date}
// })

const itemSchema = mongoose.Schema({
    itemno:{type: Number},
    itemname:{type: String},
    color:{type:String},
    weight:{type: Number},
    expire_date:{type: Date},
    price:{type: Number},
    shop_name:{type:String}
    
})

module.exports = mongoose.model("Item", itemSchema)