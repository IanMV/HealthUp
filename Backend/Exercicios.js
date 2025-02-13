document.addEventListener('DOMContentLoaded', function () {
    const esporteSelecionado = localStorage.getItem('esporteSelecionado');
    const lesaoSelecionada = localStorage.getItem('lesaoSelecionada');
    let paragrafo = document.getElementById('paragrafo');
    let texto = esporteSelecionado;
    if (esporteSelecionado) {
        texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        let textoEsporte = '';
        if (esporteSelecionado === 'ciclismo') {
            textoEsporte = '<div><h2>' + texto + '</h2></div><div><p>O ciclismo é uma atividade física versátil que pode ser praticada em diversos ambientes e oferece vários benefícios.</p></div> <div>' +
                '<h4>Benefícios:</h4> ' +
                '<ul><li>- Melhora a resistência cardiovascular. </li>' +
                '<li>- Ajuda a tonificar as pernas, glúteos e abdômen. </li>' +
                '<li>- É uma atividade de baixo impacto, protegendo as articulações.</li> ' +
                '<li>- Auxilia na perda de peso e queima de calorias. </li>' +
                '<li>- Reduz o estresse e melhora o humor. </li>' +
                '<li>- Desenvolve equilíbrio e coordenação.</li></ul></div>' +
                '<div><h4>Músculos trabalhados:</h4>' +
                '<ul><li>- Pernas (quadríceps, isquiotibiais, panturrilhas).</li> ' +
                '<li>- Glúteos.</li>' +
                '<li>- Abdômen. </li></ul></div>' +
                '<div><h4>Como começar:</h4>' +
                '<p>Inicie com percursos curtos e planos, com uma bicicleta adequada ao seu tamanho e nível de habilidade. Gradualmente, aumente a distância e a intensidade conforme seu corpo se adapta.</p></div>';
        } else if (esporteSelecionado === 'natação') {
            textoEsporte = '<div><h2>' + texto + '</h2></div><div><p>A natação é um dos esportes mais completos, proporcionando um excelente treino para o corpo todo, além de ser de baixo impacto.<p></div>' +
                '<div><h4>Benefícios:</h4> ' +
                '<ul><li>- Melhora a capacidade respiratória.</li> ' +
                '<li>- Fortalece os músculos de todo o corpo. </li>' +
                '<li>- Baixo impacto, ideal para quem tem problemas nas articulações.</li>' +
                '<li>- A resistência da água proporciona um treino mais intenso. </li>' +
                '<li>- Ajuda a aliviar o estresse e melhora a flexibilidade. </li>' +
                '</ul></div><div><h4>Músculos trabalhados:</h4>' +
                '<ul><li>- Ombros, costas, peito. </li>' +
                '<li>- Pernas (quadríceps, isquiotibiais).</li> ' +
                '<li>- Abdômen.</li></ul></div>' +
                '<div><h4>Como começar:</h4>' +
                '<p>Procure uma piscina com supervisão profissional, especialmente se você é iniciante. Comece com nados simples, como crawl ou peito, e aumente a intensidade e a duração conforme ganha confiança.</p></div>';
        } else if (esporteSelecionado === 'caminhada') {
            textoEsporte = '<div><h2>' + texto + '</h2></div><div><p>A caminhada é uma das atividades físicas mais acessíveis e benéficas, com impactos positivos tanto no corpo quanto na mente.</p></div>' +
                '<div><h4>Benefícios:</h4>' +
                '<ul><li>- Melhora a saúde cardiovascular.</li>' +
                '<li>- Auxilia na perda de peso e controle de peso.</li>' +
                '<li>- Ajuda a melhorar o humor e reduzir o estresse.</li>' +
                '<li>- Pode ser praticada em praticamente qualquer lugar. </li>' +
                '<li>- Ajuda a prevenir doenças crônicas, como hipertensão e diabetes.</li></ul></div>' +
                '<div><h4>Músculos trabalhados:</h4>' +
                '<ul><li>- Pernas (quadríceps, isquiotibiais, panturrilhas).</li> ' +
                '<li>- Glúteos. </li></ul></div>' +
                '<div><h4>Como começar:</h4>' +
                '<p>Comece caminhando 15 a 30 minutos por dia em um ritmo confortável. Use calçados apropriados e aumente gradualmente a distância e a velocidade conforme seu condicionamento melhora.</p></div>';
        } else if (esporteSelecionado === 'volei') {
            textoEsporte = '<div><h2>' + texto + '</h2></div><div><p>O vôlei é um esporte dinâmico que desenvolve habilidades motoras, agilidade e força, enquanto promove o trabalho em equipe.</p></div>' +
                '<div><h4>Benefícios:</h4>' +
                '<ul><li>- Melhora a coordenação motora e a agilidade.</li>' +
                '<li>- Fortalece braços, pernas e core.</li>' +
                '<li>- Desenvolve a capacidade de concentração e reflexos rápidos.</li>' +
                '<li>- Ajuda a melhorar o trabalho em equipe e a interação social.</li></ul></div>' +
                '<div><h4>Músculos trabalhados:</h4>' +
                '<ul><li>- Braços e ombros.</li>' +
                '<li>- Pernas (quadríceps, isquiotibiais).</li>' +
                '<li>- Abdômen (core).</li></ul></div>' +
                '<div><h4>Como começar:</h4>' +
                '<p>Encontre uma quadra local ou participe de uma aula para iniciantes. Pratique fundamentos como saques, passes e cortadas, e envolva-se em jogos mais intensos à medida que melhora suas habilidades.</p></div>';
        } else if (esporteSelecionado === 'futebol') {
            textoEsporte = '<div><h2>' + texto + '</h2></div><div><p>O futebol é uma combinação de condicionamento físico, habilidades técnicas e trabalho em equipe, ideal para quem deseja melhorar a resistência e a coordenação.</p></div>' +
                '<div><h4>Benefícios:</h4>' +
                '<ul><li>- Melhora a resistência cardiovascular.</li>' +
                '<li>- Fortalece os músculos das pernas e core.</li>' +
                '<li>- Desenvolve habilidades sociais e de estratégia.</li>' +
                '<li>- Aumenta a agilidade e coordenação motora.</li></ul></div>' +
                '<div><h4>Músculos trabalhados:</h4>' +
                '<ul><li>- Pernas (quadríceps, panturrilhas, isquiotibiais).</li>' +
                '<li>- Glúteos.</li>' +
                '<li>- Abdômen.</li></ul></div>' +
                '<div><h4>Como começar:</h4>' +
                '<p>Participe de partidas informais com amigos ou entre em uma academia de futebol. Pratique habilidades como passes, dribles e chutes para melhorar sua técnica.</p></div>';
        } else if (esporteSelecionado === 'basquete') {
            textoEsporte = '<div><h2>' + texto + '</h2></div><div><p>O basquete é um esporte que exige agilidade, força e coordenação, sendo excelente para o condicionamento físico geral.</p></div> ' +
                '<div><h4>Benefícios:</h4>' +
                '<ul><li>- Melhora a agilidade e explosão muscular.</li>' +
                '<li>- Fortalece as pernas e o core.</li>' +
                '<li>- Desenvolve coordenação motora e controle de bola.</li>' +
                '<li>- Melhora a capacidade cardiovascular.</li></ul></div>' +
                '<div><h4>Músculos trabalhados:</h4>' +
                '<ul><li>- Pernas (quadríceps, panturrilhas, isquiotibiais).</li>' +
                '<li>- Braços e ombros.</li>' +
                '<li>- Abdômen. </li></ul></div>' +
                '<div><h4>Como começar:</h4>' +
                '<p>Procure uma quadra de basquete e pratique fundamentos como dribles, passes e arremessos. Participe de jogos informais e aumente a intensidade à medida que sua técnica e resistência melhoram.</p></div>';
        };

        let textoLesao = '';
        if (lesaoSelecionada === 'perna') {
            textoLesao = '<p class="lesao"> Você informou que tem lesão nos membros inferiores. Consulte um médico antes de praticar. Certos esportes podem agravar lesões nas pernas, então é importante seguir as orientações de um profissional de saúde para adaptar os exercícios ou escolher atividades de baixo impacto, como natação ou ciclismo estacionário.</p>';
        } else if (lesaoSelecionada === 'bracos') {
            textoLesao = '<p class="lesao"> Você informou que tem lesão nos membros superiores. Consulte um médico antes de praticar. Esportes que exigem muito dos braços, como o vôlei ou o basquete, podem exigir adaptações ou um período de descanso para evitar a piora da lesão.</p>';
        } else if (lesaoSelecionada === 'nao') {
            textoLesao = '';
        };

        paragrafo.innerHTML = textoEsporte + textoLesao;
    };
});