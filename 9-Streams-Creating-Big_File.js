const fs  = require('fs');
for (let index = 0; index < 10000; index++) {
    fs.writeFileSync('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Streams-XX-file.txt',
    `Hello ,I am Aditya Prasad ${index} \n`,{flag : 'a'})
}

for (let index = 0; index < 100000; index++) {
    fs.writeFileSync('C:/Users/iadit/OneDrive/Desktop/waste/CODING/WEB DEV/NODE_JS/3-Built_in_Path_Module_Content/Streams-XXX-file.txt',
    `Hello ,I am Aditya Prasad ${index} \n`,{flag : 'a'})
}
