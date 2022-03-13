// chinese ------> be careful ! consider healthy food
// subway -----> 200, great! you chose the right path

// 1. send the Status Code
// 2. send the headers
// 3. send the body of resp

// Welcome -----> 200 -----> plain text ----> Welcom to dominos 
// contact ------> 200 -----> Json response ----> {name: "Dominos", address:"Banglore"}

const express = require("express");
const res = require("express/lib/response");
const app = express();
// Define Routes in express
// app.method(path,callback)
app.get("/welcome",(req,res)=>{
    // res.writeHead(statusCode,headerObject)
//     res.writeHead(200,{
//         "Content-Type":"text/plain"
//     })
//  res.end("Welcome to Dominos!");
res.status(200)
// res.status(statusCode).send();

res.status(200).send("Welcome to Dominos");
//    res.writeHead()+res.end()
// res.send ----> Can accept any type or param
// res.write() ----> accepts a string;
// res.end() ----->  ends the response ;
// res.writeHead()  -----> accepts a status code and a json object
})

app.get("/contact",(req,res)=>{
    // res.writeHead(200,{
    //     "Content-Type":"application/json"
    // })
    // res.end(JSON.stringify({
    //     phone:"18602100000",
    //     email: 'guestcaredominos@jublfood.com'
    // }))

    res.status(200).send({
        name:"Dominos",
        address:"Banglore",
        contact:"1236547890"
    })
})
app.get("*",(req,res)=>{
    // res.writeHead(404,{
    //     "Content-Type":"text/html"
    // })
    // res.end("<h1>Not Found</h1>")
    res.status(404).send("<h1>Not Found</h1>")
})
app.listen(8081,()=>{
    console.log("Started Server on 8081")
})

// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url.startsWith("/welcome")) {
//         res.writeHead(200, {
//             "Content-Type": "text/plain"
//         })
//         // writeHead is a method of response object which is used to send the status code and the headers

//         res.end("Welcome to Dominos");
//     }

//     // res.end ---> terminates the response to the client with a message .

//     if (req.url.startsWith("/contact")) {
//         res.writeHead(200, {
//             "Content-Type": "application/json"
//         })
//         res.end(JSON.stringify({
//             phone: "18602100000",
//             email: 'guestcaredominos@jublfood.com'
//         }))
//     }
//     res.writeHead(404);
//     res.end("Page Not Found");
// })
// server.listen(8081, () => {
//     console.log("Server Started on 8081");
// })