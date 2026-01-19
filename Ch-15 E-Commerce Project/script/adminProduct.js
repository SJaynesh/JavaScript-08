let allProducts = JSON.parse(localStorage.getItem('products') || "[]");
let addToCartProducts = JSON.parse(localStorage.getItem('addToCart') || "[]");

let filterProducts = [...allProducts];

const tbody = document.getElementById('t-body');
document.getElementById('cart').innerText = `Cart (${addToCartProducts.length})`;

const searchProduct = document.getElementById('searchProduct');

searchProduct.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    let search = e.target.value.toLowerCase();

    filterProducts = allProducts.filter((product) => product.p_name.toLowerCase().includes(search));

    console.log(filterProducts);

    renderTable(filterProducts);

});

renderTable();

function renderTable(products = allProducts) {
    tbody.innerHTML = "";

    products.forEach((product, index) => {
        tbody.innerHTML += `<tr>
                        <th scope="row">${index + 1}</th>
                        <td>${product.p_name}</td>
                        <td>${product.p_price}</td>
                        <td>${product.p_stock}</td>
                        <td>
                           ${product.p_desc}
                        </td>
                        <td><img src=${product.p_image}
                                alt="" width="80"></td>
                        <td>
                            <button class="btn btn-warning" onclick="editProduct(${product.p_id})">Edit</button>
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="deleteProduct(${product.p_id})" >Delete</button>
                        </td>
                    </tr>`;
    });
}

function priceAsc() {
    filterProducts.sort((a, b) => Number(a.p_price) - Number(b.p_price));

    renderTable(filterProducts);
}

function priceDes() {
    filterProducts.sort((a, b) => Number(b.p_price) - Number(a.p_price));

    renderTable(filterProducts);
}
// Delete Product Logic
function deleteProduct(id) {
    // alert("Deleted..." + index);
    // allProducts.splice(index, 1);

    allProducts = allProducts.filter((product) => product.p_id !== id);

    localStorage.setItem('products', JSON.stringify(allProducts));

    renderTable();

    alert("Product deleted successfully...");

    // let array = ["10", "20", "30", "40", "50"];
    // let myIndex = "40";

    // // array = array.filter((element, index) => index !== myIndex);
    // array.splice(array.indexOf(myIndex), 1);

    // console.log(array);

}

// Edit Product
function editProduct(id) {
    localStorage.setItem("editId", id);
    window.location.href = "editProductPage.html";
}