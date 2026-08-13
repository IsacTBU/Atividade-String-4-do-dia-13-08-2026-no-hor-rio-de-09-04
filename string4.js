const nomeCompleto = "ana maria silva";
const iniciais = nomeCompleto
  .split(" ")
  .map(nome => nome[0].toUpperCase())
  .join("");

console.log(iniciais); 

