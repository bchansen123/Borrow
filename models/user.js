const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    userId: {
        type: Number,
        required: true
    },
    inventoryOwned: {
        itemId: {
            type: Number,
            required: true
        }
    },
    inventoryRented: {
        itemId: {
            type: Number,
            required: true
        },
        checkoutDate: {
            type: Date
        },
        checkinDate: {
            type: Date
        }
    }
});

const User = mongoose.model("User", userSchema);

module.exports = userSchema;