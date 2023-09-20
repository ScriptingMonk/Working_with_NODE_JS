/* Async- : Using Async and Await  */


const { readFile } = require('fs');
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (error, data) => {
            if (error) {
                reject(error)
            } else {
                resolve(data)
            }
        })
    });
}

const start = async()=>{
    try {
        let text = await getText('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/First.txt')
        console.log(text);
    } catch (error) {
        console.log(error);
    }
}

start()