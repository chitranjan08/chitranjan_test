const express = require('express');
const router = express.Router();

const itemController = require("../controller/item.controller")
const customerController = require("../controller/customer.controller")
const custitemController = require("../controller/custitem.controller");
// const { Router } = require('express');

router.post("/addItem", itemController.addController)
router.post("/deleteItem", itemController.deleteController)
router.post("/displayItem", itemController.displayitemController)
router.post("/minweightItem", itemController.minweightitemController)
router.post("/countItem", itemController.countitemController)
router.post("/addCustomer", customerController.addCustomerController)
router.post("/mobileno", customerController.mobileController)
router.post("/itemName", itemController.itemNameController)
router.post("/location",  customerController.locationController)
router.post("/totalPrice", itemController.totalPriceController)
router.post("/totalValue", itemController.totalValueController)
router.post("/addCustItem", customerController.addCustItemController)
router.post("/maxItem", customerController.maxItemController)
router.post("/allDetails",itemController.allDetailsController )








module.exports = router;