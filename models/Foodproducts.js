const mongoose=require("mongoose");
const {Schema,model}=mongoose;

const foodProductsschema=Schema({
    name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      category: {
        type: String,
        lowercase: true,
        enum: ["fruits", "vegetables", "dairy","other"],
      },
});


// Creating the class model here
const Foodproduct=new model("Foodproduct",foodProductsschema);
module.exports=Foodproduct;