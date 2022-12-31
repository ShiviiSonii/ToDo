const express=require("express");
const bodyParser=require("body-parser");

const app=express();
let items=["Buy Food","Cook Food","Eat Food"];
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    let today= new Date();
    
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let day=today.toLocaleDateString("en-US",options);

    res.render("list",{kindOfDay:day,newlistItems:items});
})

app.post("/",function(req,res){
    let item=req.body.newitem;
   items.push(item);
   res.redirect("/");

})
app.listen(3000,function(req,res){
    console.log("Server is running on port 3000.");
})