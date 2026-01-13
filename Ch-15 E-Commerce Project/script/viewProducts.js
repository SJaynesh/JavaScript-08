const allProducts = JSON.parse(localStorage.getItem('products') || "[]");

const row = document.getElementById('row');

row.innerHTML = "";

allProducts.forEach((product) => {

    row.innerHTML += ` <div class="col-4">
                        <div class="card m-2" style="width: 18rem;">
                            <img src="${product.p_image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${product.p_name}</h5>
                                <p class="card-text">${product.p_desc}</p>
                                <p class="card-text" style="color: green;">₹ ${product.p_price}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>`;
});