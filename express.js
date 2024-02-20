import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname));
app.get("/",(req,res)=>{
    res.render(__dirname+"/index.ejs");
})
app.get("/digital",(req,res)=>{
    res.render(__dirname+"/index_digital.ejs");
})
app.get("/main_content",(req,res)=>{
    res.render(__dirname+"/index_main_content.ejs");
})
app.get("/my_own_blog",(req,res)=>{
    res.render(__dirname+"/index_1_my_own_blog.ejs");
})
app.post("/port",(req,res)=>{
    var a={"name":req.body.email1};
    res.render(__dirname+"/index.ejs",a);
})
app.listen(3010,(err)=>{
if(err) throw err;
console.log("server is running on port 3000");
})