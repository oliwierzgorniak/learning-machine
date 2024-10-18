const removeHeartFromUi = () => {
  const $heart = document.querySelector(".playing-container__lives img");
  $heart.remove();
};

export default removeHeartFromUi;
