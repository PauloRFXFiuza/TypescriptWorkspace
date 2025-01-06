"use strict";
/* Aliases And Interfaces
Basically, it's about creating your own custom types.
Type aliases allow you to define types with a custom name
(an alias) for primitive or complex types.
Interfaces are the same as aliases, except they only apply to object types.

Aliases E Interfaces
Basicamente é criar os seus próprios tipos personalizados
Os aliases de tipo permitem definir tipos com um nome personalizado
(um alias) de tipos primitivos ou complexos.
As interfaces são a mesma coisa que os aliases, exceto que só se aplicam ao tipo objeto.
*/
//Example 1- Vehicle Honda
const honda = "Honda", civic = "Civic", yearCivic = 1999;
//Example 2- Vehicle Toyota
const corolla2002 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2002
};
;
//Example 1 - Rectangle 1
const rectangle1 = {
    height: 100,
    width: 200,
    unit: "pixel"
};
//Example 2 - Rectangle 2
const rectangle2 = {
    height: 2.3,
    width: 1.15,
    unit: "centimeter"
};
//Example 1 - Colored Rectangle 1
const coloredRectangle1 = {
    height: 50,
    width: 45,
    unit: "pixel",
    color: "pink"
};
//Example 2 - Colored Rectangle 2
const coloredRectangle2 = {
    height: 0.015,
    width: 0.007,
    unit: "meter",
    color: "light blue"
};
