const targetsRight = document.querySelectorAll('[data-anime="right"]');
const targetsDown = document.querySelectorAll('[data-anime="down"]');
const targetsLeft = document.querySelectorAll('[data-anime="left"]');
function animeScroll() {
    const windowTop = window.pageYOffset + 170;
    console.log("Window Top:", windowTop); 
    targetsRight.forEach(function(element) {
        console.log("Right Element:", element); 
        if (windowTop > element.offsetTop) {
            element.classList.add("animation");
        } else {
            element.classList.remove("animation");
        }
    });
}
function animeScroll2() {
    const windowTop2 = window.pageYOffset + -1200;
    console.log("Window Top for Down:", windowTop2); 
    targetsDown.forEach(function(element) {
        console.log("Down Element:", element); 
        if (windowTop2 > element.offsetTop) {
            element.classList.add("animation2");
        } else {
            element.classList.remove("animation2");
        }
    });
}
function animeScroll3() {
    const windowTop3 = window.pageYOffset + -800;
    console.log("Window Left to Right:", windowTop3); 
    targetsLeft.forEach(function(element) {
        console.log("Left:", element); 
        if (windowTop3 > element.offsetTop) {
            element.classList.add("animation3");
        } else {
            element.classList.remove("animation3");
        }
    });
}


window.addEventListener('scroll', function() {
    animeScroll();
    animeScroll2();
    animeScroll3();
});

document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.getElementById('titulo');
    const paragrafo = document.getElementById('texto');
    

    const esporteSelecionado = localStorage.getItem('esporteSelecionado');
    const lesaoSelecionada = localStorage.getItem('lesaoSelecionada');

    if (esporteSelecionado) {
        // Coloca a primeira letra do esporte em maiúscula
        titulo.innerHTML = esporteSelecionado.charAt(0).toUpperCase() + esporteSelecionado.slice(1);
        
        let textoEsporte = '';
        if (esporteSelecionado === 'ciclismo') {
            textoEsporte = 'O ciclismo é uma atividade física versátil que pode ser praticada em diversos ambientes e oferece vários benefícios. <br><br>' +
                           '<strong>Benefícios:</strong> <br>' +
                           '- Melhora a resistência cardiovascular. <br>' +
                           '- Ajuda a tonificar as pernas, glúteos e abdômen. <br>' +
                           '- É uma atividade de baixo impacto, protegendo as articulações. <br>' +
                           '- Auxilia na perda de peso e queima de calorias. <br>' +
                           '- Reduz o estresse e melhora o humor. <br>' +
                           '- Desenvolve equilíbrio e coordenação. <br><br>' +
                           '<strong>Músculos trabalhados:</strong> <br>' +
                           '- Pernas (quadríceps, isquiotibiais, panturrilhas). <br>' +
                           '- Glúteos. <br>' +
                           '- Abdômen. <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Inicie com percursos curtos e planos, com uma bicicleta adequada ao seu tamanho e nível de habilidade. Gradualmente, aumente a distância e a intensidade conforme seu corpo se adapta.';
        } else if (esporteSelecionado === 'natação') {
            textoEsporte = 'A natação é um dos esportes mais completos, proporcionando um excelente treino para o corpo todo, além de ser de baixo impacto. <br><br>' +
                           '<strong>Benefícios:</strong> <br>' +
                           '- Melhora a capacidade respiratória. <br>' +
                           '- Fortalece os músculos de todo o corpo. <br>' +
                           '- Baixo impacto, ideal para quem tem problemas nas articulações. <br>' +
                           '- A resistência da água proporciona um treino mais intenso. <br>' +
                           '- Ajuda a aliviar o estresse e melhora a flexibilidade. <br><br>' +
                           '<strong>Músculos trabalhados:</strong> <br>' +
                           '- Ombros, costas, peito. <br>' +
                           '- Pernas (quadríceps, isquiotibiais). <br>' +
                           '- Abdômen. <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Procure uma piscina com supervisão profissional, especialmente se você é iniciante. Comece com nados simples, como crawl ou peito, e aumente a intensidade e a duração conforme ganha confiança.';
        } else if (esporteSelecionado === 'caminhada') {
            textoEsporte = 'A caminhada é uma das atividades físicas mais acessíveis e benéficas, com impactos positivos tanto no corpo quanto na mente. <br><br>' +
                           '<strong>Benefícios:</strong> <br>' +
                           '- Melhora a saúde cardiovascular. <br>' +
                           '- Auxilia na perda de peso e controle de peso. <br>' +
                           '- Ajuda a melhorar o humor e reduzir o estresse. <br>' +
                           '- Pode ser praticada em praticamente qualquer lugar. <br>' +
                           '- Ajuda a prevenir doenças crônicas, como hipertensão e diabetes. <br><br>' +
                           '<strong>Músculos trabalhados:</strong> <br>' +
                           '- Pernas (quadríceps, isquiotibiais, panturrilhas). <br>' +
                           '- Glúteos. <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Comece caminhando 15 a 30 minutos por dia em um ritmo confortável. Use calçados apropriados e aumente gradualmente a distância e a velocidade conforme seu condicionamento melhora.';
        } else if (esporteSelecionado === 'volei') {
            textoEsporte = 'O vôlei é um esporte dinâmico que desenvolve habilidades motoras, agilidade e força, enquanto promove o trabalho em equipe. <br><br>' +
                           '<strong>Benefícios:</strong> <br>' +
                           '- Melhora a coordenação motora e a agilidade. <br>' +
                           '- Fortalece braços, pernas e core. <br>' +
                           '- Desenvolve a capacidade de concentração e reflexos rápidos. <br>' +
                           '- Ajuda a melhorar o trabalho em equipe e a interação social. <br><br>' +
                           '<strong>Músculos trabalhados:</strong> <br>' +
                           '- Braços e ombros. <br>' +
                           '- Pernas (quadríceps, isquiotibiais). <br>' +
                           '- Abdômen (core). <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Encontre uma quadra local ou participe de uma aula para iniciantes. Pratique fundamentos como saques, passes e cortadas, e envolva-se em jogos mais intensos à medida que melhora suas habilidades.';
        } else if (esporteSelecionado === 'futebol') {
            textoEsporte = 'O futebol é uma combinação de condicionamento físico, habilidades técnicas e trabalho em equipe, ideal para quem deseja melhorar a resistência e a coordenação. <br><br>' +
                           '<strong>Benefícios:</strong> <br>' +
                           '- Melhora a resistência cardiovascular. <br>' +
                           '- Fortalece os músculos das pernas e core. <br>' +
                           '- Desenvolve habilidades sociais e de estratégia. <br>' +
                           '- Aumenta a agilidade e coordenação motora. <br><br>' +
                           '<strong>Músculos trabalhados:</strong> <br>' +
                           '- Pernas (quadríceps, panturrilhas, isquiotibiais). <br>' +
                           '- Glúteos. <br>' +
                           '- Abdômen. <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Participe de partidas informais com amigos ou entre em uma academia de futebol. Pratique habilidades como passes, dribles e chutes para melhorar sua técnica.';
        } else if (esporteSelecionado === 'basquete') {
            textoEsporte = 'O basquete é um esporte que exige agilidade, força e coordenação, sendo excelente para o condicionamento físico geral. <br><br>' +
                           '<strong>Benefícios:</strong> <br>' +
                           '- Melhora a agilidade e explosão muscular. <br>' +
                           '- Fortalece as pernas e o core. <br>' +
                           '- Desenvolve coordenação motora e controle de bola. <br>' +
                           '- Melhora a capacidade cardiovascular. <br><br>' +
                           '<strong>Músculos trabalhados:</strong> <br>' +
                           '- Pernas (quadríceps, panturrilhas, isquiotibiais). <br>' +
                           '- Braços e ombros. <br>' +
                           '- Abdômen. <br><br>' +
                           '<strong>Como começar:</strong> <br>' +
                           'Procure uma quadra de basquete e pratique fundamentos como dribles, passes e arremessos. Participe de jogos informais e aumente a intensidade à medida que sua técnica e resistência melhoram.';
        }
        let textoLesao = '';
        if (lesaoSelecionada === 'perna') {
            textoLesao = ' Você informou que tem lesão nos membros inferiores. Consulte um médico antes de praticar. Certos esportes podem agravar lesões nas pernas, então é importante seguir as orientações de um profissional de saúde para adaptar os exercícios ou escolher atividades de baixo impacto, como natação ou ciclismo estacionário.';
        } else if (lesaoSelecionada === 'bracos') {
            textoLesao = ' Você informou que tem lesão nos membros superiores. Consulte um médico antes de praticar. Esportes que exigem muito dos braços, como o vôlei ou o basquete, podem exigir adaptações ou um período de descanso para evitar a piora da lesão.';
        } else if (lesaoSelecionada === 'nao') {
            textoLesao = '';
        }

        
        paragrafo.innerHTML = textoEsporte + '<br><br>' + textoLesao;
    }
    
});