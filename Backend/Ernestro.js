const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

function generateUserId() {
    return 'user-' + Date.now();
};

let userId = localStorage.getItem("userId");

if (!userId) {
    userId = generateUserId();
    localStorage.setItem("userId", userId);
};

console.log("User ID: ", userId);

function Admensagem(quem, texto) {
    const mensagem = document.createElement('div');

    if (quem === 'user') {
        mensagem.innerText = texto;
    } else {
        mensagem.innerHTML = texto.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, "<br>");
    };

    mensagem.className = quem === "ia" ? "mensagemIa" : "mensagemUser";

    messagesDiv.appendChild(mensagem);

    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    function contarLinhas(elemento) {
        const alturaLinha = parseFloat(getComputedStyle(elemento).lineHeight);
        const alturaElemento = elemento.clientHeight;
        return Math.round(alturaElemento / alturaLinha);
    };
    const elementos = document.getElementsByClassName("mensagemUser");
    if (elementos.length > 0) {
        const primeiroElemento = elementos[elementos.length - 1];
        if (contarLinhas(primeiroElemento) < 2) {
            primeiroElemento.classList.add('textoDireita');
        };
    };
};

Admensagem("ia", "Oi! Eu sou o Ernestro, seu mascote virtual. Estou aqui para te ajudar com dicas de exercícios personalizados.🐶");
Admensagem("ia", "Para começar, qual é o seu exercício favorito ou o tipo de atividade física que você mais gosta?");

async function SendMensagem() {
    mensagemEspera = false;
    sendButton.classList.remove('enviar');
    sendButton.classList.add('semEnviar');
    if (!userInput.value) {
        return;
    };

    Admensagem('user', userInput.value);
    let mensagemReal = userInput.value;
    userInput.value = '';

    try {
        const response = await fetch("https://teste-bgju.onrender.com/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: mensagemReal, userId }),
            mode: 'cors',
        });

        const data = await response.json();
        Admensagem("ia", data.response);
        mensagemEspera = true;
        setTimeout(mensagemNaEspera(), 100);
    } catch (error) {
        Admensagem("ia", "Desculpe, algo deu errado. Tente novamente mais tarde.");
        console.log(error);
        mensagemEspera = true;
        setTimeout(mensagemNaEspera(), 100);
    };

};

function mensagemNaEspera() {
    if (!(userInput.value == '')) {
        sendButton.classList.remove('semEnviar');
        sendButton.classList.add('enviar');
    };
};

let mensagemEspera = true;

sendButton.addEventListener('pointerdown', () => {
    SendMensagem();
    removeCorBotao();
});


userInput.addEventListener("keydown", (event) => {
    if (event.key === 'Backspace') {
        setTimeout(removeCorBotao, 2);
    };
    if (event.key === 'Enter') {
        if (!(userInput.value === '')) {
            setTimeout(() => {
                if (mensagemEspera) {
                    SendMensagem();
                    sendButton.classList.remove('enviar');
                    sendButton.classList.add('semEnviar');
                };
            }, 100);
        }
    };
});

userInput.addEventListener('input', (event) => {
    sendButton.classList.remove('semEnviar');
                    sendButton.classList.add('enviar');
    if (userInput.value.length > 1) {
        userInput.value = userInput.value
    } else {
        userInput.value = userInput.value.charAt(0).toUpperCase() + userInput.value.slice(1);
    };
    if (!mensagemEspera) {
        sendButton.classList.remove('enviar');
        sendButton.classList.add('semEnviar');
    };
    removeCorBotao();
});

function removeCorBotao() {
    if (userInput.value == '') {
        sendButton.classList.remove('enviar');
        sendButton.classList.add('semEnviar');
    };
};