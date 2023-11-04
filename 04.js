// npm - global command comes with Node
// npm --version

// local dependency - use it only in this particular project 
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// Dev dependency - packages you require in the development phase of your project and not in the production or testing environments
// npm install <packageName> -D

// package.json - manifest file (stores important info about projects/package)
// manual approach (create package.json in the root, create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)