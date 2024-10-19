import globals from "../globals";

export const STATE_LOADING = "loading";
export const STATE_PLAYING = "playing";
export const STATE_INSTRUCTIONS = "instructions";
export const STATE_END = "end";
const ALL_STATES = [
  STATE_LOADING,
  STATE_PLAYING,
  STATE_INSTRUCTIONS,
  STATE_END,
];

const setState = (value) => {
  console.log("setState", value);
  globals.state = value;
  document.documentElement.classList.remove(...ALL_STATES);
  document.documentElement.classList.add(globals.state);
};

export default setState;
