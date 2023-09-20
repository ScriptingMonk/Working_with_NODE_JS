const {readFile , writeFile, read } = require('fs')

const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async()=>{
    try {
        const first = await readFilePromise('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/First.txt','utf-8')
        const second = await readFilePromise('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Second.txt','utf-8')
        console.log(first , second);
    
        const write = await writeFilePromise('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Async_Result.txt',`THE RESULT IS : ${first} ${second}`)
        
    } catch (error) {
        console.log(error);
    }
}

start()