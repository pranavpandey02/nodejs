
const homePage = (req,res)=>
{
    res.render("home");
}
const aboutstu = (req,res)=>
{
    res.render("about");
}
const courses = (req,res)=>
{
    res.render("courses");
}
const ourfees = (req,res)=>
{
    res.render("stufees");
}

module.exports={
    homePage,
    aboutstu,
    courses,
    ourfees
};