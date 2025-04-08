const http = require('http');
const fs = require('fs');
// const url = require('url');

const myServer = http.createServer((req , res) => {
    // if(req.url == './favicon.ico') return res.end();

    const log =`${Date.now()} ${req.url}: New request recieved\n`;
    // const myUrl = url.parse(req.url , true);

    // console.log("New req recieved" );
    // console.log(req);
    
    fs.appendFile('log.txt' , log , (err , data) =>{
        switch(req.url){
            case '/': res.end('Home Page')
                break;
            case '/about': res.end('About Page')
                break;
            case '/contact': res.end('Contact Page')
                break;
            case '/signup': res.end('Signup Page')
                break;
            default : result.end('404 page not found')
        }
        
    })
})

myServer.listen(8000 , ()=> console.log('Server started'));