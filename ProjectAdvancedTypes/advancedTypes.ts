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
test = "text";
