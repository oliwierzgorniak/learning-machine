const toggleMusic = () => {
  const $audio = document.querySelector(".playing-container__audio");
  console.log($audio.paused);
  if ($audio.paused) {
    $audio.play();
  } else {
    $audio.pause();
    $audio.currentTime = 0;
  }
};

export default toggleMusic;
