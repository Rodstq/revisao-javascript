const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao => botao.addEventListener("click", filtrarLivros));

function filtrarLivros(value){

    const elementoBtn = document.getElementById(this.id);

    const categoria = elementoBtn.value;

    let = livrosFiltrados = categoria == 'disponivel' 
    ? filtrarPorDisponibilidade() 
    : filtrarPorCategoria(categoria);

    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorDeLivrosDisponiveis(livrosFiltrados);
        console.log(valorTotal);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponivels.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}
