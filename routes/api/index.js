const router = require("express").Router();
const listitemsRoutes = require("./listitems");

// list items routes
router.use("/inventory", listitemsRoutes);

module.exports = router;

