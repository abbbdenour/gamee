
const num = Math.floor(Math.random() * 11);

const ent = document.getElementById('enter');
const inp = document.getElementById('input');
const re = document.getElementById('result');

submitBtn.addEventListener('click', () => {
  const guess = Number(inp.value);

  if (guess === num) {
    result.textContent = "You did it ";
    result.style.color = "green";
  } else {
    result.textContent = " 3wd ";
    result.style.color = "red";
  }
});