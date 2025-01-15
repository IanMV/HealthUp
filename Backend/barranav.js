document.addEventListener('scroll', function () {
  const nav = document.getElementById('details');

  /*O número abaixo é a posição em pixels*/
  if (window.scrollY > 70) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const items = document.querySelectorAll(".items");
const summary = document.querySelector("#summary");
const details = document.querySelector("#details");
const fechado = document.querySelector(".fechado");
const aberto = document.querySelector(".aberto");
const show = document.querySelector(".show");

let verificador = false;

summary.addEventListener("click", function () {
  verificador = !verificador;
  if (verificador == false) {
    details.classList.remove("aberto")
    details.classList.add("fechado")
    items.forEach((item) => {
      item.classList.remove("show")
    });} else {
    details.classList.remove("fechado")
    details.classList.add("aberto")
    items.forEach((item) => {
      item.classList.add("show")
    })};
});

const toggleButton = document.getElementById('summary');

toggleButton.addEventListener('click', function () {
  if (details.classList.contains('aberto')) {
    details.classList.remove('aberto');
    details.classList.add('fechado');
    items.forEach((item) => {
      item.classList.remove("show")
    })
  } else {
    details.classList.remove('fechado');
    details.classList.add('aberto');
    items.forEach((item) => {
      item.classList.add("show")
    })
  }
});

document.addEventListener('click', function () {
  const isClickInside = details.contains(event.target) || toggleButton.contains(event.target);
  if (!isClickInside) {
    details.classList.remove('aberto');
    details.classList.add('fechado');
  }
});