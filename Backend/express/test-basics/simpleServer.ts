import express = require("express")

const app = express()

app.get("/", async (req, res) => {
    res.send({a: 4})
})

app.listen(80, () => {
    console.log("Yeet stuff done")
})