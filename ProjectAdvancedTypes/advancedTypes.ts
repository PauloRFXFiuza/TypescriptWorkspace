/* ADVANCED OR SPECIAL TYPES 
TIPOS AVANÇADOS OU ESPECIAIS*/

/* union type - when a value can be more than one type
quando um valor pode ser mais do que um único tipo */

let myVariable: string | number;
myVariable = "Hello";
myVariable = 42;
//myVariable = true; //TS error: Type 'boolean' is not assignable to type 'string | number'.ts(2322)

/* any - a type that disables type checking and effectively allows all types to be used.
(qualquer) - é um tipo que desabilita a verificação de tipos e permite efetivamente que todos os tipos sejam usados. */

let test: any = 100;
test = "text"; test = false; test = null; test = undefined; test = 1231231232132123132132132122221121n; test = "text";
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

let valor: unknown = 100;
valor = "Text now";
//console.log(valor.length); // Error TS: 'valor' is of type 'unknown'.ts(18046)

let conversion = valor as string;
console.log(conversion.length); //value= 8

/* never - throws an error whenever it is defined.
never is rarely used; its primary use is in advanced Generics. 

never (nunca)- lança um erro sempre que ele é definido.
never é raramente usado, seu uso primário é em Genéricos avançados.*/

//let b: never = true;

/* array - TypeScript has a specific syntax for arrays.
array - TypeScript tem uma sintaxe específica para matrizes.*/

const names: string[] = [];
names.push("Dimitri"); // no error
// names.push(3); // Error

/* The 'readonly' keyword prevents arrays from being changed.
A palavra-chave 'readonly' (somente leitura) impede que matrizes sejam alteradas.*/