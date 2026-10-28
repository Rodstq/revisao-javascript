const elementoParaInserirLivros = document.getElementById('livros');
const elementoComValorTotalDeLivrosDisponivels = document.getElementById('valor_total_livros_disponiveis');

function exibirOsLivrosNaTela(listaDeLivros){
    
    elementoParaInserirLivros.innerHTML = "";

    elementoComValorTotalDeLivrosDisponivels.innerHTML = "";

    listaDeLivros.forEach(livro => {
        let disponibilidade =  livro.quantidade > 0 ? 'livro_imagens' : 'livros_imagens indisponivel';
        elementoParaInserirLivros.innerHTML += `
    <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
        alt="Capa do livro ${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__descricao"> Quantidade :${livro.quantidade}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
    `
    })
}

// function verificarDisponibilidadePorLivro(livro){
//   if(livro.quantidade > 0){
//     return "livro_imagens";
//   } else {
//     return 'livros_imagens indisponivel';
//   }
// }