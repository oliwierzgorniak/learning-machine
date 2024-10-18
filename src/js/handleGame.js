import handleAdditionChange from "./game/handleAdditionChange";
import handleMovingExpressions from "./game/handleMovingExpressions";
import handleRemovingExpressionsHorizontally from "./game/handleRemovingExpressionsHorizontally";
import handleRemovingExpressionsVertically from "./game/handleRemovingExpressionsVertically";
import handleSwiping from "./game/handleSwiping";

const handleGame = () => {
  handleMovingExpressions();
  handleAdditionChange();
  handleRemovingExpressionsVertically();
  handleRemovingExpressionsHorizontally();
  handleSwiping();
};

export default handleGame;
