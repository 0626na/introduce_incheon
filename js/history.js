const initialName = document.querySelectorAll(".initialname_title");
const initialIntroBox = document.querySelector(".initialname_introbox");
const initialNameDescriptionTitle = document.querySelector(
  ".initialname_headline"
);
const initialNameDescription = document.querySelectorAll(
  ".initialname_description"
);

const historyGallery = document.querySelector(".history_gallery_container");

const initialNameAnimation = "history_title_animation";
const initialIntroBoxAnimation = "history_introBox_animation";
const initialDescriptionTitleAnimation = "histroy_description_title_animation";
const initialDescriptionAnimation = "history_description_animation";
const initalDescriptionAnimation2 = "history_description_animation2";

initialName[0].classList.add(initialNameAnimation);
initialIntroBox.classList.add(initialIntroBoxAnimation);
initialNameDescriptionTitle.classList.add(initialDescriptionTitleAnimation);
initialNameDescription[0].classList.add(initialDescriptionAnimation);
initialNameDescription[1].classList.add(initalDescriptionAnimation2);

window.addEventListener("scroll", () => {
  if (window.scrollY > 140) {
    initialName[1].classList.add(initialNameAnimation);
    historyGallery.classList.add(initalDescriptionAnimation2);
  }
});
