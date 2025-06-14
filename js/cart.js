function addCarrinho(nome, preco, imagem){
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({nome, preco, imagem});
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();

    
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


function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const contador = document.getElementById('contador-carrinho');
    if (contador) {
        contador.textContent = carrinho.length;
    }
}