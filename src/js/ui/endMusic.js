const endMusic = () => {
  const $audio = document.querySelector(".playing-container__audio");
  $audio.pause();
  $audio.currentTime = 0;
};

export default endMusic;
