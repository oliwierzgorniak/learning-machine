import globals from "../globals";
import setState, { STATE_PLAYING } from "../utilities/setState";

export let $video = document.createElement("video");

const setup = async () => {
  console.log("setup");
  const $canvas = document.querySelector("#canvas");
  globals.ctx = $canvas.getContext("2d");
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: 640,
      height: 480,
    },
  });
  $video.srcObject = stream;
  $video.play();
  $canvas.width = $video.width = 640;
  $canvas.height = $video.height = 480;

  globals.ctx.translate($canvas.width, 0);
  globals.ctx.scale(-1, 1);

  setState(STATE_PLAYING);
  globals.handPose.detectStart($video, (results) => {
    globals.hands = results;
  });
};

export default setup;
