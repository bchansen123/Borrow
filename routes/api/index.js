const router = require("express").Router();
const listitemsRoutes = require("./listitems");

// list items routes
router.use("/listitems", listitemsRoutes);

module.exports = router;

