"use strict";
exports.__esModule = true;
exports.router = void 0;
var express = require("express");
var path = require("path");
exports.router = express.Router();
exports.router.get("/Image/:fileName", function (req, res) { res.sendFile(path.join(__dirname, "../Asset/Image/") + req.params.fileName); });
exports.router.get("/Audio/:fileName", function (req, res) { res.sendFile(path.join(__dirname, "../Asset/Audio/") + req.params.fileName); });
exports.router.get("/Video/:fileName", function (req, res) { res.sendFile(path.join(__dirname, "../Asset/Video/") + req.params.fileName); });
exports.router.get("/Json/:fileName", function (req, res) { res.sendFile(path.join(__dirname, "../Asset/Json/") + req.params.fileName); });
exports.router.get("/Font/:fileName", function (req, res) { res.sendFile(path.join(__dirname, "../Asset/Font/") + req.params.fileName); });