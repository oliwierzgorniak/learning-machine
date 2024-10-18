import { CANVAS_HEIGHT } from "../consts";
import globals from "../globals";
import removeHeartFromUi from "./handleRemovingExpressions/removeHeartFromUI";

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
        removeHeartFromUi();
      }
    });
  }, 200);
};

export default handleRemovingExpressionsVertically;
