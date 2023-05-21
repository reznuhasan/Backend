const EventMod=require('events');
const event=new EventMod();

event.on('sayMyName',(statusCode,name)=>{
    console.log(`${statusCode},My name is ${name}`)
})


event.emit('sayMyName',200,'Rizwan')