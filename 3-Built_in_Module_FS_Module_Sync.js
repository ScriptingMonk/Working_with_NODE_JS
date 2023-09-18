//  FS MODULE 
console.log("START");
const { readFileSync, writeFileSync } = require("fs")   // DESTRUCTURING 

const first = readFileSync('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/First.txt', 'utf-8')
const second = readFileSync('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Second.txt', 'utf-8')
console.log(first + "\n\n" + second);
console.log("Done with this task");


console.log("Starting the new task !!");
writeFileSync("C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Third.txt",`Hello ji , I am File number 3`)


const fs = require("fs")
fs.writeFileSync("C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Result-sync.txt", `Here is the result : \n ${first} \n\n ${second}`)

const third = readFileSync("C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Third.txt")
const result_sync = fs.readFileSync("C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Result-sync.txt",'utf-8')

console.log(third + "\n\n");
console.log(result_sync);

