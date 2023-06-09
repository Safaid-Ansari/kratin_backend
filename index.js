const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 3000;
const DB = require("./config/connection");
const mainRoute = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRoute);
app.listen(PORT, () => {
  console.log("Our server listening on port", PORT);
});
