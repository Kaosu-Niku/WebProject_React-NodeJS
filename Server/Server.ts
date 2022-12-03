console.log("連接端口成功");
import * as express from "express";
import * as path from "path";
import * as cors from "cors";

//! npm i -D typescript  @types/express
const app = express();
const port = process.env.PORT || 80;
app.listen(port);

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Client/build/index.html"));
});
app.get("/static/js/main.cfd78533.js", (req, res) => {
    res.sendFile(path.join(__dirname, "../Client/build/static/js/main.cfd78533.js"));
});
app.get("/static/css/main.96d0eb35.css", (req, res) => {
    res.sendFile(path.join(__dirname, "../Client/build/static/css/main.96d0eb35.css"));
});

import * as routerAsset from "./Router/Asset";
app.use("/Asset/", routerAsset.router);