import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import express = require("express")

const app = express()

createConnection().then(async connection => {
    const db = connection.manager

    

    app.get("/users", async (req, res) => {
        console.log(`Sending users to ${req.ip}`)
        res.send(await db.find(User))
    })

    app.listen(80)
    console.log("express running on 80")

}).catch(error => console.log(error));
