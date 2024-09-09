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

        const decrese = modalBody.querySelector(".quantity-btn-decrese");
        decrese.addEventListener( "click", () =>{
        if (product.quanty == 1);{
        product.quanty--;
        displayCart();
        }
        });

        const increse = modalBody.querySelector(".quantity-btn-increse");
        increse.addEventListener("click", () =>{
            product. quanty++;
        });
      //delete
      const deleteProduct = modalBody.querySelector(".delete-product");

      deleteProduct.addEventListener("click", () => {
        deleteCartProduct(product.id);
      });
    });
        // Modal footer
        const total = cart.reduce((acc, el) => acc + el.price * el.quanty , 0);  

        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        modalFooter.innerHTML = `
        <div class="total-price">Total: ${total} </div>
        `;
        modalContainer.append(modalFooter);
};

cartBtn = document.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
  const foundId = cart.findIndex((element)=> element.id === id);
  console.log(foundId);
};
