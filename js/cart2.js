
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    function atualizarCarr(){
        const lista = document.getElementById('lista-carrinho');
        lista.innerHTML = '';
        let total = 0;

        carrinho.forEach((item, index) => {
            total += item.preco;
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex align-items-center justify-content-between';

            const divInfo = document.createElement('div');
            divInfo.className = 'd-flex align-items-center';

            const img = document.createElement('img');
            img.src = item.imagem;
            img.alt = item.nome;
            img.style.width = '60px';
            img.className = 'me-3 rounded';

            const texto = document.createElement('span');
            texto.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

            divInfo.appendChild(img);
            divInfo.appendChild(texto);


            const btn = document.createElement('button');
            btn.textContent = 'Remover';
            btn.className = 'btn btn-danger btn-sm';
            btn.onclick = () => remover(index);

            li.appendChild(divInfo)
            li.appendChild(btn);
            lista.appendChild(li);
        });

        document.getElementById('total').textContent = total.toFixed(2);
    }

    function remover(index){
        carrinho.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarr();
    }

    atualizarCarr();

    function finalizarCompra() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        Swal.fire({
            title: 'Carrinho vazio!',
            text: 'Adicione itens antes de finalizar a compra.',
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }

    Swal.fire({
        title: 'Compra finalizada!',
        text: 'Obrigado pela sua compra.',
        icon: 'success',
        confirmButtonText: 'Fechar'
    }).then(() => {
        // Limpa o carrinho após a compra
        localStorage.removeItem('carrinho');
        atualizarCarr();
        atualizarContadorCarrinho();
    });
}