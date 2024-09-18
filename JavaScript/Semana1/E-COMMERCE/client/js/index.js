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