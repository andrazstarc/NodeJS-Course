const { basename } = require("node:path/win32")
const path = require("path") // Obtain the path module

console.log(path.sep) // Return my specific path seprator - in my case this is backslash "\"

const filePath = path.join("\content/", "subfolder", "test.txt") // normalized path as a value (can add / or something)
console.log(filePath)

const baseName = path.basename(filePath) // Get the basename of file path (test.txt)
console.log(baseName)

// Get absolute path - use __dirname global
const absolutePath = path.resolve(__dirname, "\content", "subfolder", "test.txt") // it is useful because we are usually running it in different environment
console.log(absolutePath)