const http  = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
    res.end('Response');
})

server.listen(5000)