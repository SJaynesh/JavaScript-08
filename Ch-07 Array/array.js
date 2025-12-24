/**
 * 
 * Array :
 *      An Collection of multiple values of the different datatypes.
 * 
 *  Syntax : let arrayName = [elements];
 * 
 * 
 * Array Function:
 * 
 * 1. push()    :  array.push(element); => add new element last position
 * 2. pop()     :  array.pop(); => remove last element
 * 3. unshift() :  array.unshift(element); => add new element first position
 * 4. shift()   :  array.shift(); => remove first element
 * 5. includes() :  array.includes(element);
 * 6. indexOf() :  array.indexOf(element);
 * 7. Slice()   : array.slice(start, end)
 * 8. Splice()  : array.splice(start, end)
 * 9. at()      :
 * 10. concat() :
 */

let list = [10, 20, 30, 40, 50, "Hello", 50, false, [1, 2, 3], 3.14, 56.12];
//          0   1   2   3   4    5        6      7         8   9     10



// console.log("Array Length is ", list.length);

// const sliceArray = list.slice(1, 4);

// console.log(sliceArray);
// console.log(list);

// const spliceArray = list.splice(1, 4);
// console.log(spliceArray);
// console.log(list);

// console.log(list.at(8));




// for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
// }

// list.push(100);
// console.log("Push : ", list);

// list.pop();
// console.log("Pop : ", list);

// list.unshift(89);

// list.shift();
// console.log("Shift : ", list);

// console.log("Include : ", list.includes(3.14));

// console.log("Index of : ", list.indexOf(50)); // 4



// let ages = [25, 32, 14, 78, 26];
// let myArray = [10, 20, 30, 40, 50, ...ages, ...list];

// myArray = myArray.concat(ages, list);

// console.log(myArray);

// let myArray = [10, 20, 30, 40, 50];
// let array = [...myArray];

// array.push(69);

// console.log(array);
// console.log(myArray);

// let array = new Array(10, 20, 30, 40, 50);

// console.log(array);

// let array = [10, 20, 30, [40, 50, 60], 70, 80, [90, [1, 2, 3]]];

// const myArray = array.flat(Infinity);

// console.log(myArray);

let myArray = [];
let myAges = "25,34";

console.log(Array.isArray(myAges)); // false

const myNameArray = Array.from("Jaynesh");

console.log(myNameArray);// ['j' , 'a', ]

