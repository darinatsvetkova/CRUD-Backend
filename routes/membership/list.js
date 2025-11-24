const express = require("express");
const router = express.Router();

router.get("/:listId", (req, res) => {
  const listId = req.params.listId;
  const dtoOut = {
    members: ["Alice", "Bob", "Carol"],
    uuAppErrorMap: {}
  };
  res.json(dtoOut);
});

module.exports = router;
