
export default function montaLivrosTela(elemento,livros,classe){
    elemento.innerHTML =''
    livros.forEach(livro => {
        
        elemento.innerHTML +=`<div class="livro">
        <img class=" ${classe}"  src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo"> ${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
        </div>`
    });
}



// classeInds = (livroOk > 0) ?'livro__imagens':'livro__imagens indisponivel'
//poderia ser um simples if, ou uma funcao.. depende da escolha   
// const elementoMostraLivroHtml = document.getElementById('livros')
// const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis')