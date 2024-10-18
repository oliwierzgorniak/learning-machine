import globals from "../globals";
import { BACKGROUND_COLOR, FRAME_COLOR, TEXT_COLOR } from "../consts";

const drawExpression = (expression) => {
  const { x, y } = expression.position;
  globals.ctx.beginPath();
  globals.ctx.rect(x, y, 180, 80);
  globals.ctx.fillStyle = BACKGROUND_COLOR;
  globals.ctx.fill();
  globals.ctx.strokeStyle = FRAME_COLOR;
  globals.ctx.lineWidth = 6;
  globals.ctx.stroke();
  globals.ctx.font = "32px Caveat";
  globals.ctx.fillStyle = TEXT_COLOR;
  globals.ctx.fillText(expression.content, x, y);
  globals.ctx.closePath();
};

export default drawExpression;
