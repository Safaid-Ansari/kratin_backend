const mongoose = require("mongoose");
const HealthTipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Health = mongoose.model("Health", HealthTipSchema);

module.exports = Health;
