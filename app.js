/* Enter the username and password present in placholder for authentication */
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");

const foodProductRoutes=require("./routes/foodProducts");
const authenticationRoutes=require("./routes/authentication");

// mongoose database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/foodProducts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Database Connected");
  })
  .catch((err) => {
    console.log("ERROR in Connection");
    console.log(err);
  });

  // Set
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  app.use(express.urlencoded({ extended: true })); //Post
  app.use(methodOverride("_method")); // Delete, Patch
  app.use("/foodproducts",foodProductRoutes);  // Routes
  app.use("/authentication",authenticationRoutes);

app.get("/",(req,res)=>{
    console.log("Hitting the route for homepage");
    res.render("home");
})


// Listening on port 3000 here
app.listen(3000,()=>{
    console.log("Listening on Port 3000, Yikes!");
})