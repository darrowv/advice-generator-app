const adviceId = document.getElementById("advice-id");
const adviceNode = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

diceBtn.addEventListener("click", getRandomAdvice);

window.onload = getRandomAdvice();

async function getRandomAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-type": "text/plain",
      },
    });

    const { slip } = await res.json();

    setContent(slip.id, slip.advice);
  } catch (error) {
    console.log(error);
  }
}

function setContent(id, advice) {
  adviceId.textContent = id;
  adviceNode.textContent = advice;
}
