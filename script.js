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