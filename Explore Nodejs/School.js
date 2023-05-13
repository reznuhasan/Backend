const EventEmitter=require('events')

class School extends EventEmitter{
    startPeriod(){
        console.log('class is start');

        this.emit('bellRing',{
            classNo:6,
            period:2
        })
    }
}

module.exports=School;