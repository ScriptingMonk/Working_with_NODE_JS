
console.log("START");

const fs = require('fs')
fs.readFile('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/First.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    fs.readFile('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        fs.writeFile('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Third_async.txt',
            `HERE IS THE THIRD FILE : ${first} ${second}`, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(fs.readFile('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Third_async.txt', 'utf-8', (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(result);
                    console.log("\n Done with thos task");
                }));
            })
    })
})

console.log("Starting the new task");