// FUNÇÕES


// function saudacao (nome){
//     return`Bom dia ${nome}`;
// }

// const variavel = saudacao('Luiz');
// console.log(variavel);

function soma(x, y){
    const resultado = x+y;
    return resultado;
}

console.log(soma(2, 2));

// //outro jeito de criar função
// const raiz = function (n) {
//     return n ** 0.5;
// }

// console.log(raiz(9));

//arrow functions - tbm outra maneira de criar funções 
const raiz =  (n) => n ** 0.5;


console.log(raiz(25));