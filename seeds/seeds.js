const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Foodproduct=require("../models/Foodproducts");

// mongoose connection
mongoose
  .connect("mongodb://127.0.0.1:27017/foodProducts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

// seeding products
const seedProducts=[
  {
    name:"Apple",
    price:20.0,
    category:"fruits",
  },
  {
    name:"Mango",
    price:10.0,
    category:"fruits",
  },
  {
    name:"WaterMelon",
    price:10.0,
    category:"fruits",
  },
  {
    name:"MuskMelon",
    price:10.0,
    category:"fruits",
  }
];
  Foodproduct.insertMany(seedProducts)
  .then(() => {
    console.log("Inserted");
  })
  .catch((e) => {
    console.log(e);
  });
