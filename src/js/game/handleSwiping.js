import globals from "../globals";
import handleCatching from "./handleSwiping/handleCatching";

const handleSwiping = () => {
  setInterval(() => {
    if (globals.hands.length == 0) return;

    const relevantPoints = [
      globals.hands[0].middle_finger_tip,
      globals.hands[0].middle_finger_dip,
      globals.hands[0].middle_finger_pip,
      globals.hands[0].middle_finger_mcp,
    ];
    if (globals.caughtExpressionIndex == null) {
      handleCatching(relevantPoints);
    } else {
      const handPointX = relevantPoints[globals.catchPointIndex].x;
      globals.expressions[globals.caughtExpressionIndex].position.x =
        handPointX + globals.catchOffsetX;
    }
  }, 50);
};

export default handleSwiping;
