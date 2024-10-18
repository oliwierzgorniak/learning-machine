import { EXPRESSION_HEIGHT, EXPRESSION_WIDTH } from "../../consts";
import globals from "../../globals";

const handleCatching = (relevantPoints) => {
  relevantPoints.forEach((point, pointIndex) => {
    globals.expressions.forEach((expression, expressionIndex) => {
      if (
        point.x < expression.position.x + EXPRESSION_WIDTH &&
        point.x > expression.position.x &&
        point.y < expression.position.y + EXPRESSION_HEIGHT &&
        point.y > expression.position.y
      ) {
        globals.catchOffsetX =
          point.x - expression.position.x < EXPRESSION_WIDTH / 2
            ? 0
            : -EXPRESSION_WIDTH;
        globals.catchPointIndex = pointIndex;
        globals.caughtExpressionIndex = expressionIndex;
      }
    });
  });
};

export default handleCatching;
