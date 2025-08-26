function virarCarta() {
    const carta = document.querySelector('.carta-container');
    carta.classList.toggle('virada');
}

document.addEventListener("DOMContentLoaded", function() {
    const faixa = document.querySelector('.carrossel-faixa');
    const blocos = document.querySelectorAll('.habilidade-bloco');
    const btnEsquerda = document.querySelector('.seta-esquerda');
    const btnDireita = document.querySelector('.seta-direita');

    let indiceAtual= 0;

    function mostrarSlide(indice) {
        const largura = blocos[0].clientWidth;
        faixa.style.transform = `translateX(-${indice * largura}px)`;
    }

    btnDireita.addEventListener('click', () =>{
        if (indiceAtual <blocos.length - 1) {
            indiceAtual++;
            mostrarSlide(indiceAtual);
        }
    });

    btnEsquerda.addEventListener('click',() => {
        if (indiceAtual > 0) {
            indiceAtual--;
            mostrarSlide(indiceAtual);
        }
    });
    window.addEventListener('resize', () => mostrarSlide(indiceAtual));
});

function abrirModal(modal1, modal2, modal3, modal4) {
    document.getElementById(modal1).style.display = 'block';
    document.getElementById(modal2).style.display = 'block';
    document.getElementById(modal3).style.display = 'block';
    document.getElementById(modal4).style.display = 'block';
}

function fecharModal(modal1, modal2, modal3, modal4) {
    document.getElementById(modal1).style.display = 'none';
    document.getElementById(modal2).style.display = 'none';
    document.getElementById(modal3).style.display = 'none';
    document.getElementById(modal4).style.display = 'none';
}

window.onclick = function(event) {
    const modais = document.getElementsByClassName("modal");
    for (let i = 0; i< modais.length; i++) {
        if (event.target == modais[i]) {
            modais[i].style.display = "none";
        }
    }
}