//Recupera o Json do carrinho no local storage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
//Esta Funcao é responsavel em geral por colocar os itens do carrinho na pagina dele, sendo os valores, nomes e as fotos
//alem de criar divs com o create element, e referenciar as tags de conteudo do html do carrinho para fazer as alterações nescessarias
    function atualizarCarr(){
        const lista = document.getElementById('lista-carrinho');
        lista.innerHTML = '';
        let total = 0;
//percorre o array do carrinho e soma o preco no total
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
//a funcao que remove o respectivo item do carrinho ao clicar no botao remover 
//ela remove o item do index que o for each havia contado. Como cada item tem seu proprio botao remover, nao ocorrera um erro ao retirar um item do carrinho
    function remover(index){
        carrinho.splice(index, 1);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        atualizarCarr();
    }

    atualizarCarr();
//Parte da biblioteca Sweet Alerts que faz a animacao de carrinho vazio
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
//Tambem parte da bliblioteca Sweet Alerts, este faz a animacao de compra finalizada
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