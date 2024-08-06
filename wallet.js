let buyButtons = document.querySelectorAll('.buy');
let cartPopups = document.querySelectorAll('.cart-popup');
let cashOut = document.querySelector('.cashout');
let cashOutPopup = document.querySelector('.cashout-popup');

cashOut.addEventListener('click', (event) => {
    event.stopPropagation();
    cashOutPopup.classList.add('cart-popup-open');
});

buyButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        cartPopups[index].classList.add('cart-popup-open');
    });
});

window.addEventListener('click', (event) => {
    if (![...cartPopups, cashOutPopup].some(popup => popup.contains(event.target))) {
        cartPopups.forEach(popup => {
            popup.classList.remove('cart-popup-open');
        });
        cashOutPopup.classList.remove('cart-popup-open');
    }
});
