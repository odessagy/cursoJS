// //alert nao retorna nada - undefined
// alert('Mensagemm teste');

// //o confirm retorna true ou false
// const confirma = confirm('Deseja realmente apagar?');
// console.log(confirma);

// //prompt retorna o que você digitou
// const nome = prompt('Digite o seu nome:');
// console.log(nome);

// Exercício
let num1 = prompt('Digite o primeiro número:');
let num2 = prompt('Digite o segundo número:');

num1 = Number(num1); 
num2 = Number(num2); 

let resultado = num1 + num2;

//alert('O resultado da soma é: ' + resultado);
alert(`O resultado da soma é: ${resultado}`);