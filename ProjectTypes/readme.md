Project Types on Typescript- By Paulo Fiuza - 12/30/2024

Introduction
The provided TypeScript code illustrates the concept of basic, simple, and primitive data types. It demonstrates how TypeScript assigns types explicitly or implicitly and introduces less common types such as bigint and symbol. This report explains each section of the code in a detailed and accessible way.

Concepts
TypeScript is a typed superset of JavaScript, allowing developers to explicitly define types for variables and functions. Primitive data types in TypeScript include string, number, boolean, undefined, null, bigint, and symbol.

Key concepts:

Explicit Typing: Assigning a type directly in the variable declaration.
Implicit Typing: Allowing TypeScript to infer the type from the assigned value.
Bigint: A type for representing very large integers.
Symbol: A type for creating unique identifiers.

Development
The code begins by declaring variables of common primitive types:

Strings:

typescript
Copiar código
let my_name: string = "Paulo Fiuza";
A string holds textual data.

Numbers:

typescript
Copiar código
let age: number = 33;
let myMoney: number = 1.99;
Numbers include both integers and floating-point values.

Booleans:

typescript
Copiar código
let activate: boolean = true;
let keySwitch: boolean = false;
Booleans represent logical values (true or false).

Undefined and Null:

typescript
Copiar código
let und_value: undefined = undefined;
let myMoneyTomorrow: null = null;
Undefined and null are special types representing the absence of value.

Bigint:

typescript
Copiar código
let BigNumber: bigint = 123456789012345678901234567890n;
The bigint type is used for very large integers, indicated by the n suffix.

Symbol:

typescript
Copiar código
let uniqueKey: symbol = Symbol("description");
let myObject = { [uniqueKey]: "value associated with the symbol" };
Symbols create unique identifiers, often used as keys in objects. Each symbol is guaranteed to be unique, even if the description is the same.

TypeScript Type Assignment:
TypeScript supports two methods for assigning types:

Explicit Typing:

let otherName: string = "Mikaeli";
Here, the type string is explicitly assigned. Attempting to assign a different type would result in an error.

Implicit Typing:

let country = "Brasil";
TypeScript infers the type from the assigned value.

Conclusion
This code serves as an excellent introduction to TypeScript’s primitive data types and type-checking capabilities. By explicitly or implicitly defining types, developers can prevent many runtime errors and improve code reliability. The examples of bigint and symbol also highlight more advanced and less common use cases, demonstrating the flexibility and power of TypeScript.

--------

Introdução
O código fornecido em TypeScript ilustra o conceito de tipos de dados básicos, simples e primitivos. Ele demonstra como o TypeScript atribui tipos de forma explícita ou implícita e apresenta tipos menos comuns, como bigint e symbol. Este relatório explica cada seção do código de maneira detalhada e acessível.

Conceituação
O TypeScript é um superset tipado do JavaScript, permitindo aos desenvolvedores definir tipos para variáveis e funções. Os tipos primitivos em TypeScript incluem string, number, boolean, undefined, null, bigint e symbol.

Conceitos principais:

Tipagem Explícita: Definição direta do tipo ao declarar uma variável.
Tipagem Implícita: O TypeScript infere o tipo a partir do valor atribuído.
Bigint: Tipo para representar números inteiros muito grandes.
Symbol: Tipo para criar identificadores únicos.

Desenvolvimento
O código começa declarando variáveis dos tipos primitivos mais comuns:

Strings:


let my_name: string = "Paulo Fiuza";

Um string armazena valores textuais.

Números:


let age: number = 33;
let myMoney: number = 1.99;
O tipo number abrange números inteiros e de ponto flutuante.

Booleanos:


let activate: boolean = true;
let keySwitch: boolean = false;
Booleanos representam valores lógicos (true ou false).

Undefined e Null:


let und_value: undefined = undefined;
let myMoneyTomorrow: null = null;

Undefined e null representam a ausência de valor.

Bigint:

let BigNumber: bigint = 123456789012345678901234567890n;
O tipo bigint é usado para números inteiros muito grandes, indicado pelo sufixo n.

Symbol:


let uniqueKey: symbol = Symbol("description");
let myObject = { [uniqueKey]: "value associated with the symbol" };
Symbols criam identificadores únicos, frequentemente usados como chaves em objetos. Cada symbol é único, mesmo que tenham a mesma descrição.

Atribuição de Tipos no TypeScript:
O TypeScript suporta dois métodos para atribuir tipos:

Tipagem Explícita:

let otherName: string = "Mikaeli";

Aqui, o tipo string é explicitamente atribuído. Tentar atribuir outro tipo resultaria em erro.

Tipagem Implícita:

let country = "Brasil";
O TypeScript infere o tipo com base no valor atribuído.

Conclusão

Este código serve como uma excelente introdução aos tipos de dados primitivos e à verificação de tipos no TypeScript. Ao definir tipos de forma explícita ou implícita, os desenvolvedores podem evitar muitos erros em tempo de execução e melhorar a confiabilidade do código. Os exemplos de bigint e symbol também destacam casos de uso mais avançados e menos comuns, demonstrando a flexibilidade e o poder do TypeScript.






