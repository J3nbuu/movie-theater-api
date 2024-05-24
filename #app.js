//@ts-check

//link
const express = require("express");
const app = express();
const { User } = require('./models');
const db = require("./db/connection");

//express (middleware)
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// Routes
app.get("/users", async (req, res) => {
    try {
        const users = await User.findAll({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = app;