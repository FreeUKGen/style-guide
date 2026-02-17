// const containerEl = document.querySelector(".container");
const img = document.querySelector(".image");
const sub = document.querySelector(".sub-nav-left");
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");
const curImgNum = document.querySelector(".cur-img-num");
const totalImgNumDOM = document.querySelector(".total-img-num");
const brightnessBtn = document.querySelector(".brightness");
const contrastBtn = document.querySelector(".contrast");
const rotateBtn = document.querySelector(".rotate");
const container = document.getElementById("image-container");
const zoom = document.querySelectorAll(".zoom");
// const table = document.querySelector("table");
// const tableScroll = document.querySelector(".table-scroll");
const img1 = {
  id: 1,
  src: "./img1.jpeg",
};
const img2 = {
  id: 2,
  src: "./img2.jpeg",
};
const img3 = {
  id: 3,
  src: "./img3.jpg",
};

const img4 = {
  id: 4,
  src: "./img4.jpg",
};
const img5 = {
  id: 5,
  src: "./img5.jpg",
};

const imgs = [img1, img2, img3, img4, img5];
const totalImgCount = imgs.length;
totalImgNumDOM.textContent = totalImgCount.toString();
let num = 1;
let brightnessIncrement = 0.04;
let saturateIncrement = 5;
let position = 0;
let z = 1;
function changeImgForward() {
  img.style.transform = `scale(1)`;
  img.style.filter = `brightness(1)`;
  img.style.transform = `rotate(0deg)`;
  if (num > totalImgCount - 1 || num < 1) return;
  num++;
  curImgNum.textContent = num.toString();
  img.src = imgs[num - 1].src;

  return;
}

function changeImgBack() {
  img.style.filter = `brightness(1)`;
  img.style.transform = `scale(1)`;
  img.style.transform = `rotate(0deg)`;

  if (num > totalImgCount || num <= 1) return;
  num--;
  curImgNum.textContent = num.toString();
  img.src = imgs[num - 1].src;
  console.log(num, imgs[num - 1].src);

  return;
}

function changeBrightness() {
  brightnessIncrement += 0.025;
  return (img.style.filter = `brightness(${1 + brightnessIncrement})`);
}

function changeContrast() {
  saturateIncrement += 3;
  console.log(saturateIncrement);
  return (img.style.filter = `saturate(${1 + saturateIncrement}%)`);
}

function rotate() {
  position += 90;

  container.classList = "rotate" + position;
  img.style.transition = "transform 0.5s ease";
  console.log(position);
  console.log(container.classList);
  // const containCoords = container.getBoundingClientRect();
  // const imgCoords = img.getBoundingClientRect();

  img.style.transform = `rotate(${position}deg)`;

  return;
}

function zoomFn(e) {
  e.preventDefault();
  if (e.target.id === "zoom-in") img.style.transform = `scale(${(z += 0.05)})`;
  else if (e.target.id === "zoom-out" && z > 1)
    img.style.transform = `scale(${(z -= 0.05)})`;

  return;
}

btnRight.addEventListener("click", changeImgForward);
btnLeft.addEventListener("click", changeImgBack);
brightnessBtn.addEventListener("click", changeBrightness);
contrastBtn.addEventListener("click", changeContrast);
rotateBtn.addEventListener("click", () => rotate(90));
zoom.forEach((x) => x.addEventListener("click", zoomFn));
