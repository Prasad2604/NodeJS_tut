const EventEmitter = require('events');

const customEvent = new EventEmitter();

customEvent.on('response',(name,age)=>{
    console.log(`data recevied user, name :- ${name} and age :- ${age}`);
})

customEvent.on('response',()=>{
    console.log(`Some other Logic`);
})

customEvent.emit('response','john',18);