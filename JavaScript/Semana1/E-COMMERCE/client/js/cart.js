const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");
const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
    modalContainer.innerHTML = ""; 
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    });

    modalHeader.append(modalClose);

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    if(cart.length > 0) {
        let modalBody = document.createElement("div");
        modalBody.className = "modal-body";

        cart.forEach((product) => { 
            const productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML = `
                <img class="product-img" src="${product.img}" />
                <div class="product-info">
                    <h4>${product.productName}</h4>
                    <div class="quantity">
                        <span class="quantity-btn-decrease" data-id="${product.id}">-</span>
                        <span class="quantity-input">${product.quanty}</span>
                        <span class="quantity-btn-increase" data-id="${product.id}">+</span>
                    </div>
                    <div class="price">${product.price * product.quanty}</div>
                </div>
                <div class="delete-product" data-id="${product.id}">❌</div>
            `;
            modalBody.append(productDiv);
        });

        modalContainer.append(modalBody);

        const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);  

        const modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        modalFooter.innerHTML = `
            <div class="total-price">Total: ${total}</div>
            <button id="checkout-btn">PAGAR CON MP ⬇</button>
            <div id="wallet_container"></div>
        `;
        modalContainer.append(modalFooter);

        document.getElementById("checkout-btn").addEventListener("click", async () => {
            try {
                if (cart.length === 0) {
                    alert("No hay productos en el carrito");
                    return;
                }

                const product = cart[0];
                const orderData = {
                    id: product.id,
                    productName: product.productName,
                    price: product.price,
                    quanty: product.quanty,
                };

                const response = await fetch("http://localhost:8080/create_preference", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(orderData),
                });

                const preference = await response.json();
                createCheckoutButton(preference.id);
            } catch (error) {
                console.error("Error al procesar el pago: ", error);
                alert("Error al procesar el pago");
            }
        });

        const createCheckoutButton = (preferenceId) => {
            const bricksBuilder = mp.bricks();
            const renderComponent = async () => {
                if (window.CheckoutButton) window.CheckoutButton.unmount();

                await bricksBuilder.create("wallet", "wallet_container", {
                    initialization: {
                        preferenceId: preferenceId,
                    },
                    customization: {
                        texts: {
                            valueProp: 'smart_option',
                        },
                    },
                });
            };

            renderComponent();
        };

        // Event listeners for quantity buttons and delete buttons
        document.querySelectorAll(".quantity-btn-increase").forEach(button => {
            button.addEventListener("click", (e) => {
                const id = e.target.getAttribute("data-id");
                const product = cart.find(product => product.id === id);
                product.quanty++;
                displayCart();
                displayCartCounter();
            });
        });

        document.querySelectorAll(".quantity-btn-decrease").forEach(button => {
            button.addEventListener("click", (e) => {
                const id = e.target.getAttribute("data-id");
                const product = cart.find(product => product.id === id);
                if (product.quanty > 1) {
                    product.quanty--;
                } else {
                    deleteCartProduct(id);
                }
                displayCart();
                displayCartCounter();
            });
        });

        document.querySelectorAll(".delete-product").forEach(button => {
            button.addEventListener("click", (e) => {
                const id = e.target.getAttribute("data-id");
                deleteCartProduct(id);
            });
        });

    } else {
        const modalText = document.createElement("h2");
        modalText.className = "modal-body";
        modalText.innerText = "Your cart is empty";
        modalContainer.append(modalText);
    }
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((element) => element.id === id);
    cart.splice(foundId, 1);
    displayCart();
    displayCartCounter();
};

const displayCartCounter = () => {   
    const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);
    if(cartLength > 0){
        cartCounter.style.display = "block";
        cartCounter.innerText = cartLength;     
    } else {
        cartCounter.style.display = "none";
    }
};

const shopContent = document.getElementById("shopContent");
const cart = []; // Carrito vacío
const mp = new MercadoPago("APP_USR-52c884a9-eb8e-4e46-a5af-af01a8950093", {
  locale: "es-AR",
});

productos.forEach((product) => {
  const content = document.createElement("div");
  content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.productName}</h3>
    <p style="color:red;font-weight:bolder;">$${product.price}</p>
  `;
  shopContent.append(content);

  const buyButton = document.createElement("button");
  buyButton.innerText = "Comprar";

  content.append(buyButton);

  buyButton.addEventListener("click", () => {
    const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
      cart.map((prod) => {
        if (prod.id === product.id) {
          prod.quanty++;
          displayCartCounter();
        }
      });
    } else {
      cart.push({
        id: product.id,
        productName: product.productName,
        price: product.price,
        quanty: 1, 
        img: product.img,
      });
      displayCartCounter();
    }
  });
});