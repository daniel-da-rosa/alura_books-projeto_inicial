function aplicarDesconto(livros){
    const  novoValor = 0.7
    livrosComDesconto = livros.map(livro => {
        return {...livro,preco: livro.preco*novoValor}
    })
  
    return livrosComDesconto
}