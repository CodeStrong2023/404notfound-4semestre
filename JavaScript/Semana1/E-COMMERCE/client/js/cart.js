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
}

cartBtn = document.addEventListener("click", displayCart);