const EventEmitter = require('events')
const custumEmitter = new EventEmitter();
custumEmitter.on('response', (data,secondData)=>{
    console.log('received')
    console.log(data)
    console.log(secondData)
})

custumEmitter.emit('response',"hello world",[1,2,3,4,5])
