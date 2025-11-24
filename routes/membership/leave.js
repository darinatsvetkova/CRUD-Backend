const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const dtoIn = req.body; // { listId, user }
  const dtoOut = {
    ...dtoIn,
    uuAppErrorMap: {}
  };
  res.json(dtoOut);
});

module.exports = router;
