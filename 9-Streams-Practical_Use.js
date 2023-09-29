
const http = require('http')
const fs = require('fs')

http.createServer((req , res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // const text = fs.readFileSync('NODE_JS/3-Built_in_Path_Module_Content/Streams-XXX-file.txt','utf8')
    // res.end(text) 
    
    const fstreamText = fs.createReadStream('NODE_JS/3-Built_in_Path_Module_Content/Streams-XXX-file.txt',{encoding : 'utf-8'})
    fstreamText.on('open',()=>{
        fstreamText.pipe(res)
    })
    fstreamText.on('error',()=>{
        res.end(error)
    })
    
}).listen(5000,()=>{
    console.log('Server is listening.......');
})