const http = require('http')

/*
const server = http.createServer((req,res)=>{
    res.end("Welcome")
})

server.listen(5000)
*/


// USING EVENT-EMITTER API

/*
    EMIT REQUEST EVENT
    SUBSCRIBE TO IT / LISTEN FOR IT / RESPOND TO IT 

 */

const server = http.createServer()

server.on('request',(req,res)=>{
    res.end('<h1>Welcome</h1>')
})

server.listen(5000,()=>{
    console.log('Server is listening ......');
})