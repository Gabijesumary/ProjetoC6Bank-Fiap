const aereasNacional = ["Latam", "Gol", "Azul"];
const airCompanies = [...aereasNacional, "Delta", "United Airlines", "Emirates"];
console.log(airCompanies);

const usuario = {
    nome: "Gabi",
    email: "email@.com",
    password: "1234"
};
const {password, ...data} = usuario;
console.log(data);