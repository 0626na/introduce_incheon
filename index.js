const locationImg1 = document.querySelector(".location_img1");
const locationImg2 = document.querySelector(".location_img2");
const locationImg3 = document.querySelector(".location_img3");

const locationDescription = document.querySelector(".location_description");
const areaDescription = document.querySelector(".area_description");

const climateDescription = document.querySelectorAll(".climate_description");

const brandContainer = document.querySelector(".brand_container");

const city_img = document.querySelector(".interCity");
const city_title = document.querySelector(".city_title");
const city_description = document.querySelector(".city_description_container");

const locationImg1_animation = "location_img1_animation";
const locationImg2_animation = "location_img2_animation";
const locationImg3_animation = "location_img3_animation";

const locationDescription_animation = "location_description_animation";
const areaDescription_animaiton = "area_description_animation";
const climateDescription_animation = "climate_description_animation";

const cityImg_animation = "city_img_animation";
const cityTitle_animation = "city_title_animation";
const cityDescription_animation = "city_description_animation";

const brandContainer_animation = "brand_container_animation";

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    locationImg1.classList.add(locationImg1_animation);
    locationImg2.classList.add(locationImg2_animation);
    locationImg3.classList.add(locationImg3_animation);

    locationDescription.classList.add(locationDescription_animation);
    areaDescription.classList.add(areaDescription_animaiton);
  }

  if (window.scrollY > 750) {
    climateDescription.forEach((item) =>
      item.classList.add(climateDescription_animation)
    );
  }

  if (window.scrollY > 1400) {
    city_img.classList.add(cityImg_animation);
    city_title.classList.add(cityTitle_animation);
    city_description.classList.add(cityDescription_animation);
  }

  if (window.scrollY > 1750) {
    brandContainer.classList.add(brandContainer_animation);
  }
});
