/**
 *  1. Nasted Function:
 * 
 *  2. CallBack Function:
 * 
 *  3. Recursion
 * 
 */

function hello() {
    console.log("Hello I am JS...");

    world(); // Nasted Function
}

function world() {
    console.log("Hello World...");
}

function greetings(name, callback) {
    console.log(`Hello, ${name}`);

    callback(); //CallBack Function
}

// Called
hello();
greetings("Jaynesh", world);