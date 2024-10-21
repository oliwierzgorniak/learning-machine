import { STARTING_FALLING_SPEED } from "../consts";
import globals from "../globals";
import setState, { STATE_PLAYING } from "../utilities/setState";
import showAllHearts from "./handleRetry/showAllHearts";
import playMusic from "./playMusic";
import updateScore from "./updateScore";

const handleRetry = () => {
  const $button = document.querySelector(".end-container__button");
  $button.addEventListener("click", () => {
    globals.fallingSpeed = STARTING_FALLING_SPEED;
    globals.score = 0;
    globals.hearts = 3;
    updateScore();
    showAllHearts();
    // playMusic();
    setState(STATE_PLAYING);
    globals.expressions = [];
  });
};

export default handleRetry;
