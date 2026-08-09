// cart.js — FULL FILE

const CART_KEY = "brineAIC_cart";

export function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

export function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

export function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  renderCart();
}

export function renderCart() {
  const cartItems = document.getElementById("cart-items");
  if (!cartItems) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item, i) => `
      <div class="cart-item">
        <img src="${item.img}" class="cart-img">
        <div>
          <h4>${item.name}</h4>
          <p>$${item.price}</p>
        </div>
        <button onclick="removeFromCart(${i})" class="btn">Remove</button>
      </div>
    `
    )
    .join("");
}
