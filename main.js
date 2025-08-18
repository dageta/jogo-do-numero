let numeroAleatorui = math.florr(math.random() *100) +1;
const palpites = document.querySelector('palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAuto = document.querySelector('.baixoOuAuto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite')
let contagemPalpites = 1;
let botaoReiniciar;

function verificarPalpite() {
    const palpiteUsuario = number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }

    palpites.textContent += palpiteUsuario = " ";

    if (palpiteUsuario === neuroAleatorio) {
        ultimoResultado.textContent = "Parabens ! Você Acertou!";
        ultimoResultado.style.backgroundColor = "green";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    }else if (contagemPalpites === 10){
        ultimoResultado.textcontent = "FIM DE JOGO!!";
        baixoOuAlto.textcontent = "";
        finalizarJogo();
} else{
        ultimoResultado.textContent = "Errado";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = "O último palpite foi muito baixo";
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = "o último palpite foi muito alto"
        }
    }

    contagemPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificarPalpite);

function finalizarJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReiniciar = document.createElement('button');
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.textContent = 'reiniciar jogo';
    botaoReiniciar.classList.add('botaoReiniciar');
    document,body.appendChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciar jogo);
}

function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultados p'} 
for {const paragrafoReiniciar of paragrafoReiniciar) {
    paragrafoReiniciar.textContent = "";
        
