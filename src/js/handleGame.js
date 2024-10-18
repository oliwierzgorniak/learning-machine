import handleAdditionChange from "./game/handleAdditionChange";
import handleMovingExpressions from "./game/handleMovingExpressions";
import handleRemovingExpressions from "./game/handleRemovingExpressions";

const handleGame = () => {
  handleMovingExpressions();
  handleAdditionChange();
  handleRemovingExpressions();
};

export default handleGame;
