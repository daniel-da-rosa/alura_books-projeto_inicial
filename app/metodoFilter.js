const btnFiltro = document.querySelectorAll('.btn')

btnFiltro.forEach(btn => btn.addEventListener('click',filtrarLivros))


function filtrarLivros(){
    let categoriaBotao = document.getElementById(this.id)
    let livrosFiltrado = listaLivros.filter(livro => livro.categoria == categoriaBotao.value)
    montaLivrosTela(livrosFiltrado)

}