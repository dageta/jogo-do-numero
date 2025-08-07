
const palpites = document.querySelector('palpites');
const ultimoResultado = document.querySelector('.ultimoResultado');
const baixoOuAuto = document.querySelector('.baixoOuAuto');
const envioPalpite = document.querySelector('.envioPalpite');
const campoPalpite = document.querySelector('.campoPalpite')



function verificarPalpite() {
    const palpiteUsuario = number(campo.Palpite.value);
    if (contagem.Palpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }

    palpites.textContent += palpiteUsuario = " ";

    if (palpiteUsuario === neuroAleatorio) {
        ultimoResultado.textContent = "Parabens ! Você Acertou!";
        
    }
}