let titles = document.querySelectorAll('h3');

console.log(titles);
// console.log(titles[0]);


titles = Array.from(titles);

console.log(titles);

titles.forEach((tag) => {
    console.log(tag.innerText);
    tag.style.color = 'red';
});
