console.log("Hello Function...");

/**
 * Function : Re-Useble block of code. Sepecific Task
 *
 * Type of Function:
 *  1. Pre-Defined /  Built-In Function:
 *          - Already created.
 *          - log(), error(), warn(), prompt(), Number(), String(), parseInt(), parseFlot(), Math.Floor(), etc
 *  2. User Defined Function (UDF):
 *          - Your self created function.
 *
 *
 *      Type of UDF:
 *
 *      1. TNRN (Take Nothing and Return Nothing) :
 *
*          Syntax :
*              function functionName() {
*                  // statements
*               }
 *
 *      2. TSRN (Take Something and Return Nothing) :
 * 
 *          Syntax :
 *              function functionName(parameters) {
 *                  // Statement
 *              }
 *                  
 *      3. TNRS (Take Nothing and Return Something) :
 *          
 *           Syntax :
 *              function functionName() {
 *                  return value/variable;
 *              }
 *      4. TSRS (Take Something and Return Something) :
 * 
 *          Syntax : 
 *              function functionName(parameters) {
 *                  return value / variable;
 *              }
 */


// TNRN
function printMultipleLog() {
    console.log("Hello 1");
    console.log("Hello 2");
    console.log("Hello 3");
    console.log("Hello 4");
    console.log("Hello 5");
}


// TSRN
function loginWithEmailAndPassword(email, password) {
    if (!email || !password) {
        alert("Please enter your email & password.");
        return;
    }

    console.log("Email : ", email);
    console.log("Password : ", password);
}

// TNRS
function addition() {
    let a = +prompt("Enter first number : ");
    let b = +prompt("Enter second number : ");

    return a + b;
    console.log(a + b);
}

// TSRS
function square(num) {
    return num * num;
}




// Called
printMultipleLog();
loginWithEmailAndPassword("abc@gmail.com", "Abc@1234"); // argument Pass
console.log("Addition : ", addition());
console.log(`Square : ${square(120)}`);







// let a = "10";

// let b = Number(a);

// console.log(typeof a); // String
// console.log(typeof b); // Number

// let ans = 789;
// let str = String(ans);

// console.log(typeof ans, ans); // Number
// console.log(typeof str, str); // String

