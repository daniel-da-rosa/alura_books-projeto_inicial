async function conexao(){
    const promessa = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
    .catch(err =>{
        alert(`Não foi possivel carregar os aruivos: ${err}`)
    })

    const listaLivros = await promessa.json()
 

    return listaLivros
}


export const conexaoExport ={
    conexao
}
