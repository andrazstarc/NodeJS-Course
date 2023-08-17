const { readFileSync, writeFileSync } = require("fs") // written in a destructured way

console.log("start")

// Read from two text files we placed in content folder
first = readFileSync("./content/first.txt", "utf8")
second = readFileSync("./content/second.txt", "utf8")


// Write to new file the content of previous files (if the file is not there, node will create new)
writeFileSync("./content/result-sync.txt", `Hello, this is first text ${first} and this is second text ${second}.`)

console.log("Done with this task")
console.log("Starting witht he next one")

// Java will perform this tasks syncrounous. If the reading or writing these files is taking a lot of tim,e nothing else will be done in between this time.