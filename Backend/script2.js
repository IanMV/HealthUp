document.querySelectorAll('input').forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const nextInput = document.querySelectorAll('input')[index + 1];
        if (nextInput) nextInput.focus();
      }
    });
});

const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const nome = document.getElementById('nome');
const esporte = document.getElementsByName('exercicio');
const lesao = document.getElementsByName('lesao');
const btn = document.getElementById('button');

btn.addEventListener('click', function(){

    if (altura.value === '' || peso.value === '' || nome.value === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; 
    }

    let esporteSelecionado = '';
    let lesaoSelecionada = '';     
    for (let i = 0; i < esporte.length; i++) {
        if (esporte[i].checked) {
            esporteSelecionado = esporte[i].value;
        }
    }
    for (let i = 0; i < lesao.length; i++) {
        if (lesao[i].checked) {
            lesaoSelecionada = lesao[i].value;
        }
    }

    
    if (esporteSelecionado === '' || lesaoSelecionada === '') {
        alert('Por favor, selecione pelo menos um esporte e uma lesão.');
        return; 
    }

    localStorage.setItem('esporteSelecionado', esporteSelecionado);
    localStorage.setItem('lesaoSelecionada', lesaoSelecionada); 
    nome.value = "";
    peso.value = "";
    altura.value = "";
    redirecionar('indexExercicios.html')
});