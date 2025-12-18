console.log("Object");

/**
 * 
 * Syntax:
 * 
 * let object = {
 *  key1 : value1,
 *  key2 : value2
 * 
 *  keyN: valueN
 * }
 */


// Array
let myUser = [101, "Raj", "raj@gmail.com", "Raj@123", "Male", 45000.12, false];
// => index : 0     1      2                3          4      5         6

// Object
let user = {
    id: 101,
    name: "Raj",
    email: "raj@gmail.com",
    password: "Raj@123",
    gender: "Male",
    salary: 45000.12,
    isMarried: false,
    profile_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8SwpesEPeO-sFWwjDsJXqtzz-uoxfCczrQ&s",
    leave: ["13/12/2025", "25/12/2025", "26/12/2025"],
    backDetails: {
        bank_name: "BOB",
        account_no: 2021476521621,
        account_type: "Salary AC",
        IFSC_CODE: "BOB20356",
    },
    hobby: null,
};

user.name = "Raj Patel";

user.joinDate = "12/12/2025";

console.log(user);
// console.log(user.abc);

console.log(user.name);
console.log(user['name']);

// console.log(user['salary']);
// console.log(user['backDetails']['bank_name']);
// console.log(user['leave'][0]);
// console.log(user['leave'][1]);
// console.log(user['leave'][2]);

// user.hobby = "Reading";
