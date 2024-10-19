import globals from "../globals";
import { CANVAS_WIDTH, EXPRESSION_WIDTH, expressions } from "../consts";
import getRandom from "../utilities/getRandom";

const handleMovingExpressions = () => {
  setInterval(() => {
    if (globals.expressions.length < 1) {
      const expression = getRandom(expressions[globals.gameDifficulty]);
      globals.fallingSpeed += 1;
      globals.expressions.push({
        position: {
          x:
            (CANVAS_WIDTH - EXPRESSION_WIDTH - CANVAS_WIDTH * 0.1) *
              Math.random() +
            CANVAS_WIDTH * 0.1,
          y: 0,
        },
        content: expression.content,
        solution: expression.solution,
      });
    }

    globals.expressions.forEach((expression) => {
      expression.position.y += globals.fallingSpeed;
    });
  }, 500);
};

export default handleMovingExpressions;
