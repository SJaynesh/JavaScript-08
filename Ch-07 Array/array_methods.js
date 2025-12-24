let myArray = new Array(10, 20, 30, 40, 3.14, 45.63);

// [ud, ud, ud, 40, ud, 45]

// ForEach() Method:

// myArray.forEach((element, index) => {
//     // console.log(`${index} => ${element}`); // 0 => 10 => [10, 20, 30, 40, 3.14, 45.63, "Jaynesh", "Sarkar", true]
//     console.log(element * 10 + index);
// });

// Map() Method :
// const finalArray = myArray.map((element, index, array) => {
//     if (element >= 30) {
//         return element * 2;
//     } else {
//         return element
//     }
// });

// console.log(finalArray);

// Find() Method :
// const findValue = myArray.find((element) => element === 40);

// console.log(findValue); // 40

// Filter() Method :
const filterArray = myArray.filter((element, index) => {
    if (element > 30) {
        return element;
    }
});

console.log(filterArray);// [40,45]


