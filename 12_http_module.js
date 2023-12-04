const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to the Homepage');
    }

    if(req.url==='/about'){
        res.end('Welcome to the about page');
    }
    
    // res.end(`
    // <h1>Oops!!</h1>
    // <p>We can't seem to find the page you are looking for</p>
    // <a href="/">back to home</a>
    // `);
    else{
        res.end('Bad request');
    }


    
})

server.listen(5000)