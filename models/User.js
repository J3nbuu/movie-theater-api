// import our db, Model, DataTypes
const Sequelize = require("sequelize");
const { db, DataTypes } = require('../db/connection')


// Creating a User child class from the Model parent class
const User = db.define('users', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  // allowNull: false,
  // unique: true
})

// exports
module.exports = User
