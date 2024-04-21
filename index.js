const express = require("express");
const hbs = require("hbs");
const path = require("path")
const bodyParser = require("body-parser");

const app = express();
const encoder = bodyParser.urlencoded();


app.set("view engine", "hbs")
app.use(express.static(path.join(__dirname, "views/public")))
hbs.registerPartials(path.join(__dirname, "views/partials"))


app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/add",(req,res)=>{
    res.render("add")
})

app.post("/add", encoder, (req,res)=>{
    res.render("add")
})

app.listen(8000,()=>console.log("Server is running at http://localhost:8000"))