const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");

const HomePageRoute = require("./routes/HomePageRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.listen(4000);
