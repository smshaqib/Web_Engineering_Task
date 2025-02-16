const cart = [];

// Function to add items to the cart
function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCartUI();
}


// Update cart display
function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  // Clear existing items in the cart modal
  cartItems.innerHTML = '';
  
  // Add cart items to the modal
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.productName} - $${item.price}`;
    cartItems.appendChild(li);
    total += parseFloat(item.price);
  });
  
  // Update total price and cart count
  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;

  // Store the total in localStorage
  localStorage.setItem('totalPrice', total.toFixed(2));
}



// Get the total price from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const checkoutTotal = localStorage.getItem('totalPrice');
  if (checkoutTotal) {
      document.getElementById('checkout-total').textContent = checkoutTotal;
  }
});



// Event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    const price = button.getAttribute('data-price');
    addToCart(productName, price);
  });
});
