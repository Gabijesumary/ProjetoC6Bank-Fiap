const carros = document.querySelector("#carros");
//document.getElementById - sempre existiu no js.
//document.querySelector - é mais recente, permite usar seletores.
const carrosArray = ["Chevrolet", "Fiat", "Ford", "Honda", "Hyundai", "Kia", "Mazda", "Mercedes-Benz", "Nissan", "Peugeot", "Renault", "Toyota", "Volkswagen"];

carrosArray.forEach((value, key) => { //valor e posição no array
    carros.innerHTML += `<option valor="${key}">${value}</option>`;
});

//carrosArray.forEach((value) => console.log(value)); //forEach pode receber 2 parâmetros



//******* forEach dentro de forEach *******
const importados = [
    ["BMW", "320i", "M3", "M4", "X5", "X6", "z4 m40i"],
    ["Audi", "a4", "s4", "s4 avanti", "Q7", "RS7", "e-Tron"],
    ["Mercedes", "gtr", "e63", "s63", "brabus gle", "AMG G63"],
];

importados.forEach((marcas) => {
    const select = document.createElement("select");
    select.setAttribute("id", marcas[0]);
    marcas.forEach((carros, key) => {
        select.innerHTML += `<option value="${carros}">${carros}</option>`;
    });
    document.querySelector("body").appendChild(select);
});


//***** Desafio *******
const aereas = [
    "Latam",
    "Gol",
    "Azul",
    "Delta",
    "American Airlines",
    "Emirates",
    "Qatar",
  ];
  
  const comboAereas = document.createElement("select");
  comboAereas.setAttribute("id", "aereas");
  
  aereas.forEach((aerea, key) => {
    comboAereas.innerHTML += `<option value="${key}">${aerea}</option>`;
  });
  //adicione este combo como um filho no body, no final de todas as tags.
  document.querySelector("body").appendChild(comboAereas);
  const menu = [
    "Todos",
    "Venda na Amazon",
    "Ofertas do Dia",
    "Prime",
    "Eletrônicos",
    "Ideias para Presente",
    "Brinquedos e Jogos",
    "Computadores",
    "eBooks Kindle",
    "Games",
    "Ferramentas e Construção",
    "Livros",
  ];
  
  const ulMenu = document.createElement("ul");
  ulMenu.setAttribute("id", "menu");
  ulMenu.setAttribute("class", "menu-site");
  
  menu.forEach((value, index) => {
    ulMenu.innerHTML += `<li>${value}</li>`;
  });
  
  document.querySelector("nav").appendChild(ulMenu);

  /******** VAI CAIR NA PROVA *********/

  const newCarros = ["corsa", "uno", "gol", "palio", "kombi", "208"];

  //Função PUSH - adiciona um elemento no FINAL do Array (Pode acionar mais de um)
  newCarros.push("celta", "monza");

  //Função UNSHIFT - adicionar um elemento no INICIO do Array
  newCarros.unshift("fusca");

  //Função POP - remove um elemento do FINAL do Array 
  const ultimo = newCarros.pop(); //retorna o elemento removido para a const se quiser.

  //Função SHIFT - remove um elemento do INICIO do Array
  const primeiro = newCarros.shift(); //retorna o elemento removido para ser usado depois na const se quiser.

  //Função SPLIT - Divide o array. Quebra um texto em vários Arrays
  const nomeCompleto = "Gabriela Guimaraes Jesumary";
  const nomeArray = nomeCompleto.split (" "); //procure uma string e sempre que achar o valor = dividir no Array

  //Função JOIN - vai juntar os arrays e transformar em uma string
  const americanName = [nomeArray.at(-1), nomeArray[0]].join(", "); //para pegar o último parâmetro do array, mesma coisa que nomeArray.lenght -1

  //Função SPLICE - na posição escolhida, remova a quantidade indicada no ()
  const removeUm = newCarros.splice(0, 3); //Esse 3 pode ser outros numeros a depender a lenght do Array e de quantos você quer tirar.
  
  //console.log(removeUm, "Remove um, splice");
  //console.log(americanName, "Formato Americano");
  //console.log(newCarros, "NewCarros");
  console.log("--------------------------")

  //**Programação funcional - imutabilidade, os dados não mudam. O array original não é alterado

  //Função SLICE - Ele não altera o array original, gera um novo Array. COPIA O ARRAY
  const frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

  const primeiras = frutas.slice(1,3); //copia o array
  console.log(frutas, "slice o array original não muda");
  console.log(primeiras, "slice - a partir da primeira posição até a terceira, copie, mas não traga a terceira");

  //MAP - Retorna um novo array com os itens filtrados.
  //retorna um novo array. Do inicio ao fim. Ele passa por todas as posições do array.
const filtro = (item) => {
    return item === "Pera" || item === "Maçã";
};
const frutasMap = frutas.map(filtro);
 
//FILTER - retorna um novo array, filrando apenas true.
const frutasFilter = frutas.filter(filtro); //

//FIND - retorna a primeira ocorrência que for true
const frutasFind = frutas.find(filtro);

console.log(frutasFilter);

const ages = [
  12, 4, 50, 26, 32, 1, 5, 7, 9, 65, 11, 84, 14, 98, 16, 17, 18, 19
];

const agesFilter = ages.filter((age) => age >= 18 && age <= 60);
console.log(agesFilter, "adulto");

const agesMap = ages.map((age) => {
  if (age >= 0 && age <= 2) {
    return "bebê";
  } else if (age >= 3 && age <= 11) {
    return "criança";
  } else if (age >= 12 && age <= 17) {
    return "adolescente";
  } else if (age >= 18 && age <= 60) {
    return "adulto";
  } else {
    return "idoso";
  }
});
console.log(agesMap, "agesMap");

const agesFind = ages.find((age) => age > 60);
console.log(agesFind, "idoso");
