const produtos = [
    { id: 1, nome: 'camisa em malha', preço: 100 },
    { id: 2, nome: 'camisa polo', preço: 150 },
    { id: 3, nome: 'camisa metálica', preço: 120 },
    { id: 4, nome: 'kit camisas', preço: 120},
    { id: 5, nome: 'camisa florida', preço: 120 }
];

// Função para exibir a lista de produtos
function exibirProdutos(lista) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpar a lista antes de exibir os produtos

    lista.forEach(produto => {
        const li = document.createElement('li');
        li.className = 'product-item';
        li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        productList.appendChild(li);
    });
}


let iconecar = document.querySelector('.carrinhoicone')
let fechar= document.querySelector('.meucarrinho .fechar')
let body= document.querySelector('body')
var removeritem= document.getElementsByClassName('remover')
var adiocionaritem = document.getElementsByClassName('btn-compra')



    for (var i = 0; i < adiocionaritem.length; i++){
        var button = adiocionaritem[i]
        button.addEventListener('click', adiocionaritemclick)
    }

    function adiocionaritemclick(event) {
        var button = event.target
        var produto = button.parentElement
        var titulo = produto.getElementsByClassName('nomeproduto')[0].innerText
        var img = produto.getElementsByClassName('imgproduto')[0].src
        addaocarrinho(titulo, img)
    }
    function addaocarrinho(titulo, img){
        var meucarrinho = document.createElement('div')
        meucarrinho.classList.add('produtos')
        var conteudoproduto =`
        <img src="${img}" alt="Produto 1" height="200" width="200" class="imgproduto">
        <h3 class="nomeproduto">${titulo}</h3>
        <p>Camiseta em Malha</p>
        <p>R$ 100,00</p>`
        meucarrinho.innerHTML= conteudoproduto
        var produtos = document.getElementsByClassName('lista')[0]
        produtos.append(meucarrinho)
    }

    for (var i = 0; i < removeritem.length; i++) {
        var button=removeritem[i]
        button.addEventListener('click', function(event){
            var clicado = event.target
            clicado.parentElement.remove()
        })}



















//abrir e fechar o carrinho de compras
iconecar.addEventListener('click', () =>{
    body.classList.toggle('abrirmeucarrinho')
})
fechar.addEventListener('click', () => {
    body.classList.toggle('abrirmeucarrinho')
})

