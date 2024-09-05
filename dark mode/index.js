const wrapper = document.querySelector('.wrapper');
const btn = document.getElementById('color-btn');

btn.addEventListener('click', () => {
  wrapper.classList.toggle('yellow');
  wrapper.classList.toggle('color');
});