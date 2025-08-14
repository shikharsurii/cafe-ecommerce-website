const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const signupSchema = require("./models/signupSchema")

mongoose
    .connect("mongodb://127.0.0.1:27017/Lamppost")
    .then(() => {
        console.log("Mongoose connection established");
    })
    .catch(() => {
        console.log("Error in Mongoose connection");
    });


app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));




app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index (1).html'));
})

app.post("/signup", async (req, res) => {
    console.log(req.body)
    const signupdata = new signupSchema(req.body);
    await signupdata.save();
    res.sendFile(path.join(__dirname, 'public', 'index (1).html'));
})


app.listen(4000, (req, res) => {
    console.log("Listening on port 4000")
})
