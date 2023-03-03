//--import modules
//using express pure
const express=require("express");
//import utils by destructuring
const {createFile, createFolder}=require("./utils");
//checking the express module by console log
//console.log(express);
const app=express();
//--creating folder
createFolder("data");
//--creating files
//createFile("data/posts.json","content here");
createFile("data/posts.json");
//--Fetch all posts
app.get("/Posts",(req,res)=>{
      res.send("GAME OVER DUDE!!");
});
//--Fetch single posts 
app.get("/posts/:id",(req,res)=>{
      //--get the dynamic id from url parameter
      //console.log(req.params.id);
      const id=req.params.id;
      console.log(id);
      res.send("FETCH SINGLE POSTS");
});
//--create posts
app.post("/posts",(req,res)=>{
      res.send("Create New Posts");
});

//--create single posts
app.post("/posts/:id",(req,res)=>{
      res.send("Create single posts");
      const id=req.params.id;
      console.log(id);
});
//--updating post with url params
app.put("/posts/:id",(req,res)=>{
       //--get the dynamic id from url parameter
      //console.log(req.params.id);
      const id=req.params.id;
      console.log(id);
      res.send("Update posts using id");
});
//--delete a post using id
app.delete("/posts/:id",(req,res)=>{
      res.send("Delete single posts");
});
//routes API

//server listening
app.listen(3000,()=>{
      console.log('Server Active at Port 3000')
});
