const map = L.map('map').setView([],)
// spash screen
document.addEventListener('deviceready', function () {
    setTimeout(function () {
        navigator.splashscreen.hide();
    }, 3000); // 3 segundos de exibição
})

permissions.checkPermission(permissions.ACCESS_FINE_LOCATION, function (status) {
    if (!status.hasPermission) {
        permissions.requestPermission(permissions.ACCESS_FINE_LOCATION);
    }
});

permissions.checkPermission(permissions.SEND_SMS, function (status) {
    if (!status.hasPermission) {
        permissions.requestPermission(permissions.SEND_SMS);
    }
});

// Enviar SMS

function enviarSMS() {
    const savedContacts = JSON.parse(localStorage.getItem("contactPhone")) || [];
    if (savedContacts.length === 0) {
        alert("Nenhum contato de emergência cadastrado.");
        return;
    }

    const location = localStorage.getItem("lastKnownLocation") || "Localização não disponível";
    const message = `Emergência! Localização atual: ${location}`;

    savedContacts.forEach(contact => {
        window.sms.send(
            contact.phone,
            message,
            { android: { intent: "" } }, // Envio direto
            function () {
                alert(`Mensagem enviada para ${contact.name}`);
            },
            function (error) {
                alert(`Falha ao enviar mensagem para ${contact.name}: ${error}`);
            }
        );
    });
}


// Reconhecimento de Voz
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
let isListening = false;

if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.lang = "pt-BR"; // Define o idioma
    recognition.continuous = true;

    recognition.onresult = function (event) {
        const palavraChave = localStorage.getItem("palavraChave");
        if (!palavraChave) return;

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript.trim().toLowerCase();
            if (transcript === palavraChave.toLowerCase()) {
                alert("Palavra-chave reconhecida! Iniciando procedimentos de emergência.");
                ativarGPS(function () {
                    enviarSMS();
                });
                break;
            }
        }
    };
}

// Botão de Ativação do Reconhecimento
document.getElementById("toggleRecognition").addEventListener("click", function () {
    if (isListening) {
        recognition.stop();
        isListening = false;
        this.textContent = "Ativar";
    } else {
        recognition.start();
        isListening = true;
        this.textContent = "Desativar";
    }
});
