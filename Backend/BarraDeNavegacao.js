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
    });
  } else {
    details.classList.remove("fechado")
    details.classList.add("aberto")
    items.forEach((item) => {
      item.classList.add("show")
    })
  };
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
let semCliques3 = document.getElementById('semCliques3');
let semCliques2 = document.getElementById('semCliques2');
let semCliques = document.getElementById('semCliques');
let confirmacao = document.getElementById('confirmacao');
let resposta = localStorage.getItem('formRespondido');
let semScroll = document.getElementById('body');
let principal = document.getElementById('principal');

console.log(principal);


function formRespondido() {
  if (resposta) {
    confirmacao.innerHTML = '<div class="confirmacao"><p>Você ja preencheu o formulário.<br> Deseja preencher novamente?</p><button onclick="confirmacaoRespondido()" class="">Voltar</button><button onclick="irProForm()">Ir</button></div>';
    semCliques.classList.add('semCliques');
    semCliques2.classList.add('semCliques');
    semCliques3.classList.add('semCliques');
    semScroll.classList.add('noScroll');
  } else {
    if (principal) {
      window.location.href = 'src/components/html/Perguntas.html';
    } else {
      window.location.href = 'Perguntas.html';
    };
  };
};

function confirmacaoRespondido() {
  confirmacao.innerHTML = '';
  semCliques.classList.remove('semCliques');
  semCliques2.classList.remove('semCliques');
  semCliques3.classList.remove('semCliques');
  body.classList.remove('noScroll');
};

function irProForm() {
  if (principal) {
    window.location.href = 'src/components/html/Perguntas.html';
  } else {
    window.location.href = 'Perguntas.html';
  };
};