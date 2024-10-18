import setState, { STATE_PLAYING } from "../utilities/setState";
import handleGame from "../handleGame";

const handleInstructionsClose = () => {
  const $button = document.querySelector(".instructions-container__button");
  $button.addEventListener("click", () => {
    setState(STATE_PLAYING);
    handleGame();
  });
};

export default handleInstructionsClose;
