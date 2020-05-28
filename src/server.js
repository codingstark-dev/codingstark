const express = require("express");
import sirv from "sirv";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";
const app = express();

app
    .post("/task", (req, res, next) => {
        res.sendStatus(200);
        console.log(req.body);
    })

.use(
        compression({ threshold: 0 }),
        sirv("static", { dev }),
        sapper.middleware()
    )
    .listen(PORT, (err) => {
        if (err) console.log("error", err);
    });