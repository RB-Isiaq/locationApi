const express = require("express");
const { getLocationTemp } = require("../controllers");
const { validateVisitorName } = require("../validators");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send({
    title: "Location API",
    message: "make use of /api/hello?visitor_name route",
  });
});
router.get("/api/hello", validateVisitorName, getLocationTemp);

module.exports = router;
