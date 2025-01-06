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
