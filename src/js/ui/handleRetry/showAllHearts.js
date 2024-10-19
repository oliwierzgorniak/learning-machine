const showAllHearts = () => {
  const hearts = document.querySelectorAll(".playing-container__hearts img");
  hearts.forEach(($heart) => {
    $heart.classList.remove("hidden");
  });
};

export default showAllHearts;
