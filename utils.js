//creating functions, folder, files and then export to server.js
//using node js pure
const fs=require("fs");
//--create folder synchronously
const createFolder=folderName =>{
      //check if folder exists
      if(!fs.existsSync(folderName)){
            //create the folder if not existing
            fs.mkdirSync(folderName);
      }
};
//--json content
const jsonPosts = `[{"name":"Rhey Yu","email":"rhey2476@gmail.com","Occupation":"Full Stack Developer","Status":"Active"}]`;
//--create file
const createFile=(file)=>{
//check if file exists
      if(!fs.existsSync(file)){
            fs.writeFileSync(file, jsonPosts);
      }
};
//--export functions
module.exports={createFile, createFolder};