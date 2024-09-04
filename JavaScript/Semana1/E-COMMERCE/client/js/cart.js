const modalContainer = document.getElementById("modal-overlay");
const modalOverlay = document.getElementById("modal-container");
const cartBtn = document.getElementById("cart-btn");

const displayCart = () => {
    modalContainer.innerHTML = ""; // Limpia el html.
    // Se aplican estos estilos al display cuando se de click en el boton del carrito.
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";

    // Modal header.
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌"; // Simbolo que tendra el modalClose.
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

    //Modal body
    cartBtn.forEach((product) => {
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.innerHTML = `
        <div class = "product">
            <img class="product-img" src="${product.img}" />
            <div class="product-info">
                <h4>${product.productName}</h4>
            <div class="quantity">
            <span class="quantity-btn-decrese">-</span>
            <span class="quantity-input">${product.quanty}</span>
            <span class="quantity-btn-increse">+</span>
                </div>
                <div class="price">${product.price * product.quanty}</div>
                <div class="delete-product">❌</div>
        </div>         
        `;
        modalContainer.append(modalBody);
    });
};

cartBtn = document.addEventListener("click", displayCart);