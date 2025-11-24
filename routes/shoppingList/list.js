const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const dtoOut = {
    shoppingLists: [
      { id: "1", name: "Seznam Lidl", owner: "Alice", archived: false },
      { id: "2", name: "Seznam Tesco", owner: "Bob", archived: false }
    ],
    uuAppErrorMap: {}
  };
  res.json(dtoOut);
});

module.exports = router;
