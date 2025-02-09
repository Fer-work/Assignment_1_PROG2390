// Fernando Sanchez Gutierrez
// ID: 8992203

const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
// set up sequelize connection
const sequelize = require("./config/connection");

const routes = require("./routes/index");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// set up routes
app.use("/", routes);

// set up connection, port to listen
const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");

    return sequelize.sync({ alter: true, force: false });
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}.`);
    });
  });
