let ordenarPreco = document.getElementById('btnOrdenarPorPreco');
ordenarPreco.addEventListener('click', ordernarLivrosPrecos);

function ordernarLivrosPrecos() {
    let livrosOrdenado = livros.sort((a, b) => a.preco - b.preco);
    exibirLivros(livrosOrdenado);
}