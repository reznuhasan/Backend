const MyClass=require('./School');
const school=new MyClass;

school.on('bellRing',function({classNo,period}){
    console.log(`${classNo} class is finish period ${period}`);
})

school.startPeriod();