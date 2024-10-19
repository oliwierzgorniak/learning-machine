import globals from "../globals";
import setState, { STATE_END } from "../utilities/setState";

const checkAndHandleEndGame = () => {
  if (globals.hearts.length < 0) {
    setState(STATE_END);
  }
};

export default checkAndHandleEndGame;
