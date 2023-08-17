// Every file by default is a module. We are in charge on what we are sharing. We are amking it available by module.exports.
const names = require("./4-Names") // for your own module always with "/."
const sayhi = require("./5-Utils")
const alternatives = require("./6-Alternative") // We are getting different tyes of data - an array and an object
const altArray = require("./6-Alternative").items // Getting just the items
const altObject = require("./6-Alternative").singlePerson // Getting just the object

console.log(names) // it will write objects

sayhi("susan")
sayhi(names.John)
sayhi(names.Peter)

console.log(alternatives.items[1])
sayhi(alternatives.singlePerson.name)

console.log(altArray[0])
sayhi(altObject.name)

require("./7-Mind Grenade") // We are not assigning ti to a function nor did we define exports. We are envoking a code. Useful to EXECUTE  a function.
// Basically useful to require a module and behind the scenes this module will do a bucnh of stuff