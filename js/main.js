const buttonMark = document.querySelector(".header__mark-all");
const container = document.querySelectorAll(".cards-container");
let count = document.querySelector(".header__count");
let points = document.querySelectorAll(".point");

count.innerText = points.length;

buttonMark.addEventListener("click", () => {
  points.forEach((element) => {
    element.classList.remove("point");
    count.innerText = 0;
  });
});

container.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    console.log(index);
    points[index].classList.remove("point");
    points_2 = document.querySelectorAll(".point");
    count.innerText = points_2.length;
  });
});
