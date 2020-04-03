const db = require("../models");

module.exports = {
    inventorySearch: function (req, res) {
        db.Inventory
        .find()
        .then(dbModel => {
            console.log(req.params.id)
            res.json(dbModel)
            console.log(dbModel);
        })
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        })
    },
    homeSearch: function (req, res) {
        console.log(req.body);
        db.Inventory
        .find({ title: { $regex: req.body.params.search}, city: { $regex: req.body.params.city }})
        .then(dbModel => {
            res.json(dbModel)
        })
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        })
    },
    singleItem: function(req, res) {
        db.Inventory
        .find({itemId: req.body.params.item})
        .then(dbModel => {
            res.json(dbModel)
        }).catch(err => {
            console.log(err)
            res.status(407).json(err)
        })
    }
}