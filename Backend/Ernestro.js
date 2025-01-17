const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

function generateUserId() {
    return 'user-' + Date.now();
}


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
        let final = Array.from(texto)
        console.log(texto);
        let posicao = 0;
        let contadorLetras = 0;
        for (letra of final) {
            posicao += 1;
            console.log(posicao)
            contadorLetras += 1;
            if (contadorLetras == 60) {
                letra -= 1;
            final.splice(posicao, 0, '<br>');
                contadorLetras = 0;
            };
        };
        mensagem.innerHTML = final.join("");
    };


    mensagem.className = quem === "ia" ? "mensagemIa" : "mensagemUser";

    messagesDiv.appendChild(mensagem);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

Admensagem("ia", "Oi! Eu sou o Ernestro, seu mascote virtual. Estou aqui para te ajudar com dicas de exercícios personalizados. 😊🐶");
Admensagem("ia", "Para começar, qual é o seu exercício favorito ou o tipo de atividade física que você mais gosta?");

async function SendMensagem() {
    const mensagemUser = userInput.value.trim();

    if (!mensagemUser) {
        return;
    }
    Admensagem('user', mensagemUser);
    userInput.value = "";

    try {
        const response = await fetch("http://localhost:5050/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: mensagemUser, userId }),
            mode: 'cors',
        });

        const data = await response.json();
        Admensagem("ia", data.response);
    } catch (error) {
        Admensagem("ia", "Desculpe, algo deu errado. Tente novamente mais tarde");
        console.log(error);
    }
}

sendButton.addEventListener('click', SendMensagem);

userInput.addEventListener("keydown", (event) => {
    
    let mensagemEnviara = userInput.value.trim();
    if (mensagemEnviara == '' || 1 == mensagemEnviara.length) {
       if (event.key === "Backspace") {sendButton.classList.remove('enviar');

      return;  
    }else {
        sendButton.classList.add('enviar');
    };
    }
    
    mensagemEnviara = Array.from(mensagemEnviara);
    let primeiraLetra = mensagemEnviara[0].toUpperCase();
    mensagemEnviara.splice(0, 1, primeiraLetra);
    userInput.value = mensagemEnviara.join("");
    if (event.shiftKey && event.key === "Enter") {
        let quebraLinha = Array.from(userInput.value);
        quebraLinha.push("<br>");
        userInput.value = quebraLinha.join("");
    };
    // Se a tecla Shift for pressionada, não fazemos nada e retornamos
    if (event.shiftKey) {
        return;
    };

    // Quando Enter for pressionado, envia a mensagem

});
