const db = require("../models");

module.exports = {
    inventorySearch: function (req, res) {
        db.Inventory
        .find({})
        .then(dbModel => {
            console.log(req.params.id)
            res.json(dbModel)
            console.log(dbModel);
        })
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        })
    }
}