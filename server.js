const mongoose = require("mongoose");
const express = require("express");
const port = 5000;
const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();
app.use(express.json());
connectDB();

app.use("/users", require("./routes/Routes"));

app.listen(port, () => console.log(`server start on ${port}`));
