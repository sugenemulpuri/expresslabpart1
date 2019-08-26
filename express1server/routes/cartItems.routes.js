const express = require("express");
const cartItemsRoutes = express.Router();
const cartItems = require("./cartItems");

cartItemsRoutes.get("/cartItems", (req, res) => {
  res.send(cartItems);
});

cartItemsRoutes.post("/cartItems", (req, res) => {
  cartItems.push(req.body);
  res.send(cartItems);
});

cartItemsRoutes.put("/cartItems/:id", (req, res) => {
  const index = cartItems.findIndex(item => item.id === req.params.id);
  cartItems.splice(index, 1, req.body);
  res.send(cartItems);
});

cartItemsRoutes.delete("/cartItems/:id", (req, res) => {
  const index = cartItems.findIndex(item => item.id === req.params.id);
  cartItems.splice(index, 1);
  res.send(cartItems);
});

module.exports = cartItemsRoutes;

