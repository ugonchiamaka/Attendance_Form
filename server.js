require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = 4000;

const url = process.env.MONGODB_URL;
const app = express();
const path = require("./Router");
const cors = require("cors");

mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database is connected successfully");
  });
(err) => console.log(err.message);
app.use(express.json());
app.use(cors());

app.use("/attendance", path);

app.get("/", async (req, res) => {
  res.send("database has been connected successfully");
});

app.listen(port, () => {
  console.log(`app is currently running on port: ${port}`);
});
