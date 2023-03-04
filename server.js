//--import modules
//using express pure
const express=require("express");
const fs=require("fs");
//import utils by destructuring
const {createFile, createFolder}=require("./utils");
const postData=require('./data/posts.json');
//const postsData=require("./data/Posts.json");
//checking the express module by console log
//console.log(express);
const app=express();
//--pass incoming data
app.use(express.json());
//--creating folder
//home root route
//createFolder("data");
//--creating files
//createFile("data/posts.json","content here");
//createFile("data/posts.json");
//routes API
//--home root route
app.get("/",(req,res)=>{
      res.send("Home Page Route!!"); 
});
//--Fetch all posts
app.get("/posts",(req,res)=>{
      //res.send("Fetch all posts");
      //res.json(postData);
//--using object method
  res.json({
      message:"Fetch Data Successfully!",
      postData
 });
});
//--Fetch single posts 
app.get("/posts/:id",(req,res)=>{
//--get the dynamic id from url parameter
      //console.log(req.params.id);
      const id=req.params.id;
      console.log(id);
//--find the posts by id
      const dataFound=postData.find((post)=>{
               return post.id === id;
       });
//--check if the posts exists
       if(!dataFound){
               res.json({message:"Posts not found!"});
       }else{
//--send the posts to the user
             res.json({dataFound});
       }
//       //res.send("Fetch single posts");
});
//--create posts
app.post("/posts",(req,res)=>{
      // console.log(req.body);
      // res.send("Create Posts");
//--get the post from user
      const newPost=req.body;
      //push the new post into existing post
      //postData.push({//to display data below
       postData.unshift({//to display data on top     
            ...newPost,
            id: ("100")+(postData.length + 1).toString()
      });   
      console.log(postData);
//--write to file the new array set of value  
      fs.writeFile("data/posts.json", JSON.stringify(postData),(err)=>{
            if(err){
                  console.log(err);
            }
            //send message to user
      res.json({
            message:"Post Created Successfully",
      });
});
      res.send("Create Posts");
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
//--get by desctructuring
      const {name, email, Occupation} = req.body;
      const postFound=postData.find((post)=>{
            return post.id===id;
      });
      console.log(postFound);
      if(!postFound){
            return res.json({message:"File not found"});
      }
//--filter out all post except the post matching id
      const filteredPost=postData.filter((post)=>{
            return post.id !== id;
      });
      console.log(filteredPost);
//--update the data currently found in post array
      postFound.name = name;
      postFound.email = email;
      postFound.Occupation = Occupation;
      console.log(postFound);
//--push the updated post into filtered array
      filteredPost.unshift(postFound);
      console.log(filteredPost);
      fs.writeFile("data/posts.json", JSON.stringify(filteredPost),(err)=>{
            if(err){
                  console.log(err);
            }
            //send message to user
      res.json({
            message:"Post Updated Successfully",
      });
});

      //res.send("Update posts using id");//dummy only
});
//--delete a post using id
app.delete("/posts/:id",(req,res)=>{
//--get the dynamic id from url params
      const id=req.params.id;
//--filter out all post except the post matching id
      const filteredPost=postData.filter((post)=>{
//--return post except the matched id
            return post.id !==id;
      });
      console.log(filteredPost);
//--write to file the new array set of value
      fs.writeFile("data/posts.json", JSON.stringify(filteredPost),(err)=>{
            if(err){
                  console.log(err);
            }
            //send message to user
      res.json({
            message:"Post Deleted Successfully",
      });
});
      //res.send("Delete single posts");
});
//server listening
app.listen(3000,()=>{
      console.log('Server Active at Port 3000')
});
