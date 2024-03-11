var express = require("express");
var textJSON = require("../translate/translate.js");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/main", { title: "Express" });
});

router.get("/portfolio", function (req, res, next) {
  res.render("pages/portfolio", {
    title: "Express",
  });
});

router.get("/pricing", (req, res, next) => {
  res.render("pages/pricing", {
    title: "Express",
    text: textJSON[process.env.LANGUAGE],
  });
});
router.get("/contacts", (req, res, next) => {
  res.render("pages/contacts", { title: "Express" });
});
module.exports = router;
