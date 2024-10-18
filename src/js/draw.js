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
    globals.ctx.fillStyle = "red";

    if (globals.hands.length > 0) {
      const relevantPoints = [
        globals.hands[0].middle_finger_tip,
        globals.hands[0].middle_finger_dip,
        globals.hands[0].middle_finger_pip,
        globals.hands[0].middle_finger_mcp,
      ];
      relevantPoints.forEach((keypoint) => {
        globals.ctx.beginPath();
        globals.ctx.arc(keypoint.x, keypoint.y, 10, 0, 2 * Math.PI);
        globals.ctx.fill();
        globals.ctx.closePath();
      });
    }

    globals.expressions.forEach((expression) => drawExpression(expression));
  }
  requestAnimationFrame(draw);
};

export default draw;
