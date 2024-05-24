const express = require('express')
const { User, Show } = require('../models/index.js')

const router = express.Router()
//Get
router.get("/", async function(req, res) {
    try {
        const users = await User.findAll({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:userId', async function (req, res) {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId)
        res.json(user)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
});

router.get('/:userId/shows', async function (req, res) {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId, {include: Show})
        res.json(user).shows
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
});

router.put('/:userId/shows/:showId', async function (req, res) {
    try {

        const { userId, showId}= req.params
        const user = await User.findByPk(userId);
        const show = await Show.findByPk(showId);
        

        if (!user || !show) {
            return res.status(404).json({error: 'User or Show cannot be found'})
        }
        await user.addShow(show)
        const updatedUser = await User.findByPk(userId, {include: Show})
        res.json(updatedUser).shows
    
    
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
});


module.exports = router