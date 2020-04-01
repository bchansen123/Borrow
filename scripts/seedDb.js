const mongoose = require("mongoose");

const db = require("../models")

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Inventory"  
);

const itemSeed = [
    {
        itemId: 0001,
        categoryId: 01,
        category: "Table Saws",
        active: true,
        price: 3599,
        title: "Ryobi Table Saw",
        description: "Powerful 15 Amp motor with 5000 RPM to complete an DIY or Pro job. Includes: Folding Stand, Mounting Hardware, and 10 in. Blade. Also includes Push Stick, Miter Gauge, Rip Fence, Guard Assembly",
        image: "https://images.homedepot-static.com/productImages/194be50c-9708-4477-af55-3ffcfc98d740/svn/ryobi-portable-table-saws-rts12-64_1000.jpg",
        features: "10 Inch Blade",
        city: "Salt Lake",
        state: "UT",
        userId: 001
    },
    {
        itemId: 0002,
        categoryId: 01,
        category: "Table Saws",
        active: true,
        price: 3599,
        title: "Ryobi Table Saw",
        description: "Powerful 15 Amp motor with 5000 RPM to complete an DIY or Pro job. Includes: Folding Stand, Mounting Hardware, and 10 in. Blade. Also includes Push Stick, Miter Gauge, Rip Fence, Guard Assembly",
        image: "https://images.homedepot-static.com/productImages/194be50c-9708-4477-af55-3ffcfc98d740/svn/ryobi-portable-table-saws-rts12-64_1000.jpg",
        features: "10 Inch Blade",
        city: "Salt Lake",
        state: "UT",
        userId: 001
    },
    {
        itemId: 0003,
        categoryId: 01,
        category: "Table Saws",
        active: true,
        price: 3599,
        title: "Ryobi Table Saw",
        description: "Powerful 15 Amp motor with 5000 RPM to complete an DIY or Pro job. Includes: Folding Stand, Mounting Hardware, and 10 in. Blade. Also includes Push Stick, Miter Gauge, Rip Fence, Guard Assembly",
        image: "https://images.homedepot-static.com/productImages/194be50c-9708-4477-af55-3ffcfc98d740/svn/ryobi-portable-table-saws-rts12-64_1000.jpg",
        features: "10 Inch Blade",
        city: "Salt Lake",
        state: "UT",
        userId: 001
    },
    {
        itemId: 0004,
        categoryId: 01,
        category: "Table Saws",
        active: true,
        price: 3599,
        title: "Ryobi Table Saw",
        description: "Powerful 15 Amp motor with 5000 RPM to complete an DIY or Pro job. Includes: Folding Stand, Mounting Hardware, and 10 in. Blade. Also includes Push Stick, Miter Gauge, Rip Fence, Guard Assembly",
        image: "https://images.homedepot-static.com/productImages/194be50c-9708-4477-af55-3ffcfc98d740/svn/ryobi-portable-table-saws-rts12-64_1000.jpg",
        features: "10 Inch Blade",
        city: "Salt Lake",
        state: "UT",
        userId: 001
    },
    {
        itemId: 0005,
        categoryId: 01,
        category: "Table Saws",
        active: true,
        price: 3599,
        title: "Ryobi Table Saw",
        description: "Powerful 15 Amp motor with 5000 RPM to complete an DIY or Pro job. Includes: Folding Stand, Mounting Hardware, and 10 in. Blade. Also includes Push Stick, Miter Gauge, Rip Fence, Guard Assembly",
        image: "https://images.homedepot-static.com/productImages/194be50c-9708-4477-af55-3ffcfc98d740/svn/ryobi-portable-table-saws-rts12-64_1000.jpg",
        features: "10 Inch Blade",
        city: "Salt Lake",
        state: "UT",
        userId: 001
    }
]

db.Inventory
  .remove({})
  .then(() => db.Inventory.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
