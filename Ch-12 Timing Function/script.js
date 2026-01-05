

// window.onload = function () {
//     console.log("Website on loaded...");
// }

// setTimeout(() => {
//     console.log("Hello Timing Function...");
// }, 2000);

// for (let i = 1; i <= 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000 * i);
// }

setTimeout(() => {
    document.getElementById('myModel').style.display = 'block';
}, 2000);

document.getElementById('closeModel').addEventListener('click', () => {
    document.getElementById('myModel').style.display = 'none';
});

// let count = 1;

// setInterval(() => {
//     console.log(count);
//     count++;
// }, 1000);'

