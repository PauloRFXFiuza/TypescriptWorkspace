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
/*WARNING: any can be a useful way to avoid errors, as it
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
