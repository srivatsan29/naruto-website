// Simple cart counter functionality
const cartCount = document.getElementById('cart-count');
document.querySelectorAll('.product .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    let count = parseInt(cartCount.textContent);
    cartCount.textContent = count + 1;
  });
});
