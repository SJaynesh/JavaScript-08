const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const qty = document.querySelector('#qty');

increment.addEventListener('click', () => {
    let num = Number(qty.innerText);

    num += 1;

    qty.innerText = num;

});

decrement.addEventListener('click', () => {
    let num = Number(qty.innerText);
    if (num > 1) {
        num -= 1;

        qty.innerText = num;
    } else {
        console.log("Product Remove");
    }
});