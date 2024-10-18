import globals from "../globals";
import setState, { STATE_LOADING } from "../utilities/setState";
import draw from "../draw";
import setup from "./setup";

const preload = async () => {
  setState(STATE_LOADING);
  requestAnimationFrame(draw);
  globals.handPose = ml5.handPose({ flipHorizontal: true });
  await globals.handPose.ready;
  console.log("handPose model ready");

  globals.classifier = ml5.soundClassifier("SpeechCommands18w", {
    probabilityThreshold: 0.7,
  });
  await globals.classifier.ready;
  console.log("soundClassifier model ready");

  setup();
};

export default preload;
