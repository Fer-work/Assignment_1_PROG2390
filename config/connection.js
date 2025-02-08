const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_URL,
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
      ssl: { rejectUnathorized: false },
    },
  }
);

module.exports = sequelize;
