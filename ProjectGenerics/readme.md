Project Generics on Typescript- By Paulo Fiuza - 01/06/2025


REPORT ON GENERICS IN TYPESCRIPT

INTRODUCTION
Programming is a tool that powers many aspects of our daily lives, from social media to banking systems. However, understanding how programs function can often be intimidating for those without a technical background. This report is aimed at beginners, providing an easy-to-follow explanation of a programming concept called "Generics," which is used in TypeScript, a popular programming language.

CONCEPTUALIZATION
Imagine you own a box that can hold items of any kind: it could be a book, a toy, or even a piece of clothing. This box is flexible and adapts to whatever you put in it. In programming, "Generics" function in a similar way. They act as placeholders, allowing us to create reusable functions or structures that work with different types of data.

For instance, you might want a single function that can work with numbers, text, or even logical values like true or false. Generics enable this flexibility while ensuring that the program understands what type of data is being used.

DEVELOPMENT OF TOPICS
The given TypeScript code provides a practical example of Generics:

- **Function Definition**: The function `printValue<T>` is defined. Here, `<T>` is the generic type. It means that the function can work with any type of data, and `T` will adapt based on the data provided.

- **How It Works**: The `printValue` function takes a value of type `T` as input and logs it to the console. This ensures the function can print anything, from numbers to text or logical values.

- **Examples**:
  1. When called with `printValue<number>(42);`, the function prints `42`.
  2. When called with `printValue<string>('Hello');`, it prints `'Hello'`.
  3. When called with `printValue<boolean>(true);`, it prints `true`.

Each example demonstrates the flexibility of Generics in TypeScript, allowing the function to handle different data types seamlessly.

CONCLUSION
Generics are a cornerstone of modern programming languages like TypeScript, making code more flexible, reusable, and type-safe. For beginners, understanding this concept opens the door to writing more efficient and adaptable programs. By using Generics, you can think of programming as building tools that are not only functional but also versatile enough to handle a variety of tasks.


_____________________________________________________________________________________________________________________________________


RELATÓRIO SOBRE GENÉRICOS EM TYPESCRIPT

INTRODUÇÃO
A programação é uma ferramenta que impulsiona muitos aspectos da nossa vida cotidiana, desde as redes sociais até os sistemas bancários. No entanto, compreender como os programas funcionam pode ser intimidante para quem não possui um histórico técnico. Este relatório é direcionado a iniciantes, fornecendo uma explicação fácil de seguir sobre um conceito de programação chamado "Genéricos", utilizado no TypeScript, uma linguagem de programação popular.

CONCEITUAÇÃO
Imagine que você possui uma caixa que pode conter itens de qualquer tipo: pode ser um livro, um brinquedo ou até mesmo uma peça de roupa. Essa caixa é flexível e se adapta ao que você colocar nela. Na programação, os "Genéricos" funcionam de forma semelhante. Eles atuam como curingas, permitindo-nos criar funções ou estruturas reutilizáveis que funcionam com diferentes tipos de dados.

Por exemplo, pode ser que você queira uma única função que trabalhe com números, textos ou até mesmo valores lógicos como verdadeiro ou falso. Os genéricos possibilitam essa flexibilidade enquanto garantem que o programa entenda que tipo de dado está sendo utilizado.

DESENVOLVIMENTO DOS TÓPICOS
O código TypeScript fornecido apresenta um exemplo prático de Genéricos:

- **Definição da Função**: A função `printValue<T>` é definida. Aqui, `<T>` é o tipo genérico. Isso significa que a função pode trabalhar com qualquer tipo de dado, e `T` se adapta com base nos dados fornecidos.

- **Como Funciona**: A função `printValue` recebe um valor do tipo `T` como entrada e o exibe no console. Isso garante que a função possa imprimir qualquer coisa, desde números até textos ou valores lógicos.

- **Exemplos**:
  1. Quando chamada com `printValue<number>(42);`, a função imprime `42`.
  2. Quando chamada com `printValue<string>('Hello');`, imprime `'Hello'`.
  3. Quando chamada com `printValue<boolean>(true);`, imprime `true`.

Cada exemplo demonstra a flexibilidade dos Genéricos no TypeScript, permitindo que a função lide perfeitamente com diferentes tipos de dados.

CONCLUSÃO
Os Genéricos são uma pedra angular das linguagens de programação modernas como o TypeScript, tornando o código mais flexível, reutilizável e seguro em relação aos tipos de dados. Para iniciantes, compreender esse conceito abre as portas para a escrita de programas mais eficientes e adaptáveis. Ao usar Genéricos, você pode pensar na programação como a construção de ferramentas que são não apenas funcionais, mas também versáteis o suficiente para lidar com uma variedade de tarefas.
