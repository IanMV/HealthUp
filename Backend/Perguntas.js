function nextForm(current) {
    let currentForm = document.getElementById(`form${current}`);
    let nextFormEl = document.getElementById(`form${current + 1}`);
  
    if (current + 1 === 2) {
      if (altura.value === '' || peso.value === '' || nome.value === '') {
        alerta.innerHTML = '<div class="alertaOk"><p>Preencha todos os dados.</p><button class="botaoOk" onclick="voltar()">Ok</button></div>';
        semCliques.classList.add('semCliques');
        return;
      };
    };
    
    if (current + 1 === 3) {
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
     alerta.innerHTML = '<div class="alertaOk"><p>Preencha todos os dados.</p><button class="botaoOk" onclick="voltar()">Ok</button></div>';
     semCliques.classList.add('semCliques');
        return;
      };
      
      localStorage.setItem('formRespondido', true);
      localStorage.setItem('esporteSelecionado', esporteSelecionado);
      localStorage.setItem('lesaoSelecionada', lesaoSelecionada);
      localStorage.setItem('nomeUsuario', nome.value);
      localStorage.setItem('segundoNomeUsuario', segundoNome.value);
      
      nome.value = "";
      peso.value = "";
      altura.value = "";
      
      redirecionar();
    };
    
    if (nextFormEl) {
      currentForm.classList.add("hide");
      setTimeout(() => {
        currentForm.classList.remove("active", "hide");
        nextFormEl.classList.add("active");
      }, 0);
    };
  };
  
  function backForm(current) {
    let currentForm = document.getElementById(`form${current}`);
    let previousForm = document.getElementById(`form${current - 1}`);
    if (previousForm) {
      currentForm.classList.add("hide");
      setTimeout(() => {
        currentForm.classList.remove("active", "hide");
        previousForm.classList.add("active");
      }, 0);
    };
  };
  
  document.addEventListener('keydown', (event) => {
    if (event.key === "Backspace") {
      console.log("Formulário resetado.");
      localStorage.clear();
    }
  });
  
  const altura = document.getElementById('altura');
  const peso = document.getElementById('peso');
  const nome = document.getElementById('nome');
  const esporte = document.getElementsByName('exercicio');
  const lesao = document.getElementsByName('lesao');
  const button = document.getElementById('button');
  const segundoNome = document.getElementById('segundoNome');
  const alerta = document.getElementById('alerta');
  const semCliques = document.getElementById('semCliques');
  
  button.addEventListener('click', function () {
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
    localStorage.setItem('nomeUsuario', nome.value);
    localStorage.setItem('segundoNomeUsuario', segundoNome.value);
    
    // Limpa os campos (opcional)
    nome.value = "";
    peso.value = "";
    altura.value = "";
    
    redirecionar();
   
  });
  
  function confirmarSaida() {
    alerta.innerHTML = '<div class="divAlerta"><div><p>Tem certeza que deseja sair?<br><span> O formulário será resetado.</span></p><div><button class="voltar" onclick="voltar()">Voltar</button><button onclick="paginaPrincipal()" class="sair">Sair</button></div></div></div>';
    semCliques.classList.add('semCliques');
  };
  
  function voltar() {
    alerta.innerHTML = '';
    semCliques.classList.remove('semCliques');
  };
  
  function redirecionar() {
    window.location.href = 'Exercicios.html';
  };
  
  function paginaPrincipal() {
    window.location.href = '../../../../index.html';
  };
  