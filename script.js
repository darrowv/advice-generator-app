const adviceId = document.getElementById("advice-id");
const adviceNode = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

const getRandomAdvice = async () =>  {
  const res = await fetch("http://api.quotable.io/random");
  const { content, length } = await res.json();

  adviceId.textContent = length;
  adviceNode.textContent = content;
}

diceBtn.addEventListener("click", getRandomAdvice);

window.onload = getRandomAdvice();
