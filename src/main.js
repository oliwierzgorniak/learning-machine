import preload from "./js/setup/preload";
import "./css/reset.css";
import "./css/styles.css";
import "./css/playing.css";
import "./css/instructionsAndEnd.css";
import "./css/loading.css";
import handleInstructionsClose from "./js/ui/handleInstructionsClose";
import handleRetry from "./js/ui/handleRetry";

preload();
handleInstructionsClose();
handleRetry();
