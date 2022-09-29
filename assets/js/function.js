const resultado = document.querySelector("#resultado");

//Arrow function não acessa "arguments"

let myFunc = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
}
myFunc.showArguments(
    "BMW",
    "AUDI"
);


//A Arrow Function não possui ou não acessa "arguments"
let myFunc2 = {
    showArguments2: () => {
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
}
//myFunc2.showArguments2 ("Fusca", "Uno");

let user = {
    name: "Gabi",
    usandoArrow: () => { //o this não funciona em ArrowFunction. não existe
        console.log(`Meu nome é ${this.name}, com Arrow Function.`);
    },
    usandoNominal(){
        console.log(`Meu nome é ${this.name}, com Nominal Function.`);
    },
}

user.usandoArrow();
user.usandoNominal();

let soma = (a, b) => {
    consolelog(a + b);
}
let soma2 = function(a, b){
    console.log(a + b);
}

//new soma (50, 20); //not constructor
new soma2 (50, 20);