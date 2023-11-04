const { readFile, writeFile } = require("fs").promises;

// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const readFilePromise = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data)
//             }
//         })
//     })
// }


const start = async()=>{
    try{
        const first = await readFile('./folder/first.txt', 'utf8')
        await writeFile('./folder/second.txt', 'changed again!')
        console.log(first)
    } catch(error){
        console.log(error)
    }
}

start()

// readFilePromise('./folder/first.txt')
//     .then((result)=>console.log(result))
//     .catch((err)=>console.log(err))


