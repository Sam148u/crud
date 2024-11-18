const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    status: { type: String, enum: ["available", "unavailable"], default: "available" },
}, { timestamps: true });

module.exports = mongoose.model("Item", ItemSchema);