let allProducts = JSON.parse(localStorage.getItem('products') || "[]");
let editIndex = Number(localStorage.getItem('editIndex'));

const product = allProducts[editIndex];

console.log(product);

const p_name = document.getElementById('p_name');
const p_price = document.getElementById('p_price');
const p_stock = document.getElementById('p_stock');
const p_image = document.getElementById('p_image');
const p_desc = document.getElementById('p_desc');


p_name.value = product.p_name;
p_price.value = product.p_price;
p_stock.value = product.p_stock;
p_image.value = product.p_image;
p_desc.value = product.p_desc;
