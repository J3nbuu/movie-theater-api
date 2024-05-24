const express = require('express')
const { Show, User } = require('../models/index.js')

const router = express.Router()

router.get("/", async function(req, res) {
    try {
        const shows = await Show.findAll({});
        res.json(shows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router