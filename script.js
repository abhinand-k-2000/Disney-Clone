// Get the Next and Previous buttons

const nextButton = document.querySelector(".carousel-control-next");
const prevButton = document.querySelector(".carousel-control-prev");

// Add click event listeners

nextButton.addEventListener("click", () => {
  console.log("next");
});

prevButton.addEventListener("click", () => {
  console.log("previous");
});
