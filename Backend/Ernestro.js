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
}

console.log("User ID: ", userId);

function Admensagem(quem, texto) {
    const mensagem = document.createElement('div');
    mensagem.innerText = texto.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    if (!(quem === "ia")) {
        let final = Array.from(texto);
        let posicao = 0;
        let contadorLetras = 0;
        for (letra of final) {
            posicao += 1;
            contadorLetras += 1;
            if (contadorLetras == 30) {
                letra -= 1;
                final.splice(posicao, 0, '<br>');
                contadorLetras = 0;
            };
        };
        mensagem.textContent = final.join("");
    };

    mensagem.className = quem === "ia" ? "mensagemIa" : "mensagemUser";

    messagesDiv.appendChild(mensagem);

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

Admensagem("ia", "Oi! Eu sou o Ernestro, seu mascote virtual. Estou aqui para te ajudar com dicas de exercícios personalizados.🐶");
Admensagem("ia", "Para começar, qual é o seu exercício favorito ou o tipo de atividade física que você mais gosta?");

async function SendMensagem() {
    mensagemEspera = false;
    sendButton.classList.remove('enviar')
    sendButton.classList.add('semEnviar')
    if (!userInput.value) {
        return;
    };

    Admensagem('user', userInput.value);
    let mensagemReal = userInput.value
    userInput.value = '';

    try {
        const response = await fetch("http://localhost:5050/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: mensagemReal, userId }),
            mode: 'cors',
        });
    
        const data = await response.json();
        Admensagem("ia", data.response);
        mensagemEspera = true
        console.log(mensagemEspera)
        setTimeout(mensagemNaEspera(), 100)
    } catch (error) {
        Admensagem("ia", "Desculpe, algo deu errado. Tente novamente mais tarde.");
        console.log(error);
        mensagemEspera = true
        console.log(mensagemEspera)
        setTimeout(mensagemNaEspera(), 100)
    };
   
};

function mensagemNaEspera() {
    if (!(userInput.value == '')) {
        sendButton.classList.remove('semEnviar')
        sendButton.classList.add('enviar');
    }

}

let mensagemEspera = true;

sendButton.addEventListener('click', () => {
    SendMensagem();
    removeCorBotao();
});

userInput.addEventListener("keydown", (event) => {
    if (event.key === 'Backspace') {
        setTimeout(removeCorBotao, 2);
    };
    if (event.key === 'Enter') {
        setTimeout(() => {
            if (mensagemEspera) {
                SendMensagem();
                sendButton.classList.remove('enviar');
                sendButton.classList.add('semEnviar');
            }
        }, 100);
    };
});

userInput.addEventListener("keypress", (event) => {

    let mensagemEnviara = userInput.value.trim();

    if (mensagemEnviara == '') {
        mensagemEnviara = (event.key);
        if (!(event.key === 'Enter')) {
            sendButton.classList.remove('semEnviar')
            sendButton.classList.add('enviar');
            mensagemEnviara = mensagemEnviara.toUpperCase();
            mensagemFormatada = Array.from(mensagemEnviara);
            mensagemFormatada = mensagemFormatada.join("");
            userInput.value = mensagemFormatada;
            console.log(mensagemEspera)
            if (!mensagemEspera) {
                sendButton.classList.remove('enviar');
                sendButton.classList.add('semEnviar');
            }
            setTimeout(valor, 1);

        };
    };

});

function valor() {
    let mensagemFormatada = userInput.value;
    mensagemFormatada = Array.from(mensagemFormatada);
    mensagemFormatada.splice(1, 1);
    mensagemFormatada = mensagemFormatada.join("");
    userInput.value = mensagemFormatada;
};

function removeCorBotao() {
    if (userInput.value == '') {
        sendButton.classList.remove('enviar');
        sendButton.classList.add('semEnviar');
    };
};