const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`data received user ${name} with id ${id}`)
})

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const start = async()=>{
    try{
        console.log("hey")
        await delay(5000)
        customEmitter.emit('response', 'john', 34);
        console.log("hey2")
    } catch(error){
        console.log(error)
    }
}

start();