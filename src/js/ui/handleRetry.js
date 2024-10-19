const handleRetry = () => {
  const $button = document.querySelector(".end-container__button");
  $button.addEventListener("click", () => {
    window.location.reload();
  });
};

export default handleRetry;
