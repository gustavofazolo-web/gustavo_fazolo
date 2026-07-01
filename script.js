<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Culturas do Brasil | Projeto Educativo</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#f4f4f4;
    color:#333;
}

header{
    background:#009c3b;
    color:white;
    text-align:center;
    padding:30px;
}

header h1{
    margin-bottom:10px;
}

nav{
    background:#ffdf00;
    display:flex;
    justify-content:center;
    gap:20px;
    padding:15px;
}

nav a{
    color:#000;
    text-decoration:none;
    font-weight:bold;
}

nav a:hover{
    color:#006400;
}

section{
    max-width:1000px;
    margin:auto;
    padding:40px 20px;
}

h2{
    margin-bottom:20px;
    color:#009c3b;
}

.cards{
    display:flex;
    flex-wrap:wrap;
    gap:15px;
    justify-content:center;
    margin-bottom:20px;
}

.card{
    background:white;
    padding:20px;
    width:160px;
    text-align:center;
    border-radius:10px;
    cursor:pointer;
    box-shadow:0 3px 8px rgba(0,0,0,.2);
    transition:.3s;
}

.card:hover{
    background:#009c3b;
    color:white;
    transform:translateY(-5px);
}

.info-box,
.quiz-box{
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 3px 8px rgba(0,0,0,.2);
}

.quiz-box button,
#curiosidades button{
    margin:8px;
    padding:10px 18px;
    border:none;
    border-radius:6px;
    background:#009c3b;
    color:white;
    cursor:pointer;
    transition:.3s;
}

.quiz-box button:hover,
#curiosidades button:hover{
    background:#006400;
}

#resultado{
    margin-top:15px;
    font-weight:bold;
    font-size:18px;
}

#curiosidade{
    margin:20px 0;
    font-size:18px;
}

footer{
    background:#002776;
    color:white;
    text-align:center;
    padding:20px;
    margin-top:40px;
}

@media(max-width:700px){

.cards{
    flex-direction:column;
    align-items:center;
}

.card{
    width:90%;
}

nav{
    flex-direction:column;
}
}
</style>

</head>
<body>

<header>
<h1>🇧🇷 Culturas Brasileiras</h1>
<p>Explore a diversidade cultural do Brasil de forma interativa.</p>
</header>

<nav>
<a href="#regioes">Regiões</a>
<a href="#quiz">Quiz</a>
<a href="#curiosidades">Curiosidades</a>
</nav>

<section id="regioes">

<h2>🌎 Regiões do Brasil</h2>

<div class="cards">

<div class="card" onclick="mostrarInfo('norte')">
🌿 Norte
</div>

<div class="card" onclick="mostrarInfo('nordeste')">
🎉 Nordeste
</div>

<div class="card" onclick="mostrarInfo('centro')">
🐎 Centro-Oeste
</div>

<div class="card" onclick="mostrarInfo('sudeste')">
🏙️ Sudeste
</div>

<div class="card" onclick="mostrarInfo('sul')">
🍇 Sul
</div>

</div>

<div id="info" class="info-box">
Clique em uma região para conhecer sua cultura.
</div>

</section>

<section id="quiz">

<h2>🎮 Quiz Cultural</h2>

<div class="quiz-box">

<p><strong>Qual dança é típica do Nordeste?</strong></p>

<button onclick="responder('errado')">Samba</button>

<button onclick="responder('certo')">Forró</button>

<button onclick="responder('errado')">Tango</button>

<p id="resultado"></p>

</div>

</section>

<section id="curiosidades">

<h2>✨ Curiosidade Aleatória</h2>

<p id="curiosidade">
Clique no botão para descobrir uma curiosidade sobre o Brasil.
</p>

<button onclick="gerarCuriosidade()">
Mostrar Curiosidade
</button>

</section>

<footer>
<p>&copy; 2026 Culturas Brasileiras</p>
</footer>

<script>

const infoRegioes = {

norte:"A região Norte é rica em cultura indígena e biodiversidade amazônica.",

nordeste:"O Nordeste é famoso pelo forró, frevo e festas populares como o São João.",

centro:"O Centro-Oeste possui forte tradição sertaneja e influência do Pantanal.",

sudeste:"O Sudeste concentra grandes centros urbanos e uma enorme diversidade cultural.",

sul:"O Sul possui forte influência europeia, principalmente alemã e italiana."

};

function mostrarInfo(regiao){

document.getElementById("info").textContent=infoRegioes[regiao];

}

function responder(status){

const resultado=document.getElementById("resultado");

if(status==="certo"){

resultado.textContent="✔️ Resposta correta!";

resultado.style.color="green";

}else{

resultado.textContent="❌ Resposta incorreta!";

resultado.style.color="red";

}

}

const curiosidades=[

"O Brasil possui mais de 200 línguas indígenas ainda faladas.",

"O frevo é Patrimônio Cultural Imaterial da Humanidade.",

"A Festa Junina é uma das maiores celebrações populares do país.",

"O Círio de Nazaré reúne milhões de participantes todos os anos.",

"A capoeira combina luta, dança, música e tradição afro-brasileira.",

"O chimarrão é uma bebida tradicional da Região Sul.",

"O Brasil é o maior país da América do Sul.",

"O samba nasceu das tradições afro-brasileiras.",

"O Pantanal abriga uma das maiores biodiversidades do planeta."

];

function gerarCuriosidade(){

const indice=Math.floor(Math.random()*curiosidades.length);

document.getElementById("curiosidade").textContent=curiosidades[indice];

}

</script>

</body>
</html>
