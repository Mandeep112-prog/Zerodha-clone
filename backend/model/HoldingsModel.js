const mongoose = require("mongoose");
const HoldingSchema = require("../schemas/HoldingsSchema");

const HoldingsModel = mongoose.model("Holding", HoldingSchema);

module.exports = HoldingsModel;