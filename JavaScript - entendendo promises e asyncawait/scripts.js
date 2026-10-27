const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
});

function lerConteudoDoArquivo(arquivo){
    return new Promise((resolve, reject)  => {
        const leitor = new FileReader(); 
        leitor.onload = () => {
            resolve({url: leitor.result, nome: arquivo.name});
        }

        leitor.onerror= () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        }

        leitor.readAsDataURL(arquivo)
    })
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-name p");

inputUpload.addEventListener("change", async (event) => {
    const arquivo = event.target.files[0];

    if(arquivo){
        try{
            const ConteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = ConteudoDoArquivo.url;
            nomeDaImagem.textContent = ConteudoDoArquivo.nome;
        } catch (error) {
            console.error("Erro na leitura do arquivo");
        }
    }
})

const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");


listaTags.addEventListener("click", (evento) => {
    if(evento.target.classList.contains("remove-tag")){
        const tagQueQueremosRemover = evento.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover);
    }
})

const tagDisponiveis = ["Front-end", "programacao", "data science", "full-stack", "html", "css", "javascript"];

async function verificaTagDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagDisponiveis.includes(tagTexto));
        }, 1000);
    });
}

inputTags.addEventListener("keypress", async (evento) => {
    if(evento.key === "Enter"){
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if(tagTexto !==""){
            try {
                const tagExiste = await verificaTagDisponiveis(tagTexto);
                if(tagExiste){
                    const tagNova = document.createElement("li");
                    tagNova.innerHTML= `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
                    listaTags.appendChild(tagNova);
                    inputTags.value = "";
                }   else {
                    alert("Tag não foi encontrada");
                }
            } catch (error) {
                console.error("Erro ao verificar a existencia da tag")
                alert("Erro ao verificar a existencia da tag")
            }
        }
    }
})

const botaoPublicar = document.querySelector(".botao-publicar");

botaoPublicar.addEventListener("click", async(evento)=> {
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome");
    const descricaoDoProjeto = document.getElementById("descricao");

    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

    try {
        const reusltado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto);
        console.log(reusltado);
        alert("Deu tudo certo!");
    } catch (erro){
        console.log("Deu errado: ", erro);
        alert("Deu tudo errado!");
    }
})

async function publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const deuCerto = Math.random() > 0.5;

            if(deuCerto){
                resolve("Projeto publicado com sucesso");
            } else {
                reject("Erro ao publicar o projeto");
            }
        }, 2000);
    })
}

const botaoDescartar = document.querySelector(".botao-descartar");

botaoDescartar.addEventListener("click", (evento) => {
    evento.preventDefault();

    
})