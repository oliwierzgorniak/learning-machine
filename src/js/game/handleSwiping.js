import { EXPRESSION_HEIGHT, EXPRESSION_WIDTH } from "../consts";
import globals from "../globals";
import getRelevantPoints from "./handleSwiping/getRelevantPoints";

let lastHandPointX = null;
let swipingDirection = null;
let catchOffsetX = 0;
let catchPointIndex = null;

const handleSwiping = () => {
  setInterval(() => {
    if (globals.hands.length == 0) return;

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
            swipingDirection =
              point.x - expression.position.x < EXPRESSION_WIDTH / 2
                ? "right"
                : "left";
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
      if (lastHandPointX != null) {
        if (
          (swipingDirection == "left" && lastHandPointX < handPointX) ||
          (swipingDirection == "right" && lastHandPointX > handPointX)
        ) {
          globals.caughtExpressionIndex = null;
          swipingDirection = null;
          catchOffsetX = 0;
          catchPointIndex = null;
        }
      }

      if (globals.caughtExpressionIndex != null) {
        globals.expressions[globals.caughtExpressionIndex].position.x =
          handPointX + catchOffsetX;
        lastHandPointX = handPointX;
      }
    }
  }, 50);
};

export default handleSwiping;
