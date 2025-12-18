/**
 * Loop :
 * 
 *  i)  For...In 
 *  ii) For...Of
 */


let employee = {
    id: 78,
    name: "Keval Patel",
    email: "keval@gmail.com",
    salary: 78000,
    phone: "7896541234",
    address: "Surat"
}
console.log("For In with Object");
for (let key in employee) {
    console.log(key, " -> ", employee[key]);
}


const array = [10, 20, 30, "Hello", true];

console.log("For In with Array");
for (let index in array) {
    console.log(index, " => ", array.at(index));
}

console.log("For Of with Array");
for (let ele of array) {
    console.log(array.indexOf(ele), " => ", ele);
}

// for (let element of employee) {
//     console.log(element);
// }