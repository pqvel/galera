var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/main", { title: "Express" });
});

router.get("/portfolio", function (req, res, next) {
  res.render("pages/portfolio", { title: "Express" });
});

router.get("/pricing", (req, res, next) => {
  res.render("pages/pricing", { title: "Express" });
});
module.exports = router;
