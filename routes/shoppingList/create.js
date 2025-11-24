const express = require("express");
const router = express.Router();
const { validateDtoIn } = require("../../helpers/validate");

router.post("/", (req, res) => {
  const dtoIn = req.body;
  const uuAppErrorMap = validateDtoIn(dtoIn, ["name", "owner"]);

  const dtoOut = {
    ...dtoIn,
    uuAppErrorMap
  };
  res.json(dtoOut);
});

module.exports = router;
