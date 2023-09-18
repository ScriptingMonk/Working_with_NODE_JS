/*
         BUILT IN MODULE  

1.  OS
2.  PATH
3.  FS
4.  HTTP    

*/

/*      OS BUILT-IN MODULE      */

const os = require("os")

//  info of current user

const user = os.userInfo()
console.log(user);

//  method returns the system uptime in seconds
console.log(`THE SYSTEM UPTIME IS ${os.uptime()} SECONDS \n`);

const currentOS = {
    name: os.type(),
    release : os.release(),
    totalMen : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);