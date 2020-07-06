const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const userUri = require("./api/profile");

dotenv.config();

try {
  mongoose.connect(process.env.db_con, () => {
    console.log("db connection successful");
  });
} catch (error) {
  console.log(error);
}

app.use("/api/user", userUri);

app.listen(port, () => {
  console.log(`srever running on ${3000}`);
});
