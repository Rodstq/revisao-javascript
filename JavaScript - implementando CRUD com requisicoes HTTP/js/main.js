import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos()

    const formularioPensamento = document.getElementById("pensamento-form")
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)

    const botaoCancelar = document.getElementById("botao-cancelar")
    botaoCancelar.addEventListener("click",cancelarFormulario)

})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();

    const id = document.getElementById("pensamento-id").value
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value

    try {
        if(id){
            console.log(id)
            await api.editarPensamentos({id, conteudo, autoria})
        } else{
            console.log("e" + id)
            await api.salvarPensamentos({conteudo, autoria})
        }
        ui.renderizarPensamentos()
    } catch (error) {
        alert("Erro ao salvar pensamento")
    }
}

function cancelarFormulario (){
        const textarea = document.getElementById('pensamento-conteudo')
    textarea.value = ""
    const autoriaInput = document.getElementById('pensamento-autoria')
    autoriaInput.value= ""
}
