import setState, { STATE_LOADING } from "../utilities/setState";
import draw from "../draw";
import setup from "./setup";

export let handPose;
export let classifier;

const preload = async () => {
  setState(STATE_LOADING);
  requestAnimationFrame(draw);
  handPose = ml5.handPose({ flipHorizontal: true });
  await handPose.ready;
  console.log("handPose model ready");

  classifier = ml5.soundClassifier("SpeechCommands18w", {
    probabilityThreshold: 0.7,
  });
  await classifier.ready;
  console.log("soundClassifier model ready");

  setup();
};

export default preload;
