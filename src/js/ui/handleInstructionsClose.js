import moveExpressions from "../game/moveExpressions";
import setState, { STATE_PLAYING } from "../utilities/setState";

const handleInstructionsClose = () => {
  const $button = document.querySelector(".instructions-container__button");
  $button.addEventListener("click", () => {
    setState(STATE_PLAYING);
    moveExpressions();
  });
};

export default handleInstructionsClose;
