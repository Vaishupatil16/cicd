const cart = [];

fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(p => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button>Buy</button>
      `;

      div.querySelector("button").onclick = () => {
        cart.push(p);
        updateCart();
      };

      container.appendChild(div);
    });
  });

function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
}

document.getElementById("checkout").onclick = () => {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cart)
  })
    .then(res => res.json())
    .then(data => {
      alert("Order placed successfully 🎉");
      cart.length = 0;
      updateCart();
    });
};
