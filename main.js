const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba-conteudo");
for (let i = 0; i < botoes.length; i++) {

    botoes[i].onclick = function () {
    
    for (let j = 0; j < botoes.length; j++) {
    
    botoes[j].classList.remove("ativo");
    
    textos[j].classList.remove("ativo");
    
    }
    
    botoes[i].classList.add("ativo");
    
    textos[i].classList.add("ativo");
    
    tr
    
    }
    
    }
    
    const contadores = document.querySelectorAll(".contador");
    
    const tempoObjetivo1 = new Date("2023-10-05T00:00:00"); const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
    
    const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
    
    const tempoObjetivo4 = new Date("2024-02-01T00:00:00");
    
    const tempos =
    
    [tempoObjetivo1, tempo Objetivo2, tempo Objetivo3, tempo Objetivo4
    
    function calcula Tempo(tempo Objetivo) {
    
    let tempoAtual = new Date();
    
    let tempoFinal = tempoObjetivo - tempoAtual;
    
    let segundos = Math.floor(tempoFinal / 1000);
    
    let minutos = Math.floor(segundos / 60);
    
    let horas = Math.floor(minutos / 60);
    
    let dias = Math.floor(horas / 24);
    
    segundos %= 60,
    
    minutos %= 60;
    
    horas %= 24;
    
    if (tempoFinal > 0){
    
    } else {
    
    return [dias, horas, minutos, segundos];
    
    return [0,0,0,0];
}

}


function atualiza Cronometro(){

for (let i=0; i<contadores.length;i++){

document.getElementById("dias"+i).textContent = calcula Tempo(tempos[i])[0];

document.getElementById("horas"+i).textContent = calcula Tempo(tempos[i])[1];

document.getElementById("min"+i).textContent = calcula Tempo(tempos[i])[2];

document.getElementById("seg"+i).textContent = calcula Tempo(tempos[i])[3];

}

}

function comecaCronometro(){ atualiza Cronometro();

setInterval(atualiza Cronometro, 1000);

}

comecaCronometro();