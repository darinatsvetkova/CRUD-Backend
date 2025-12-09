const express = require("express");
const router = express.Router();
const ShoppingList = require("../../models/shopping");

router.post("/", async (req, res) => {
  const { listId, user } = req.body;

  try {
    const shoppingList = await ShoppingList.findById(listId);
    if (!shoppingList) return res.status(404).json({ error: "Seznam nenalezen" });

    shoppingList.members = shoppingList.members.filter(u => u !== user);
    await shoppingList.save();

    res.json({ members: shoppingList.members, uuAppErrorMap: {} });

  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

module.exports = router;

