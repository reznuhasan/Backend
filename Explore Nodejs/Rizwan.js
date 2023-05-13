const EventEmitter=require('events');
class Rizwan extends EventEmitter{
    startPeriod(){
        console.log('Hey I am Rizwan')
        this.emit('Rizwan','in every where')
    }
}

module.exports=Rizwan;
