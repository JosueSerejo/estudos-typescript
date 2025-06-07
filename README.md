# Exercícios de Orientação a Objetos com TypeScript

Este repositório contém uma série de exercícios práticos para solidificar seus conhecimentos em **Programação Orientada a Objetos (POO)** e **módulos (import/export)** utilizando **TypeScript**. Os desafios são progressivos, começando com a criação de classes básicas e avançando para conceitos como composição e gerenciamento de coleções de objetos.

---

## Como Começar 

Para rodar os exercícios, você precisará ter o [Node.js](https://nodejs.org/en/download/) e o [TypeScript](https://www.typescriptlang.org/download) instalados em sua máquina.

1. **Clone este repositório:**
    ```bash
    git clone https://github.com/JosueSerejo/estudos-typescript.git
    cd estudos-typescript
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Compile o projeto:**
    ```bash
    npx tsc
    ```

4. **Execute os testes:**
    ```bash
    node dist/main.js
    ```

## Estrutura de Pastas

```
.
├── src/
│   ├── main.ts
│   ├── produto.ts
│   ├── user.ts
│   ├── adress.ts
│   ├── departamento.ts
│   └── loja.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Configuração do TypeScript (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src/**/*.ts"
  ]
}
```

---

## Exercício: Sistema de Loja com TypeScript

### Objetivo

Criar uma classe `Loja` com métodos para:

- Adicionar produtos
- Listar produtos
- Buscar produto por nome
- Vender produto (com verificação de estoque)

### Estrutura

```
src/
├── loja.ts
├── produto.ts
├── adress.ts
├── main.ts
```

### Funcionalidades

**Classe `Loja`**
- `nome: string`
- `endereco: Address`
- `produtos: Produto[]`

**Métodos**

```ts
adicionarProduto(produto: Produto): void
```
Adiciona um novo produto ao estoque da loja.

```ts
listarProdutos(): void
```
Lista no console todos os produtos da loja, com nome, preço e quantidade.

```ts
buscarProdutoPorNome(nome: string): Produto | undefined
```
Retorna o produto pelo nome, ou `undefined` se não existir.

```ts
venderProdutoNaLoja(nomeProduto: string, quantidade: number): boolean
```
Vende uma quantidade de um produto:

- Retorna `true` se a venda for bem-sucedida.
- Retorna `false` se não houver estoque suficiente ou o produto não existir.

### Testes em `main.ts`

- Criação de instâncias de `Produto` e `Address`
- Instanciação da `Loja`
- Adição de produtos com `adicionarProduto()`
- Impressão do estoque com `listarProdutos()`
- Busca de produtos com `buscarProdutoPorNome()`
- Simulação de vendas com `venderProdutoNaLoja()`

---

## Tecnologias

- TypeScript
- Node.js

## Aprendizado

- Orientação a Objetos
- Composição de classes
- Manipulação de arrays de objetos
- Verificação de regras de negócio

---

Exercício acadêmico focado em boas práticas de POO com TypeScript.
