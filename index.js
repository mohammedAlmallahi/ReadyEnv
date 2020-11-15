const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const HomePageRoute = require("./routes/HomePageRoute");
const RegistrationRoute = require("./routes/RegistrationsRoutes");

app.use(HomePageRoute);
app.use(RegistrationRoute);

const mongoDbUrl =
  "mongodb+srv://medoo:0592413118@rlck.ifnzw.mongodb.net/Rlck?retryWrites=true&w=majority";

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("connected");
    app.listen(4000);
  })
  .catch(() => {
    console.log("Error");
  });
