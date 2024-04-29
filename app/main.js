import { conexaoExport } from "./conexao.js"
import montaLivrosTela  from './forEach.js'

const elementoMostraLivroHtml = document.getElementById('livros')
let livros = await conexaoExport.conexao()

montaLivrosTela(elementoMostraLivroHtml,livros)




















// function getLivros(){
//     montaLivrosTela(conexaoExport.listaLivros)
// }

// getLivros()


// const endPointAPI ='https://guilhermeonrails.github.io/casadocodigo/livros.json'

// async function getLivrosAPI(){
//     res = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
//     .catch(err =>{
//         alert(`Não foi possivel carregar os arquivos ${err}`)
//     })
//     if (!res.ok){
//         alert(`Houve um erro ao carrgar o arquivo`)
//     }else{

//         listaLivros = await res.json()
//         let livrosComDesconto= aplicarDesconto(listaLivros)
//         montaLivrosTela(livrosComDesconto)
//     }
    
// }