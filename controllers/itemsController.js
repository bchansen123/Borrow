const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        db.Inventory
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
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
    },
    removeItem: function(req, res) {
        db.Inventory
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(406).json(err));
    },
    addItem: function(req, res) {
        db.Inventory
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}