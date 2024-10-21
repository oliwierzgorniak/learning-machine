const removeHeart = () => {
  const $heart = document.querySelector(
    ".playing-container__hearts img:not(.hidden)"
  );
  $heart.classList.add("hidden");
};

export default removeHeart;
