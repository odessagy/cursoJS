// Valores primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores Copiados
//Referência (mutável) - array, object, function - Passados por referência - a variavel aponta para o mesmo lugar

//nesse caso b é uma cópia de a e se a for alterado, isso não mudará o valor de b
// let a = 'A';
// let b = a;


const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

//a constante b nesse caso aponta para o mesmo array que a constante a, então se a for modificado, b tbm será
const b = a;

//para fazer uma cópia do vetor a em b (spread)
//b = {...a};

b.nome = 'João';
console.log(a);
console.log(b);