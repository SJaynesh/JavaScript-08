const allProducts = JSON.parse(localStorage.getItem('products') || "[]");

const tbody = document.getElementById('t-body');

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
                            <button class="btn btn-warning">Edit</button>
                        </td>
                        <td>
                            <button class="btn btn-danger">Delete</button>
                        </td>
                    </tr>`;
});