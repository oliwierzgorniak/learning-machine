import setState, { STATE_PLAYING } from "../utilities/setState";
import handleGame from "../handleGame";
import globals from "../globals";

const handleInstructionsClose = () => {
  const buttons = document.querySelectorAll(".instructions-container__button");
  buttons.forEach(($button) => {
    $button.addEventListener("click", () => {
      setState(STATE_PLAYING);
      globals.gameDifficulty = $button.dataset.difficulty;
      handleGame();
    });
  });
};

export default handleInstructionsClose;
