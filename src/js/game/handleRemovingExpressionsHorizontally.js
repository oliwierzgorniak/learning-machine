import { CANVAS_WIDTH, EXPRESSION_WIDTH } from "../consts";
import globals from "../globals";
import removeHeartFromUi from "./handleRemovingExpressions/removeHeartFromUI";

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

        globals.hearts--;
        removeHeartFromUi();
      }
    });
  }, 200);
};

export default handleRemovingExpressionsHorizontally;
