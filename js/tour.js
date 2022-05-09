const tour_title = document.querySelectorAll(".description_title");
const tour_title_long = document.querySelectorAll(".tour_title");
const tour_img = document.querySelectorAll(".tour_img");
const tour_description = document.querySelectorAll(
  ".tour_description_container"
);

const tourTitleAnimation = "tour_title_animation";
const tourImgAnimation = "tour_img_animation";
const tourDescriptionAnimation = "tour_description_animation";

tour_title[0].classList.add(tourTitleAnimation);
tour_img[0].classList.add(tourImgAnimation);
tour_description[0].classList.add(tourDescriptionAnimation);

window.addEventListener("scroll", () => {
  if (window.scrollY > 130) {
    tour_title[1].classList.add(tourTitleAnimation);
    tour_img[1].classList.add(tourImgAnimation);
    tour_description[1].classList.add(tourDescriptionAnimation);
  }

  if (window.scrollY > 850) {
    tour_title_long[0].classList.add(tourTitleAnimation);
    tour_img[2].classList.add(tourImgAnimation);
    tour_description[2].classList.add(tourDescriptionAnimation);
  }

  if (window.scrollY > 1500) {
    tour_title_long[1].classList.add(tourTitleAnimation);
    tour_img[3].classList.add(tourImgAnimation);
    tour_description[3].classList.add(tourDescriptionAnimation);
  }
  console.log(window.scrollY);
});
