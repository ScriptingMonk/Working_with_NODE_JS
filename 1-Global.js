//  GLOBALS     -   NO WINDOW !!

//  __dirname    -   path to current directory
//  __filename   -   file name
//  require     -   fxn to use module(CommonJS)
//  module      -   info about current module (file)
//  process     -   info about environment where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log("HELLO WORLD !!");
}, 1000);