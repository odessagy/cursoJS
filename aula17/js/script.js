function dadosForm () {

    //selecionando o formulario pela classe. quando é classe coloca-se um . antes. Se for id, coloca-se #
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
 

    // form.onsubmit = function(evento){
    //     //nesse evento, previna o que iria acontecer por padrão: nao envie o form
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado.');
        
    // };

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + 
        `${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

dadosForm();
