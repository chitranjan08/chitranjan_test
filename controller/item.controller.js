const { response } = require("express")
const Item = require("../model/item.model")
const itemService = require("../service/item.service")
exports.addController = (req, res)=>{
    // return new Promise((resolve, reject)=>{
    //     Item.findOne(req.body.price).then((response)=>{
    //         if(response>5000){
                
    //         }
    //     })
    // })
    itemService.itemService(req.body).then((result)=>{
        res.status(200).json({ message: result.message});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })

   

}

exports.deleteController = (req, res)=>{
    itemService.itemdeleteService(req.body).then((result)=>{
        res.status(200).json({ message: result.message});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })

}

exports.displayitemController = (req, res)=>{
    itemService.displayitemService(req.body).then((result)=>{
        res.status(200).json({ message: result.message, data:result.data});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })

}

exports.minweightitemController = (req, res)=>{
    itemService.minweightitemService(req.body).then((result)=>{
        res.status(200).json({ message: result.message, data:result.data});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })

}

exports.countitemController = (req, res)=>{
    itemService.countitemService(req.body).then((result)=>{
        res.status(200).json({ message: result.message, data:result.data});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })

}

exports.totalPriceController = (req, res)=>{
    itemService.totalPriceService(req.body).then((result)=>{
        res.status(200).json({ message: result.message, data:result.data});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })

}

exports.totalValueController=(req, res)=>{
    itemService.totalValueService(req.body).then((result)=>{
        res.status(200).json({ message: result.message, data:result.data});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })
}

exports.itemNameController=(req, res)=>{
    itemService.itemNameService(req.body).then((result)=>{
        res.status(200).json({ message: result.message, data:result.data});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })

}

exports.allDetailsController=(req, res)=>{
    itemService.allDetailsService(req.body).then((result)=>{
        res.status(200).json({ message: result.message, data:result.data});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    
    })
}