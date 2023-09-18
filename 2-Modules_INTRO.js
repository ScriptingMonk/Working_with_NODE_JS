//  MODULES


//  CommonJS , very file is module (    By Default  )
//  Modules -  Encapsulated Code (  Only Share Minimum  )   WE ARE INCHARGE WHAT WE WANT TO SHARE !!

const names = require("./2-Modules_Name")

const { Manager, Secratary } = require("./2-Modules_Name")

const fxn = require("./2-Modules_Utils")



console.log(names);

fxn.sayHello(names.Aditya)
fxn.sayHello(names.Anubhav)
fxn.sayHello(names.Rohit)

fxn.sayGM(Manager)
fxn.sayGM(Secratary)

require("./2-Modules_FXN_RUN")
