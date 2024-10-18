import globals from "../globals";
import {
  BACKGROUND_COLOR,
  EXPRESSION_FRAME,
  EXPRESSION_HEIGHT,
  EXPRESSION_WIDTH,
  FRAME_COLOR,
  TEXT_COLOR,
} from "../consts";

const drawExpression = (expression) => {
  const { x, y } = expression.position;
  globals.ctx.beginPath();
  globals.ctx.rect(x, y, EXPRESSION_WIDTH, EXPRESSION_HEIGHT);
  globals.ctx.fillStyle = BACKGROUND_COLOR;
  globals.ctx.fill();
  globals.ctx.strokeStyle = FRAME_COLOR;
  globals.ctx.lineWidth = EXPRESSION_FRAME;
  globals.ctx.stroke();
  globals.ctx.font = "36px Caveat";
  globals.ctx.fillStyle = TEXT_COLOR;
  globals.ctx.textAlign = "center";
  globals.ctx.fillText(
    expression.content,
    x + EXPRESSION_WIDTH / 2 - EXPRESSION_FRAME / 3 - 2,
    y + EXPRESSION_HEIGHT / 2 + EXPRESSION_FRAME + 1
  );
  globals.ctx.closePath();
};

export default drawExpression;
