const express = require("express");
const route = express.Router();

const collegeController = require("../controller/collegeController");

route.get("/home",collegeController.homePage);
route.get("/about",collegeController.aboutpage);
route.get("/course",collegeController.courses);
route.get("/faculty",collegeController.faculty);
route.get("/contact",collegeController.contact);

module.exports = route;