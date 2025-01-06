Project Functions on Typescript- By Paulo Fiuza - 01/06/2025

Report: Understanding Functions in TypeScript

Introduction

Functions are a fundamental concept in programming, allowing developers to group instructions and execute them as needed. In TypeScript, functions not only organize code but also enhance its reliability by defining strict rules about input parameters and return values. This report aims to explain the concept of functions in TypeScript to beginners in computing. It covers function definitions, optional parameters, default values, and named parameters in a step-by-step manner.

Conceptualization

TypeScript is a programming language built on JavaScript that introduces static typing. This means that developers can define the type of data a function can accept and return. By enforcing these rules, TypeScript reduces errors and improves code readability.

Functions in TypeScript can:

Accept parameters with specified types.

Return values of a defined type.

Include optional and default parameters.

Use named parameters for clarity.

Development of Topics

1. Defining Function Return Types

The getTime function demonstrates how to specify the return type:

function getTime(): number {
    return new Date().getTime();
}

Purpose: Returns the current time in milliseconds.

Key Feature: The return type is explicitly defined as number, ensuring the function cannot return any other data type.

2. Void Functions (No Return Values)

The printHello function illustrates a scenario where a function performs an action but does not return a value:

function printHello(): void {
    console.log('Hello!');
}

Purpose: Displays a message.

Key Feature: The void return type indicates that no data is returned.

3. Functions with Parameters

The multiplication function accepts two parameters:

function multiplication(a: number, b: number): number {
    return a * b;
}

Purpose: Multiplies two numbers.

Key Feature: Both parameters (a and b) are specified as number, and the function returns a number.

4. Optional Parameters

The add function demonstrates how to define optional parameters:

function add(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
}

Purpose: Adds two or three numbers.

Key Feature: The ? makes the third parameter (c) optional, and the || 0 ensures a default value of zero when c is not provided.

5. Default Parameter Values

The greeting function uses a default parameter value:

function greeting(name: string = "Paulo"): void {
    console.log(`Hello, ${name}!`);
}

Purpose: Greets a user by name.

Key Feature: If no name is provided, the function uses "Paulo" as the default value.

6. Named Parameters

The hello function demonstrates the use of named parameters:

function hello({ name, age }: { name: string, age: number }): void {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

Purpose: Provides a detailed greeting.

Key Feature: The parameters are passed as an object, improving readability and reducing the risk of passing values in the wrong order.

Conclusion

Functions in TypeScript provide structure, clarity, and error prevention through type definitions, optional parameters, default values, and named parameters. Understanding these features enables developers to write more reliable and maintainable code. For beginners, TypeScript functions offer a safe and organized way to learn programming concepts, making it an excellent language for building scalable applications.

__________________________________________________________________________________________________________________________________________________

Relatório: Compreendendo Funções em TypeScript

Introdução

Funções são um conceito fundamental na programação, permitindo que desenvolvedores agrupem instruções e as executem conforme necessário. No TypeScript, as funções não apenas organizam o código, mas também aumentam sua confiabilidade ao definir regras estritas sobre os parâmetros de entrada e os valores de retorno. Este relatório visa explicar o conceito de funções em TypeScript para iniciantes em computação. Ele aborda a definição de funções, parâmetros opcionais, valores padrão e parâmetros nomeados de forma detalhada.

Conceituação

TypeScript é uma linguagem de programação baseada em JavaScript que introduz tipagem estática. Isso significa que os desenvolvedores podem definir o tipo de dados que uma função pode aceitar e retornar. Ao impor essas regras, o TypeScript reduz erros e melhora a legibilidade do código.

As funções no TypeScript podem:

Aceitar parâmetros com tipos especificados.

Retornar valores de um tipo definido.

Incluir parâmetros opcionais e padrão.

Utilizar parâmetros nomeados para maior clareza.

Desenvolvimento dos Tópicos

1. Definindo Tipos de Retorno

A função getTime demonstra como especificar o tipo de retorno:

function getTime(): number {
    return new Date().getTime();
}

Finalidade: Retorna o tempo atual em milissegundos.

Destaque: O tipo de retorno é definido como number, garantindo que a função não possa retornar outro tipo de dado.

2. Funções Sem Retorno

A função printHello ilustra um cenário onde a função executa uma ação, mas não retorna valores:

function printHello(): void {
    console.log('Hello!');
}

Finalidade: Exibe uma mensagem.

Destaque: O tipo void indica que nenhum dado é retornado.

3. Funções com Parâmetros

A função multiplication aceita dois parâmetros:

function multiplication(a: number, b: number): number {
    return a * b;
}

Finalidade: Multiplica dois números.

Destaque: Ambos os parâmetros e o retorno são do tipo number.

4. Parâmetros Opcionais

A função add mostra como definir parâmetros opcionais:

function add(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
}

Finalidade: Soma dois ou três números.

Destaque: O operador ? torna o terceiro parâmetro opcional.

Conclusão

As funções no TypeScript fornecem estrutura, clareza e prevenção de erros por meio de definições de tipos, parâmetros opcionais, valores padrão e parâmetros nomeados. Dominar esses recursos permite criar códigos mais confiáveis e fáceis de manter.