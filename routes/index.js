const express = require("express");
const router = express.Router();
const Inventory = require("../models/inventory");

/*
  Routes for CRUD actions
*/

// Create a new item in the inventory
router.post("/add", async (req, res) => {
  try {
    if (!req.body.name || req.body.name.trim() == "") {
      return res.status(400).json({ message: "Name must be provided." });
    } else if (!req.body.quantity || req.body.quantity == "") {
      return res
        .status(400)
        .json({ message: "A valid quantity must be provided." });
    } else if (
      isNaN(parseFloat(req.body.quantity)) ||
      parseFloat(req.body.quantity) <= 0
    ) {
      return res
        .status(400)
        .json({ message: "A valid price must be provided" });
    } else {
    }

    await Inventory.create({
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
      description: req.body.description,
    });

    res.status(201).redirect("/");
  } catch (err) {
    console.error(`Error message: ${err}`);
    res.status(400).json(err);
  }
});

// Read and display all items in the inventory
router.get("/", async (req, res) => {
  // get items
  try {
    const items = await Inventory.findAll();
    res.render("index", { pageTitle: "Home Page", items });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Update an item in the inventory
router.post("/update/:id", async (req, res) => {
  try {
    await Inventory.update(
      {
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description.trim(),
      },
      {
        where: { inventory_id: req.params.id },
      }
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Delete an item in the inventory
router.post("/delete/:id", async (req, res) => {
  try {
    Inventory.destroy({
      where: { inventory_id: req.params.id },
    });
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

/*
  Routes to get different pages
*/
// get add page
router.get("/add", async (req, res) => {
  // get items
  try {
    res.render("add", { pageTitle: "Add Item Page" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// get edit page
router.get("/edit/:id", async (req, res) => {
  // get items
  try {
    const id = req.params.id;
    const item = await Inventory.findByPk(req.params.id);
    if (!item) {
      return res.status(404).send(`Item not found: ${id}`);
    }
    res.render("edit", { pageTitle: "Edit Page", item });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
