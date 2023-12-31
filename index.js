import express from "express";
import cors from "cors";
// const json = require("express");
// const cookieParser = require('cookie-parser');
import { json } from 'express';
import cookieParser from 'cookie-parser';
import { ServerRouter } from "./api/Router.js";
import dotenv from 'dotenv';
dotenv.config();


// const routes = require("./api/Router");
const app = express();
const port = 3000;


app.use('/', (req, res, next) => {
    res.header("Access-Control-Allow-origin", "*")
    next();
})

app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
        preflightContinue: true,
        credentials: true
    }
));

app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", ServerRouter);

app.listen(port, () => {
    console.log("server running at: http://localhost:3000")
})
