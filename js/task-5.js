function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');
btnChangeColor.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    body.style.backgroundColor = newColor;
    spanColor.textContent = newColor;
});

// btnChangeColor.onclick = () => {
//     body.style.backgroundColor = getRandomHexColor();
//     spanColor.textContent = getRandomHexColor();
// };