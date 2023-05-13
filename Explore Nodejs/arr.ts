let numbers: number[] = [1, 2, 3];
let lastNumber :number=0;;
if(typeof(numbers.pop())=='number') lastNumber = numbers.pop();
console.log(typeof(lastNumber)); // 3
console.log(numbers); // [1, 2]