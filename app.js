const _ = require("lodash") // You always have to install the external package first before requiring it

const items = [1, [2, [3, [4, [5]]]]]

const newItems = _.flattenDeep(items)

console.log(items)
console.log(newItems)

// The underscore  "_" is commonly used as a convention to refer to the lodash library, although we could use any other valid variable name