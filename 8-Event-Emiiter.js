const EventEmitter = require('events')

const customEmitter = new EventEmitter();


customEmitter.on('response',(name, id)=>{
    console.log(`The user name is ${name} with id ${id}`);
})

customEmitter.on('response',()=>{
    console.log("Data is received !!");
})

customEmitter.emit('response','Aditya',55)
