document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById('menu');

    const menuHtml = `
        <div class="dropdown">
            <ul class="list-menu">
                <li class="item-menu"><a href="/">Início</a></li>
                <li class="item-menu"><a href="diagnostico-e-tratamento.html">Diagnóstico e Tratamento</a></li>
                <li class="item-menu"><a href="ajude-alguem-com-parkinson.html">Ajude alguém com Parkinson</a></li>
                <li class="item-menu"><a href="entendendo-o-dbs.html">Entendendo o DBS</a></li>
                <li class="item-menu"><a href="materiais-informativos.html">Materiais Informativos</a></li>
                <li class="item-menu"><a href="perguntas-frequentes.html">Perguntas Frequentes</a></li>
                <li class="item-menu"><a href="dbs-boston-scientific.html">DBS Boston Scientific</a></li>
                <li class="item-menu"><a href="resultados-comprovados.html">Resultados Comprovados</a></li>
                <li class="item-menu"><a href="atualize-seu-dbs.html">Atualize seu DBS</a></li>
                <li class="item-menu"><a href="ja-tenho-um-dispositivo.html">Já tenho um dispositivo Boston Scientific</a></li>
            </ul>
        </div>
    `;

    menu.insertAdjacentHTML('beforeend', menuHtml);

    const btnMenu = document.querySelector('.btn-menu');
    const listMenu = document.querySelector('.list-menu');
    // Adiciona a classe para animação inicial
    listMenu.style.display = "none";

    btnMenu.addEventListener('click', function () {
        if (listMenu.style.display === "block") {
            listMenu.classList.remove('open');
            setTimeout(() => {
                listMenu.style.display = "none";
            }, 300); // Deve ser igual à duração da animação em ms
        } else {
            listMenu.style.display = "block";
            setTimeout(() => {
                listMenu.classList.add('open');
            }, 10); // Permitir tempo para a exibição ser aplicada
        }
    });

    // Fechar o menu ao clicar fora dele
    window.addEventListener('click', function (event) {
        if (!event.target.matches('.btn-menu')) {
            if (listMenu.style.display === "block") {
                listMenu.classList.remove('open');
                setTimeout(() => {
                    listMenu.style.display = "none";
                }, 300); // Deve ser igual à duração da animação em ms
            }
        }
    });
});
