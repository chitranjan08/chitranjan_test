const service = require("../service/customer.service")

exports.mobileController=(req, res)=>{
    service.mobileService(req.body).then((result)=>{
        res.status(200).json({ message: result.message, data:result.data});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })

}

exports.addCustomerController=(req, res)=>{
    service.addCustomerService(req.body).then((result)=>{
        res.status(200).json({ message: result.message});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })

}

exports.locationController=(req, res)=>{
    service.locationService(req.body).then((result)=>{
        res.status(200).json({ message: result.message, data:result.data});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })

}

// exports.custDetailController=(req, res)=>{
//     service.custDetailService(req.body).then((result)=>{
//         res.status(200).json({ message: result.message, data:result.data});
//     }).catch((err)=>{
//         res.status(400).json({ message: err.message });
//     })

// }

exports.addCustItemController=(req, res)=>{
    service.addCustItemService(req.body).then((result)=>{
        res.status(200).json({ message: result.message, data:result.data});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });

    })
}

exports.maxItemController=(req, res)=>{
    service.maxItemService(req.body).then((result)=>{
        res.status(200).json({ message: result.message, data:result.data});
    }).catch((err)=>{
        res.status(400).json({ message: err.message });
    })
}