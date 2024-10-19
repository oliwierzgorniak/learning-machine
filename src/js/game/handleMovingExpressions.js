import globals from "../globals";
import { expressions } from "../consts";
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
        position: { x: 200, y: 0 },
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
