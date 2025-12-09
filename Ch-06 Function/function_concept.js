/**
 *  1. Nasted Function:
 * 
 *  2. CallBack Function:
 * 
 *  3. Recursion : It Self Called
 * 
 *  4. Anonymous Function / Arrow Function / Lamda Function : 
 * 
 *      => Fat Arrow : return 
 *      
 *      Syntax :
 *          const variableName = (parameters) => {
 *              // Statement
 *              // return value/element;
 *          };
 * 
 */

const printData = () => {
    console.log("This is Anonymous function....");
}

// Lamda Function
const division = (num1, num2) => num1 / num2;

printData();
console.log(division(40, 10));


// function myFun(start, end) {
//     if (start > end) { // 11 > 10
//         return;
//     }
//     console.log("Hello ", start);
//     start++;

//     myFun(start, end);
// }

// function findFact(num) {
//     if (num <= 1) { // 5 <= 1
//         return 1;
//     } else {
//         return num * findFact(num - 1);
//         // return 120
//     }
// }

// myFun(1, 20);
// console.log("Factorial : ", findFact(10));




// function hello() {
//     console.log("Hello I am JS...");

//     world(); // Nasted Function
// }

// function world() {
//     console.log("Hello World...");
// }

// function greetings(name, callback) {
//     console.log(`Hello, ${name}`);

//     callback(); //CallBack Function
// }

// // Called
// hello();
// greetings("Jaynesh", world);