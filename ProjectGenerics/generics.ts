/* GENERICS - Genéricos
Think of generics as flexible "boxes" where you can put different types of data. 
It's a placeholder that can accept a value.

Pense nos generics como "caixas" flexíveis, onde você pode colocar diferentes tipos de dados. 
É um coringa, que pode aceitar um valor. */

function printValue<T>(value: T): void {
    console.log(value);
};

//printValue<number>(42);   // Prints 42
//printValue<string>('Hello'); // Prints 'Hello'
//printValue<boolean>(true); // Prints true
