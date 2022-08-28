const { Client } = require("pg");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    host: process.env.host,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
});