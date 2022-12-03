import * as express from "express";
import * as path from "path";
export const router = express.Router();

router.get("/Image/:fileName", (req, res) => { res.sendFile(path.join(__dirname, "../Asset/Image/") + req.params.fileName); });
router.get("/Audio/:fileName", (req, res) => { res.sendFile(path.join(__dirname, "../Asset/Audio/") + req.params.fileName); });
router.get("/Video/:fileName", (req, res) => { res.sendFile(path.join(__dirname, "../Asset/Video/") + req.params.fileName); });
router.get("/Json/:fileName", (req, res) => { res.sendFile(path.join(__dirname, "../Asset/Json/") + req.params.fileName); });
router.get("/Font/:fileName", (req, res) => { res.sendFile(path.join(__dirname, "../Asset/Font/") + req.params.fileName); });