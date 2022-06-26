// const { response } = require("express")
// const { response } = require("express")
// const { model } = require("mongoose")
const { response } = require("express")
const res = require("express/lib/response")
const Model = require("../model/customer.model")
const collection = require("../model/custitem.model")
exports.addCustomerService=(packet)=>{
    return new Promise((resolve, reject)=>{
        const customer = new Model(packet)
        customer.save(packet).then(()=>{
            resolve({
                message:"Customer added successfully"
            })
        }).catch((err)=>{
            console.log(err)
            reject({
                message:err.message
            })
        })

    })
}

exports.mobileService=()=>{
    return new Promise((resolve, reject)=>{
        // const regex="[9-9]{1}[0-9]{9}"
        Model.find({cust_phone:{$regex:"^[9-9][0-9]{9}$"}}).then((response)=>{
            console.log(response)
            resolve({
                message:"success",
                data:response
            })
        })

    })
}

// exports.locationService=()=>{
//     return new Promise((resolve, reject)=>{
//         Model.aggregate([{"$match": {"_id" :{ "$ne" : null } , "count" : {"$gt": 1} } }}}
//     }]).then((response)=>{
//         console.log(response)
//         resolve({
//             message:"success",
//             data:response
//         })
//     })


//     })
// }

exports.locationService=()=>{
    return new Promise((resolve, reject)=>{
        Model.aggregate([
            {"$group" : { "_id": "$location", "count": { "$sum": 1 } } },
            {"$match": {"_id" :{ "$ne" : null } , "count" : {"$gt": 1} } }, 
            {"$project": {"name" : "$_id", "_id" : 0} } , 
    ]).then((response)=>{
            console.log(response)
            resolve({
                message:"success",
                data:response
            })
        })

    })
}

exports.custDetailService=()=>{
    return new Promise((resolve, reject)=>{
        Model.aggregate([{$group:{_id:{location:"$location"}}
        },{"$match": {"_id" :{ "$ne" : null } , "count" : {"$gt": 1} } }, 
    ]).then((response)=>{
            console.log(response)
            resolve({
                message:"success",
                data:response
            })
        })

    })
}

exports.addCustItemService=(packet)=>{
    return new Promise((resolve, reject)=>{
        const customerItem = new collection(packet)
        customerItem.save(packet).then((response)=>{
            resolve({
                message:"Data added successfully"
            })
        }).catch((err)=>{
            console.log(err)
            reject({
                message:err.message
            })
        })


    })
}

exports.maxItemService=()=>{
    return new Promise((resolve, reject)=>{
        Model.aggregate([{          
                $lookup: {
                  from: "custitems",
                  localField: "cno",
                  foreignField: "cno",
                  as: "custdetails",
                },
            },
                {
                    $unwind: "$custdetails",
                  },
                  {
                      $group:{
                        _id: "$cust_name",
                        
                        maxitem:{
                            // $max:{
                                $sum:
                                    '$custdetails.quantity_purchased'                              
                            // }
                        }
                      }
                  }

        ]).sort({maxitem:-1}).limit(1).then((response)=>{
            console.log("response", response)
            resolve({
                data:response
            })
        })
    })
}