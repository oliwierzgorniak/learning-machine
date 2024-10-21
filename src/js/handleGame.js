import handleAdditionChange from "./game/handleAdditionChange";
import handleMovingExpressions from "./game/handleMovingExpressions";
import handleRemovingExpressionsHorizontally from "./game/handleRemovingExpressionsHorizontally";
import handleRemovingExpressionsVertically from "./game/handleRemovingExpressionsVertically";
import handleSwiping from "./game/handleSwiping";
import playMusic from "./ui/playMusic";

const handleGame = () => {
  handleMovingExpressions();
  handleAdditionChange();
  handleRemovingExpressionsVertically();
  handleRemovingExpressionsHorizontally();
  handleSwiping();
  // playMusic();
};

export default handleGame;
