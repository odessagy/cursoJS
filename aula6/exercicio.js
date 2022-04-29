

const nome = 'Sangy';
const sobrenome = 'Cardoso dos Santos';
const idade = 37;
const peso = 67;
const altura = 1.67;

//pegando a data atual com o Date
const dataAtual = new Date();
//pegando apenas o ano
const anoAtual = dataAtual.getFullYear();

let imc;
let anoNascimento;


imc = peso/(altura*altura);
//arredondando o resultado
imc = Math.round(imc);

anoNascimento = anoAtual - idade;

console.log('Ano atual',anoAtual);

console.log(nome, sobrenome, 'nasceu em', anoNascimento, 'e possui um IMC de',imc,'. Pesa',peso,'kg e tem',idade,'anos.');

//ou em template de strings

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} e possui um IMC de ${imc}. Pesa ${peso}kg e tem ${idade} anos.`);