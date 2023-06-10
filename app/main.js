let livros = [];
const endPointDaApi = `https://guilhermeonrails.github.io/casadocodigo/livros.json`;
async function buscarLivrosApi() {
    const res = await fetch(endPointDaApi);
    livros = await res.json();
    let livrosDesconto = aplicarDesconto(livros);
    exibirLivros(livrosDesconto);
}

buscarLivrosApi();

