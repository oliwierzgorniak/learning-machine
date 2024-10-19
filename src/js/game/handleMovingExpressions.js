import globals from "../globals";
import { CANVAS_WIDTH, EXPRESSION_WIDTH, expressions } from "../consts";
import getRandom from "../utilities/getRandom";

let nExpressions = 0;
let fallingSpeed = 7;

const handleMovingExpressions = () => {
  setInterval(() => {
    if (globals.expressions.length < 1) {
      const expression = getRandom(expressions);
      nExpressions++;
      fallingSpeed += 1;
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
      expression.position.y += fallingSpeed;
    });
  }, 500);
};

export default handleMovingExpressions;
