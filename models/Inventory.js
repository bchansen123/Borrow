const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema ({
    itemId: {
        type: SVGAnimatedInteger,
        required: true
    },
    categoryId: {
        type: Integer,
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
        type: Integer,
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
    }
});

const User = mongoose.model("Inventory", userSchema);

module.exports = inventorySchema;