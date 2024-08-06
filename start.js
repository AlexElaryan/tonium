let prev = document.querySelectorAll('.prev');
let next = document.querySelectorAll('.next');
let startBlock = document.querySelectorAll('.start-block');
let startHomePage = document.querySelectorAll('.startHomePage');

let arrIsOpen = 0;

function showStart(i) {
    startBlock.forEach(el => {
        el.classList.remove('start-active');
    });
    startBlock[i].classList.add('start-active');
}

prev.forEach(el => {
    el.onclick = () => {
        if (arrIsOpen > 0) {
            arrIsOpen--;
            showStart(arrIsOpen);
        }
    };
})


next.forEach(el => {
    el.onclick = () => {
        if (arrIsOpen < startBlock.length - 1) {
            arrIsOpen++;
            showStart(arrIsOpen);
        }
    }
});

startHomePage.forEach(btn => {
    btn.onclick = () => {
        window.location.href = 'home.html';
    };
})
