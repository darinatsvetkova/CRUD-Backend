const express = require("express");
const router = express.Router();
const ShoppingList = require("../../models/shopping");
const { randomUUID } = require("crypto");

router.post("/", async (req, res) => {
  const { listId, name } = req.body;

  if (!listId || !name) {
    return res.status(400).json({
      uuAppErrorMap: { invalidDtoIn: "Chybí listId nebo name" }
    });
  }

  try {
    const shoppingList = await ShoppingList.findById(listId);
    if (!shoppingList) return res.status(404).json({ error: "Seznam nenalezen" });

    const newItem = {
      id: randomUUID(),
      name,
      completed: false
    };

    shoppingList.items.push(newItem);
    await shoppingList.save();

    res.json({ item: newItem, uuAppErrorMap: {} });

  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;

