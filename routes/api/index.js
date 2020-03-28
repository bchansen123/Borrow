const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

router.route("/api/inventory/:id")
.get(itemsController.inventorySearch);

module.exports = router;