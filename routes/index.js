const express = require("express");
const router = express.Router();
router.use("/HealthTips", require("./Health"));
module.exports = router;
