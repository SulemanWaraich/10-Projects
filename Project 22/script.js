const productsContainer = document.querySelector(".products");
const cartContainer = document.querySelector(".cart-items");
let cart = [];

const products = [
  { id: 1, name: "Product 1", price: 20 },
  { id: 2, name: "Product 2", price: 40 },
  { id: 3, name: "Product 3", price: 60 },
];

// Function to render products
function displayProducts() {
  productsContainer.innerHTML = ""; // Clear container
  products.forEach((item) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
          <img src="https://via.placeholder.com/150" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
          <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
    productsContainer.appendChild(productCard);
  });
}

// Function to add product to cart
function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity if already in cart
  } else {
    cart.push({ ...product, quantity: 1 }); // Add new item to cart
  }
  updateCart(); // Refresh the cart UI
}

// Function to remove product from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId); // Remove item
  updateCart(); // Refresh the cart UI
}

// Function to render cart items
function updateCart() {
  cartContainer.innerHTML = ""; // Clear cart container
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
          <h3>${item.name}</h3>
          <p>Quantity: ${item.quantity}</p>
          <p>$${item.price * item.quantity}</p>
          <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
    cartContainer.appendChild(cartItem);
  });
}

// Initialize by displaying products
displayProducts();
