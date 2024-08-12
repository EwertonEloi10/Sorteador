document.querySelector(".sortear").addEventListener("click", function () {

    // Captura os valores de mínimo e máximo dos inputs
    const min = Math.ceil(document.querySelector(".numInicial").value);
    const max = Math.floor(document.querySelector(".numFinal").value);

    // Verifica se o valor inicial é menor que o final
    if (min >= max) {
        alert("Valor inicial tem que ser MENOR que o final");
    } else {

        // Deixa o espaço do texto em branco/vazio
        const txt = document.querySelector(".p1");
        txt.innerHTML = "";

        // Gera o número sorteado
        const intervalo = setInterval(function() {
            // Gera o número sorteado
            const result = Math.floor(Math.random() * (max - min + 1)) + min;

            // Exibe o número sorteado na div sectionSortear
            const sectionSortear = document.querySelector(".section-sortear");
            sectionSortear.innerHTML = `${result}`;

            sectionSortear.style.color = '#ff0000';           // Muda a cor do texto para vermelho 
            sectionSortear.style.padding = '20px';            // Adiciona padding de 20px
            sectionSortear.style.fontSize = '150px';          // Aumenta o tamanho da fonte
            sectionSortear.style.fontWeight = 'bold';         // Deixa a fonte em negrito
            sectionSortear.style.textAlign = 'center';        // Centraliza o texto
            sectionSortear.style.marginTop = '-30px';         // Adiciona uma margem superior de 20px

        }, 100); // Gera um número a cada 100 milissegundos

        // Para o intervalo após 3 segundos
        setTimeout(function() {
            clearInterval(intervalo);

            //adiciona um novo texto após o número ser sorteado
            const txt = document.querySelector(".p1");
            txt.innerHTML = "HOJE É SEU DIA DE SORTE!";
            txt.style.color = '#ff0000';         // Muda a cor do texto
            txt.style.fontWeight = 'bold';      // Deixa em negrito
            txt.style.fontSize = '25px';        // Altera o tamanho da fonte
            txt.style.textAlign = 'center';     // Alinha o texto no centro
        }, 5000); // 5000 milissegundos = 5 segundos
        
    }

});



