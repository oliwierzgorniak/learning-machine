import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../consts";
import globals from "../globals";
import setState, { STATE_INSTRUCTIONS } from "../utilities/setState";
import { classifier, handPose } from "./preload";

export let $video = document.createElement("video");
export let classification;
export let hands;

const setup = async () => {
  console.log("setup");
  const $canvas = document.querySelector("#canvas");
  globals.ctx = $canvas.getContext("2d");
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
    },
  });
  $video.srcObject = stream;
  $video.play();
  $canvas.width = $video.width = CANVAS_WIDTH;
  $canvas.height = $video.height = CANVAS_HEIGHT;

  setState(STATE_INSTRUCTIONS);
  handPose.detectStart($video, (results) => {
    hands = results;
  });

  classifier.classifyStart((results) => {
    classification = results;
  });
};

export default setup;
