let allProducts = JSON.parse(localStorage.getItem('products') || "[]");

const tbody = document.getElementById('t-body');

renderTable();

function renderTable() {
    tbody.innerHTML = "";

    allProducts.forEach((product, index) => {
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
                            <button class="btn btn-warning" onclick="editProduct(${index})">Edit</button>
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="deleteProduct(${index})" >Delete</button>
                        </td>
                    </tr>`;
    });
}

// Delete Product Logic
function deleteProduct(index) {
    alert("Deleted..." + index);
    allProducts.splice(index, 1);

    localStorage.setItem('products', JSON.stringify(allProducts));

    renderTable();

    // let array = ["10", "20", "30", "40", "50"];
    // let myIndex = "40";

    // // array = array.filter((element, index) => index !== myIndex);
    // array.splice(array.indexOf(myIndex), 1);

    // console.log(array);

}

// Edit Product
function editProduct(index) {
    localStorage.setItem("editIndex", index);
    window.location.href = "editProductPage.html";
}