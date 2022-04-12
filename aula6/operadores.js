// + adição e concatenação
// - subtração
// / divisão
// % resto da divisão
// ** potenciação
// * multiplicação

//NaN - Not a number - quando dá algum erro na operação

//Precedencia:
//1) parenteses 2) potencia 3) multiplicação, divisão e resto da divisão 4) soma e subtração

const num1 = 5;
const num2 = 2;
const num3 = 10;
//parseInt converte string em número inteiro
const num4 = parseInt('8');
//parseFloat converte string em número com casas decimais
const num5 = parseFloat('8.4');
//Number converte string em número com ou sem casas decimais
const num6 = Number('8.4');

console.log(num1+num2);
console.log((num1+num2)*num3);

//incrementar
let contador = 1;
contador++; // ou ++contador
console.log(contador);

//decrementar
contador--;

contador += 2; //é o mesmo que contador = contador + 2
contador *= 2; // é o mesmo que contador = contador * 2