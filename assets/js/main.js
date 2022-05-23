document.addEventListener('mousemove', function(event) {
    let body = this.querySelector('body'); // seleciona o body
    let heart = document.createElement('span'); // cria o span

    let x = event.offsetX; // seleciona o eixo horizontal
    let y = event.offsetY; // seleciona o eixo vertical
    heart.style.left = x + 'px'; // add style no elemento
    heart.style.top = y + 'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate('+ transformValue + 'deg)';

    body.appendChild(heart); // add o span no body

    setTimeout(() => {
        heart.remove();
    }, 1000); // olhar na aba element se muda o tamanho dos px
});