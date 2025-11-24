const express = require("express");
const router = express.Router();

router.put("/", (req, res) => {
  const dtoIn = req.body; // { id: "...", archive: true }
  const dtoOut = {
    ...dtoIn,
    uuAppErrorMap: {}
  };
  res.json(dtoOut);
});

module.exports = router;
