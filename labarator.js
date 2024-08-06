let buyButtons = document.querySelectorAll('.connect');
let cartPopups = document.querySelectorAll('.cart-popup');

buyButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        cartPopups[index].classList.add('cart-popup-open');
    });
});

window.addEventListener('click', (event) => {
    if (![...cartPopups].some(popup => popup.contains(event.target))) {
        cartPopups.forEach(popup => {
            popup.classList.remove('cart-popup-open');
        });
    }
});
