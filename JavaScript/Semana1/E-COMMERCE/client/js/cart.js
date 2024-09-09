const modalContainer = document.getElementById("modal-overlay");
const modalOverlay = document.getElementById("modal-container");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
    modalContainer.innerHTML = ""; // Limpia el html.
    // Se aplican estos estilos al display cuando se da clic en el botón del carrito.
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";

    // Modal header.
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌"; // Símbolo que tendrá el modalClose.
    modalClose.className = "modal-close"; // Nombre de la clase para el modalClose.

    // Volvemos a dejar el display del modalContainer y el modalOverlay en none al cerrar el modal.
    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    });

    modalHeader.append(modalClose); // Agregamos el modalClose al modalHeader.

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    // Modal body
    if(cart.length > 0){

    
    cart.forEach((product) => { 
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <div class="product">
            <img class="product-img" src="${product.img}" />
            <div class="product-info">
                <h4>${product.productName}</h4>
                <div class="quantity">
                    <span class="quantity-btn-decrease">-</span> <!-- Corrección del error tipográfico -->
                    <span class="quantity-input">${product.quanty}</span>
                    <span class="quantity-btn-increase">+</span> <!-- Corrección del error tipográfico -->
                </div>
                <div class="price">${product.price * product.quanty}</div>
                <div class="delete-product">❌</div>
            </div>         
        </div>
        `;
        modalContainer.append(modalBody);

        const decrease = modalBody.querySelector(".quantity-btn-decrease");
        decrease.addEventListener("click", () => {
            if (product.quanty > 1) { 
                product.quanty--;
                displayCart();
            }
            displayCartCounter();
        });

        const increase = modalBody.querySelector(".quantity-btn-increase");
        increase.addEventListener("click", () => {
            product.quanty++;
            displayCart();
            displayCartCounter();
        });

        // Delete
        const deleteProduct = modalBody.querySelector(".delete-product");
        deleteProduct.addEventListener("click", () => {
            deleteCartProduct(product.id);
        });
    });

    // Modal footer
    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);  

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
        <div class="total-price">Total: ${total}</div> 
    `;
    modalContainer.append(modalFooter);
}else{
    const modalText = document.createElement("h2");
    modalText.className = "modal-body";
    modalText.innerText = "you cart is empty";
    modalContainer.append(modalText);
}
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((element) => element.id === id);
    cart.splice(foundId,1);
    displayCart();
    displayCartCounter();
};

const displayCartCounter =() => {   
    const cartLenght = cart.reduce((acc, el) => acc + el.quanty, 0);
    if(cartLenght > 0){
        cartCounter.style.display = "block";
        cartCounter.innerText = cartLenght;     
    }else{
        cartCounter.style.display = "none";
    }

}
