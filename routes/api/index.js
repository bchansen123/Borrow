const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

router.route("/api/inventory/search")
.post(itemsController.homeSearch); 

router.route("/api/inventory/:id")
.get(itemsController.inventorySearch);

router.route("/api/item")
.get(itemsController.singleItem);

module.exports = router;