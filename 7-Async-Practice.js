const { readFile , writeFile } = require('fs')


const printText = async () => {
    try {
        const text = await getText('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Async-Prac.txt')
        console.log(text);
    } catch (error) {
        console.log(error);
    }
}


// WE CAN USE util library and we dont need to write getText function

/* const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (error, res) => {
            if (error) {
                reject(error);
            } else {
                resolve(res)
            }
        })
    });
} */



const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const printText2 = async()=>{
    try {
        let firstText = await readFilePromise('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Async-Prac.txt','utf-8')
        console.log(firstText);

        const secondText = await writeFilePromise('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Async-Prac.txt',`
        Now I am adding some more text to Async-Prac.txt !!!`,{flag : 'a'})
        
        firstText = await readFilePromise('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Async-Prac.txt','utf-8')
        console.log(firstText);


    } catch (error) {
        console.log(error);
    }
}


// Now we dont even need util module 

const fs = require('fs').promises

const printText3 = async()=>{
    try {
        let firstText = await fs.readFile('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Async-Prac.txt','utf-8')
        console.log(firstText);

        const secondText = await fs.writeFile('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Async-Prac.txt',`
        Now I am adding some more text to Async-Prac.txt !!!`,{flag : 'a'})
        
        firstText = await fs.readFile('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Async-Prac.txt','utf-8')
        console.log(firstText);


    } catch (error) {
        console.log(error);
    }
}



printText3()
