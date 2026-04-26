"use strict";
const func = () => 1;
const func2 = (param) => param;
const func3 = (param, param2) => {
    return param + param2;
};
console.log(func3(3, 3));
const person = {
    name: 'João Junio',
    age: 17,
    falar: (name, age) => {
        return `Olá, meu nome é ${name} e eu tenho ${age} anos de idade.`;
    }
};
console.log(person.falar('João Junio', 17));
class Person {
    constructor(name, age) {
        this.name = 'João Junio';
        this.age = 17;
        this.falar = (name, age) => {
            return `Olá, meu nome é ${this.name} e eu tenho ${this.age} anos de idade.`;
        };
        this.name = name;
        this.age = age;
    }
}
const funcFalar = (name, age) => {
    return `Olá, meu nome é ${name} e eu tenho ${age} anos de idade.`;
};
console.log(funcFalar('Laura', 11));
