const adviceId = document.getElementById("advice-id");
const adviceNode = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

const getRandomAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
    headers: {
      "Content-type": "text/plain",
    },
  });

  const { slip } = await res.json();

  adviceId.textContent = slip.id;
  adviceNode.textContent = slip.advice;
};

diceBtn.addEventListener("click", getRandomAdvice);

window.onload = getRandomAdvice();
