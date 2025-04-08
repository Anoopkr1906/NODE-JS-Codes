// const http = require("http");
// const fs = require("fs");
// const url = require("url");

const express = require("express");

const app = express();

app.get('/' , (req,res) => {
    return res.end("Hello From home page");
})
app.get('/about' , (req,res) => {
    return res.end(`Hello From about page , hey ${req.query.name} . Your age is ${req.query.age}`);
})

app.listen(8000 , () => console.log("Server started"));
// app.listen(8000 , '[2409:40e5:13:a2a5:f4dd:e596:ba8:6e69]' , () => console.log("Server started"));


// function myHandler(req,res){
//     if(req.url === '/favicon.ico'){
//         return res.end();
//     }
//     const log = `${Date.now()}: ${req.method} ${req.url} New Request recieved\n`;
//     const myUrl = url.parse(req.url , true);
//     // console.log(myUrl);
//     fs.appendFile('log.txt' , log , (err) => {
//         switch(myUrl.pathname){
//             case '/': 
//                 if(req.method === 'GET') res.end("Home Page");
//                 break;
//             case '/about':
//                 const username = myUrl.query.myname
//                 res.end(`Hi , ${username}`);
//                 break;
//             case '/contact-us': res.end("I am Anoop Kumar Burnwal");
//                 break;
//             case '/search' :
//                 const search = myUrl.query.search_query ;
//                 res.end("Here are ur results for " + search);
//                 break;
//             case '/signup' :
//                 if(req.method === 'GET') res.end('This is a sign up form .');
//                 else if(req.method === 'POST') 
//                 // DB Query
//                     res.end('Success');
//             default: 
//                 res.end("404 Page Not Found");
//         }
        
//     });
// }

// req - request , res - response

// const myServer = http.createServer( app );

// myServer.listen(8000 , () => console.log("Server started")); // port number