import { CANVAS_HEIGHT } from "../consts";
import globals from "../globals";
import updateScore from "../ui/updateScore";
import setState, { STATE_END } from "../utilities/setState";
import removeHeart from "../ui/removeHeart";

const handleRemovingExpressionsVertically = () => {
  setInterval(() => {
    globals.expressions.forEach((expression, i) => {
      if (expression.position.y > CANVAS_HEIGHT) {
        if (i == globals.caughtExpressionIndex)
          globals.caughtExpressionIndex = null;

        globals.expressions = [
          ...globals.expressions.slice(0, i),
          ...globals.expressions.slice(i + 1),
        ];

        globals.hearts--;
        removeHeart();
        if (globals.hearts <= 0) {
          updateScore();
          setState(STATE_END);
        }
      }
    });
  }, 200);
};

export default handleRemovingExpressionsVertically;
