import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../consts";
import { $video } from "../setup/setup";

const getFlippedVideo = () => {
  const $flipCanvas = document.createElement("canvas");
  $flipCanvas.width = CANVAS_WIDTH;
  $flipCanvas.height = CANVAS_HEIGHT;
  const flipCtx = $flipCanvas.getContext("2d");
  flipCtx.translate(CANVAS_WIDTH, 0);
  flipCtx.scale(-1, 1);
  flipCtx.drawImage($video, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  return $flipCanvas;
};

export default getFlippedVideo;
