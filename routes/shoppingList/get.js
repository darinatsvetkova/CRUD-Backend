const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const dtoOut = {
    shoppingList: {
      id,
      name: "Seznam Lidl",
      owner: "Alice",
      archived: false,
      members: ["Alice", "Bob"]
    },
    uuAppErrorMap: {}
  };
  res.json(dtoOut);
});

module.exports = router;
