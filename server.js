// Fernando Sanchez Gutierrez
// ID: 8992203

const express = require("express");

// set up sequelize connection
const sequelize = require("./config/connection");

const routes = require("./routes/index");

const app = express();
app.use(express.json());

// set up routes
app.use("/", routes);

// set up connection, port to listen
const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");

    return sequelize.sync({ alter: true, force: true });
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}.`);
    });
  });
