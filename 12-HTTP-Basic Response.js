// Grab the http module
const http = require("http")

const server = http.createServer((req, res) => {
    res.write("Welcome to our home page") // Writes a string to the response stream
    res.end() // Represents that the response is complete and should be sent to the client

})

server.listen(5000) // Tells the server to start listening on port5000 for incoming HTTP requests.
// When we run this code (it will be not be finished. it will continue running until we cancel it) and access
// the http://localhost:5000 in the browser, the server will respond to the client with the given message.


/* The create server method is looking for a callback function (with 2 parameters)
 * Common parameters in callback function in createServer are req (request) and res (response)
 * These parameters represent the incoming HTTP request and the response that will be sent back to the client
 */