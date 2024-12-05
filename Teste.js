alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//
// O Math.random só funciona com números inteiros e desconsidera totalmente as casas decimais.
// Portanto, para gerar entre 1 e 3, deve-se multiplicar por 3 (atingindo 2,97) e somar 1. 
// Veja que, mesmo somando 1, ficaria o máximo de 3,97 que, desconsideradas as casas, resolve em 3.
//
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
       break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//
// Como se fosse criação de um "if". Se tentativas > 1, 'tentativas' e, caso não ":" 'tentativa'
//
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
