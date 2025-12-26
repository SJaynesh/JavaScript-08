function createLiTag(city) {
    const li = document.createElement('li');

    li.innerText = city;

    document.querySelector('.city').appendChild(li);
}

createLiTag("Rajkot");
createLiTag("Baroda");
createLiTag("Navsari");


function createNewLiTag(city) {
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(city));

    document.querySelector('.city').appendChild(li);
}


createNewLiTag("Hello");
createNewLiTag("World");



const secondLi = document.querySelector("li:nth-child(2)");

console.log(secondLi);
secondLi.style.color = "red";
secondLi.outerHTML = "<li>Kuch Bhi</li>";

const lastLi = document.querySelector("li:last-child");

lastLi.remove();

