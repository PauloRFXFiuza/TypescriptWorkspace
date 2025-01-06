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
}
