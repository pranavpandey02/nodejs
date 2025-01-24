// const collegeModel = require("../model/CollegeModel");

const homePage = (req,res)=>
{
    res.render("index");
}

const aboutpage = (req,res)=>
{
    res.render("about");

}

const courses = (req,res)=>
{
    res.render("courses");
}
const faculty = (req,res)=>
{
    res.render("faculity");
}
const contact = (req,res)=>
{
    res.render("contact");
}
module.exports={
    homePage,
    aboutpage,
    faculty,
    contact,
    courses,
};