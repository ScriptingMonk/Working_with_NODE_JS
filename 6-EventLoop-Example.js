/*
// Example-1
console.log("First Task");
setTimeout(() => {
    console.log("Second Task");
}, 0);
console.log("Third Task");


// Example 2
console.log("First TASK")
setInterval(() => {
    console.log("Hello World");
}, 1000);
console.log("NEXT TASK");


// Example 3
console.log("First Task");
const fs = require('fs')
fs.readFile("C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/First.txt",'utf-8',(error,result)=>{
    if(error){
        console.log(error);
        return
    }
    console.log(result);
})
console.log("Next Task");


// Example 4
const http = require('http')
const server = http.createServer((req,res)=>{
    console.log("Server Request")
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("HELLO WORLD !!")
})

server.listen(5000,()=>{
    console.log("SERVER IS LISTENING ON PORT 5000");
})

*/