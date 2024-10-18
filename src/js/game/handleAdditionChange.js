import globals from "../globals";
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

const handleAdditionChange = () => {
  setInterval(() => {
    if (globals.classification && globals.classification[0]?.confidence > 0.9) {
      const prediction = globals.classification[0];
      if (!allowedWords.includes(prediction.label)) return;
      const predictedWord = globals.classification[0].label;
      globals.addition = wordToDigit[predictedWord];
      const $addition = document.querySelector(".playing-container__addition");
      $addition.textContent = wordToDigit[predictedWord];
    }
  }, 100);
};

export default handleAdditionChange;
