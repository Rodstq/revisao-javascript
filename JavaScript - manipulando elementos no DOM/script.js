const html = document.querySelector('html');

const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

focoBt.addEventListener('click', ()=>{
    alterarContexto('foco');    
})

curtoBt.addEventListener('click', ()=>{
    alterarContexto('descanso-curto');   
})

longoBt.addEventListener('click', ()=>{
    alterarContexto('descanso-longo');   
})

function alterarContexto(contexto){
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



