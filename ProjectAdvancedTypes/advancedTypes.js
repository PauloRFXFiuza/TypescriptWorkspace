"use strict";
/* ADVANCED OR SPECIAL TYPES
TIPOS AVANÇADOS OU ESPECIAIS*/
/* union type - when a value can be more than one type
quando um valor pode ser mais do que um único tipo */
let myVariable;
myVariable = "Hello";
myVariable = 42;
//myVariable = true; //TS error: Type 'boolean' is not assignable to type 'string | number'.ts(2322)
/* any - a type that disables type checking and effectively allows all types to be used.
(qualquer) - é um tipo que desabilita a verificação de tipos e permite efetivamente que todos os tipos sejam usados. */
let test = 100;
test = "text";
test = false;
test = null;
test = undefined;
test = 1231231232132123132132132122221121n;
test = "text";
let testLength = test.length; //value= 4
/* WARNING: any can be a useful way to avoid errors, as it
disables type checking, but TypeScript will not be able
to provide type safety, and tools that depend on type data,
like autocomplete, will not work.
Remember, it should be avoided at "any" cost...

ALERTA: any pode ser uma maneira útil de evitar erros, uma vez que
desabilita a verificação de tipos, mas o TypeScript não será capaz
de fornecer segurança de tipo e ferramentas que dependem em dados de tipo,
como preenchimento automático, não funcionarão.
Lembre-se, deve ser evitado a "qualquer" custo...
*/
/* unknown - is a safer alternative to any.
This type requires explicit checks or conversions to
ensure type safety during operations.
unknown (desconhecido) - é uma alternativa semelhante ao any, só que mais segura.
Esse tipo exige verificações ou conversões explícitas para
garantir a segurança de tipo durante as operações.*/
let valor = 100;
valor = "Text now";
//console.log(valor.length); // Error TS: 'valor' is of type 'unknown'.ts(18046)
let conversion = valor;
console.log(conversion.length); //value= 8
/* never - throws an error whenever it is defined.
never is rarely used; its primary use is in advanced Generics.

never (nunca)- lança um erro sempre que ele é definido.
never é raramente usado, seu uso primário é em Genéricos avançados.*/
//let b: never = true; //Error TS- Type 'true' is not assignable to type 'never'.ts(2322)
//let b: never = 10; //Error TS- Type '10' is not assignable to type 'never'.ts(2322)
//let b: never = undefined; //Error TS- Type 'undefined' is not assignable to type 'never'.ts(2322)
/* array - TypeScript has a specific syntax for arrays.
array (matriz) - TypeScript tem uma sintaxe específica para matrizes.*/
const names = [];
names.push("Dimitri"); // no error
//names.push(3); // Error TS- Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
/* The 'readonly' keyword prevents arrays from being changed.
A palavra-chave 'readonly' (somente leitura) impede que matrizes sejam alteradas.*/
const names2 = ["Paulo", "Mikaeli"];
//names2.push("Jason"); //Error TS- Property 'push' does not exist on type 'readonly string[]'.ts(2339)
/* Type inference- TS can infer the type of an array if it has values.
TypeScript pode inferir o tipo de uma matriz se ela tiver valores.*/
const numbers = [1, 2, 3]; // infers type number[]
numbers.push(4); // no error
//numbers.push("2"); // Error TS- Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
let y = numbers[0]; //no error- value= 1
/* tuples - A tuple is an array typed with a fixed length and
predefined types for each index. Tuples are great because they allow
each element in the array to have a known value type.

tuplas - Uma tupla é um array (matriz) tipada com um comprimento e
tipos predefinidos para cada índice. As tuplas são ótimas porque permitem
que cada elemento na matriz seja um tipo conhecido de valor.*/
let nossaTupla;
nossaTupla = [5, false, 'arroz'];
nossaTupla.push('macarrao'); //result: [5, false, 'arroz', 'macarrao']
//EXAMPLE WITH ERROR- Exemplo com erro
//nossaTupla = [false, 'feijão', 5]; //Error TS- Type 'boolean' is not assignable to type 'number'.ts(2322),
//Type 'string' is not assignable to type 'boolean'.ts(2322), Type 'number' is not assignable to type 'string'.ts(2322)
/* A good practice is to make your tuple always readonly. Why?
Because tuples only have strongly defined types for the initial values.

Uma boa prática é fazer sua tupla sempre readonly. Por quê?
Por que as tuplas só têm tipos fortemente definidos para os valores
iniciais.*/
const myTuple = [1, true, 'nice', 2];
//myTuple.push(3); //Error TS- Property 'push' does not exist on type 'readonly [number, boolean, string, number]'.ts(2339)
/* objects - Objects are variables with many values inside
objetos (objects) - Objetos são variáveis com muitos valores dentro */
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2009
};
/* TypeScript can infer property types based on their values
O TypeScript pode inferir os tipos de propriedades com base em seus valores */
const car2 = {
    brand: "Toyota",
};
car2.brand = "Ford"; // no error - it understood that 'brand' is a string.
//car2.brand = 2; // Error TS- Type 'number' is not assignable to type 'string'.ts(2322)
/* In TS, an object can have optional properties.
Optional properties are properties that don't need to be defined in the object definition.
They can be used later or not, they are optional.

No TypeScript um objeto pode ter Propriedades opcionais.
Propriedades opcionais são propriedades que não precisam ser definidas na definição do objeto.
Elas podem ser usadas depois ou não, são opcionais.*/
const car3 = {
    model: "Uno"
};
car3.engine = 1.0;
