const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
  const name = event.target.value.trim();
  outputEl.textContent = name ? name : 'Anonymous';
});
