// O var faz hoisting - içar, ele sobre a declaração da variável antes de tudo
// A palavra function também sobre hoisting

//console.log(nome, "chamando a variável usando o var");
//const nome = "Avanade";
//nome = "Fiap";

/* 
Existem 7 tipos de erros em JavaScrip
----------------------- 3 principais
- SyntaxErros - Escreveu algo errado
- ReferenceError - chamou alguém que não existe
- TypeError - Erro de tipo é uma violação do JavaScript

- EvalError - Evite o uso do comando eval, mas se ele for inválido
- RangeError - Erro de intervalo, loop infinito, ou chamadas inúmeras de recursividade
- URIError - Erro referente a chamadas externas. Uniform Resource Identifier
- InternalError - Erro interno do JS, falta de memória, processador...
*/


// FUNÇÕES - Existem 4 tipos de funções
//screve("Museu do Ipiranga"); //funciona pq Função sofre Hoisting
// Regra básica de funções: Criá-las e Chamá-las

//Função nominal (Tem um nome declarado e sobre hoisting)
function escreve(x){
    console.log(x);
}

function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo;
}

mudaTitulo("Vai Corinthians!");

//Expressão de Função - quando criamos um Var ou uma Const e o valor dela é uma função. Pode ser uma função anônima.
const mudaTitulo2 = function(target, novoTitulo){ //a variárvel Const é o nome da função
    document.querySelector(target).innerHTML = novoTitulo;
};
mudaTitulo2("h2", "trocando subtítulo");

//Função anônima - não tem nome. Ela precisa de um contexto. Não pode criar uma função anônima solta. 

//ArrowFunction - a função mais simples que existe
const relogio = () => {
    const date = new Date();
    mudaTitulo2 ("h2", date.toLocaleTimeString());
};
setInterval(relogio,1000);



const frases = ["Um banco para 20 milhões de pessoas",
"C6 Bank o seu banco",
"Cartões de Crédito sem anuidade",
]; 

const mudaFrase = (target, frases, tempo) => {
    let total = 0
    setInterval(() => {
        document.querySelector(target).innerHTML = frases[total >= frases.length - 1 ? (total = 0) :(total += 1)];
    }, tempo * 1000);
};

mudaFrase("h1", frases, 4);

