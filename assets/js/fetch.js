const cep = document.querySelector("#cep");
//O eveno blur significa que clicamos na caixa de texto e saímos dela

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace ("-", "");
//Erro mais comum de JS com formulário é capturar o value fora de um evento. Nesse caso o value sempre vai vir vazio, pq carregou a página
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
    }

//https://viacep.com.br/ws/01001000/json/
    // fetch vai gerar uma promise. Promise é uma promessa de que algo vai acontecer.
    // se der certo, ele vai retornar o resultado. Se der errado, ele vai retornar um erro.
    // se der cert nós vamos resolver a promise. Se der errado, nós rejeitamos a promise.
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
            .then (result => console.log(result));
        })
        .catch ((e) => console.log(e.message));
});

//assincrono = o usuário nao vai saber oq eu vou fazer. Quando ele clica em TAB eu vou até o via cep e retorno. 


