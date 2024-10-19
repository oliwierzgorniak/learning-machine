import globals from "../globals";

const updateScore = () => {
  const $score = document.querySelector(".end-container__score");
  $score.textContent = globals.score;
};

export default updateScore;
