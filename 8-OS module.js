const os = require("os")    // Its a built in module so we dont have to install it
                            // We dont have to use "./" because its a built in module

// Get info about current user
const user = os.userInfo()
console.log(user)

// Methos returns the system uptime in sesonds
console.log(`The system uptime is ${os.uptime()} seconds.`)

// Create object with different properties about the current os
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)