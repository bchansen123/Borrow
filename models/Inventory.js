const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// itemId: 0002,
//         categoryId: 01,
//         category: "Table Saws",
//         active: true,
//         price: 3599,
//         title: "Ryobi Table Saw",
//         description: "Powerful 15 Amp motor with 5000 RPM to complete an DIY or Pro job. Includes: Folding Stand, Mounting Hardware, and 10 in. Blade. Also includes Push Stick, Miter Gauge, Rip Fence, Guard Assembly",
//         image: "https://images.homedepot-static.com/productImages/194be50c-9708-4477-af55-3ffcfc98d740/svn/ryobi-portable-table-saws-rts12-64_1000.jpg",
//         features: "10 Inch Blade",
//         city: "Salt Lake",
//         state: "UT",
//         userId: 001

const inventorySchema = new Schema ({
    itemId: {
        type: Number,
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
        type: String,
        required: true
    }
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
