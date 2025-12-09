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
 * 5. include() :
 * 6. indexOf() :
 * 7. Slice()   :
 * 8. Splice()  :
 */

let list = [10, 20, 30, 40, 50, "Hello", false, [1, 2, 3], 56.12];
//          0   1   2   3   4    5        6      7         8 

console.log("Array Length is ", list.length);

// for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
// }

list.push(100);
list.
    // console.log("Push : ", list);

    list.pop();
// console.log("Pop : ", list);

list.unshift(89);

list.shift();
console.log("Shift : ", list);






