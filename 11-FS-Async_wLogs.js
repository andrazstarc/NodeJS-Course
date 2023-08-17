//This is syncrounous approach
const { readFile, writeFile } = require("fs") // we are not using readFileSync but ReadFile instead for async approach

// Thats a good example of CALLBACK HELL

console.log("Start")
readFile("./content/first.txt", "utf8" , (err, result) => {
    if (err) {
        console.log(err)
        return
    } else {
        const first = result
        readFile("./content/second.txt", "utf8", (err, result) => {
            if (err) {
                console.log(err)
                return
            } else {
                const second = result
                writeFile(
                    "./content/result-async.txt",
                    `Hello, this is first text ${first} and this is second text ${second}.`,
                    (err, result) => {
                        if (err) {

                        } else {
                            console.log("Done with this task") // The result will be "undefined", the the file will be OK
                        }

                    }
                )
            }
        })
    }
})
console.log("Starting next task")

// I will have start, starting with next task and in the end we will be done with the task that was running.
// It will offload the running task

// The alternatives to callback hell are: promises and async await