import { Produto } from "./produto";

const produto1 = new Produto ('Vassoura', 3.50, 10)
const produto2 = new Produto ('Papel Higienico', 2, 15)

console.log(produto1.nome, produto1.preco)
console.log(produto2.nome, produto2.preco)