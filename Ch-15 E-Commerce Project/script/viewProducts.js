const allProducts = JSON.parse(localStorage.getItem('products') || "[]");
let addToCartProduct = JSON.parse(localStorage.getItem('addToCart') || "[]");

const row = document.getElementById('row');

viewAllProducts();

function viewAllProducts() {
    document.getElementById('cart').innerText = `Cart (${addToCartProduct.length})`;
    row.innerHTML = "";
    allProducts.forEach((product, index) => {
        const addedInCart = addToCartProduct.find((element) => element.p_id === product.p_id);
        row.innerHTML += ` <div class="col-4">
                        <div class="card m-2" style="width: 18rem;">
                            <img src="${product.p_image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${product.p_name}</h5>
                                <p class="card-text">${product.p_desc}</p>
                                <p class="card-text" style="color: green;">₹ ${product.p_price}</p>
                                <button class="btn ${(addedInCart) ? 'btn-danger' : 'btn-success'}" onclick="addToCart(${index})" }>${(addedInCart) ? "Remove Cart" : "Add To Cart"}</button>
                            </div>
                        </div>
                    </div>`;
    });
}

function addToCart(index) {
    const product = allProducts[index];

    const cartProduct = addToCartProduct.find((cartProduct) => cartProduct.p_id === product.p_id);

    if (cartProduct) {
        addToCartProduct = addToCartProduct.filter(element => element.p_id !== cartProduct.p_id);
    } else {
        addToCartProduct.push(product);
    }

    localStorage.setItem('addToCart', JSON.stringify(addToCartProduct));

    viewAllProducts();
}

