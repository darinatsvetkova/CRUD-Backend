const express = require("express");
const router = express.Router();

router.get("/:listId", (req, res) => {
  const listId = req.params.listId;
  const dtoOut = {
    items: [
      { id: "1", name: "Mléko", completed: false },
      { id: "2", name: "Chleba", completed: true }
    ],
    uuAppErrorMap: {}
  };
  res.json(dtoOut);
});

module.exports = router;
