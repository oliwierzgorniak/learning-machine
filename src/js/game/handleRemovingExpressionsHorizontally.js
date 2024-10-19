import { CANVAS_HEIGHT, CANVAS_WIDTH, EXPRESSION_WIDTH } from "../consts";
import globals from "../globals";
import toggleMusic from "../ui/toggleMusic";
import updateScore from "../ui/updateScore";
import setState, { STATE_END } from "../utilities/setState";
import removeHeart from "../ui/removeHeart";
import { addition } from "./handleAdditionChange";

const handleRemovingExpressionsHorizontally = () => {
  setInterval(() => {
    if (globals.caughtExpressionIndex == null) return;

    globals.expressions.forEach((expression, i) => {
      if (
        expression.position.x <= 0 ||
        expression.position.x + EXPRESSION_WIDTH > CANVAS_WIDTH
      ) {
        if (i == globals.caughtExpressionIndex)
          globals.caughtExpressionIndex = null;

        globals.expressions = [
          ...globals.expressions.slice(0, i),
          ...globals.expressions.slice(i + 1),
        ];

        if (addition == expression.solution) {
          globals.score += Math.ceil(
            (1 - expression.position.y / CANVAS_HEIGHT) / 0.2
          );
          const $score = document.querySelector(".playing-container__score");
          $score.textContent = globals.score;
        } else {
          globals.hearts--;
          removeHeart();
          if (globals.hearts <= 0) {
            updateScore();
            toggleMusic();
            setState(STATE_END);
          }
        }
      }
    });
  }, 200);
};

export default handleRemovingExpressionsHorizontally;
