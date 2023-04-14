const express=require("express");
const router=express.Router();
const Foodproduct=require("../models/Foodproducts");

router.get("/authentication",(req,res)=>{
    const {isBoolean}=req.query;
    if(isBoolean){
        res.redirect("/foodproducts");
    }else{
        res.send("Not authenticated");
    }
});

const categories=["fruits", "vegetables", "dairy","other"];
//food routes
router.get("/",async (req,res)=>{
    console.log("ALL PRODUCTS");
    const products=await Foodproduct.find({});
    res.render("allProducts",{products});
});

router.get("/new",(req,res)=>{
    console.log("Started Creating New Food Products...");
    res.render("new.ejs");
});

router.get("/:id/edit", async (req,res)=>{
    const product=await Foodproduct.findById(req.params.id);
    res.render("edit",{product, categories});
    
});

router.put("/:id", async (req,res)=>{
    console.log("Updating the product...");
    const product=await Foodproduct.findByIdAndUpdate(req.params.id,req.body);
    res.redirect(`/foodproducts/${product._id}`)
})

router.get("/:id", async (req,res)=>{
    console.log("Searching for the product...");
    const product=await Foodproduct.findById(req.params.id);
    res.render("show",{product});
});


router.post("/",async (req,res)=>{
    console.log("Storing the new product");
    const product=new Foodproduct(req.body);
    await product.save();
    res.redirect(`/foodproducts/${product._id}`);
    
})
router.delete("/:id",async(req,res)=>{
    console.log("Deleting the product...");
    await Foodproduct.findByIdAndDelete(req.params.id);
    res.redirect("/foodproducts");
})


module.exports=router;
