// ui.js — FULL FILE

import { API } from "./api.js";
import { addToCart } from "./cart.js";

export function loadComponent(id, file) {
  fetch(`/components/${file}`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("sidebar", "sidebar.html");
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");
});

// Render product cards
export async function renderProducts() {
  const container = document.querySelector(".product-grid");
  if (!container) return;

  const products = await API.getProducts();

  container.innerHTML = products
    .map(
      p => `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button class="btn" onclick='addToCart(${JSON.stringify(p)})'>
          Add to Cart
        </button>
      </div>
    `
    )
    .join("");