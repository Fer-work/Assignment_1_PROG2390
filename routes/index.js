const express = require("express");
const router = express.Router();
const Inventory = require("../models/inventory");

// List all items
router.get("/", async (req, res) => {
  // get items
  Inventory.findAll().then(res.render("index", { items }));
});

// add a new item
router.post("/add", async (req, res) => {
  Inventory.create({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    description: req.body.description,
  })
    .then((item) => {
      res.render(item);
    })
    .catch((err) => {
      res.json(err);
    });
});

// edit an item
router.put("/edit/:id", async (req, res) => {
  Inventory.update(
    {
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
      description: req.body.description,
    },
    {
      where: { inventory_id: req.body.params.id },
    }
  ).then((item) => {
    res.render(item);
  });
});

// delete item
router.delete("/delete/:id", async (req, res) => {
  Inventory.destroy({
    where: { inventory_id: req.params.id },
  }).then((item) => {
    res.render(item);
  });
});

module.exports = router;
