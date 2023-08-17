// Grab the http module
const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") { // This will be for the basic homepage.
        res.end("Welcome to our home page") // For one liners you can use directly .end()
    }
    else if (req.url === "/about") {
        res.end("Here is the about page")
    } else {
        res.end(`
            <h1> Ooops! </h1>
            <p> We cant seem to find the page you're looking for' </p>
            <a href='/'> Back Home </a>
                `)
    }
    
    })

server.listen(5000) 