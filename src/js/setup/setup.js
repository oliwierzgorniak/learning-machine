import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../consts";
import globals from "../globals";
import setState, { STATE_INSTRUCTIONS } from "../utilities/setState";

export let $video = document.createElement("video");

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

  // globals.ctx.translate($canvas.width, 0);
  // globals.ctx.scale(-1, 1);

  setState(STATE_INSTRUCTIONS);
  globals.handPose.detectStart($video, (results) => {
    globals.hands = results;
  });
};

export default setup;
