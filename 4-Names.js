// Share with other parts of the app
const Peter = "Peter"
const John = "John"

// local - not sharing this  -noone will have acces to this secret when accessing this module
const secret = "Super Important Secret"

module.exports = { John, Peter } // I can then access this in the other files with "require"

// console.log(module) to see what is exported etc.