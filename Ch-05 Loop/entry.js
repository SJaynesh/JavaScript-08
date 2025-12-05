/*
    Reverse : num = 459
                Output : 954

    1. Number % 10 = Last Digit
        459 % 10 = 9
    2. Number / 10 = Last Digit remove
        459 / 10 = 45
*/

let num = +prompt("Enter any number : "); // 459

// console.log("Hello..");
// console.error("Error...")
// console.warn("Warning...");

// let per = 89.634578;

// console.log("Per : ", Math.floor(per)); // 89



// let res = 0;

// document.write(`<h2> Number : ${num} </h2>`);

// // 0 !== 0
// while (num !== 0) {
//     let rem = num % 10; // 4 % 10 = 4
//     res = res * 10 + rem; // 95 * 10 + 4 = 954
//     num = Math.floor(num / 10); // 4 / 10 = 0
// }

// document.write(`<h2> Reverse : ${res} </h2>`);

/*

    For Loop :
        syntax: 

        for(init; condition; updation) {
            statement
        }

        0 1 1 2 3 5....
*/

let a = 0, b = 1;

document.write(`${a} ${b} `);

for (let i = 2; i <= num; i++) {
    let c = a + b;// c = 5

    document.write(`${c} `);

    a = b; // a = 2
    b = c; // b = 3
}