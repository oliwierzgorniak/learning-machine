import { STATE_PLAYING } from "../js/utilities/setState";
import drawExpression from "./draw/drawExpression";
import getFlippedVideo from "./draw/getFlippedVideo";
import globals from "./globals";

const draw = () => {
  if (globals.state === STATE_PLAYING) {
    const $canvas = document.querySelector("#canvas");
    globals.ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    const flippedVideo = getFlippedVideo();
    globals.ctx.drawImage(flippedVideo, 0, 0, $canvas.width, $canvas.height);

    globals.expressions.forEach((expression) => drawExpression(expression));
  }
  requestAnimationFrame(draw);
};

export default draw;
