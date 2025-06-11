
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    function atualizarCarr(){
        const lista = document.getElementById('lista-carrinho');
        lista.innerHTML = '';
        let total = 0;

        carrinho.forEach((item, index) => {
            total += item.preco;
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            const btn = document.createElement('button');
            btn.textContent = 'Remover';
            btn.onclick = () => remover(index);
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