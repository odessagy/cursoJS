// arrays

const alunos = ['Luiz', 'Ana', 'João', 'Maria'];
console.log(alunos[1]);

//alterando um elemnto de uma posição
alunos[0] = 'Beatriz';
console.log(alunos);

//para saber o tamanho do array
console.log(alunos.length);

//adicionar elemento no final do array
alunos.push('Otávio');
console.log(alunos);

//adicionar elemento no inicio do array
alunos.unshift('Eduardo');
alunos.unshift('Fábio');
console.log(alunos);

// //remover elemento do fim do array
// alunos.pop();
// console.log(alunos);

// //a função pop salva o ultimo elemento removido
// let removido = alunos.pop();
// console.log(removido);

//remover do início, o primeiro elemento
// let removido = alunos.shift();
// console.log(removido);

// //apagar sem remover o indice, ficando com elemento vazio
// delete alunos[1];

//pegar parte do array
console.log(alunos.slice(0,3));

//saber se a variavel é uma instancia para um array. Retorna true or false
console.log(alunos instanceof Array);