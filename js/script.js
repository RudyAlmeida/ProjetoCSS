/* a antiga lista de produtos que ficava direto no HTML foi transformada na lista abaixo para diminuir o HTML */
var listaProdutos = [{ 'nome': 'Capitão América', 'descricao': 'Forte e Parrudo! 2 Bifés de hamburguer feitos com nosso blend especial, queijo cheddar, queijo mussarela, bacon, 2 ovos, alface, tomate e batata palha.', 'img': 'imagens/cap.jpg', 'valor': 'R$35.00' },
{ 'nome': 'Víuva Negra', 'descricao': 'Linda leve e solta. Hamburguer vegano com carne de soja, acompanhado de alface, tomate e ovo.', 'img': 'imagens/viuva.jpg', 'valor': 'R$35.00' },
{ 'nome': 'Homem de Ferro', 'descricao': 'Empresario, filantropo ..... Hamburguer de carne de costela, cogumelos, cebola caramelizada, queijo prato, e batata palha.', 'img': 'imagens/ferro.jpg', 'valor': 'R$35.00' },
{ 'nome': 'Thor', 'descricao': 'O Deus loiro! 1 Bife de hamburguer feito com nosso blend especial da casa, quiejo cheddar em dobro, ovo, bacon, alface, tomate e batata palha.', 'img': 'imagens/thor.jpg', 'valor': 'R$35.00' },
{ 'nome': 'Gavião Arqueiro', 'descricao': 'A mira oerfeita para acabar com a sua fome. Hamburguer de Frango, queijo mussarela, ovo, alface, tomate e batata palha.', 'img': 'imagens/arqueiro.jpg', 'valor': 'R$35.00' },
{ 'nome': 'Homem Aranha', 'descricao': 'O amigão da Vizinhaça. Hambuguer de Frango, queijo mussarela, ovo, bacon, alface, tomate e batata palha.', 'img': 'imagens/aranha.jpg', 'valor': 'R$35.00' },
{ 'nome': 'Tnt Tangerina', 'descricao': 'O energético dos herois! Turbine sua energia na versão Tangerina.', 'img': 'imagens/tnttangerina.jpg', 'valor': 'R$10.00' },
{ 'nome': 'TNT Original', 'descricao': 'O energético dos herois! Turbine sua energia na versão Original', 'img': 'imagens/original.jpg', 'valor': 'R$10.00' },
{ 'nome': 'TNT Maça Verde', 'descricao': 'O energético dos herois! Turbine sua energia na versão Maça Verde.', 'img': 'imagens/macaverde.jpg', 'valor': 'R$10.00' },
{ 'nome': 'TNT Guarána com Açai', 'descricao': 'O energético dos herois! Turbine sua energia na versão Guarána com Açai.', 'img': 'imagens/acai.jpg', 'valor': 'R$10.00' },
]

/* a função abaixo faz um forEach na lista acima, cria os elementos HTML e anexa eles nos locais corretos do HTML gerando assim a lista de produtos */
function makeList() {

    listaProdutos.forEach(element => {
        let nomeText = element.nome
        let descricaoText = element.descricao;
        let imgText = element.img;
        let valorText = element.valor
        let smallCard = document.createElement('div');
        smallCard.classList.add("smallCard");
        let divImg = document.createElement('img');
        divImg.id = 'myImg';
        divImg.src = imgText;
        divImg.classList.add("menuImagem");
        let descricao = document.createElement('div');
        descricao.classList.add("descricao");
        descricao.name = 'descricao';
        let divH2 = document.createElement('h2');
        let discText = document.createElement('div');
        let valor = document.createElement('div');
        let comprar = document.createElement('button');
        comprar.type = 'submit';
        comprar.value = element.nome
        comprar.setAttribute("onclick", "addCart(value)");
        discText.classList.add("discText");
        document.getElementsByTagName('card')[0];
        card.appendChild(smallCard);
        smallCard.appendChild(divImg);
        smallCard.appendChild(descricao);
        document.getElementsByTagName('descricao');
        smallCard.appendChild(divH2);
        smallCard.appendChild(discText);
        smallCard.appendChild(valor);
        smallCard.appendChild(comprar);
        divH2.innerHTML += nomeText;
        discText.innerHTML += descricaoText;
        valor.innerHTML += valorText;
        comprar.innerHTML += "Adicionar";

    });
}
/* teste inicias com carrinho de compra, já que não vamos comprar, vai ficar parado momentaneamente. */
var cart = [];
function addCart(value) {
    cart.push(value);
    console.log(cart);
}
