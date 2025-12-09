const express = require("express");
const router = express.Router();
const ShoppingList = require("../../models/shopping");


router.post("/", async (req, res) => {
  const dtoIn = req.body;

  if (!dtoIn.name || !dtoIn.owner) {
    return res.status(400).json({
      uuAppErrorMap: { invalidDtoIn: "Chybí name nebo owner" }
    });
  }

  try {
    const shoppingList = new ShoppingList({
      name: dtoIn.name,
      owner: dtoIn.owner,
      members: [dtoIn.owner]
    });

    await shoppingList.save();

    res.json({
      shoppingList,
      uuAppErrorMap: {}
    });

  } catch (err) {
    res.status(500).json({
      error: "Chyba serveru",
      details: err.toString()
    });
  }
});

module.exports = router;

