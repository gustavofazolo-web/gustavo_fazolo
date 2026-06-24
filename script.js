const infoRegioes = {
    norte: "A região Norte é rica em cultura indígena e biodiversidade amazônica.",
    nordeste: "O Nordeste é famoso pelo forró, frevo e festas populares como o São João.",
    centro: "O Centro-Oeste tem forte cultura sertaneja e influência do Pantanal.",
    sudeste: "O Sudeste é um grande centro urbano e cultural do Brasil.",
    sul: "O Sul possui forte influência europeia, principalmente alemã e italiana."
};

function mostrarInfo(regiao) {
    document.getElementById("info").innerText = infoRegioes[regiao];
}

function responder(status) {
    const resultado = document.getElementById("resultado");

    if (status === "certo") {
        resultado.innerText = "✔️ Resposta correta!";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "❌ Resposta incorreta!";
        resultado.style.color = "red";
    }
}

const curiosidades = [
    "O Brasil tem mais de 200 línguas indígenas.",
    "O frevo é Patrimônio Cultural da Humanidade.",
    "O samba nasceu no Rio de Janeiro.",
    "O chimarrão é tradicional no Sul.",
    "O Brasil é o maior país da América do Sul."
];

function gerarCuriosidade() {
    const i = Math.floor(Math.random() * curiosidades.length);
    document.getElementById("curiosidade").innerText = curiosidades[i];
}
