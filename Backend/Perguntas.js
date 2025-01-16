/*document.querySelectorAll('input').forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const nextInput = document.querySelectorAll('input')[index + 1];
            if (nextInput) nextInput.focus();
        }
    });
});*/

const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const nome = document.getElementById('nome');
const esporte = document.getElementsByName('exercicio');
const lesao = document.getElementsByName('lesao');
const button = document.getElementById('button');

button.addEventListener('click', function () {
    if (altura.value === '' || peso.value === '' || nome.value === '') {
        alerta.innerHTML = '<div class="alertaOk"><p>Preencha todos os dados.</p><button class="botaoOk"  onclick="voltar()">Ok</button></div>'
        return;
    };

    let esporteSelecionado = '';
    let lesaoSelecionada = '';
    for (let i = 0; i < esporte.length; i++) {
        if (esporte[i].checked) {
            esporteSelecionado = esporte[i].value;
        };
    };
    for (let i = 0; i < lesao.length; i++) {
        if (lesao[i].checked) {
            lesaoSelecionada = lesao[i].value;
        };
    };


    if (esporteSelecionado === '' || lesaoSelecionada === '') {
        alert('Por favor, selecione pelo menos um esporte e uma lesão.');
        return;
    };
    localStorage.setItem('formRespondido', true);
    localStorage.setItem('esporteSelecionado', esporteSelecionado);
    localStorage.setItem('lesaoSelecionada', lesaoSelecionada);
    nome.value = "";
    peso.value = "";
    altura.value = "";
    redirecionar();
});

let alerta = document.getElementById('alerta');
let semCliques = document.getElementById('semCliques')

function confirmarSaida() {
    alerta.innerHTML = '<div class="divAlerta"><p>Tem certeza que deseja sair?<span> O formulário será resetado.</span></p><button class="voltar" onclick="voltar()">Voltar</button><button class="sair"><a class="linkSair" href="../../../index.html">Sair</a></button></div>';
    semCliques.classList.add('semCliques');
}

function voltar() {
    alerta.innerHTML = '';
    semCliques.classList.remove('semCliques');
}

function redirecionar() {
    url = 'Exercicios.html';
    window.location.href = url;
};
