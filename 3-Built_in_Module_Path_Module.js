const path = require("path")
console.log(path.sep);

const filePath = path.join('/3-Built_in_Path_Module_Content', 'sub_folder', 'Text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute_path = path.resolve(__dirname,'3-Built_in_Path_Module_Content', 'sub_folder', 'Text.txt')
console.log(absolute_path);