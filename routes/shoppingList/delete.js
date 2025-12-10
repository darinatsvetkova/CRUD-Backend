const express = require("express");
const router = express.Router();
const ShoppingList = require("../../models/shopping");

router.delete("/", async (req, res) => {
  const dtoIn = req.body;

  if (!dtoIn.id) {
    return res.status(400).json({
      uuAppErrorMap: { invalidDtoIn: "Chybí ID seznamu" }
    });
  }

  try {
    const shoppingList = await ShoppingList.findById(dtoIn.id);  

    if (!shoppingList) {
      return res.status(404).json({ error: "Seznam nenalezen" });
    }

    await shoppingList.deleteOne();

    res.json({ message: "Seznam odstraněn", uuAppErrorMap: {} });

  } catch (err) {
    res.status(500).json({
      error: "Chyba serveru",
      details: err.toString()
    });
  }
});

module.exports = router;

