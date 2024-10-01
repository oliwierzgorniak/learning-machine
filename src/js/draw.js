import { STATE_PLAYING } from "../js/utilities/setState";
import globals from "./globals";
import { $video } from "./setup/setup";

const draw = () => {
  if (globals.state === STATE_PLAYING) {
    const $canvas = document.querySelector("#canvas");
    globals.ctx.drawImage($video, 0, 0, $canvas.width, $canvas.height);
    globals.ctx.fillStyle = "red";

    if (globals.hands.length > 0) {
      const relevantPoints = [
        globals.hands[0].index_finger_tip,
        globals.hands[0].thumb_tip,
      ];
      relevantPoints.forEach((keypoint) => {
        globals.ctx.beginPath();
        globals.ctx.arc(keypoint.x, keypoint.y, 10, 0, 2 * Math.PI);
        globals.ctx.fill();
      });
    }
  }
  requestAnimationFrame(draw);
};

export default draw;
