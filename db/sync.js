const { db } = require('./connection');
const { User, Show } = require('../models');

const syncDb = async () => {
    await db.sync({ force: true }); // force: true drops the table if it already exists
    console.log("Database synced!");
};

syncDb();