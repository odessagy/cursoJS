// OBJETOS

// function criaPessoa (nome, sobrenome, idade){
//     return{
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
// const pessoa2 = criaPessoa('Maria', 'Pereira', 67);

// console.log(pessoa1.nome, pessoa2.idade);

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi e a minha idade é ${this.idade} `) //o this se refere ao objeto dentro da função
    },

    incrementaIdade() {
        this.idade++;
    }
};
//acessando o método dentro da função
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();