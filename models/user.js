const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    userId: {
        type: Integer,
        required: true
    },
    inventoryOwned: {
        itemId: {
            type: Integer,
            required: true
        }
    },
    inventoryRented: {
        itemId: {
            type: Integer,
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