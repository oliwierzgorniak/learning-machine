export const expressions = [
  { content: "0 + 0", solution: 10 },
  { content: "0 + 1", solution: 9 },
  { content: "0 + 2", solution: 8 },
  { content: "0 + 3", solution: 7 },
  { content: "0 + 4", solution: 6 },
  { content: "0 + 5", solution: 5 },
  { content: "0 + 6", solution: 4 },
  { content: "0 + 7", solution: 3 },
  { content: "0 + 8", solution: 2 },
  { content: "1 + 0", solution: 9 },
  { content: "1 - 0", solution: 9 },
  { content: "1 + 1", solution: 8 },
  { content: "1 + 2", solution: 7 },
  { content: "1 + 3", solution: 6 },
  { content: "1 + 4", solution: 5 },
  { content: "1 + 5", solution: 4 },
  { content: "1 + 6", solution: 3 },
  { content: "1 + 7", solution: 2 },
  { content: "2 + 0", solution: 8 },
  { content: "2 - 0", solution: 8 },
  { content: "2 + 1", solution: 7 },
  { content: "2 - 1", solution: 9 },
  { content: "2 + 2", solution: 6 },
  { content: "2 + 3", solution: 5 },
  { content: "2 + 4", solution: 4 },
  { content: "2 + 5", solution: 3 },
  { content: "2 + 6", solution: 2 },
  { content: "3 + 0", solution: 7 },
  { content: "3 - 0", solution: 7 },
  { content: "3 + 1", solution: 6 },
  { content: "3 - 1", solution: 8 },
  { content: "3 + 2", solution: 5 },
  { content: "3 - 2", solution: 9 },
  { content: "3 + 3", solution: 4 },
  { content: "3 + 4", solution: 3 },
  { content: "3 + 5", solution: 2 },
  { content: "4 + 0", solution: 6 },
  { content: "4 - 0", solution: 6 },
  { content: "4 + 1", solution: 5 },
  { content: "4 - 1", solution: 7 },
  { content: "4 + 2", solution: 4 },
  { content: "4 - 2", solution: 8 },
  { content: "4 + 3", solution: 3 },
  { content: "4 - 3", solution: 9 },
  { content: "4 + 4", solution: 2 },
  { content: "5 + 0", solution: 5 },
  { content: "5 - 0", solution: 5 },
  { content: "5 + 1", solution: 4 },
  { content: "5 - 1", solution: 6 },
  { content: "5 + 2", solution: 3 },
  { content: "5 - 2", solution: 7 },
  { content: "5 + 3", solution: 2 },
  { content: "5 - 3", solution: 8 },
  { content: "5 - 4", solution: 9 },
  { content: "6 + 0", solution: 4 },
  { content: "6 - 0", solution: 4 },
  { content: "6 + 1", solution: 3 },
  { content: "6 - 1", solution: 5 },
  { content: "6 + 2", solution: 2 },
  { content: "6 - 2", solution: 6 },
  { content: "6 - 3", solution: 7 },
  { content: "6 - 4", solution: 8 },
  { content: "6 - 5", solution: 9 },
  { content: "7 + 0", solution: 3 },
  { content: "7 - 0", solution: 3 },
  { content: "7 + 1", solution: 2 },
  { content: "7 - 1", solution: 4 },
  { content: "7 - 2", solution: 5 },
  { content: "7 - 3", solution: 6 },
  { content: "7 - 4", solution: 7 },
  { content: "7 - 5", solution: 8 },
  { content: "7 - 6", solution: 9 },
  { content: "8 + 0", solution: 2 },
  { content: "8 - 0", solution: 2 },
  { content: "8 - 1", solution: 3 },
  { content: "8 - 2", solution: 4 },
  { content: "8 - 3", solution: 5 },
  { content: "8 - 4", solution: 6 },
  { content: "8 - 5", solution: 7 },
  { content: "8 - 6", solution: 8 },
  { content: "8 - 7", solution: 9 },
  { content: "9 - 0", solution: 1 },
  { content: "9 - 1", solution: 2 },
  { content: "9 - 2", solution: 3 },
  { content: "9 - 3", solution: 4 },
  { content: "9 - 4", solution: 5 },
  { content: "9 - 5", solution: 6 },
  { content: "9 - 6", solution: 7 },
  { content: "9 - 7", solution: 8 },
  { content: "9 - 8", solution: 9 },
];

// let expressions = [];
// for (let y = 0; y <= 9; y++) {
//   for (let x = 0; x <= 9; x++) {
//     if (y + x < 9) {
//       expressions.push({ content: `${y} + ${x}`, solution: 10 - y - x });
//     }
//     if (y - x < 10 && y - x > 0) {
//       expressions.push({ content: `${y} - ${x}`, solution: 10 - (y - x) });
//     }
//   }
// }
// console.log(JSON.stringify(expressions));

export const BACKGROUND_COLOR = "#156635";
export const TEXT_COLOR = "white";
export const FRAME_COLOR = "#4A3307";
export const CANVAS_WIDTH = 640;
export const CANVAS_HEIGHT = 480;
export const EXPRESSION_WIDTH = 155;
export const EXPRESSION_HEIGHT = 60;
export const EXPRESSION_FRAME = 6;
