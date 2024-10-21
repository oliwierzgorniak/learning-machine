import { EXPRESSION_HEIGHT, EXPRESSION_WIDTH } from "../consts";
import globals from "../globals";
import { hands } from "../setup/setup";
import getRelevantPoints from "./handleSwiping/getRelevantPoints";

let catchOffsetX = 0;
let catchPointIndex = null;

const handleSwiping = () => {
  setInterval(() => {
    if (hands.length == 0) return;

    const relevantPoints = getRelevantPoints();

    if (globals.caughtExpressionIndex == null) {
      relevantPoints.forEach((point, pointIndex) => {
        globals.expressions.forEach((expression, expressionIndex) => {
          if (
            point.x < expression.position.x + EXPRESSION_WIDTH &&
            point.x > expression.position.x &&
            point.y < expression.position.y + EXPRESSION_HEIGHT &&
            point.y > expression.position.y
          ) {
            catchOffsetX =
              point.x - expression.position.x < EXPRESSION_WIDTH / 2
                ? 0
                : -EXPRESSION_WIDTH;
            catchPointIndex = pointIndex;
            globals.caughtExpressionIndex = expressionIndex;
          }
        });
      });
    } else {
      const handPointX = relevantPoints[catchPointIndex].x;
      globals.expressions[globals.caughtExpressionIndex].position.x =
        handPointX + catchOffsetX;
    }
  }, 40);
};

export default handleSwiping;
