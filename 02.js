// // os module

// const os = require('os')

// // info about current user
// const user = os.userInfo()
// console.log(user)
// // system uptime
// console.log(`The system uptime is ${os.uptime()} seconds`)

// const current = {
//     name: os.type(),
//     release: os.release(),
//     totalMem : os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(current)

// // path module
// const path = require('path')
// console.log(path.sep)
// console.log(path.resolve(__dirname))

// fs(sync)
const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');

const first = readFileSync('./folder/first.txt', 'utf8');
console.log(first)
writeFileSync('./folder/second.txt', 'here is the result')

// The files below this synchronous writeFileSync function will not execute until this function is not completed.


// fs(async)
readFile('./folder/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})

writeFile('./folder/third.txt', 'hello again!',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})

// The files below this async writeFile function can execute before this function is completed.