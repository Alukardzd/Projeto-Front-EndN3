//cria a funcao do butao de adicionar ao carrinho com os parametros dos produtos
//e recupera a variavel carrinho salvo no Local Storage do computador em forma de JSON, e coloca os tres parametros nele
//caso nao houver nada salvo ele faz um Array vazio
//entao se forem adicionados itens eles sao colocados novamente no Local storage em forma JSON
function addCarrinho(nome, preco, imagem){
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({nome, preco, imagem});
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();

//Este é o codigo da biblioteca Sweet Alerts, utilizado para fazer o pop up de item adicionado ao carrinho e animaçoes correspondentes    
    Swal.fire({
        title: 'Produto Adicionado!',
        text: `${nome} foi adicionado ao carrinho.`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Ir para o carrinho',
        cancelButtonText: 'Continuar comprando',
        confirmButtonColor: '#198754',
        cancelButtonColor: '#6c757d'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'Paginas/Carrinho.html'; //
        }
    });
}

//Essa função recupera os itens atuais do carrinho e se for adicionado um novo item ele incrementa o numero de itens no contador do carrinho
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const contador = document.getElementById('contador-carrinho');
    if (contador) {
        contador.textContent = carrinho.length;
    }
}