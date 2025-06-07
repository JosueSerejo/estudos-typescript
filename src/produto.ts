 export class Produto {
    nome: string
    preco: number
    quantidadeEmEstoque: number


    constructor(nome: string, preco: number, quantidadeEmEstoque: number){
        this.nome = nome
        this.preco = preco
        this.quantidadeEmEstoque = quantidadeEmEstoque
    }

}