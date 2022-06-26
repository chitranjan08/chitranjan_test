const mongoose = require('mongoose');

const custitemSchema = mongoose.Schema({
    cno:{type: Number}, 
    itemno:{type: Number},
    quantity_purchased:{type: Number},
    date_purchase: {type: Date}
})

module.exports=mongoose.model("CustItem", custitemSchema)