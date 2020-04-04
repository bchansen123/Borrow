const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema ({
    itemId: {
        type: String,
        required: true
    },
    categoryId: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    features: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    userId: {
        type: Number,
        required: true
    }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;