// const parent = document.querySelector('.parent');

// console.log(parent.childNodes);
// console.log(parent.children);

// parent.children[1].style.color = 'green';

// const allChild = Array.from(parent.children);

// console.log(allChild);

// allChild.forEach((child) => {
//     child.style.color = 'green';
// });

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const firstChild = document.querySelector('.num');

// console.log(firstChild);
// console.log(firstChild.nextSibling.nextSibling);

const myDiv = document.createElement('div');

console.log(myDiv);

myDiv.className = "first"
myDiv.id = "first1"

myDiv.innerText = "Hello JavaScript";
myDiv.style.color = 'brown';
myDiv.style.backgroundColor = '#94cfdbff';
myDiv.style.padding = '15px';

document.body.appendChild(myDiv);