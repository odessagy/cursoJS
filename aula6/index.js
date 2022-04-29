//criando variável. Pode usar let ou var. Var é mais antigo e está em desuso
let nome = 'Maria';

console.log(nome, 'nasceu em 1984');
console.log('O filho de', nome, 'se chama Eduardo');

//não se pode usar palavras reservadas para criar variaveis
//nao pode começar variavel com numero
//é uma boa pratica começar com letras minusculas
//nao pode conter espaços ou traços
//utilizamos camelCase
//Case-sensitive
//não podemos redeclarar variáveis com let
//não utilize var, utilize let
//todas essas regras valem para constantes tambem

// constantes
//constantes devem ser criadas e declaradas
//os valores nao podem ser alterados

const nomeAluno = 'Joaquina';
console.log(nomeAluno);

const primeiroValor = 5;
const segundoValor = 10;
const resultado = primeiroValor * segundoValor;
console.log('O resultado é:', resultado);

//para saber o tipo da varável
console.log(typeof primeiroValor);
console.log(typeof nomeAluno);
