const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

router.route("/:id")
.get(itemsController.inventorySearch);

module.exports = router;


