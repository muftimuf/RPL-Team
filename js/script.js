// Preloader
var loader = document.querySelector(".loader");
var konten = document.querySelector(".konten");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
  konten.classList.add("overflow-scroll");
}

// Tilt JS
VanillaTilt.init(document.querySelectorAll(".foto-wrap"), {
  max: 10,
  speed: 400,
  glare: true,
  gyroscope: true,
  gyroscopeMinAngleX: -45,
  gyroscopeMaxAngleX: 45,
  gyroscopeMinAngleY: -45,
  gyroscopeMaxAngleY: 45,
});

// AOS
AOS.init();

AOS.init({
  once: true,
});
