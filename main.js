//Se o elemento/seletor não for nulo e possui tag name de audio, o audio determinado seletor será tocado. Caso contrário, a mensagem 'Elemento não encontrado ou seletor inválido' será enviada ao console.
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido.')
    }    
}

//apresenta uma lista com todos os elementos que possuem a classe 'tecla'
const listaDeTeclas = document.querySelectorAll('.tecla');

//Declaramos a variável contador com valor zero . Enquanto o valor do contador for menor que o tamanho da listaDeTeclas, repetir o código abaixo. Com a condição sendo verdadeira, adicionar 1 à contagem da variável contador, mantendo o valor após a adição. O código será repetido até que a condição seja dada como falsa.
    for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    //índices das teclas
    const tecla = listaDeTeclas[contador];
    
    //seleciona apenas a segunda classe (que indica qual a tecla a ser pressionada).
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;

    //executa o som x ao clicar em x botão.
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    //quando uma tecla for pressionada, a informação desse evento será enviada para o objeto event. A partir das informações obtidas em event, se a tecla Enter ou a tecla Space forem pressionadas, a classe 'ativa' será adicionada e o botão apresentará a cor vermelha. Quando a tecla deixar de ser pressionada, a classe 'ativa' será removida e o botão voltará a sua cor de origem.
        tecla.onkeydown = function(event) {
        if (event.code === 'Enter' || event.code === 'Space')  {
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}

