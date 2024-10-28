import "./style.scss";
import Products from "./data.json";

const dataContainer = document.querySelector(".data-container");

if (dataContainer) {
  Products.forEach(({ image, name, category, price, cart }) => {
    dataContainer.innerHTML += `
      <div class="product">
        <img src="${image.desktop}" alt="${category}" class="product-image">
        <div class="product-info">
        <div class:"product-info"><button class="add-to-cart">
            <img src="${cart}" alt="Add to Cart Icon" class="cart-icon"> Add to Cart
          </button>
          <p class="product-category">${category}</p>
          <h4 class="product-name">${name}</h4>
          <p class="product-price">$${price}</p></div>
        </div>
      </div>
    `;
  });
}
