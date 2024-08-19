function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
  const controlsEl = document.getElementById('controls');
  const inputEl = controlsEl.querySelector('input[type="number"]');
  const createButtonEl = controlsEl.querySelector('button[data-create]');
  const destroyButtonEl = controlsEl.querySelector('button[data-destroy]');
  const boxesEl = document.getElementById('boxes');
  
  createButtonEl.addEventListener('click', () => {
    const amount = parseInt(inputEl.value);
    if (amount < 1 || amount > 100 || isNaN(amount)) {
      alert('Please enter a number between 1 and 100');
      return;
    }
    createBoxes(amount);
    inputEl.value = '';
  });
  
  destroyButtonEl.addEventListener('click', destroyBoxes);
  
  function createBoxes(amount) {
    destroyBoxes(); // Önceki kutuları temizler
    const boxes = [];
    let size = 30;
  
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      boxes.push(div);
      size += 10;
    }
  
    boxesEl.append(...boxes);
  }
  
  function destroyBoxes() {
    boxesEl.innerHTML = '';
  }
  