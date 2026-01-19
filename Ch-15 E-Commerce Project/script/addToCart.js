let addToCartProducts = JSON.parse(localStorage.getItem("addToCart") || "[]");

console.log(addToCartProducts);

const tBody = document.getElementById('t-body');
const tFoot = document.getElementById('t-foot');

document.getElementById('cart').innerText = `Cart (${addToCartProducts.length})`;

let price = 0;

randerAddToCartProducts();

function randerAddToCartProducts() {
    tBody.innerHTML = "";
    price = 0;

    addToCartProducts.forEach((product, index) => {
        price += Number(product.p_price);
        tBody.innerHTML += `<tr> 
            <td>${index + 1}</td>
            <td>${product.p_name}</td>
            <td>${product.p_price}</td>
            <td> <img src= "${product.p_image}" width="80" /></td>
            <td> <button class="btn btn-danger" onClick="deleteProduct(${product.p_id})"> Delete </button> </td>
        </tr>`;
    });

    console.log("Price :", price);
    let totalPrice = ((price * 5) / 100) + price;

    tFoot.innerHTML = ` <tr>
                                    <th scope="col" colspan="2">Price</th>
                                    <td scope="col">${price}</td>
                                </tr>

                                <tr>
                                    <th scope="col" colspan="2">GST</th>
                                    <td scope="col">5 %</td>
                                </tr>

                                <tr>
                                    <th scope="col" colspan="2">Total Price</th>
                                    <td scope="col">${totalPrice}</td>
                                </tr>`;

}

function deleteProduct(id) {
    addToCartProducts = addToCartProducts.filter((product) => product.p_id !== id);

    localStorage.setItem('addToCart', JSON.stringify(addToCartProducts));

    randerAddToCartProducts();
}