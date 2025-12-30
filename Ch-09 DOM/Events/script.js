console.log("Events");

const submitBtn = document.getElementById('btn_submit');

// submitBtn.onclick = function () {
//     alert("BTN is second time Clickedd");
// }

// Mouse Event
submitBtn.addEventListener('click', function (e) {
    console.log(e.type);
    alert("BTN is second time Clickedd");
});

document.getElementById('btn_dbl').addEventListener('dblclick', () => {
    alert("Double click btn");
});

const box = document.querySelector('.box');

box.addEventListener('mousedown', () => {
    box.style.backgroundColor = 'red';
});

box.addEventListener('mouseup', () => {
    box.style.backgroundColor = 'orange';
});

box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'brown';
});

box.addEventListener('mouseout', (e) => {
    box.style.backgroundColor = 'pink';
    console.log(e.clientX);
    console.log(e.clientY);

    box.style.height = '200px';
    box.style.width = '200px';
});

box.addEventListener('mousemove', () => {
    box.style.height = '250px';
    box.style.width = '250px';
});
