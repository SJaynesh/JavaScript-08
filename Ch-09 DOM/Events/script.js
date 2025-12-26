console.log("Events");

const submitBtn = document.getElementById('btn_submit');

// submitBtn.onclick = function () {
//     alert("BTN is second time Clickedd");
// }

submitBtn.addEventListener('click', function (event) {
    console.log(event);
    alert("BTN is second time Clickedd");
});
