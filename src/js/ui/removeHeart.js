const removeHeart = () => {
  const $heart = document.querySelector(".playing-container__hearts img");
  $heart.classList.add("hidden");
};

export default removeHeart;
