const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");

const HomePageRoute = require("./routes/HomePageRoute");
const RegistrationRoute = require("./routes/RegistrationsRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow to all endpoints to access
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requsted-With, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  ); // allow to all endpoints to access  to dp thers methods
  next();
});

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
