// HTTP Module

const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Welcome to our home page')
        res.end()
        // or simply: res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('This is about page')
    }
    res.end('Page not found!')
})

server.listen(8000)