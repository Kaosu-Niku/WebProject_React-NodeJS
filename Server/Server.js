"use strict";
exports.__esModule = true;
console.log("連接端口成功");
var express = require("express");
var path = require("path");
var cors = require("cors");
//! npm i -D typescript  @types/express
var app = express();
var port = process.env.PORT || 80;
app.listen(port);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../Client/build/index.html"));
});
app.get("/static/js/main.dfeaa381.js", function (req, res) {
    res.sendFile(path.join(__dirname, "../Client/build/static/js/main.dfeaa381.js"));
});
app.get("/static/css/main.96d0eb35.css", function (req, res) {
    res.sendFile(path.join(__dirname, "../Client/build/static/css/main.96d0eb35.css"));
});
var routerAsset = require("./Router/Asset");
app.use("/Asset/", routerAsset.router);
