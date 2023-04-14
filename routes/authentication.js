const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    console.log("Checking for authentication");
    console.log("Put the value present in PLACEHOLDER");
    res.render("authentication");
})

router.post("/check",(req,res)=>{
    const {username,password}=req.body;
    if(username&&password){
    console.log(req.body)
    if((username=="rohitPandey")&&(password=="rohit125")){
        console.log("Authenticated");
        res.redirect("/foodproducts/authentication?isBoolean=true")
    }else{
        res.send("Not authenticated")
    }
}
res.send("Username or Password is required");
});


module.exports=router;