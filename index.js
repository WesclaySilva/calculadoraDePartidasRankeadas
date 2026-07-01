
let resultado = nivelHeroi(101);
let saldo = saldoVitorias(101, 50);
console.log(resultado);

function nivelHeroi(vitorias) {
   let nivel;
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias < 21) {         
        nivel = 'Bronze';
    } else if (vitorias < 51) {
        nivel = 'Prata';
    } else if (vitorias < 81) {
        nivel = 'Ouro';
    } else if (vitorias < 91) {
        nivel = 'Diamante';
    } else if (vitorias < 101) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    return nivel;
    }
}

function saldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}