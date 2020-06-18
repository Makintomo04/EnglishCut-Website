const backToTop = document.querySelector("#btt");
const bttArrow = document.querySelector("i");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
}
backToTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

backToTop.addEventListener("mouseover", () => {
  bttArrow.classList.add("greyarrow");
});
backToTop.addEventListener("mouseout", () => {
  bttArrow.classList.remove("greyarrow");
});
