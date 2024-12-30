/* Basic, simple, primitive data types
Tipos básicos, simples, primitivos de dados */

/* string -text values- valores de texto */
let my_name: string = "Paulo Fiuza";

/* number -integer and float numbers- números inteiros e ponto flutuante */
let age: number = 33;
let myMoney: number = 1.99;

/* boolean- true and false values- valores verdadeiro e falso */
let activate: boolean = true;
let keySwitch: boolean = false;

/* undefined  - indefinido */
let und_value: undefined = undefined;

/* null - nulo */
let myMoneyTomorrow: null = null;

/* There are also 2 less common primitive types, found in more recent versions of JavaScript and TypeScript – bigint and symbol
Há também 2 tipos primitivos menos comuns, encontrados em versões mais recentes do JavaScript e TypeScript – bigint e symbol */

/* Example of bigint
The bigint type is used to work with very large integers that exceed the limit of the number type (2⁵³ - 1).
You can use the suffix n to create bigint literals.
Exemplo de bigint
O tipo bigint é usado para trabalhar com números inteiros muito grandes que ultrapassam o limite do tipo number (2⁵³ - 1). 
Pode-se usar o sufixo n para criar literais de bigint*/

let BigNumber: bigint = 123456789012345678901234567890n;



/* When creating a variable, there are two main ways for TypeScript to assign a type:
Ao criar uma variável, há duas maneiras principais de o TypeScript atribuir um tipo:
- Explicit (Explícito) and Implicit (Implícito)
/* EXPLICIT TYPE – When you assign the data type in the declaration. 
 TIPO EXPLÍCITO – Quando se atribui o tipo de dado na declaração.*/