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
  // document.documentElement.scrollTop = 0;
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});

backToTop.addEventListener("mouseover", () => {
  bttArrow.classList.add("greyarrow");
});
backToTop.addEventListener("mouseout", () => {
  bttArrow.classList.remove("greyarrow");
});

const sliderImg = document.querySelector(".slider-img");
const images = ["insta-1.jpg", "insta-2.jpg", "insta-4.jpg"];
let i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}
function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

const setImg = () => {
  return sliderImg.setAttribute("src", "./img/" + images[i]);
};

// const heroImg = document.querySelector(".hero-image");
// const heroImages = ["hero-1.jpg", "hero-2.jpg", "hero-3.jpg"];

// let j = 0;

// function nextSlide() {
//   if (j >= heroImages.length - 1) j = -1;
//   j++;
//   console.log("HEEEEEEEY");
//   return setHeroImg();
// }
// function setHeroImg() {
//   return (heroImg.style.backgroundImage = "url('./img/" + heroImages[j] + "')");
// }
// setInterval(nextSlide, 10000);

// function submit(event) {
//   event.preventDefault();
// }
