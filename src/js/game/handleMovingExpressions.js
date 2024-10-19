import globals from "../globals";
import { expressions } from "../consts";
import getRandom from "../utilities/getRandom";

const handleMovingExpressions = () => {
  setInterval(() => {
    if (globals.expressions.length < 1) {
      const expression = getRandom(expressions);
      globals.expressions.push({
        position: { x: 200, y: 0 },
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
