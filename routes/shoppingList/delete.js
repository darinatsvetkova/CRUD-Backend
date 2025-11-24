const express = require("express");
const router = express.Router();

router.delete("/", (req, res) => {
  const dtoIn = req.body; // { id: "..." }
  const dtoOut = {
    ...dtoIn,
    uuAppErrorMap: {}
  };
  res.json(dtoOut);
});

module.exports = router;
