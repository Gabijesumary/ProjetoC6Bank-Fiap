const cep = document.querySelector("#cep");

const showData = (result) => {
    for (const campo in result){
        if(document.querySelector ("#" + campo)){
            document.querySelector("#" + campo).value = result[campo];
        }
    }
}

//O eveno blur significa que clicamos na caixa de texto e saímos dela. A pessoa perdeu o foco
cep.addEventListener("blur", async (e) => {
    let search = cep.value.replace ("-", "");
    //Erro mais comum de JS com formulário é capturar o value fora de um evento. Nesse caso o value sempre vai vir vazio, pq carregou a página
    if (search < 8 || isNaN(search)) {
        alert ("CEP inválido");
        cep.value = "";
        return;
    }
    const options = {
        method: 'GET', //GET = os dados vão pela url
        mode: 'cors', //
        cache: 'default',
    };

    //https://viacep.com.br/ws/01001000/json/
    // fetch vai gerar uma promise. Promise é uma promessa de que algo vai acontecer.
    // se der certo, ele vai retornar o resultado. Se der errado, ele vai retornar um erro.
    // se der cert nós vamos resolver a promise. Se der errado, nós rejeitamos a promise.
    // Uma promise é uma intenção. Pode dar certo ou errado.
    //fetch API serve para trabalhar com processamento assincrono

    /*fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
            .then (result => console.log(result));
        })
        .catch ((e) => console.log(e.message));*/
    const resultado = await fetch (`https://viacep.com.br/ws/${search}/json/`, options);

    const json = await resultado.json();
        
    showData(json);
});

//assincrono = o usuário nao vai saber oq eu vou fazer. Quando ele clica em TAB eu vou até o via cep e retorno. 

//async/await são primos um do outro = Onde uma tá o outro tem que tá.
// onde o await está, o async tem que estar
// o papel dele é tornar mais simples a escrita de promises. recurso recente de 2015 pra ca. Por baixo dos panos está usando promises ainda.
// Quando se usa o fetch está implicito que está usando async e await

// AJAX - assychronous javascript and xml - JS assincrono e xml sendo usados juntos

//PROVA - eventos, arrays e DOM




