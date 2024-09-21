function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, '0')}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
	const amount = parseInt(input.value, 10);
	if (isNaN(amount) || amount <= 0) {
		alert('Please enter a valid number greater than 0');
		return;
	}
	createBoxes(amount);
	input.value = ''; // Clear the input after creating boxes
});

function createBoxes(amount) {
	const fragment = document.createDocumentFragment();
	for (let i = 0; i < amount; i++) {
		const box = document.createElement('div');
		box.style.width = `${30 + i * 10}px`;
		box.style.height = `${30 + i * 10}px`;
		box.style.backgroundColor = getRandomHexColor();
		fragment.appendChild(box);
	}
	boxes.appendChild(fragment); // Append all boxes in a single DOM operation
}

const destroyBoxes = () => {
	boxes.innerHTML = ''; // Remove all boxes from the boxes div
};

destroyBtn.addEventListener('click', destroyBoxes);