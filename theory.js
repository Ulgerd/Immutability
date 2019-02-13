// part 1;
								 // alternative version:
var add = (x, y) => x + y;       // = x => y => x + y;
var subtract = (x, y) => x - y;  // = x => y => x - y;
var multiply = (x, y) => x * y;  // = x => y => x * y;
var divide = (x, y) => x / y;    // = x => y => x / y;

console.log(add(2,3));           // console.log(add(2)(3));        
console.log(subtract(10,4));     // console.log(subtract(10)(4));  
console.log(multiply(4,5));      // console.log(multiply(4)(5));   
console.log(divide(63,7));       // console.log(divide(63)(7))     

console.log(add(multiply(2,2), 2)); // 6
console.log(multiply(add(2,2), 2)); // 8

// part 2; 

1. Functions are first class objects, operators are not;
2. Functions can accept unlimited number of parameters;
3. Data for functions is transferred differently;
4. Operators cannot be used as a parameter of another function;
5. New operators cannot be created;
 