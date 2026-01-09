/*
1. Fetch Data:
    localStorage.getItem(key);   to return value

2. Insert / Add Data :
    localStorage.setItem(key, value);

3. Delete :
    localStorage.removeItem(key);
 */

localStorage.setItem('name', 'Jaynesh Sarkar');
localStorage.setItem('age', 21);

const myName = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(myName);
console.log(age);

localStorage.setItem('name', "Jenish");

localStorage.removeItem('name');

localStorage.clear();
