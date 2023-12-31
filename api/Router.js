import express from "express";
import { Router } from "express";
import DataFaker from "./DataFaker.js";
export const ServerRouter = Router();

ServerRouter.use(express.json());
ServerRouter.use(express.urlencoded({ extended: false }));

ServerRouter.route("/api").get((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("Backend Connected");
});

ServerRouter.route("/api/dashboard").get((req, res) => {
    // send faker data to the frontend
    const { totalusers, totalOrderDetails, totalNewUsers, totalRefunds } = DataFaker();
    res.status(200);
    res.send({ totalusers, totalOrderDetails, totalNewUsers, totalRefunds })
});
