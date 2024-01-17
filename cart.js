// Get the "Add to Cart" button
const addToCartButton = document.getElementById("add-to-cart");

// Get the cart items list and total
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Get the delivery status elements
const deliveryStatusCircles = document.querySelectorAll(".delivery-status-circle");
const deliveryStatusLines = document.querySelectorAll(".delivery-status-line");

// Initialize the cart array
let cart = [];

// Add event listener to the "Add to Cart" button
addToCartButton.addEventListener("click", () => {
  // Simulate fetching product details from a server
  const product = {
    name: "iPhone 10",
    price: 599.99
  };

  // Add the product to the cart
  cart.push(product);

  // Update the cart items list
  updateCart();

  // Update the cart total
  updateCartTotal();

  // Update the delivery status
  updateDeliveryStatus();
});

// Function to update the cart items list
function updateCart() {
  cartItemsList.innerHTML = "";
  cart.forEach((product, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;

    // Add a remove button to each item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      cart.splice(index, 1);
      updateCart();
      updateCartTotal();
      updateDeliveryStatus();
    });

    listItem.appendChild(removeButton);
    cartItemsList.appendChild(listItem);
  });
}

// Function to update the cart total
function updateCartTotal() {
  const total = cart.reduce((acc, product) => acc + product.price, 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Function to update the delivery status
function updateDeliveryStatus() {
  // Calculate the delivery progress based on the number of items in the cart
  const deliveryProgress = Math.min(cart.length / 3, 1);

  // Update the delivery status circles and lines
  for (let i = 0; i < deliveryStatusCircles.length; i++) {
    if (i < deliveryProgress * 3) {
      deliveryStatusCircles[i].style.backgroundColor = "#4CAF50";
    } else {
      deliveryStatusCircles[i].style.backgroundColor = "#ddd";
    }
  }

  for (let i = 0; i < deliveryStatusLines.length; i++) {
    if (i < deliveryProgress * 2) {
      deliveryStatusLines[i].style.backgroundColor = "#4CAF50";
    } else {
      deliveryStatusLines[i].style.backgroundColor = "#ddd";
    }
  }
}
// Function to update the delivery status
function updateDeliveryStatus() {
  // Calculate the delivery progress based on the number of items in the cart
  const deliveryProgress = Math.min(cart.length / 3, 1);

  // Update the delivery status circles and lines with animations
  for (let i = 0; i < deliveryStatusCircles.length; i++) {
    if (i < deliveryProgress * 3) {
      deliveryStatusCircles[i].style.backgroundColor = "#4CAF50";
      deliveryStatusCircles[i].style.transform = "scale(1.2)"; // Add scale transform
    } else {
      deliveryStatusCircles[i].style.backgroundColor = "#ddd";
      deliveryStatusCircles[i].style.transform = "scale(1)"; // Reset scale transform
    }
  }

  for (let i = 0; i < deliveryStatusLines.length; i++) {
    if (i < deliveryProgress * 2) {
      deliveryStatusLines[i].style.backgroundColor = "#4CAF50";
      deliveryStatusLines[i].style.width = "100%"; // Increase width
    } else {
      deliveryStatusLines[i].style.backgroundColor = "#ddd";
      deliveryStatusLines[i].style.width = "50%"; // Reset width
    }
  }
}
// Add this JavaScript code after the body tag

const productImages = document.querySelectorAll('.product-image');
const productDetails = document.querySelector('.product-details');

const products = [
  { name: 'Product 1', description: 'Description for Product 1' },
  { name: 'Product 2', description: 'Description for Product 2' },
  // Add more product details as needed
];

productImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    displayProductDetails(products[index]);
  });
});

function displayProductDetails(product) {
  productDetails.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.description}</p>
  `;
}