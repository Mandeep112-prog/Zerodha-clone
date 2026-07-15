const mongoose = require('mongoose');

const PositionSchema = require('../schemas/PositionSchema');


const PositionsModel = new mongoose.model("position", PositionSchema);

module.exports = PositionsModel;