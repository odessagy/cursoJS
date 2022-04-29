let num1 = 1;
let num2 = 2.5;
let num3 = 10.5484546545;

//convertendo um númnero em string - nesse caso concatenando o num1 com num2
console.log(num1.toString() + num2);

//convertendo um número para binário
console.log(num1.toString(2));

//arredondando algumas casas decimais
console.log(num3.toFixed(2));

//saber se o número é inteiro. A função retorna true or false
console.log(Number.isInteger(num1));

//------- Math ---------
let num4 = 9.54578;

// //arredondando pra baixo
// let num5 = Math.floor(num4);
// console.log(num5);

// //arredondando pra cima
// let num6 = Math.ceil(num4);
// console.log(num6);

//arredondando para o mais proximo, para cima ou pra baixo
let num5 = Math.round(num4);
console.log(num5);

//procurar o maior número de uma sequencia
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));

//procurar o menor número de uma sequencia
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));

//gerar números aleatrios - o número 1 nunca é incluído
console.log(Math.random());

//gerar números aleatrios entre 10 e 5
console.log(Math.random() * (10-5)+5);

//valor de Pi
console.log(Math.PI);

//potenciação
console.log(Math.pow(2,10));

