let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    const productName = product.querySelector('h3').textContent;
    const productPriceText = product.querySelector('.price').textContent;
    const productPrice = parseFloat(productPriceText.replace(/[^\d.]/g, ''));

    cart.push({ name: productName, price: productPrice });

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to your cart.`);
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(cartItem);
    });

    const cartTotal = cart.reduce((total, item) => total + item.price, 0);
    cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.querySelector('.products');
    if (productsContainer) {
        productsContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('add-to-cart')) {
                const productArticle = event.target.closest('.product');
                addToCart(productArticle);
            }
        });
    }

    updateCart();
});
