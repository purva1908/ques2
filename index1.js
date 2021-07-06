import express from "express"
import fs from "fs"
import bodyParser from "body-parser"


const server = express()
server.use(bodyParser.json())

server.use("/student/studentsList", myFunc)
server.listen(8080)

function myFunc(req,res){
     console.log("connected")
     fs.readFile("user1.json", function(err, data) {
      
        // Check for errors
        if (err) throw err;
       
        // Converting to JSON
        const users = JSON.parse(data);
          
        console.log(users); // Print users 
        res.send(users)
    });
}

