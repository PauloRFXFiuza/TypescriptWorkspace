/* FUNCTIONS
TypeScript has a specific syntax to type function parameters and return values.

TypeScript tem uma sintaxe específica para digitar parâmetros de função e valores de retorno.*/

/* DEFINING THE FUNCTION RETURN TYPE
DEFININDO O TIPO DO RETORNO DA FUNÇÃO */

function getTime(): number {
    return new Date().getTime();
};

/* Void - WHEN THE FUNCTION HAS NO RETURN
QUANDO A FUNÇÃO NÃO TEM RETORNO */

function printHello(): void {
    console.log('Hello!');
};

/* Types in function parameters
Tipos em parâmetros de função */
function multiplication(a: number, b: number): number {
    return a * b;
}

//multiplication(5, 10); //output 50

/* Optional parameters - the `?` operator here indicates 
that the parameter `c` is optional 

Parâmetros opcionais- o operador `?` 
aqui marca que o parâmetro `c` é opcional */

function add(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
};

//add(5,3); //output 8
//add(5,3,2); //output 10

/* Parameters with default initial values
Parâmetros com valores iniciais padrão */
function greeting(name: string = "Paulo"): void {
    console.log(`Hello, ${name}!`);
};

//greeting(); // Output: Hello, Paulo!
//greeting("Mikaeli"); // Output: Hello, Mikaeli!

// Named parameters - Parâmetros Nomeados

function hello({ name, age }: { name: string, age: number }): void {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

// hello({ name: "Paulo", age: 34 });
// Output: Hello, Paulo! You are 34 years old.
