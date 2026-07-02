
let vitorias = 200;
let derrotas = 10;   
let resultadoNivel = nivelHeroi(saldoVitorias(vitorias, derrotas)); 
let resultadoVitorias = saldoVitorias(vitorias, derrotas);
console.log("O herói tem saldo de " + resultadoVitorias + " vitórias e está no nível " + resultadoNivel);

function saldoVitorias(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}


function nivelHeroi(saldo) {
    
    let nivel;

    if (saldo < 10) {
        nivel = 'Ferro';
    } else if (saldo < 21) {         
        nivel = 'Bronze';
    } else if (saldo < 51) {
        nivel = 'Prata';
    } else if (saldo < 81) {
        nivel = 'Ouro';
    } else if (saldo < 91) {
        nivel = 'Diamante';
    } else if (saldo < 101) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }
         return nivel;
}

