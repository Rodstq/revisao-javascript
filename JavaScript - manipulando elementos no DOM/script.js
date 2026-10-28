const html = document.querySelector('html');

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');


const musica = new Audio('sons/luna-rise-part-one.mp3');
const startPauseBt = document.querySelector('#start-pause');
musica.loop = true;

const audioComecar = new Audio('sons/play.wav');
const audioPausar = new Audio('sons/pause.mp3');
const audioTempoEsgotado = new Audio('sons/beep.mp3');

let tempoDecorridoEmSegundos = 5;
let intervaloID = null;

musicaFocoInput.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play();
    } else{
        musica.pause();
    }
})

focoBt.addEventListener('click', ()=>{
    alterarContexto('foco');    
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click', ()=>{
    alterarContexto('descanso-curto');   
    curtoBt.classList.add('active');
})

longoBt.addEventListener('click', ()=>{
    alterarContexto('descanso-longo');   
    longoBt.classList.add('active');
})

function alterarContexto(contexto){
    botoes.forEach(function(contexto){
        contexto.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
        console.log(contexto)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            <h1 class="app__title">
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            </h1>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            <h1 class="app__title">
                Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            </h1>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            <h1 class="app__title">
                Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            </h1>
            `
            break;

        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        zerar();
        alert('tempo finalizado');
        audioTempoEsgotado.play();
        return;
    }
    tempoDecorridoEmSegundos -=1;
    console.log('temporizador:', + tempoDecorridoEmSegundos);
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar(){
    if(intervaloID){
        zerar();
        audioPausar.play();
        return;
    }
    audioComecar.play();
    intervaloID = setInterval(contagemRegressiva, 1000);
}

function zerar(){
    clearInterval(intervaloID);
    intervaloID = null;
}