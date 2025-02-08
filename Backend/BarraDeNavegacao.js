const chat = document.getElementById('chat');

if (!chat) {
  const nomeUsuario = localStorage.getItem('nomeUsuario');
  const segundoNomeUsuario = localStorage.getItem('segundoNomeUsuario');
  const formRespondidoSim = localStorage.getItem('formRespondido');
  let boasVindas = document.getElementById('bemVindo');
  if (formRespondidoSim) {
    boasVindas.innerHTML = '<p class="mensagemBoasVindas">Olá ' + nomeUsuario + " " + segundoNomeUsuario + '!</p>'
  } else {
    boasVindas.innerHTML = '<p class="mensagemBoasVindas">Olá!</p>'
  };
};

document.addEventListener('scroll', function () {
  const nav = document.getElementById('details');
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

let semCliquesSection2 = document.getElementById('semCliquesSection2');
let semCliquesSection1 = document.getElementById('semCliquesSection1');
let semCliquesPrincipal = document.getElementById('semCliquesPrincipal');
let semCliques = document.getElementById('semCliques');
let confirmacao = document.getElementById('confirmacao');
let resposta = localStorage.getItem('formRespondido');
let semScroll = document.getElementById('body');
let principal = document.getElementById('principal');

function formRespondido() {
  if (resposta) {
    confirmacao.innerHTML = '<div class="confirmacao"><p>Você ja preencheu o formulário.</p><p> Deseja preencher novamente?</p><button onclick="confirmacaoRespondido()" class="desistir">Voltar</button><button onclick="irProForm()" class="ir">Ir</button></div>';
    if (semCliques) {
      semCliques.classList.add('semCliques');
    };
    if (semCliquesPrincipal) {
      semCliquesPrincipal.classList.add('semCliques');
    };
    if (semCliquesSection1) {
      semCliquesSection1.classList.add('semCliques');
    };
    if (semCliquesSection2) {
      semCliquesSection2.classList.add('semCliques');
    };
    if (semScroll) {
      semScroll.classList.add('noScroll');
    };
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
  if (semCliques) {
    semCliques.classList.remove('semCliques');
  };
  if (semCliquesPrincipal) {
    semCliquesPrincipal.classList.remove('semCliques');
  }
  if (semCliquesSection1) {
    semCliquesSection1.classList.remove('semCliques');
  }
  if (semCliquesSection2) {
    semCliquesSection2.classList.remove('semCliques');
  };
  if (semScroll) {
    semScroll.classList.remove('noScroll');
  };
};

function irProForm() {
  if (principal) {
    window.location.href = 'src/components/html/Perguntas.html';
  } else {
    window.location.href = 'Perguntas.html';
  };
};