import globals from "../../globals";

const getRelevantPoints = () => [
  globals.hands[0].middle_finger_tip,
  globals.hands[0].middle_finger_dip,
  globals.hands[0].middle_finger_pip,
  globals.hands[0].middle_finger_mcp,
];

export default getRelevantPoints;
