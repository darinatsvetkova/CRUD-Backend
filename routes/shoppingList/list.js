const express = require("express");
const router = express.Router();
const ShoppingList = require("../../models/shopping");

// Získání všech seznamů
router.get("/", async (req, res) => {
  try {
    const shoppingLists = await ShoppingList.find();  
    res.json({ shoppingLists, uuAppErrorMap: {} });
  } catch (err) {
    res.status(500).json({
      error: "Chyba serveru",
      details: err.toString()
    });
  }
});

module.exports = router;

