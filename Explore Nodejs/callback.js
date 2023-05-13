function display(some){
    console.log(some)
}

function calculator(a,b,callback){
    let sum=a+b;
    if(callback) callback(sum)
    return sum;
}

calculator(4,5,display);
const result=calculator(49,23)
console.log(result)