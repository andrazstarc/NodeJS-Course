const { readFileSync, writeFileSync } = require("fs") // written in a destructured way

/* {readFileSync} is the destructuring assingment, meaning it extracts the readFileSync
 * function from the imported "fs" module and assigns it to a variable with the same name,
 * that is readFileSync
 * 
 * The equivalent would be const readFileSync = require("fs").readFileSync
 */

// Read from two text files we placed in content folder
first = readFileSync("./content/first.txt", "utf8")
second = readFileSync("./content/second.txt", "utf8")

// Write to console the content
console.log(first)
console.log(second)

// Write to new file the content of previous files (if the file is not there, node will create new)
// If the file is already there, node will by default overwrite the values there
// Careful! DO NOT have EXTRA SPACES in file path
writeFileSync("./content/result-sync.txt", `Hello, this is first text ${first} and this is second text ${second}.`)


// Overwrite the values:
writeFileSync("./content/result-sync.txt", "Hello world")

// If you want to append text to existing file you need to add extra argument {flag:"a"}
writeFileSync("./content/result-sync.txt", `Hello, this is first text ${first} and this is second text ${second}.`) // Back to initial value
writeFileSync("./content/result-sync.txt", "Hello world", {flag: "a"}) // Append Hello World