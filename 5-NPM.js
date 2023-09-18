/*
To learn about the version of node
    node --v

To get a package.json for a new project
    npm init -y

To install external modulesin your project 
    npm i <packageName>

    // npm i loadash
    // npm i bootstrap

For installing package as a dev-dependencies
    npm i <packageName> --save-dev/ -D          

For uninstalling the package
    npm uninstall packageName

For installing the package as a global
    npm install -g <packageName>
*/




var _ = require('lodash');

const item = [1 ,[2 ,[3, [4]]]]

const new_item = _.flattenDeep(item)

console.log(new_item);
console.log("Hello World !!");
