import handleAdditionChange from "./game/handleAdditionChange";
import handleMovingExpressions from "./game/handleMovingExpressions";
import handleRemovingExpressions from "./game/handleRemovingExpressions";
import handleSwiping from "./game/handleSwiping";

const handleGame = () => {
  handleMovingExpressions();
  handleAdditionChange();
  handleRemovingExpressions();
  handleSwiping();
};

export default handleGame;
