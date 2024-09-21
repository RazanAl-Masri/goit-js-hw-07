const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function handleInputChange() {
    const name = nameInput.value.trim();
    nameOutput.textContent = name || 'Anonymous';
}

nameInput.addEventListener('input', handleInputChange);

