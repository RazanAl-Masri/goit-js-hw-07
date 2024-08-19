function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
  const buttonEl = document.querySelector('.change-color');
  const colorTextEl = document.querySelector('.color');
  
  buttonEl.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorTextEl.textContent = newColor;
  });
  