import globals from "../globals";
import { classification } from "../setup/setup";
import wordToDigit from "../utilities/wordToDigit";

const allowedWords = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
export let addition = 4;

const handleAdditionChange = () => {
  setInterval(() => {
    if (classification && classification[0]?.confidence > 0.9) {
      const prediction = classification[0];
      if (!allowedWords.includes(prediction.label)) return;
      const predictedWord = prediction.label;
      addition = wordToDigit[predictedWord];
      const $addition = document.querySelector(".playing-container__addition");
      $addition.textContent = wordToDigit[predictedWord];
    }
  }, 100);
};

export default handleAdditionChange;
