const removeHeart = () => {
  const $heart = document.querySelector(
    ".playing-container__hearts img:not(.hidden)"
  );
  if ($heart) $heart.classList.add("hidden");
};

export default removeHeart;
