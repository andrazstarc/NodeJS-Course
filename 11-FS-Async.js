//This is syncrounous approach
const { readFile, writeFile } = require("fs") // we are not using readFileSync but ReadFile instead for async approach

/* we are not using readFileSync but ReadFile instead for async approach
 * we will need to be using a callback which we will run wheneever a certain functionality will be complete,
 * similar to addeventlistener in JS
 */

// Thats a good example of CALLBACK HELL
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
                            console.log(result) // The result will be "undefined", the the file will be OK
                        }

                    }
                )
            }
        })
    }
})

/* second argument is the callback function
err is commonly used as an error in the context of callback functions
 We need to provide utf8 coding as a second argument, otherwise we will get buffer as a result, like this:
 <Buffer 48 65 6c 6c 6f 2c 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e>

We want to read the second file only when the first file is read OK. Meanign we need to nest the new readFile function in the first one.
And then when both first and second files and read OK we write to file
*/