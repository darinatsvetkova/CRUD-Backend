const express = require("express");
const router = express.Router();

router.put("/", (req, res) => {
  const dtoIn = req.body;
  const dtoOut = {
    ...dtoIn,
    uuAppErrorMap: {}
  };
  res.json(dtoOut);
});

module.exports = router;
