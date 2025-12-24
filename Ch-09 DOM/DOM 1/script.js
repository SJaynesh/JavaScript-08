const title = document.getElementById('title');

console.log(title);

console.log("ID : ", title.id);
console.log("Class : ", title.className);

console.log("Get Attribute : ", title.getAttribute('class'));

// title.className = `${title.className} myTitle`;
title.setAttribute('class', `${title.className} myTitle`);

title.style.backgroundColor = "#8698c5ff";
title.style.padding = "10px";
title.style.borderRadius = "15px";
title.style.color = "#FFF"


console.log(title.textContent);
console.log(title.innerText);
console.log(title.innerHTML);

// title.textContent = "Document Object Model";
// title.innerText = "ABC";
// title.innerHTML = "<h3>Jay Ho</h3>";

console.log(title.attributes[0]);




