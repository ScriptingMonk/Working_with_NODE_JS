
const {createReadStream} = require('fs')

/*
    For fs.ReadStream we have 3 events: 
    1.  open
    2.  close
    3.  ready
*/

/*
const stream =createReadStream("NODE_JS/3-Built_in_Path_Module_Content/Streams-XX-file.txt")

*/



//  buffer - 64KB
//  last buffer - remainder
//  highWaterMark - control the size of buffer
//  const stream =createReadStream("NODE_JS/3-Built_in_Path_Module_Content/Streams-XX-file.txt",{ highWaterMark : 90000 })
//  const stream =createReadStream("NODE_JS/3-Built_in_Path_Module_Content/Streams-XX-file.txt",{ encoding : 'utf-8 })
// 

// const stream_2 = createReadStream("NODE_JS/3-Built_in_Path_Module_Content/Streams-XX-file.txt", {highWaterMark : 90000})

const stream = createReadStream("NODE_JS/3-Built_in_Path_Module_Content/Streams-XX-file.txt", {highWaterMark : 90000 , encoding : 'utf-8'})

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err)=>{
    console.log(err);
})