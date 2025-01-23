const express = require("express");
const route = express.Router();
const studController = require("../controller/stuController")


route.get("/homepage",studController.homePage);
route.get("/aboutstu",studController.aboutstu);
route.get("/courses",studController.courses);
route.get("/ourfees",studController.ourfees);

module.exports = route;