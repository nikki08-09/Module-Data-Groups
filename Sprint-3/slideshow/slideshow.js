const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
const imgElement = document.getElementById("carousel-img");
const backwardBtn = document.getElementById("backward-btn");
const forwardBtn = document.getElementById("forward-btn");
const autoBackwardBtn = document.getElementById("auto-btn");
const stopBtn = document.getElementById("stop-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");

let index = 0;
let intervalId;
function updateImage() {
  imgElement.src = images[index];
}
function showNextImage() {
  index = (index + 1) % images.length;
  updateImage();
}
function showPreviousImage() {
  index = (index - 1 + images.length) % images.length;
  updateImage();
}
function startAutoForward() {
  stopAuto();
  intervalId = setInterval(showNextImage, 1000);
}
function startAutoBackward() {
  stopAuto();
  intervalId = setInterval(showPreviousImage, 1000);
}
function stopAuto() {
  clearInterval(intervalId);
}
backwardBtn.addEventListener("click", showPreviousImage);
forwardBtn.addEventListener("click", showNextImage);
autoBackwardBtn.addEventListener("click", startAutoBackward);
autoForwardBtn.addEventListener("click", startAutoForward);
stopBtn.addEventListener("click", stopAuto);

// Write your code here
