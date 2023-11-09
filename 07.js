const {createReadStream} = require('fs');

const stream = createReadStream('./folder/big.txt');

stream.on('data', (result) => {
    console.log(result)
})