// const { response } = require("express")
// const {
//     response
// } = require("express")
const { response } = require("express");
const Item = require("../model/item.model");
const item = require("../model/custitem.model");
// const { response } = require("../server/server")
exports.itemService = (packet) => {
  return new Promise((resolve, reject) => {
    console.log("packet", packet);
    const item = new Item(packet);
    console.log("item", item);
    item
      .save()
      .then((response) => {
        resolve({
          message: "Data added successfully",
        });
      })
      .catch((err) => {
        reject({
          message: err.message,
        });
      });
  });
};

exports.itemdeleteService = () => {
  return new Promise((resolve, reject) => {
    // const item = new Item()
    // console.log("item", item)
    Item.find({
      price: {
        $gt: 50000,
      },
    }).then((response) => {
      console.log("response", response.length);
      if (response.length > 0) {
        Item.deleteMany({
          price: {
            $gt: 50000,
          },
        }).then(() => {
          resolve({
            message: "Data deleted successfully",
          });
        });
      } else {
        resolve({
          message: "No data found",
        });
      }
    });
  });
};

exports.displayitemService = () => {
  return new Promise((resolve, reject) => {
    console.log(Item);
    Item.find({
      color: {
        $in: ["black", "white", "brown"],
      },
    }).then((response) => {
      // Item.find({$or:[{color:{$in:['black', 'white','brown']}}]}).then((response)=>{
      console.log("response", response);
      if (response) {
        resolve({
          message: "success",
          data: response,
        });
      } else {
        resolve({
          message: "No data found",
          data: response,
        });
      }
    }).catch((err)=>{
        console.log(err)
        reject({
            message:err.message
        })
    });
  });
};

exports.minweightitemService = () => {
  return new Promise((resolve, reject) => {
    Item.find()
      .sort({
        weight: 1,
      })
      .limit(1)
      .then((response) => {
        // Item.aggregate([{$group:{_id:null, min_weight:{$min:"$weight"}}}]).then((response)=>{
        console.log("Response", response);
        resolve({
          message: "success",
          data: response,
        });
      })
      .catch((err) => {
        console.log(err);
        reject({
          message: err.message,
        });
      });
  });
};

// exports.countitemService=()=>{
//     return new Promise((resolve, reject)=>{
//         Item.count({expire_date:})
//     })
// }

exports.totalPriceService = () => {
  return new Promise((resolve, reject) => {
    Item.aggregate([
      { $group: { _id: "$itemname", totalprice: { $sum: "$price" } } },
    ])
      .then((response) => {
        resolve({
          message: "success",
          data: response,
        });
      })
      .catch((err) => {
        console.log(err);
        reject({
          message: err.message,
        });
      });
  });
};

exports.totalValueService = () => {
  return new Promise((resolve, reject) => {
    Item.aggregate([
      {
        $lookup: {
          from: "custitems",
          localField: "itemno",
          foreignField: "itemno",
          as: "Total",
        },
      },
      {
        $unwind: "$Total",
      },
      {
        $group: {
          _id: "$itemname",
          totalValue: {
            $sum: {
                $multiply:['$price', '$Total.quantity_purchased']
            },
          },
        },
      },
    ])
      .then((response) => {
        console.log(response);
        resolve({
          data: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

exports.itemNameService=()=>{
    return new Promise((resolve, reject)=>{
        // const regex="[9-9]{1}[0-9]{9}"
        Item.find({itemname:{$regex:"[p-s]"}}).then((response)=>{
            console.log(response)
            if(response){
            resolve({
                message:"success",
                data:response
            })
        }else{
            resolve({
                message:"No data found",
                data:response
            })
        }
        }).catch((err)=>{
            console.log(err)
            reject({
                message:err.message
            })
        })

    })
}

exports.allDetailsService=()=>{
    return new Promise((resolve, reject)=>{
        Item.aggregate([{
              
            $lookup: {
                from: "customers",
                localField: "itemno",
                foreignField: "cno",
                as: "custdetails",
              },
        }, {
            $unwind: "$custdetails",
          },
          {
            $lookup: {
                from: "custitems",
                localField: "itemno",
                foreignField: "itemno",
                as: "itemdetails",
              },
          },{
            $unwind: "$itemdetails",
          }
    ]).then((response)=>{
        console.log(response)
        resolve({
            data:response
        })
    })
    })
}