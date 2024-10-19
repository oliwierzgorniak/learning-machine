import { hands } from "../../setup/setup";

const getRelevantPoints = () => [
  hands[0].middle_finger_tip,
  hands[0].middle_finger_dip,
  hands[0].middle_finger_pip,
  hands[0].middle_finger_mcp,
];

export default getRelevantPoints;
