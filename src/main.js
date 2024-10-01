import "./css/reset.css";
import "./css/styles.css";

const $canvas = document.querySelector("#canvas");
const $state = document.querySelector("#state");

let video, ctx;
let handPose;
let hands = [];

const STATE_LOADING = "loading";
const STATE_RUNNING = "running";
const ALL_STATES = [STATE_LOADING, STATE_RUNNING];
let state = STATE_LOADING;

const setState = (value) => {
  console.log("setState", value);
  state = value;
  $state.textContent = state;
  document.documentElement.classList.remove(...ALL_STATES);
  document.documentElement.classList.add(state);
};

const preload = async () => {
  setState(STATE_LOADING);
  requestAnimationFrame(draw);
  handPose = ml5.handPose();
  await handPose.ready;
  console.log("model ready");
  setup();
};

const setup = async () => {
  console.log("setup");
  ctx = $canvas.getContext("2d");
  // create a video stream - specify a fixed size
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: 640,
      height: 480,
    },
  });
  video = document.createElement("video");
  video.srcObject = stream;
  video.play();
  // set canvas & video size
  $canvas.width = video.width = 640;
  $canvas.height = video.height = 480;
  // start detecting poses
  handPose.detectStart(video, (results) => {
    // store the results in a global
    hands = results;
  });
  // start the app
  setState(STATE_RUNNING);
};

const draw = () => {
  if (state === STATE_RUNNING) {
    ctx.drawImage(video, 0, 0, $canvas.width, $canvas.height);
    ctx.fillStyle = "red";
    // hands.forEach((hand) => {
    //   // hand.keypoints.forEach((keypoint) => {
    //   //   // no confidence score for handPose
    //   //   ctx.beginPath();
    //   //   ctx.arc(keypoint.x, keypoint.y, 10, 0, 2 * Math.PI);
    //   //   ctx.fill();
    //   // });

    // });
    if (hands.length > 0) {
      const relevantPoints = [hands[0].index_finger_tip, hands[0].thumb_tip];
      relevantPoints.forEach((keypoint) => {
        // no confidence score for handPose
        ctx.beginPath();
        ctx.arc(keypoint.x, keypoint.y, 10, 0, 2 * Math.PI);
        ctx.fill();
      });

      const distance = Math.sqrt(
        Math.pow(relevantPoints[0].x - relevantPoints[1].x, 2) +
          Math.pow(relevantPoints[0].y - relevantPoints[1].y, 2)
      );
      console.log(distance < 60 ? "touch" : "no touch");
    }
  }
  requestAnimationFrame(draw);
};

preload();
