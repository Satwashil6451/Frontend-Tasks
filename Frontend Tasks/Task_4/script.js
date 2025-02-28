const button = document.getElementById('colorButton');

const colors = ['#f4a261', '#2a9d8f', '#e76f51', '#264653', '#e9c46a'];

function changeBackgroundColor() {
    const body = document.body;
    // to pick random color from array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
}

button.addEventListener('click', changeBackgroundColor);
