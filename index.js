//all requirements
const express =require ("express");
const app=express();
const {name}=require("ejs");
const path = require("path");

//requiring the database from data.json
const data=require("./data.json");

//setting of view engine
app.set("view engine","ejs");

//finding views directory
app.set("views",path.join(__dirname,"views"));

//finding or accessing  public directory
// app.use(express.static("public")); ---ata likhle all time public dir pete asubidhe hoy
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
//port creation
const port=3000;
//server creation
app.listen(port,()=>{
  console.log("app is listning...");
})
//sending response in server
app.get("/:username",(req,res)=>{
    let {username}=req.params;
    let datan=data[username];
    console.log(datan);
    res.render("lawra.ejs",{datan});
})
