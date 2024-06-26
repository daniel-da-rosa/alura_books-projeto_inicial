import { conexaoExport } from "./conexao.js"
import montaLivrosTela  from './forEach.js'

const listaLivros = await conexaoExport.conexao()
const btnFiltro = document.querySelectorAll('.btn')
const elemento = document.getElementById('livros')
let valorTotaLivro = 0

btnFiltro.forEach(btn => btn.addEventListener('click',filtrarLivros))

function filtrarLivros(){
    debugger
    let categoriaBotao = document.getElementById(this.id)
    if (categoriaBotao.value !=''){
        let livrosFiltrado = listaLivros.filter(livro => livro.categoria == categoriaBotao.value)
        montaLivrosTela(elemento,livrosFiltrado,' ')
    }else{
        //faz um ternário para verificar se os livros serao mostrados por preço ou diponibilidade
        let livrosOrdenados =[]
        livrosOrdenados = (this.id =="btnOrdenarPorPreco") ? livrosOrdenados = listaLivros.sort((a,b)=> a.preco - b.preco)
                                                           : livrosOrdenados = listaLivros.filter((livro)=> livro.quantidade > 0)
         montaLivrosTela(elemento,livrosOrdenados,' ')
         if (this.id !="btnOrdenarPorPreco"){
          
            valorTotaLivro = somaValorLivros(livrosOrdenados)
            console.log(`valor de :R$${valorTotaLivro.toFixed(2)}`)

         }
    }

    if(this.id =='btnLivrosDisponiveis'){

        elementoValorTotal.innerHTML = `<div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">R$${valorTotaLivro.toFixed(2)}</span></p>
      </div>`

    }else{
        elementoValorTotal.innerHTML = ''
    }

    

}

// let livrosOrdenados = (this.id === "btnOrdenarPorPreco") ? 
//     listaLivros.sort((a, b) => a.preco - b.preco) : 
//     listaLivros.filter(livro => livro.quantidade > 0);

// // Se a condição for falsa, execute a redução e guarde o resultado em uma variável global
// if (this.id !== "btnOrdenarPorPreco") {
//     // Executar a redução e guardar o resultado em uma variável global
//     suaVariavelGlobal = livrosOrdenados.reduce((total, livro) => total + livro.preco, 0);
// }
