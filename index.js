const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const multer = require("multer");
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyparser = require("body-parser");

const serverless = require("serverless-http");

const nodemailer = require("./src/route/route")



require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 2006;


app.get("/home",(req, res) => {
  res.status(200).send({msg:"Working App"});
});

 app.use("/api/v1/",nodemailer)


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  handler: serverless(app),
};

