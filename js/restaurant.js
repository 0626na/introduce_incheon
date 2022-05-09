const restaurantTitle = document.querySelectorAll(".restaurant_title");
const restaurantSubContainer = document.querySelectorAll(
  ".restaurant_subContainer"
);
const test = document.querySelector(".test");

const titleAnimation = "cafe_title_animation";
const restaurantAnimation = "restaurant_container_animation";

//맨처음 화면
restaurantTitle[0].classList.add(titleAnimation);
restaurantSubContainer[0].classList.add(restaurantAnimation);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    restaurantTitle[1].classList.add(titleAnimation);
    restaurantSubContainer[1].classList.add(restaurantAnimation);
  }
});
