
const num = Math.floor(Math.random() * 11);

const ent = document.getElementById('enter');
const inp = document.getElementById('input');
const re = document.getElementById('result');

ent.addEventListener('click', () => {
  const guess = Number(inp.value);

  if (guess === num) {
    re.textContent = "You did it ";
    re.style.color = "green";
  } else {
    re.textContent = " 3wd ";
    re.style.color = "red";
  }
});