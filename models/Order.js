const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId: {type:String, required:true},
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type:Number,
                    default: 1,
                },
            },
        ],
        amount: {type: Number, required: true},
        address: {type: Object, required: true},
        status: {type: String, default: "pending"},
    },
    { timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema);


// the reason why address is an object is so when the user puts in the information (street, city, country, zip) it can all fit just in an object rather than all of those having a separate one
